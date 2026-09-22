import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowUpRight, CheckCircle, Zap, User, Clock } from 'lucide-react';
import { workSteps, portfolioImages } from '../data';

interface HowWeWorkAndTeamSectionProps {
  onBookConsultation: (topic?: string) => void;
  onOpenBio: () => void;
}

export const HowWeWorkAndTeamSection: React.FC<HowWeWorkAndTeamSectionProps> = ({
  onBookConsultation,
  onOpenBio,
}) => {
  const [activeStep, setActiveStep] = useState<string | null>('01');

  const toggleStep = (stepNumber: string) => {
    setActiveStep((prev) => (prev === stepNumber ? null : stepNumber));
  };

  return (
    <section
      id="how-i-work-and-standards"
      className="w-full bg-[#FAF9F5] border-t border-b border-[#EAE8E2] px-6 py-16 sm:px-10 sm:py-24 lg:px-12 text-[#121212]"
    >
      <div className="mx-auto max-w-7xl">
        {/* SECTION 1: HOW I WORK */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-between"
          >
            <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
              How I Work
            </h3>
            <span className="text-xs text-neutral-400 font-medium">
              3-Week Sprint Structure
            </span>
          </motion.div>

          {/* Stepped Accordion */}
          <div className="space-y-0 border-t border-neutral-300">
            {workSteps.map((step, index) => {
              const isOpen = activeStep === step.number;

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: index * 0.06 }}
                  className="group border-b border-neutral-300 transition-colors"
                >
                  {/* Clickable Header Row */}
                  <button
                    type="button"
                    onClick={() => toggleStep(step.number)}
                    className="relative flex w-full items-baseline justify-between py-5 text-left transition-all hover:opacity-85 active:scale-[0.995] cursor-pointer"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span className="flex items-center justify-center rounded-lg border border-neutral-300 bg-[#F4F2EC] px-2 py-0.5 text-xs font-mono font-medium text-neutral-600 transition-colors group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white">
                        {step.number}.
                      </span>

                      <span className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 group-hover:text-[#FF451A] transition-colors">
                        {step.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="hidden sm:inline text-xs font-medium text-neutral-400">
                        {isOpen ? 'Collapse' : 'Expand'}
                      </span>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                        className={`flex h-8 w-8 items-center justify-center rounded-full border border-neutral-200 bg-white text-neutral-700 shadow-2xs ${
                          isOpen ? 'bg-neutral-900 text-white border-neutral-900' : ''
                        }`}
                      >
                        <ChevronDown className="h-4 w-4" />
                      </motion.div>
                    </div>
                  </button>

                  {/* Expanded Functional Panel */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden pb-8 pt-2"
                      >
                        <div className="rounded-2xl border border-neutral-200/90 bg-white p-6 sm:p-8 shadow-xs">
                          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                            {/* Left Column: Subtitle, Overview */}
                            <div className="lg:col-span-7">
                              <span className="inline-block text-xs font-bold tracking-wider text-[#FF451A] uppercase">
                                Phase {step.number} • {step.duration}
                              </span>
                              <h4 className="mt-1 text-xl sm:text-2xl font-semibold text-neutral-900">
                                {step.subtitle}
                              </h4>
                              <p className="mt-3 text-sm leading-relaxed text-neutral-600">
                                {step.overview}
                              </p>
                            </div>

                            {/* Right Column: Key Deliverables & Action */}
                            <div className="flex flex-col justify-between border-t border-neutral-100 pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0 lg:col-span-5">
                              <div>
                                <h5 className="text-xs font-bold tracking-wider text-neutral-400 uppercase">
                                  Deliverables
                                </h5>
                                <ul className="mt-3 space-y-2 text-xs text-neutral-700">
                                  {step.deliverables.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2">
                                      <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#FF451A]" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <motion.button
                                type="button"
                                whileHover={{ scale: 1.02, x: 2 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => onBookConsultation(`Phase ${step.number} - ${step.title}`)}
                                className="mt-6 flex items-center justify-between rounded-full bg-neutral-900 px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#FF451A] shadow-sm cursor-pointer"
                              >
                                <span>Discuss {step.title}</span>
                                <ArrowUpRight className="h-3.5 w-3.5" />
                              </motion.button>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION 2: PRINCIPLES */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-2"
          >
            <div>
              <h3 className="text-xs font-bold tracking-widest text-neutral-500 uppercase">
                Working Principles
              </h3>
              <p className="mt-1 text-xs text-neutral-400 font-medium">
                Direct partnership without agency overhead
              </p>
            </div>
            <button
              onClick={onOpenBio}
              className="text-xs font-semibold text-[#FF451A] hover:underline flex items-center gap-1 self-start sm:self-auto group cursor-pointer"
            >
              <span>View Profile</span>
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
          </motion.div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 items-center">
            
            {/* CARD 1: Direct 1-on-1 Access */}
            <motion.div
              id="standard-card-direct"
              onClick={() => onBookConsultation('Direct 1-on-1 Access')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.05 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
              className="group cursor-pointer rounded-2xl border border-neutral-300/80 bg-white/90 p-6 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] shadow-xs transition-shadow hover:shadow-xl hover:border-neutral-900"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-neutral-900 group-hover:text-[#FF451A] transition-colors">
                    Direct 1-on-1
                  </h4>
                  <User className="h-4 w-4 text-neutral-400 group-hover:text-[#FF451A] transition-colors" />
                </div>
                <p className="mt-1 text-xs text-neutral-400 font-medium">
                  Zero Intermediaries
                </p>
                <div className="mt-3 w-10 border-b border-neutral-200" />
              </div>

              <div className="mt-4">
                <p className="text-[13px] leading-relaxed text-neutral-600">
                  You communicate directly with me on every decision. No account managers or lost context.
                </p>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-neutral-900 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Direct Communication</span>
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>

            {/* CARD 2: Mark Jeriel Cabalbag */}
            <motion.div
              id="standard-card-allan"
              onClick={onOpenBio}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.12 }}
              whileHover={{ y: -8, scale: 1.02, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
              className="group relative cursor-pointer sm:-mt-6"
            >
              <div className="relative mx-auto aspect-[4/3.5] w-[90%] overflow-hidden rounded-2xl bg-neutral-200 shadow-md">
                <img
                  src={portfolioImages.markProfile}
                  alt="Mark Jeriel Cabalbag"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-black/40 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                    Mark
                  </span>
                </div>
              </div>

              <div className="relative -mt-12 sm:-mt-14 mx-auto w-full rounded-2xl bg-[#232323] p-6 text-white shadow-2xl transition-all group-hover:bg-[#1a1a1a] -rotate-1 sm:-rotate-2 group-hover:rotate-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-bold text-white">
                      Mark Jeriel Cabalbag
                    </h4>
                    <p className="mt-1 text-[11px] font-semibold tracking-wider text-neutral-400 uppercase">
                      Designer &amp; Engineer
                    </p>
                  </div>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15 text-white transition-colors group-hover:bg-[#FF451A]">
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>

                <p className="mt-5 text-[12px] leading-relaxed text-neutral-300">
                  Combining editorial art direction, 3D interaction, and sub-second React engineering into one cohesive build.
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-white/10 pt-3 text-[11px] text-neutral-400">
                  <span>Independent Studio</span>
                  <span className="text-white font-medium">84+ Launches</span>
                </div>
              </div>
            </motion.div>

            {/* CARD 3: Sub-Second Speed */}
            <motion.div
              id="standard-card-speed"
              onClick={() => onBookConsultation('Sub-Second Speed Guarantee')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.18 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
              className="group cursor-pointer rounded-2xl border border-neutral-300/80 bg-white/90 p-6 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] shadow-xs transition-shadow hover:shadow-xl hover:border-neutral-900"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-neutral-900 group-hover:text-[#FF451A] transition-colors">
                    Sub-Second Speed
                  </h4>
                  <Zap className="h-4 w-4 text-neutral-400 group-hover:text-[#FF451A] transition-colors" />
                </div>
                <p className="mt-1 text-xs text-neutral-400 font-medium">
                  99+ Core Web Vitals
                </p>
                <div className="mt-3 w-10 border-b border-neutral-200" />
              </div>

              <div className="mt-4">
                <p className="text-[13px] leading-relaxed text-neutral-600">
                  Built in clean React and Tailwind. Tuned for sub-400ms global response without framework bloat.
                </p>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-neutral-900 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Speed Benchmarks</span>
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Dedicated Focus */}
            <motion.div
              id="standard-card-focus"
              onClick={() => onBookConsultation('Dedicated Launch Focus')}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.24 }}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 350, damping: 20 } }}
              className="group cursor-pointer rounded-2xl border border-neutral-300/80 bg-white/90 p-6 flex flex-col justify-between min-h-[280px] sm:min-h-[300px] shadow-xs transition-shadow hover:shadow-xl hover:border-neutral-900"
            >
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-bold text-neutral-900 group-hover:text-[#FF451A] transition-colors">
                    Dedicated Focus
                  </h4>
                  <Clock className="h-4 w-4 text-neutral-400 group-hover:text-[#FF451A] transition-colors" />
                </div>
                <p className="mt-1 text-xs text-neutral-400 font-medium">
                  1 Project at a Time
                </p>
                <div className="mt-3 w-10 border-b border-neutral-200" />
              </div>

              <div className="mt-4">
                <p className="text-[13px] leading-relaxed text-neutral-600">
                  No juggling dozens of accounts. Your project gets complete creative energy and ships on schedule.
                </p>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-semibold text-neutral-900 opacity-0 transition-opacity group-hover:opacity-100">
                  <span>Focused Delivery</span>
                  <ArrowUpRight className="h-3 w-3" />
                </div>
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  );
};
