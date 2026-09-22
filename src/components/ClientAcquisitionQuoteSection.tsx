import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from 'motion/react';
import { ArrowUpRight, Mail, Sparkles } from 'lucide-react';
import { portfolioImages, personalInfo } from '../data';

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
      id="contact-section"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full overflow-hidden bg-white px-6 py-24 sm:px-10 sm:py-32 lg:px-12 border-t border-neutral-100"
    >
      <div className="relative mx-auto max-w-5xl min-h-[440px] sm:min-h-[480px] flex flex-col items-center justify-center">
        
        {/* 4 Floating Photos */}
        <FloatingPhoto
          image={portfolioImages.landingDektopMidnightbrew}
          alt="EduGemini AI"
          title="EduGemini AI"
          className="top-0 left-2 sm:-top-6 sm:left-6 md:-top-10 md:left-12 lg:-top-12 lg:left-16"
          floatY={[-10, 8, -10]}
          floatRotate={[-13, -8, -13]}
          duration={5.4}
          delay={0.2}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={-0.035}
          onClick={() => onOpenContact('EduGemini AI Inquiry')}
        />

        <FloatingPhoto
          image={portfolioImages.landingMobileMidnightbrew}
          alt="Graduate Tracer"
          title="Graduate Tracer"
          className="top-2 right-2 sm:-top-4 sm:right-8 md:-top-8 md:right-14 lg:-top-10 lg:right-20"
          floatY={[8, -9, 8]}
          floatRotate={[7, 12, 7]}
          duration={6.2}
          delay={0.6}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={0.03}
          onClick={() => onOpenContact('Graduate Tracer Platform Inquiry')}
        />

        <FloatingPhoto
          image={portfolioImages.landingMobileCoreos}
          alt="RFID Security"
          title="RFID Lab Security"
          className="bottom-0 left-3 sm:-bottom-4 sm:left-8 md:-bottom-8 md:left-14 lg:-bottom-10 lg:left-20"
          floatY={[-8, 7, -8]}
          floatRotate={[-16, -11, -16]}
          duration={5.8}
          delay={0.4}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={-0.028}
          onClick={() => onOpenContact('RFID Hardware IoT Inquiry')}
        />

        <FloatingPhoto
          image={portfolioImages.landingDesktopCoreos}
          alt="Paesano Booking"
          title="Paesano Booking"
          className="bottom-2 right-3 sm:-bottom-6 sm:right-6 md:-bottom-10 md:right-12 lg:-bottom-12 lg:right-18"
          floatY={[7, -8, 7]}
          floatRotate={[14, 18, 14]}
          duration={6.6}
          delay={0.8}
          mouseXSpring={mouseXSpring}
          mouseYSpring={mouseYSpring}
          parallaxFactor={0.032}
          onClick={() => onOpenContact('Web Development Opportunity')}
        />

        {/* Center Typographic Quote */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="relative z-20 mx-auto max-w-2xl px-4 text-center"
        >
          <span className="text-xs font-bold tracking-widest text-[#FF451A] uppercase">
            Let&apos;s Build Together
          </span>

          <h2 className="mt-2 font-sans text-2xl sm:text-3xl md:text-4xl font-bold leading-[1.3] tracking-tight text-neutral-900">
            {personalInfo.name} is a Full Stack Developer dedicated to solving real problems with functional code.
          </h2>

          <p className="mt-4 font-sans text-lg sm:text-xl md:text-2xl font-semibold leading-[1.35] tracking-tight text-neutral-600">
            To collaborate on a system, build a project, or discuss engineering roles —
          </p>

          {/* Underlined Interactive Call to Action */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
            <motion.button
              type="button"
              id="get-in-touch-quote-btn"
              onClick={() => onOpenContact('General Project Inquiry')}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="inline-flex items-center gap-2 rounded-full bg-[#FF451A] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 hover:bg-[#E63910] transition-colors cursor-pointer"
            >
              <Mail className="h-4 w-4" />
              <span>Get in touch directly</span>
            </motion.button>

            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-1.5 rounded-full border border-neutral-300 bg-white px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-800 hover:bg-neutral-50 hover:border-neutral-900 transition-all"
            >
              <span>{personalInfo.email}</span>
              <ArrowUpRight className="h-3.5 w-3.5 text-neutral-500" />
            </a>
          </div>

          <p className="mt-4 text-xs text-neutral-400 font-medium">
            Available for Full Stack &amp; Funnels, Web Apps, and SaaS Projects. Open to remote or on-site collaboration.
          </p>
        </motion.div>

      </div>
    </section>
  );
};
