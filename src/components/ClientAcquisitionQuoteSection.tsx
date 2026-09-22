import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { portfolioImages } from '../data';

interface ClientAcquisitionQuoteSectionProps {
  onOpenContact: (topic?: string) => void;
}

interface FloatingPhotoProps {
  image: string;
  alt: string;
  title: string;
  className: string;
  floatY: number[];
  floatRotate: number[];
  duration: number;
  delay?: number;
  mouseXSpring: MotionValue<number>;
  mouseYSpring: MotionValue<number>;
  parallaxFactor: number;
  onClick?: () => void;
}

const FloatingPhoto: React.FC<FloatingPhotoProps> = ({
  image,
  alt,
  title,
  className,
  floatY,
  floatRotate,
  duration,
  delay = 0,
  mouseXSpring,
  mouseYSpring,
  parallaxFactor,
  onClick,
}) => {
  // Parallax displacement derived from mouse motion
  const xDisplacement = useTransform(mouseXSpring, (v: number) => v * parallaxFactor);
  const yDisplacement = useTransform(mouseYSpring, (v: number) => v * parallaxFactor);

  return (
    <motion.div
      style={{ x: xDisplacement, y: yDisplacement }}
      className={`absolute z-10 cursor-pointer select-none ${className}`}
      onClick={onClick}
    >
      <motion.div
        animate={{
          y: floatY,
          rotate: floatRotate,
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'easeInOut',
        }}
        whileHover={{
          scale: 1.16,
          rotate: 0,
          zIndex: 40,
          transition: { type: 'spring', stiffness: 350, damping: 22 },
        }}
        whileTap={{ scale: 0.96 }}
        className="group relative rounded-2xl bg-white p-1.5 sm:p-2 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.16)] ring-1 ring-black/5 transition-shadow hover:shadow-[0_24px_50px_-10px_rgba(0,0,0,0.28)]"
      >
        {/* Photo Canvas */}
        <div className="relative aspect-square w-24 sm:w-32 md:w-36 lg:w-40 overflow-hidden rounded-xl bg-neutral-900">
          <img
            src={image}
            alt={alt}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-events-none" />

          {/* Floating tag on hover */}
          <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] font-semibold text-white opacity-0 transition-all duration-300 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0">
            <span className="truncate drop-shadow-sm">{title}</span>
            <ArrowUpRight className="h-3 w-3 shrink-0 stroke-[2.5]" />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export const ClientAcquisitionQuoteSection: React.FC<ClientAcquisitionQuoteSectionProps> = ({
  onOpenContact,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse parallax motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for fluid lag-free physics
  const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="client-quote-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-white px-6 py-28 sm:px-10 sm:py-36 lg:px-12 border-t border-neutral-100"
    >
      <div className="relative mx-auto max-w-5xl min-h-[480px] sm:min-h-[520px] flex flex-col items-center justify-center">
        
        {/* ======================================================== */}
        {/* 4 SCATTERED FLOATING PHOTOS MATCHING THE REFERENCE IMAGE */}
        {/* ======================================================== */}

        {/* Photo 1: Top-Left (Vibrant Cyber / UI Sandbox Artwork) */}
        <FloatingPhoto
          image={portfolioImages.landingDesktopCoreos}
          alt="Interactive 3D Visual"
          title="3D Conversion Flow"
          className="top-0 left-2 sm:-top-6 sm:left-6 md:-top-10 md:left-12 lg:-top-12 lg:left-16"
          floatY={[-10, 8, -10]}
          floatRotate={[-13, -8, -13]}
          duration={5.4}
          delay={0.2}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={-0.035}
          onClick={() => onOpenContact('3D Conversion Flow Inquiry')}
        />

        {/* Photo 2: Top-Right (Minimalist Architectural Product Detail) */}
        <FloatingPhoto
          image={portfolioImages.landingDektopMidnightbrew}
          alt="Tactile Product Craft"
          title="Tactile Precision"
          className="top-2 right-2 sm:-top-4 sm:right-8 md:-top-8 md:right-14 lg:-top-10 lg:right-20"
          floatY={[8, -9, 8]}
          floatRotate={[7, 12, 7]}
          duration={6.2}
          delay={0.6}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={0.03}
          onClick={() => onOpenContact('Tactile Craft Inquiry')}
        />

        {/* Photo 3: Bottom-Left (Sculptural Aesthetic / Spatial Form) */}
        <FloatingPhoto
          image={portfolioImages.landingMobileMidnightbrew}
          alt="Editorial Direction"
          title="Editorial Direction"
          className="bottom-0 left-3 sm:-bottom-4 sm:left-8 md:-bottom-8 md:left-14 lg:-bottom-10 lg:left-20"
          floatY={[-8, 7, -8]}
          floatRotate={[-16, -11, -16]}
          duration={5.8}
          delay={0.4}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={-0.028}
          onClick={() => onOpenContact('Editorial Art Direction')}
        />

        {/* Photo 4: Bottom-Right (Architecture & Perspective Showcase) */}
        <FloatingPhoto
          image={portfolioImages.landingMobileCoreos}
          alt="Modern Architecture"
          title="Sub-Second Core"
          className="bottom-2 right-3 sm:-bottom-6 sm:right-6 md:-bottom-10 md:right-12 lg:-bottom-12 lg:right-18"
          floatY={[7, -8, 7]}
          floatRotate={[14, 18, 14]}
          duration={6.6}
          delay={0.8}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={0.032}
          onClick={() => onOpenContact('High-Velocity Landing Sprint')}
        />

        {/* ======================================================== */}
        {/* CENTER TYPOGRAPHIC QUOTE TO ACQUIRE CLIENTS              */}
        {/* ======================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-20 mx-auto max-w-2xl px-4 text-center"
        >
          {/* Main Statement matching user reference typography */}
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.3] tracking-tight text-neutral-900">
            Mark Jeriel Cabalbag is an independent designer and frontend engineer crafting high-velocity web launches.
          </h2>

          <p className="mt-4 sm:mt-5 font-sans text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-bold leading-[1.35] tracking-tight text-neutral-900">
            To build a digital storefront with zero agency middlemen —
          </p>

          {/* Underlined Interactive Call to Action with spring hover */}
          <div className="mt-4 sm:mt-5">
            <motion.button
              type="button"
              id="quote-acquire-client-cta"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onOpenContact('Direct Client Acquisition Sprint')}
              className="group relative inline-flex items-center gap-1.5 font-sans text-xl sm:text-2xl md:text-3xl lg:text-[34px] font-bold tracking-tight text-neutral-900 transition-colors hover:text-[#FF451A] cursor-pointer"
            >
              <span className="underline decoration-2 underline-offset-[10px] decoration-neutral-900 transition-all duration-300 group-hover:decoration-[#FF451A]">
                work directly with me
              </span>
              <ArrowUpRight className="inline-block h-6 w-6 sm:h-7 sm:w-7 stroke-[2.8] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#FF451A]" />
            </motion.button>
          </div>

          {/* Live Availability Pill */}
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-neutral-200/80 bg-[#FAF9F5] px-3.5 py-1.5 text-xs text-neutral-600 shadow-2xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            <span className="font-medium text-neutral-800">Available for New Projects</span>
            <span className="text-neutral-300">•</span>
            <span>2–3 Week Turnaround</span>
          </div>
        </motion.div>

      </div>

      {/* Global Minimalist Footer */}
      <footer className="mt-20 pt-10 border-t border-neutral-100 mx-auto max-w-7xl flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
        <div className="flex items-center gap-2">
          <span className="font-bold text-neutral-900">Mark Jeriel Cabalbag</span>
          <span>•</span>
          <span>Solo Landing Page Director &amp; Engineer</span>
        </div>
        <div className="flex items-center gap-6">
          <span>© {new Date().getFullYear()} Mark Jeriel Cabalbag. All rights reserved.</span>
          <button
            onClick={() => onOpenContact('Direct Email Inquiry')}
            className="text-neutral-600 hover:text-neutral-900 transition-colors font-medium"
          >
            Direct Email
          </button>
        </div>
      </footer>
    </section>
  );
};
