import React, { useState } from 'react';
import { ArrowUpRight, Search, Layers } from 'lucide-react';
import { workItems } from '../data';
import { WorkItem } from '../types';
import { ModernBottomModal } from './ModernBottomModal';

interface CollectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectWork: (work: WorkItem) => void;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  isOpen,
  onClose,
  onSelectWork,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = ['All', 'AI Platform', 'DTC & Homeware', 'Fintech & DevTools', 'Hardware Waitlist'];

  const filteredItems = workItems.filter((item) => {
    const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <ModernBottomModal
      isOpen={isOpen}
      onClose={onClose}
      badge={
        <span className="inline-flex items-center gap-1.5 rounded-full bg-neutral-100 px-3 py-1 text-[11px] font-semibold text-neutral-700 uppercase tracking-wider">
          <Layers className="h-3 w-3" />
          Archive
        </span>
      }
      title="All Projects"
      maxWidthClass="max-w-4xl sm:max-w-5xl"
    >
      <div>
        {/* Header */}
        <div className="mb-6">
          <h2 className="mt-1 text-3xl sm:text-4xl font-bold tracking-tight text-neutral-900">
            Selected Work
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-neutral-500 max-w-2xl">
            Selected work across SaaS platforms, consumer drops, and developer infrastructure.
          </p>

          {/* Search & Category Filter Pills */}
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-1.5">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                    activeCategory === cat
                      ? 'bg-neutral-900 text-white shadow-xs'
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                placeholder="Search landing pages..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-neutral-200 bg-neutral-50/70 py-2 pl-9 pr-3.5 text-xs text-neutral-900 outline-none transition-all focus:border-neutral-900 focus:bg-white shadow-inner"
              />
            </div>
          </div>
        </div>

        {/* Grid of works */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => {
                onClose();
                onSelectWork(item);
              }}
              className="group cursor-pointer overflow-hidden rounded-2xl border border-neutral-100 bg-neutral-50/50 p-3 transition-all hover:border-neutral-200 hover:bg-white hover:shadow-lg"
            >
              <div className="relative aspect-square overflow-hidden rounded-xl bg-neutral-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2.5 right-2.5 flex h-7 w-7 items-center justify-center rounded-full bg-white/90 text-neutral-900 opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2]" />
                </div>
              </div>

              <div className="mt-3 flex items-start justify-between">
                <div>
                  <span className="text-[10px] font-semibold text-[#FF451A] uppercase">
                    {item.category}
                  </span>
                  <h4 className="mt-0.5 text-sm font-bold text-neutral-900 group-hover:text-[#FF451A] transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-0.5 text-xs font-medium text-neutral-500">
                    Conversion • {item.priceTag}
                  </p>
                </div>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-700 transition-colors group-hover:bg-neutral-900 group-hover:text-white">
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ModernBottomModal>
  );
};

