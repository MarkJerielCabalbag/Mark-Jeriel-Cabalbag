import React, { useState, useEffect, useRef } from 'react';
import { Check, ArrowRight, Sparkles, ShieldCheck, Layers } from 'lucide-react';
import { WorkItem } from '../types';
import { ModernBottomModal } from './ModernBottomModal';

interface WorkDetailModalProps {
  work: WorkItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const WorkDetailModal: React.FC<WorkDetailModalProps> = ({
  work,
  onClose,
  onInquire,
}) => {
  const [ordered, setOrdered] = useState(false);
  const orderTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (orderTimeoutRef.current) {
        clearTimeout(orderTimeoutRef.current);
      }
    };
  }, []);

  if (!work) return null;

  const handleOrder = () => {
    setOrdered(true);
    if (orderTimeoutRef.current) {
      clearTimeout(orderTimeoutRef.current);
    }
    orderTimeoutRef.current = setTimeout(() => {
      setOrdered(false);
      onClose();
      onInquire();
    }, 1200);
  };

  return (
    <ModernBottomModal
      isOpen={Boolean(work)}
      onClose={onClose}
      badge={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold text-neutral-700 uppercase tracking-wider">
          <Layers className="h-3 w-3" />
          {work.category}
        </span>
      }
      title="Project Overview"
      maxWidthClass="max-w-3xl sm:max-w-4xl"
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-8">
        {/* Visual Showcase Card */}
        <div className="md:col-span-6">
          <div className="relative aspect-[4/3] sm:aspect-square w-full overflow-hidden rounded-2xl bg-neutral-950 shadow-inner group">
            <img
              src={work.image}
              alt={work.title}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xs font-semibold tracking-wide drop-shadow">
                {work.collectionDate || 'Project'}
              </span>
              <span className="rounded-full bg-[#FF451A] px-3 py-1 text-xs font-bold text-white shadow-sm">
                {work.priceTag}
              </span>
            </div>
          </div>
        </div>

        {/* Details & Specs */}
        <div className="flex flex-col justify-between md:col-span-6">
          <div>
            <span className="text-xs font-bold tracking-wider text-[#FF451A] uppercase">
              Launch Details
            </span>
            <h3 className="mt-1.5 text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
              {work.title}
            </h3>
            
            <p className="mt-2 text-2xl font-bold text-[#FF451A]">
              {work.priceTag}
            </p>

            <p className="mt-3 text-xs sm:text-sm leading-relaxed text-neutral-600">
              {work.description}
            </p>

            {work.specs && (
              <div className="mt-5 space-y-2.5 rounded-2xl bg-neutral-50 p-4 border border-neutral-100 text-xs text-neutral-700">
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400 font-medium">Stack &amp; Framework</span>
                  <span className="font-semibold text-neutral-900">{work.specs.stack}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400 font-medium">Responsiveness</span>
                  <span className="font-semibold text-neutral-900">{work.specs.responsiveness}</span>
                </div>
                <div className="flex justify-between py-0.5">
                  <span className="text-neutral-400 font-medium">Performance Metric</span>
                  <span className="font-semibold text-neutral-900">{work.specs.performance}</span>
                </div>
              </div>
            )}
          </div>

          <div className="mt-6 space-y-3 pt-4 border-t border-neutral-100">
            <button
              type="button"
              onClick={handleOrder}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-[#121212] py-3.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-neutral-800 active:scale-[0.98] shadow-md"
            >
              {ordered ? (
                <>
                  <Check className="h-4 w-4 stroke-[2.5]" />
                  <span>Connecting to Direct Contact Channel...</span>
                </>
              ) : (
                <>
                  <ArrowRight className="h-4 w-4" />
                  <span>Inquire Directly About Similar Project ({work.priceTag})</span>
                </>
              )}
            </button>

            <div className="flex items-center justify-center gap-4 text-[11px] text-neutral-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="h-3.5 w-3.5 text-[#FF451A]" />
                99+ Core Web Vitals
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Sparkles className="h-3.5 w-3.5 text-[#FF451A]" />
                Conversion Architecture
              </span>
            </div>
          </div>
        </div>
      </div>
    </ModernBottomModal>
  );
};

