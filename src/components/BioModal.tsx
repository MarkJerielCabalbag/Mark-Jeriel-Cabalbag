import React from 'react';
import { Layers, Box, Code, ArrowRight } from 'lucide-react';
import { portfolioImages, frontendSkills } from '../data';
import { ModernBottomModal } from './ModernBottomModal';

interface BioModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookConsultation: () => void;
}

export const BioModal: React.FC<BioModalProps> = ({
  isOpen,
  onClose,
  onBookConsultation,
}) => {
  return (
    <ModernBottomModal
      isOpen={isOpen}
      onClose={onClose}
      badge={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold text-neutral-700 uppercase tracking-wider">
          Profile
        </span>
      }
      title="Mark Jeriel Cabalbag"
      maxWidthClass="max-w-xl sm:max-w-2xl"
    >
      <div>
        {/* Bio Header with Portrait */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
          <div className="relative h-20 w-20 sm:h-24 sm:w-24 flex-shrink-0 overflow-hidden rounded-2xl bg-neutral-900 shadow-md">
            <img
              src={portfolioImages.markProfile}
              alt="Mark Jeriel Cabalbag"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="text-center sm:text-left">
            <p className="text-xs font-semibold text-[#FF451A] uppercase tracking-wider">
              Designer &amp; Engineer
            </p>
            <h3 className="mt-1 text-2xl font-bold tracking-tight text-neutral-900">
              Mark Jeriel Cabalbag
            </h3>
            <p className="mt-1 text-xs text-neutral-500">
              Independent practice · 84+ Shipped Launches
            </p>
          </div>
        </div>

        {/* Biography Statement */}
        <div className="mt-6 space-y-3 text-sm text-neutral-600 leading-relaxed font-normal">
          <p>
            I design and build high-performance websites, landing pages, and interactive digital interfaces for businesses and creators.
          </p>
          <p>
            Every project is executed directly with you — from initial wireframes and layout concepts to production frontend code — pairing bespoke aesthetic craft with clean engineering.
          </p>
        </div>

        {/* Core Directorial Disciplines */}
        <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          <div className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 text-center">
            <Layers className="mx-auto h-5 w-5 text-[#FF451A]" />
            <h5 className="mt-2 text-xs font-bold text-neutral-900">Web &amp; Layout Design</h5>
            <p className="mt-0.5 text-[11px] text-neutral-500">Visual hierarchy &amp; wireframes</p>
          </div>

          <div className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 text-center">
            <Box className="mx-auto h-5 w-5 text-[#FF451A]" />
            <h5 className="mt-2 text-xs font-bold text-neutral-900">UI / UX Craft</h5>
            <p className="mt-0.5 text-[11px] text-neutral-500">Responsive layouts &amp; aesthetics</p>
          </div>

          <div className="rounded-xl border border-neutral-100 bg-neutral-50/70 p-3.5 text-center">
            <Code className="mx-auto h-5 w-5 text-[#FF451A]" />
            <h5 className="mt-2 text-xs font-bold text-neutral-900">Frontend Code</h5>
            <p className="mt-0.5 text-[11px] text-neutral-500">TypeScript, HTML/CSS &amp; React</p>
          </div>
        </div>

        {/* Core Skills */}
        <div className="mt-6 border-t border-neutral-100 pt-5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-400">
            Frontend &amp; Design Skills
          </h4>
          <div className="mt-3 flex flex-wrap gap-2">
            {frontendSkills.map((skill) => (
              <span
                key={skill}
                className="rounded-lg bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-700"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 border-t border-neutral-100 pt-4 flex justify-end">
          <button
            onClick={() => {
              onClose();
              onBookConsultation();
            }}
            className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#FF451A] cursor-pointer"
          >
            <span>Start a project</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </ModernBottomModal>
  );
};
