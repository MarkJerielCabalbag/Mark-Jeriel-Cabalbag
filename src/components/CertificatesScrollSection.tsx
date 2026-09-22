import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  ShieldCheck,
  ArrowRight,
} from 'lucide-react';
import { certificatesList } from '../data';
import { CertificateItem } from '../types';

interface CertificatesScrollSectionProps {
  onSelectCertificate: (cert: CertificateItem) => void;
  onOpenConsultation?: (topic?: string) => void;
}

export const CertificatesScrollSection: React.FC<CertificatesScrollSectionProps> = ({
  onSelectCertificate,
  onOpenConsultation,
}) => {
  const sectionRef = useRef<HTMLElement>(null);

  // Measure dynamic scroll width
  const [maxScrollDistance, setMaxScrollDistance] = useState(1800);

  useEffect(() => {
    const updateDistance = () => {
      const cardWidth = window.innerWidth < 640 ? 250 : window.innerWidth < 768 ? 295 : 340;
      const totalWidth = certificatesList.length * cardWidth;
      const visibleDistance = Math.max(800, totalWidth - window.innerWidth + 200);
      setMaxScrollDistance(visibleDistance);
    };

    updateDistance();
    window.addEventListener('resize', updateDistance);
    return () => window.removeEventListener('resize', updateDistance);
  }, []);

  // Track scroll position
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Smooth scroll interpolation (right to left)
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 24,
    restDelta: 0.001,
  });

  const scrollX = useTransform(springProgress, [0, 1], [100, -maxScrollDistance]);
  const manualOffsetX = useMotionValue(0);
  const totalX = useTransform(
    [scrollX, manualOffsetX],
    ([sx, mx]: number[]) => sx + mx
  );

  const handleScroll = (direction: 'left' | 'right') => {
    const current = manualOffsetX.get();
    const step = direction === 'left' ? 340 : -340;
    manualOffsetX.set(current + step);
  };

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
      manualOffsetX.set(manualOffsetX.get() - e.deltaX * 0.9);
    }
  };

  return (
    <section
      id="credentials-section"
      ref={sectionRef}
      className="relative w-full h-[240vh] bg-white border-t border-neutral-100 selection:bg-[#FF451A] selection:text-white"
    >
      {/* Sticky container that stays fixed in viewport while scrolling */}
      <div className="sticky top-0 h-screen w-full flex flex-col justify-between overflow-hidden py-6 sm:py-8">
        {/* Ambient subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[450px] w-[800px] bg-gradient-to-r from-orange-50/40 to-transparent blur-3xl pointer-events-none rounded-full" />

        {/* 1. HEADER */}
        <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 text-center shrink-0">
          <p className="font-bold text-xs sm:text-sm text-[#FF451A] tracking-tight uppercase">
            Credentials
          </p>

          <h2 className="mt-1 font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold tracking-tight text-neutral-900 leading-[1.18]">
            Certificates &amp; Badges
          </h2>

          <p className="mx-auto mt-1 max-w-xl text-xs sm:text-sm text-neutral-500 leading-relaxed font-normal">
            Accreditations across conversion rate optimization, performance, and UI systems.
          </p>

          {/* Action Button & Carousel Controls */}
          <div className="mt-4 flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() => onSelectCertificate(certificatesList[0])}
              className="group inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-neutral-900 shadow-2xs transition-all hover:border-neutral-300 hover:shadow-md active:scale-98 cursor-pointer"
            >
              <span>View All</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FF451A] text-white transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-3 w-3 stroke-[2.5]" />
              </span>
            </button>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => handleScroll('left')}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-2xs transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-95 cursor-pointer"
                aria-label="Previous credential"
                title="Scroll left"
              >
                <ChevronLeft className="h-3.5 w-3.5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-2xs transition-all hover:border-neutral-300 hover:bg-neutral-50 active:scale-95 cursor-pointer"
                aria-label="Next credential"
                title="Scroll right"
              >
                <ChevronRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 2. FULL-BLEED CERTIFICATES CONTAINER (ZERO MX, ZERO PX) */}
        <div
          onWheel={handleWheel}
          className="relative w-full mx-0 px-0 overflow-hidden [perspective:1400px] shrink-0 my-auto"
        >
          <motion.div
            style={{ x: totalX }}
            className="flex items-center gap-5 sm:gap-7 py-4 sm:py-6 px-0 mx-0 [transform-style:preserve-3d] select-none cursor-grab active:cursor-grabbing"
          >
            {certificatesList.map((cert, index) => {
              const totalCards = certificatesList.length;
              const centerOffset = index - (totalCards - 1) / 2;
              const baseRotateY = centerOffset * -4;
              const arcY = Math.abs(centerOffset) * 4;

              return (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  style={{
                    rotateY: baseRotateY,
                    y: arcY,
                  }}
                  whileHover={{
                    scale: 1.04,
                    rotateY: 0,
                    y: arcY - 10,
                    zIndex: 40,
                    transition: { type: 'spring', stiffness: 350, damping: 22 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectCertificate(cert)}
                  className="group relative h-[330px] sm:h-[380px] md:h-[410px] w-[240px] sm:w-[280px] md:w-[320px] shrink-0 cursor-pointer overflow-hidden rounded-[26px] bg-neutral-900 shadow-xl ring-1 ring-black/10 hover:shadow-2xl transition-all duration-300"
                >
                  {/* Certificate Artwork */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-108"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/20 pointer-events-none" />

                  {/* Top-Left Credential Badge */}
                  <div className="absolute top-3.5 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <div className="inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] font-semibold backdrop-blur-md border border-white/15">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="truncate max-w-[140px]">{cert.authority}</span>
                    </div>

                    <span className="text-[10px] font-bold text-white/85 bg-white/10 px-2 py-0.5 rounded-md backdrop-blur-sm">
                      #{cert.number}
                    </span>
                  </div>

                  {/* Bottom Info Card */}
                  <div className="absolute bottom-3.5 left-4 right-4 z-10 text-white">
                    <p className="text-[10px] font-bold uppercase tracking-wider text-[#FF451A]">
                      {cert.pillarTag}
                    </p>
                    <h3 className="mt-0.5 font-sans text-sm sm:text-base font-bold leading-snug tracking-tight text-white line-clamp-2">
                      {cert.title}
                    </h3>
                    <p className="mt-0.5 text-[11px] text-white/70 line-clamp-1 font-medium">
                      {cert.scoreOrLevel}
                    </p>
                  </div>

                  {/* Expand Zoom Icon Button */}
                  <div className="absolute bottom-3.5 right-3.5 z-20">
                    <motion.button
                      type="button"
                      whileHover={{ scale: 1.12 }}
                      whileTap={{ scale: 0.92 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCertificate(cert);
                      }}
                      className="flex h-8 w-8 items-center justify-center rounded-xl bg-white/20 text-white backdrop-blur-md border border-white/30 shadow-lg transition-colors hover:bg-white hover:text-neutral-900 cursor-pointer"
                      aria-label="Inspect certificate details"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom Helper Instruction */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 shrink-0 pb-2">
          <p className="text-center text-xs text-neutral-400">
            Scroll down to advance • Click any credential to inspect details
          </p>
        </div>
      </div>
    </section>
  );
};
