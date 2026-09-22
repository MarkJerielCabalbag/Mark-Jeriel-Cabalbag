import React, { useState, useEffect, useRef } from 'react';
import { Mail, Copy, Check, ArrowUpRight, Sparkles, MessageCircle, Clock, ShieldCheck } from 'lucide-react';
import { ModernBottomModal } from './ModernBottomModal';

interface DirectContactModalProps {
  isOpen: boolean;
  initialTopic?: string;
  onClose: () => void;
}

export const DirectContactModal: React.FC<DirectContactModalProps> = ({
  isOpen,
  initialTopic,
  onClose,
}) => {
  const [copied, setCopied] = useState(false);
  const copyTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const emailAddress = 'cabalbagmarkjeriel6@gmail.com';

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    if (copyTimeoutRef.current) {
      clearTimeout(copyTimeoutRef.current);
    }
    copyTimeoutRef.current = setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  const mailtoSubject = initialTopic
    ? `Launch Project Inquiry: ${initialTopic}`
    : 'Landing Page Launch Project Inquiry';

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
    mailtoSubject
  )}&body=${encodeURIComponent(
    `Mark Jeriel Cabalbag,\n\nI saw your portfolio and would like to discuss a landing page launch project.\n\nProject details:\n- Timeline:\n- Conversion Goals:\n\nBest,\n`
  )}`;

  return (
    <ModernBottomModal
      isOpen={isOpen}
      onClose={onClose}
      badge={
        <div className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold text-neutral-700 uppercase tracking-wider">
          <span>Contact</span>
        </div>
      }
      title="Get in Touch"
      maxWidthClass="max-w-xl sm:max-w-2xl"
    >
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-900">
            Let&apos;s talk about your project
          </h3>
          <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 leading-relaxed">
            Reach out directly. I typically reply within 24 hours with project availability and initial thoughts.
          </p>
        </div>

        {/* Selected Project Inquire Context Banner */}
        {initialTopic && (
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 p-3.5 text-xs text-neutral-700 flex items-center justify-between">
            <div>
              <span className="text-neutral-400 font-medium">Inquiring about: </span>
              <span className="font-semibold text-neutral-900">{initialTopic}</span>
            </div>
            <span className="rounded-full bg-[#FF451A]/10 px-2 py-0.5 text-[10px] font-bold text-[#FF451A] uppercase">
              Selected
            </span>
          </div>
        )}

        {/* Primary Direct Email Channel Card */}
        <div className="rounded-2xl border border-neutral-200 bg-neutral-50/70 p-5 shadow-xs">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-bold tracking-wider text-neutral-500 uppercase">
              Primary Direct Email
            </span>
            <span className="inline-flex items-center gap-1 text-[11px] font-medium text-emerald-600">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for Q3/Q4 Launches
            </span>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 mt-3">
            <div className="flex items-center gap-2.5 overflow-hidden">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-neutral-900 text-white">
                <Mail className="h-4 w-4" />
              </div>
              <span className="truncate text-xs sm:text-sm font-semibold text-neutral-900 select-all font-mono">
                {emailAddress}
              </span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-xs font-semibold text-neutral-700 hover:bg-neutral-50 active:scale-95 transition-all shadow-xs"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600 stroke-[2.5]" />
                    <span className="text-emerald-700">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-neutral-500" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={mailtoLink}
                className="flex flex-1 sm:flex-initial items-center justify-center gap-1.5 rounded-full bg-[#121212] px-4 py-2 text-xs font-semibold text-white hover:bg-neutral-800 active:scale-95 transition-all shadow-xs"
              >
                <span>Send Email</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Alternative Direct Channels */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-neutral-200/80 bg-white p-3.5 text-neutral-800 transition-all hover:border-neutral-900 hover:shadow-xs group"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">X (Twitter)</div>
                <div className="text-[11px] text-neutral-400">@markjeriel</div>
              </div>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between rounded-xl border border-neutral-200/80 bg-white p-3.5 text-neutral-800 transition-all hover:border-neutral-900 hover:shadow-xs group"
          >
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-100 text-neutral-800 group-hover:bg-neutral-900 group-hover:text-white transition-colors">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-neutral-900">LinkedIn</div>
                <div className="text-[11px] text-neutral-400">Mark Jeriel Cabalbag</div>
              </div>
            </div>
            <ArrowUpRight className="h-3.5 w-3.5 text-neutral-400 group-hover:text-neutral-900 transition-colors" />
          </a>
        </div>

        {/* Solo Creator Guarantees */}
        <div className="rounded-2xl bg-neutral-50 p-4 border border-neutral-100 text-xs text-neutral-600 space-y-2">
          <div className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 mb-2">
            Sprint Expectations
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-[#FF451A] shrink-0" />
            <span>Turnaround: <strong>2–3 weeks</strong> from kickoff to production deployment.</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-[#FF451A] shrink-0" />
            <span>Direct communication channel throughout the build.</span>
          </div>
          <div className="flex items-center gap-2">
            <Sparkles className="h-3.5 w-3.5 text-[#FF451A] shrink-0" />
            <span>Full ownership of all design assets and source code.</span>
          </div>
        </div>
      </div>
    </ModernBottomModal>
  );
};
