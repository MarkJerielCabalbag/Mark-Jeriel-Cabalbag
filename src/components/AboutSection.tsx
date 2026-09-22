import React from 'react';
import { motion } from 'motion/react';
import { frontendSkills } from '../data';

export const AboutSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white pt-16 pb-14 sm:pt-20 sm:pb-16 overflow-hidden border-b border-neutral-100">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Frontend Skills & Design Capabilities */}
        <div className="flex flex-wrap items-center justify-between gap-6 pb-12 border-b border-neutral-100">
          <span className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
            Frontend &amp; Design Skills
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-10">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="text-sm font-semibold tracking-tight text-neutral-400 transition-colors hover:text-neutral-800"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Editorial Statement & Focus */}
        <div className="mt-14 grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12 lg:gap-16 items-start">
          {/* Left Column: Scope */}
          <motion.div 
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="space-y-6 md:col-span-4"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF451A]">
                Disciplines
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 font-medium">
                Web Design · Frontend Development · Layout &amp; Wireframing · Responsive UI
              </p>
            </div>

            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#FF451A]">
                Formats
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600 font-medium">
                Custom Websites · Landing Pages · Portfolio Sites · Web Applications
              </p>
            </div>
          </motion.div>

          {/* Right Column: Statement & Key Metric */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="md:col-span-8 space-y-8"
          >
            <h2 className="text-2xl font-bold leading-[1.3] tracking-tight text-neutral-900 sm:text-3xl lg:text-[32px]">
              Great websites aren&apos;t decorated templates. They are focused digital experiences crafted with editorial clarity, bespoke layouts, and clean frontend engineering.
            </h2>

            <div className="flex flex-wrap items-baseline gap-8 pt-2">
              <div>
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-[#FF451A]">
                  84+
                </span>
                <p className="mt-1 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Shipped Projects
                </p>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
                  99+
                </span>
                <p className="mt-1 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Core Web Vitals
                </p>
              </div>

              <div>
                <span className="text-4xl sm:text-5xl font-bold tracking-tight text-neutral-900">
                  Sub-0.4s
                </span>
                <p className="mt-1 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
                  Global Load Time
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
