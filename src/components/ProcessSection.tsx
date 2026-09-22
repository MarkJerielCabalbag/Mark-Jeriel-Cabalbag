import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}

interface ProcessSectionProps {
  onBookConsultation?: (stepTitle?: string) => void;
}

const stepsData: ProcessStep[] = [
  {
    step: 'step 1',
    title: 'Consultation',
    description: 'Aligning on your vision, target audience, and core conversion paths.',
    deliverables: ['Discovery Audit', 'Value Proposition', 'Wireframes'],
  },
  {
    step: 'step 2',
    title: 'Design',
    description: 'High-fidelity art direction, typography, and interactive component prototypes.',
    deliverables: ['Desktop & Mobile UI', 'Interactive Prototypes', 'Motion Specs'],
  },
  {
    step: 'step 3',
    title: 'Assets',
    description: 'Interactive 3D models, custom badges, and performant asset optimization.',
    deliverables: ['3D / WebGL Assets', 'Iconography', 'Asset Optimization'],
  },
  {
    step: 'step 4',
    title: 'Execution',
    description: 'Clean TypeScript frontend engineering tuned for sub-second global load times.',
    deliverables: ['React / TypeScript', 'Sub-Second Speed', 'Fluid Animations'],
  },
  {
    step: 'step 5',
    title: 'Launch',
    description: 'End-to-end testing, telemetry attribution validation, and production deployment.',
    deliverables: ['QA Testing', 'Analytics Tracking', 'Edge CDN Handoff'],
  },
];

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onBookConsultation,
}) => {
  return (
    <section id="process-section" className="w-full bg-white px-6 py-20 sm:px-10 sm:py-28 lg:px-12 border-t border-neutral-100">
      <div className="mx-auto max-w-7xl">
        {/* Top Header */}
        <motion.div 
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-10 items-start"
        >
          <div className="md:col-span-2 lg:col-span-2">
            <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-tight lowercase">
              process
            </span>
          </div>

          <div className="md:col-span-10 lg:col-span-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold leading-[1.25] text-neutral-900 tracking-tight max-w-3xl">
              Direct collaboration at every phase — from initial wireframes to production launch.
            </h2>
          </div>
        </motion.div>

        {/* Hairline Divider */}
        <div className="border-t border-neutral-200 mt-12 sm:mt-16" />

        {/* 5 Process Step Rows */}
        <div className="divide-y divide-neutral-200">
          {stepsData.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ x: 6 }}
              onClick={() => onBookConsultation && onBookConsultation(`${item.title} (${item.step})`)}
              className="group relative py-9 sm:py-12 cursor-pointer transition-colors duration-200 hover:bg-neutral-50/70 px-3 sm:px-6 -mx-3 sm:-mx-6 rounded-2xl"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 items-start">
                {/* Left Column: 'step 1' */}
                <div className="md:col-span-2 lg:col-span-2">
                  <span className="text-xs sm:text-sm font-mono text-neutral-400 tracking-tight lowercase group-hover:text-neutral-900 transition-colors">
                    {item.step}
                  </span>
                </div>

                {/* Center Column: Big Bold Title */}
                <div className="md:col-span-6 lg:col-span-6">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900 group-hover:text-[#FF451A] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <motion.div
                      className="text-[#FF451A] opacity-0 -translate-x-2 translate-y-2 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
                    >
                      <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                    </motion.div>
                  </div>

                  {/* Clean Deliverables tags */}
                  <div className="mt-3 flex flex-wrap gap-2 pt-1">
                    {item.deliverables.map((deliv) => (
                      <span
                        key={deliv}
                        className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium text-neutral-600 transition-colors group-hover:bg-white group-hover:border group-hover:border-neutral-200"
                      >
                        <CheckCircle2 className="h-2.5 w-2.5 text-[#FF451A]" />
                        {deliv}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: Clean description */}
                <div className="md:col-span-4 lg:col-span-4 pt-1 sm:pt-2">
                  <p className="text-xs sm:text-sm leading-relaxed text-neutral-500 group-hover:text-neutral-700 transition-colors">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner with Direct Contact Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 sm:mt-16 rounded-3xl bg-[#121212] p-8 sm:p-10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-lg border border-white/5"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
              Work directly with Mark
            </h3>
            <p className="mt-1 text-xs sm:text-sm text-neutral-400 max-w-xl">
              Direct communication from kickoff to deployment. No agency layers or telephone games.
            </p>
          </div>

          <motion.button
            type="button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onBookConsultation && onBookConsultation('Step 1: Direct Collaboration')}
            className="group flex items-center shrink-0 rounded-full bg-[#FF451A] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition-colors hover:bg-[#E63910] cursor-pointer"
          >
            <span>Start a conversation</span>
            <ArrowUpRight className="ml-2 h-4 w-4 stroke-[2.5] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
