import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence, PanInfo } from 'motion/react';
import { X } from 'lucide-react';

interface ModernBottomModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  badge?: React.ReactNode;
  title?: string;
  maxWidthClass?: string;
}

export const ModernBottomModal: React.FC<ModernBottomModalProps> = ({
  isOpen,
  onClose,
  children,
  badge,
  title,
  maxWidthClass = 'max-w-3xl sm:max-w-4xl',
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  // Close on ESC key and lock body scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    // If dragged down by 90px or with strong downward velocity, close
    if (info.offset.y > 90 || info.velocity.y > 350) {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex flex-col justify-end pointer-events-none">
          {/* Backdrop with smooth blur & fade */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={onClose}
            className="pointer-events-auto fixed inset-0 bg-neutral-950/65 backdrop-blur-md"
          />

          {/* Bottom Dock / Sheet Container */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              damping: 30,
              stiffness: 300,
              mass: 0.8,
            }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={{ top: 0, bottom: 0.5 }}
            onDragEnd={handleDragEnd}
            className={`pointer-events-auto relative w-full ${maxWidthClass} mx-auto max-h-[88vh] sm:max-h-[85vh] bg-white rounded-t-[32px] sm:rounded-t-[38px] shadow-[0_-25px_60px_-15px_rgba(0,0,0,0.35)] border-t border-x border-neutral-200/90 flex flex-col overflow-hidden will-change-transform`}
          >
            {/* Top Interactive Pull Handle */}
            <div className="pt-3 pb-1 flex flex-col items-center justify-center cursor-grab active:cursor-grabbing group">
              <div className="h-1.5 w-12 rounded-full bg-neutral-300 transition-colors group-hover:bg-neutral-400 group-active:bg-[#FF451A]" />
            </div>

            {/* Modal Bar: Badge/Title & Sleek Close Pill */}
            <div className="flex items-center justify-between px-6 sm:px-8 py-2 border-b border-neutral-100/90 shrink-0">
              <div className="flex items-center gap-2">
                {badge}
                {title && (
                  <span className="text-xs font-semibold text-neutral-800 tracking-tight">
                    {title}
                  </span>
                )}
              </div>

              {/* Close Button with ESC label */}
              <button
                type="button"
                onClick={onClose}
                aria-label="Close modal"
                className="group flex items-center gap-1.5 rounded-full bg-neutral-100 hover:bg-neutral-200 px-3 py-1.5 text-[11px] font-medium text-neutral-600 transition-all hover:text-neutral-900 active:scale-95"
              >
                <span className="hidden sm:inline text-[10px] text-neutral-400 group-hover:text-neutral-500">
                  ESC
                </span>
                <X className="h-3.5 w-3.5" />
              </button>
            </div>

            {/* Scrollable Content Container with Modern Slim Scrollbar */}
            <div
              ref={contentRef}
              className="flex-1 overflow-y-auto modern-scrollbar px-6 sm:px-8 py-6"
            >
              {children}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
