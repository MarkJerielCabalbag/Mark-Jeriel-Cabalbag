import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioImages } from '../data';

interface HeroSectionProps {
  onOpenConsultation: () => void;
  onOpenBio: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenConsultation,
  onOpenBio,
}) => {
  return (
    <header className="relative w-full overflow-hidden bg-gradient-to-b from-[#D4D5D9] via-[#DFE0E4] to-[#EBECEF] pt-10 pb-6 sm:pt-16 sm:pb-12">
      {/* Hero Main Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        <div className="grid grid-cols-1 items-end lg:grid-cols-12">
          {/* Left Column: Headline and Call to action */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="z-20 pt-6 pb-6 lg:col-span-6 lg:pb-24"
          >
            <h1 className="max-w-md text-3xl font-bold leading-[1.18] tracking-tight text-neutral-900 sm:text-4xl lg:text-[42px]">
              I design and build websites that convert.
            </h1>
            <p className="mt-3 max-w-sm text-sm font-medium text-neutral-600 leading-relaxed">
              Bespoke web design, frontend engineering, and clean responsive layouts built for ambitious brands.
            </p>

            {/* Book a consultation Dual-Pill Button */}
            <div className="mt-7 flex items-center">
              <motion.button
                id="hero-book-consultation-btn"
                onClick={onOpenConsultation}
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                className="group flex items-center shadow-md shadow-black/5 hover:shadow-lg transition-shadow cursor-pointer"
                aria-label="Start a project consultation"
              >
                <span className="flex h-11 items-center rounded-l-full bg-white px-5 text-[13px] font-semibold text-neutral-900 transition-colors group-hover:bg-neutral-50 sm:text-sm">
                  Start a project
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-r-full bg-[#FF451A] text-white transition-colors group-hover:bg-[#E63910]">
                  <ArrowUpRight className="h-4 w-4 stroke-[2.5] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="relative flex justify-center lg:col-span-6 lg:justify-end">
            <motion.div 
              initial={{ opacity: 0, scale: 0.96, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="relative w-full max-w-[360px] sm:max-w-[420px] lg:max-w-[450px]"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white/60 shadow-[0_20px_45px_-12px_rgba(0,0,0,0.18)] ring-1 ring-black/5">
                <img
                  src={portfolioImages.heroPortrait}
                  alt="Mark Jeriel Cabalbag — Design & Code"
                  className="relative z-10 mx-auto aspect-[3/4] w-full object-cover select-none transition-transform duration-700 hover:scale-103"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Floating Speech Card */}
              <motion.div
                onClick={onOpenBio}
                animate={{
                  y: [0, -6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                }}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { type: 'spring', stiffness: 400, damping: 20 },
                }}
                whileTap={{ scale: 0.98 }}
                className="absolute right-2 -bottom-3 sm:right-3 sm:-bottom-4 z-30 flex max-w-[300px] cursor-pointer items-center gap-3 rounded-2xl border border-white/90 bg-white/95 p-2.5 pr-4 shadow-[0_16px_36px_rgba(0,0,0,0.14)] backdrop-blur-md transition-shadow hover:shadow-xl sm:max-w-[330px]"
              >
                <img
                  src={portfolioImages.markProfile}
                  alt="Mark Jeriel Cabalbag"
                  className="h-10 w-10 flex-shrink-0 rounded-xl object-cover ring-1 ring-black/10 shadow-xs"
                  referrerPolicy="no-referrer"
                />
                <div className="text-[12px] leading-snug text-neutral-800">
                  <span className="font-semibold text-neutral-900">Mark Jeriel Cabalbag</span>
                  <p className="text-[11px] text-neutral-500">Designer &amp; Frontend Engineer</p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};
