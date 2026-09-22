import React, { useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { featuredProjects } from '../data';
import { WorkItem, ProjectVariation } from '../types';
import { WorkVariationCard } from './WorkVariationCard';

interface WorksSectionProps {
  onSelectWork: (work: WorkItem) => void;
  onOpenCollection: () => void;
}

export const WorksSection: React.FC<WorksSectionProps> = ({
  onSelectWork,
  onOpenCollection,
}) => {
  // Active project index (cycles through the featured launch projects)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  const handlePrev = () => {
    setActiveProjectIndex((prev) => (prev > 0 ? prev - 1 : featuredProjects.length - 1));
  };

  const handleNext = () => {
    setActiveProjectIndex((prev) => (prev < featuredProjects.length - 1 ? prev + 1 : 0));
  };

  const currentProject = featuredProjects[activeProjectIndex] || featuredProjects[0];
  // 3 distinct photo variations for the current project
  const card1 = currentProject.variations[0];
  const card2 = currentProject.variations[1];
  const card3 = currentProject.variations[2];

  const handleSelectVariation = (variation: ProjectVariation) => {
    onSelectWork({
      id: variation.id,
      title: variation.title,
      category: variation.category,
      collectionDate: variation.tag,
      priceTag: variation.cvrTag,
      image: variation.image,
      description: variation.description,
      specs: variation.specs,
      link: variation.link
    });
  };

  return (
    <section id="works-section" className="w-full bg-white px-6 pt-12 pb-16 sm:px-10 sm:pt-16 sm:pb-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        {/* Section Header Row */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            {/* Modern Clean Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
              Featured Launches
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-neutral-500 font-medium">
              Project {activeProjectIndex + 1} of {featuredProjects.length}:{' '}
              <span className="text-neutral-900 font-semibold">{currentProject.name}</span>
            </p>
          </div>

          {/* Pill Button: ALL LANDING PAGES */}
          <button
            id="shop-collection-btn"
            onClick={onOpenCollection}
            className="group inline-flex items-center gap-2 self-start rounded-full border border-neutral-300 bg-white py-1.5 pl-5 pr-2 transition-all duration-200 hover:border-neutral-900 active:scale-[0.98] sm:self-auto"
          >
            <span className="text-[11px] font-semibold tracking-wider text-neutral-900 uppercase">
              All Landing Pages
            </span>
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-950 text-white transition-transform group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
            </span>
          </button>
        </div>

        {/* 3 Staggered Visual Work Columns matching reference layout */}
        <div className="mt-8 grid grid-cols-1 items-end gap-6 md:grid-cols-12 md:gap-6 lg:gap-8">
          
          {/* Column 1 (Left): Tall Vertical Card (Variation 1: Desktop Viewport) */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 lg:col-span-4"
          >
            <WorkVariationCard
              variation={card1}
              projectId={currentProject.id}
              heightClass="h-[480px] sm:h-[520px]"
              badgeLabel="Variation 01 • Main Viewport"
              subBadge={card1.tag}
              onSelect={() => handleSelectVariation(card1)}
              hoverY={-10}
            />
          </motion.div>

          {/* Column 2 (Middle): Dynamic Project Info Block + Medium Landing Page Card (Variation 2) */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end md:col-span-4 lg:col-span-5"
          >
            {/* Top Text Block - Changes when user clicks Next / Prev */}
            <AnimatePresence mode="wait">
              <motion.div
                key={`project-info-${currentProject.id}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="mb-6 px-1"
              >
                <span className="text-xs font-bold tracking-wider text-[#FF451A] uppercase">
                  {currentProject.badge}
                </span>
                <p className="mt-2 text-xs sm:text-[13px] leading-relaxed text-neutral-600">
                  {currentProject.infoText}
                </p>
                <a
                  className="mt-3 text-[11px] flex items-center gap-2 font-semibold tracking-wider text-[#FF451A] uppercase transition-colors underline hover:text-[#E63910] cursor-pointer"
                  href={currentProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Project <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" />
                </a>
              </motion.div>
            </AnimatePresence>

            {/* Card 2: Variation 2 (Mobile or Detail View) */}
            <WorkVariationCard
              variation={card2}
              projectId={currentProject.id}
              heightClass="h-[320px] sm:h-[350px]"
              badgeLabel="Variation 02 • Responsive Flow"
              onSelect={() => handleSelectVariation(card2)}
              hoverY={-8}
            />
          </motion.div>

          {/* Column 3 (Right): Carousel Nav Controls + Card 3 (Variation 3: Interactive Component / 3D) */}
          <motion.div 
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end md:col-span-3 lg:col-span-3"
          >
            {/* Carousel Arrow Controls & Project Dots */}
            <div className="mb-4 flex items-center justify-between gap-2 pr-1">
              {/* Pagination Dots */}
              <div className="flex items-center gap-1.5">
                {featuredProjects.map((project, idx) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    aria-label={`Switch to project ${project.name}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      activeProjectIndex === idx
                        ? 'w-6 bg-[#FF451A]'
                        : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                    }`}
                  />
                ))}
              </div>

              {/* Counter & Arrows with spring micro-interaction */}
              <div className="flex items-center gap-2">
                <span className="text-[11px] font-semibold text-neutral-400 mr-0.5">
                  0{activeProjectIndex + 1} / 0{featuredProjects.length}
                </span>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handlePrev}
                  aria-label="Previous project"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors hover:bg-neutral-200"
                >
                  <ChevronLeft className="h-4 w-4 stroke-[2.5]" />
                </motion.button>
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleNext}
                  aria-label="Next project"
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-[#FF451A] text-white shadow-sm transition-colors hover:bg-[#E63910]"
                >
                  <ChevronRight className="h-4 w-4 stroke-[2.5]" />
                </motion.button>
              </div>
            </div>

            {/* Card 3: Dynamic Variation 3 Card */}
            <WorkVariationCard
              variation={card3}
              projectId={currentProject.id}
              heightClass="h-[240px] sm:h-[260px]"
              badgeLabel="Variation 03 • Micro-Interaction"
              onSelect={() => handleSelectVariation(card3)}
              hoverY={-8}
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

