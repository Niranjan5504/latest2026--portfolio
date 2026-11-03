import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { ArrowUpRight, ExternalLink, FileCheck2, X } from 'lucide-react';
import {
  FEATURED_PROJECTS,
  PROFILE_DATA,
  type ProjectItem,
} from '../data/portfolio';
import { PortfolioImage } from './PortfolioImage';
import { cn } from '../lib/utils';

type ProjectFilter = 'All' | ProjectItem['category'];

const PROJECT_FILTERS: ProjectFilter[] = [
  'All',
  'AI & Accessibility',
  'Web Applications',
  'Freelance',
];

export function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const visibleProjects =
    activeFilter === 'All'
      ? FEATURED_PROJECTS
      : FEATURED_PROJECTS.filter((project) => project.category === activeFilter);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedProject(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedProject]);

  const revealProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
      };

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="border-t border-zinc-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Header + Interactive Filter Controls */}
        <motion.div
          {...revealProps}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-blue-400">
              03. Selected Works
            </p>
            <h2
              id="projects-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]"
            >
              Featured Projects.
            </h2>
            <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              Academic systems, accessibility-focused AI research, symposium platforms, and
              independent freelance websites. Select any project card to view complete features
              and technical details.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-800/80 bg-[#0D0D11] p-1"
          >
            {PROJECT_FILTERS.map((filter) => {
              const isSelected = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(filter)}
                  className={cn(
                    'min-h-[36px] rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                    isSelected
                      ? 'bg-[#2563EB] text-white'
                      : 'text-zinc-400 hover:text-zinc-100'
                  )}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Bento & Editorial Showcase Grid */}
        <div className="mt-12 grid grid-cols-1 gap-7 md:grid-cols-2">
          {visibleProjects.map((project) => {
            const isHeroProject = Boolean(project.featuredSpan && activeFilter === 'All');

            return (
              <motion.article
                key={project.id}
                {...revealProps}
                className={cn(
                  'group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0B0B0E] transition-colors duration-200 hover:border-zinc-700',
                  isHeroProject ? 'md:col-span-2 lg:grid lg:grid-cols-12' : ''
                )}
              >
                {/* Project Visual Preview */}
                <div
                  className={cn(
                    'relative overflow-hidden bg-zinc-950',
                    isHeroProject
                      ? 'aspect-[16/10] lg:col-span-7 lg:aspect-auto lg:min-h-[400px]'
                      : 'aspect-[4/3]'
                  )}
                >
                  <PortfolioImage
                    src={project.image}
                    alt={project.imageAlt}
                    fallbackTitle={project.title}
                    className="h-full w-full"
                    imgClassName="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0B0B0E]/75 via-transparent to-transparent lg:from-transparent"
                  />
                </div>

                {/* Project Copy & Unboxed Metadata */}
                <div
                  className={cn(
                    'flex flex-1 flex-col justify-between p-6 sm:p-7',
                    isHeroProject ? 'lg:col-span-5 lg:p-8' : ''
                  )}
                >
                  <div>
                    {/* Quiet 1-line unboxed metadata kicker */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-400">
                      <span className="font-mono tabular-nums text-blue-400">
                        {project.index}.
                      </span>
                      <span>{project.category}</span>
                      {project.patent && (
                        <>
                          <span aria-hidden="true" className="text-zinc-600">
                            ·
                          </span>
                          <span className="text-zinc-200">
                            Patent Application {project.patent.applicationNumber}
                          </span>
                        </>
                      )}
                    </div>

                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-zinc-50 sm:text-2xl [text-wrap:balance]">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                      {project.shortDescription}
                    </p>

                    {/* Key Features Preview */}
                    <ul className="mt-5 space-y-1.5 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400 sm:text-[13px]">
                      {project.features.slice(0, isHeroProject ? 5 : 4).map((feature) => (
                        <li key={feature} className="flex items-baseline gap-2.5">
                          <span aria-hidden="true" className="text-blue-400">
                            —
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {project.patent && (
                      <p className="mt-4 text-xs leading-relaxed text-zinc-400">
                        <span className="font-medium text-zinc-200">
                          Published Patent Application:
                        </span>{' '}
                        Indian Patent Application Publication No.{' '}
                        <span className="font-mono tabular-nums text-zinc-200">
                          {project.patent.applicationNumber}
                        </span>{' '}
                        (Published {project.patent.publicationDate}). Niranjan Kumar A is listed
                        among the inventors.
                      </p>
                    )}
                  </div>

                  {/* Footer Metadata & Case Study Action */}
                  <div className="mt-6 border-t border-zinc-800/80 pt-4">
                    <p className="text-xs leading-relaxed text-zinc-400">
                      {project.technologies.join(' · ')}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-4">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-haspopup="dialog"
                        className="inline-flex min-h-[40px] items-center gap-1.5 text-xs font-semibold text-blue-400 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-blue-300 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                      >
                        <span>View Project Details</span>
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </button>

                      <span className="font-mono text-[11px] tabular-nums text-zinc-500">
                        {project.features.length} key features
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Accessible Project Detail Lightbox Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-project-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#0B0B0F] shadow-2xl"
            >
              {/* Modal Top Bar */}
              <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-zinc-800/90 bg-[#0B0B0F]/95 px-6 py-4 backdrop-blur-md">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <span className="font-mono tabular-nums text-blue-400">
                    Project {selectedProject.index}
                  </span>
                  <span aria-hidden="true">·</span>
                  <span>{selectedProject.category}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details modal"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/80 text-zinc-200 transition-colors duration-150 hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>

              {/* Modal Media */}
              <div className="aspect-[16/9] w-full bg-zinc-950">
                <PortfolioImage
                  src={selectedProject.image}
                  alt={selectedProject.imageAlt}
                  fallbackTitle={selectedProject.title}
                  className="h-full w-full"
                />
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8">
                <p className="text-xs text-zinc-400">{selectedProject.period}</p>
                <h3
                  id="modal-project-title"
                  className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl"
                >
                  {selectedProject.title}
                </h3>

                <p className="mt-4 text-sm leading-[1.75] text-zinc-300 sm:text-[15px]">
                  {selectedProject.fullDescription}
                </p>

                {/* Patent Application Callout (Strictly Factual) */}
                {selectedProject.patent && (
                  <div className="mt-6 rounded-xl border border-blue-500/30 bg-blue-950/15 p-5">
                    <div className="flex items-center gap-2.5 text-sm font-semibold text-zinc-100">
                      <FileCheck2 className="h-4 w-4 text-blue-400 shrink-0" aria-hidden="true" />
                      <span>{selectedProject.patent.statusLabel}</span>
                    </div>
                    <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs tabular-nums text-blue-300">
                      <span>Publication No. {selectedProject.patent.applicationNumber}</span>
                      <span aria-hidden="true" className="text-zinc-600">
                        ·
                      </span>
                      <span>Publication Date: {selectedProject.patent.publicationDate}</span>
                    </div>
                    <p className="mt-2.5 text-xs leading-relaxed text-zinc-300">
                      {selectedProject.patent.inventorNote}
                    </p>
                  </div>
                )}

                {/* Complete Key Features */}
                <div className="mt-7 border-t border-zinc-800/80 pt-6">
                  <h4 className="font-display text-sm font-semibold text-zinc-100">
                    Key Features &amp; Capabilities
                  </h4>
                  <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {selectedProject.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-baseline gap-2.5 text-xs leading-relaxed text-zinc-300 sm:text-[13px]"
                      >
                        <span aria-hidden="true" className="text-blue-400">
                          —
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technology Stack & Verified Profile Link */}
                <div className="mt-7 flex flex-col justify-between gap-5 border-t border-zinc-800/80 pt-6 sm:flex-row sm:items-center">
                  <div>
                    <span className="block text-xs text-zinc-500">Technology Stack</span>
                    <p className="mt-1 text-xs font-medium text-zinc-200 sm:text-[13px]">
                      {selectedProject.technologies.join(' · ')}
                    </p>
                  </div>

                  <a
                    href={PROFILE_DATA.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-xs font-semibold text-zinc-100 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-600 hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    <span>Explore GitHub Profile</span>
                    <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
