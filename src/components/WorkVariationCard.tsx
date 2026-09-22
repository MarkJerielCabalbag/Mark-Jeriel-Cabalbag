import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { ProjectVariation } from '../types';

interface WorkVariationCardProps {
  variation: ProjectVariation;
  projectId: string;
  heightClass: string;
  badgeLabel: string;
  subBadge?: string;
  onSelect: () => void;
  hoverY?: number;
}

export const WorkVariationCard: React.FC<WorkVariationCardProps> = ({
  variation,
  projectId,
  heightClass,
  badgeLabel,
  subBadge,
  onSelect,
  hoverY = -8,
}) => {
  return (
    <motion.div
      onClick={onSelect}
      whileHover={{ y: hoverY, scale: 1.015 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 350, damping: 22 }}
      className={`group relative ${heightClass} w-full cursor-pointer overflow-hidden rounded-[28px] bg-neutral-950 shadow-md transition-shadow duration-300 hover:shadow-2xl`}
    >
      {/* Animated Product / Web Photograph */}
      <AnimatePresence mode="wait">
        <motion.img
          key={`variation-${projectId}-${variation.id}`}
          src={variation.image}
          alt={variation.title}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
          referrerPolicy="no-referrer"
        />
      </AnimatePresence>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60 pointer-events-none" />

      {/* Top Text Overlay */}
      <div className="absolute top-5 left-5 z-10 text-white">
        <p className="text-[12px] font-medium tracking-wide text-white/90">
          {badgeLabel}
        </p>
        {subBadge && (
          <p className="mt-0.5 text-xs sm:text-sm font-semibold tracking-wider text-white">
            {subBadge}
          </p>
        )}
      </div>

      {/* Bottom Frosted Glass Tag Card with spring lift */}
      <motion.div
        whileHover={{ y: -2 }}
        className="absolute right-4 bottom-4 left-4 z-10 flex items-center justify-between rounded-2xl border border-white/15 bg-black/45 px-4 py-3 shadow-lg backdrop-blur-md transition-colors group-hover:bg-black/70"
      >
        <div className="min-w-0 pr-2">
          <h4 className="text-[13px] sm:text-[14px] font-semibold text-white truncate">
            {variation.category}
          </h4>
          <p className="mt-0.5 text-[11px] sm:text-[12px] font-medium text-[#FF451A] truncate">
            {variation.cvrTag}
          </p>
        </div>
        <div className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white text-neutral-900 shadow-md transition-transform duration-300 group-hover:scale-110 group-hover:rotate-45">
          <ArrowUpRight className="h-4 w-4 stroke-[2.5]" />
        </div>
      </motion.div>
    </motion.div>
  );
};
