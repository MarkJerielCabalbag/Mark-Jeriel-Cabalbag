import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, CheckCircle, ShieldCheck, ArrowUpRight, Copy, Check } from 'lucide-react';
import { CertificateItem } from '../types';

interface CertificateModalProps {
  certificate: CertificateItem | null;
  onClose: () => void;
  onInquire: (topic: string) => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({
  certificate,
  onClose,
  onInquire,
}) => {
  const [copied, setCopied] = useState(false);

  if (!certificate) return null;

  const handleCopyId = () => {
    navigator.clipboard?.writeText(certificate.credentialId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className="fixed inset-0 bg-neutral-950/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 16 }}
          transition={{ type: 'spring', damping: 26, stiffness: 320 }}
          className="relative z-10 w-full max-w-3xl overflow-hidden rounded-[28px] bg-white shadow-2xl ring-1 ring-black/10"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900/80 text-white backdrop-blur-sm transition-transform hover:scale-110 active:scale-95 sm:top-6 sm:right-6"
            aria-label="Close modal"
          >
            <X className="h-5 w-5" />
          </button>

          <div className="max-h-[85vh] overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-12">
              {/* Left Column: Certificate Preview Image */}
              <div className="relative bg-neutral-950 p-6 sm:p-8 md:col-span-5 flex flex-col justify-between overflow-hidden">
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-white/90 backdrop-blur-md">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Verified Accreditation</span>
                  </div>

                  <h3 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-white">
                    {certificate.title}
                  </h3>
                  <p className="mt-1 text-xs text-neutral-300 font-medium">
                    Issued by {certificate.authority}
                  </p>
                </div>

                <div className="relative my-6 aspect-4/3 w-full overflow-hidden rounded-2xl ring-1 ring-white/10 shadow-2xl">
                  <img
                    src={certificate.image}
                    alt={certificate.title}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-semibold text-white">
                    <span className="truncate">{certificate.category}</span>
                    <span className="rounded bg-black/60 px-1.5 py-0.5 text-[10px] text-emerald-400">
                      Active
                    </span>
                  </div>
                </div>

                <div className="relative z-10 rounded-xl bg-white/5 p-3 text-[11px] text-white/70 backdrop-blur-sm border border-white/10">
                  <div className="flex items-center justify-between">
                    <span>Credential Rank</span>
                    <span className="font-semibold text-white">{certificate.scoreOrLevel}</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Credential Specs & Validation */}
              <div className="p-6 sm:p-8 md:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 border-b border-neutral-100 pb-4">
                    <div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF451A]">
                        {certificate.pillarTag}
                      </span>
                      <h4 className="mt-0.5 text-base sm:text-lg font-bold text-neutral-900">
                        Accreditation Overview
                      </h4>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-bold text-emerald-700">
                      <CheckCircle className="h-3 w-3" />
                      Audited
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-neutral-600">
                    {certificate.description}
                  </p>

                  {/* Skills / Methodologies */}
                  <div className="mt-5">
                    <p className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                      Key Competencies &amp; Methodologies
                    </p>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {certificate.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 rounded-lg bg-neutral-100 px-2.5 py-1.5 text-xs font-semibold text-neutral-800"
                        >
                          <Check className="h-3 w-3 text-[#FF451A]" />
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Credential ID Bar with Copy */}
                  <div className="mt-6 rounded-2xl bg-neutral-50 p-4 border border-neutral-200/70">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-neutral-500 font-medium">Official Credential ID</span>
                      <button
                        onClick={handleCopyId}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF451A] hover:underline"
                      >
                        {copied ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-600" />
                            <span className="text-emerald-600">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy ID</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="mt-1 font-mono text-xs sm:text-sm font-bold text-neutral-900 select-all">
                      {certificate.credentialId}
                    </p>
                    <div className="mt-2 flex items-center justify-between text-[11px] text-neutral-400">
                      <span>Status: {certificate.issueDate}</span>
                      <span>Verified Authority</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-3 pt-4 border-t border-neutral-100">
                  <button
                    onClick={() => {
                      onClose();
                      onInquire(`Inquiry regarding ${certificate.title} accreditation`);
                    }}
                    className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 rounded-xl bg-neutral-900 px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#FF451A] hover:shadow-lg active:scale-98 cursor-pointer"
                  >
                    <span>Discuss This Qualification</span>
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto rounded-xl border border-neutral-200 px-5 py-3 text-sm font-semibold text-neutral-700 hover:bg-neutral-50 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
