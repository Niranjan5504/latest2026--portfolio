import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { Download, Eye, X } from 'lucide-react';
import {
  ACHIEVEMENTS_LIST,
  CURRENT_EMPLOYMENT,
  FEATURED_PROJECTS,
  PATENT_PUBLICATION,
  PREVIOUS_EXPERIENCES,
  PROFILE_DATA,
  SKILL_GROUPS,
} from '../data/portfolio';

export function Resume() {
  const prefersReducedMotion = useReducedMotion();
  const [previewOpen, setPreviewOpen] = useState(false);

  useEffect(() => {
    if (!previewOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [previewOpen]);

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
      id="resume"
      aria-labelledby="resume-heading"
      className="border-t border-zinc-900 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          {...revealProps}
          className="rounded-2xl border border-zinc-800/80 bg-[#0B0B0F] p-7 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <p className="text-xs font-medium tracking-wide text-blue-400">
                07. Curriculum Vitae
              </p>
              <h2
                id="resume-heading"
                className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl lg:text-4xl [text-wrap:balance]"
              >
                Want to Know More About My Journey?
              </h2>
              <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-zinc-300 sm:text-[15px]">
                Explore my resume to learn more about my education, technical background,
                projects, and professional experience.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3.5 lg:col-span-4 lg:justify-end">
              <a
                href={PROFILE_DATA.resumePath}
                download={PROFILE_DATA.resumeFileName}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={() => setPreviewOpen(true)}
                aria-haspopup="dialog"
                className="inline-flex min-h-[44px] items-center cursor-pointer gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-sm font-medium text-zinc-200 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <Eye className="h-4 w-4 cursor-pointer text-zinc-400" aria-hidden="true" />
                <span>Quick Overview</span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Accessible Structured Resume Overview Modal */}
      <AnimatePresence>
        {previewOpen && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="resume-modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={() => setPreviewOpen(false)}
              className="fixed inset-0 bg-black/85 backdrop-blur-sm"
            />

            <motion.div
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-zinc-800 bg-[#0B0B0F] shadow-2xl"
            >
              <div className="sticky top-0 z-20 flex items-center justify-between gap-4 border-b border-zinc-800 bg-[#0B0B0F]/95 px-6 py-4 backdrop-blur-md">
                <div>
                  <h3
                    id="resume-modal-title"
                    className="font-display text-base font-bold text-zinc-100"
                  >
                    {PROFILE_DATA.name} — Verified Profile Summary
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {PROFILE_DATA.location} · {PROFILE_DATA.email}
                  </p>
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href={PROFILE_DATA.resumePath}
                    download={PROFILE_DATA.resumeFileName}
                    className="inline-flex min-h-[38px] items-center gap-1.5 rounded-lg bg-[#2563EB] px-3.5 py-1.5 text-xs font-semibold text-white whitespace-nowrap shrink-0 transition-colors hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Download PDF</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => setPreviewOpen(false)}
                    aria-label="Close resume overview"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 text-zinc-200 hover:bg-zinc-800 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                  >
                    <X className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              <div className="space-y-6 p-6 text-sm sm:p-8">
                <div>
                  <h4 className="font-display text-xs font-semibold tracking-wide text-blue-400">
                    Education
                  </h4>
                  <p className="mt-1.5 font-semibold text-zinc-100">
                    {PROFILE_DATA.education.degree} ({PROFILE_DATA.education.period})
                  </p>
                  <p className="text-xs text-zinc-400">
                    {PROFILE_DATA.education.institution}, {PROFILE_DATA.education.location}
                  </p>
                </div>

                <div className="border-t border-zinc-800/80 pt-5">
                  <h4 className="font-display text-xs font-semibold tracking-wide text-blue-400">
                    Current Employment
                  </h4>
                  <p className="mt-1.5 font-semibold text-zinc-100">
                    {CURRENT_EMPLOYMENT.company} — {CURRENT_EMPLOYMENT.designation} (
                    {CURRENT_EMPLOYMENT.process})
                  </p>
                  <p className="text-xs text-zinc-400">
                    {CURRENT_EMPLOYMENT.location} · {CURRENT_EMPLOYMENT.statusTag}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                    {CURRENT_EMPLOYMENT.description}
                  </p>
                </div>

                <div className="border-t border-zinc-800/80 pt-5">
                  <h4 className="font-display text-xs font-semibold tracking-wide text-blue-400">
                    Internships &amp; Freelance Experience
                  </h4>
                  <ul className="mt-2.5 space-y-2.5 text-xs text-zinc-300">
                    {PREVIOUS_EXPERIENCES.map((exp) => (
                      <li key={exp.id}>
                        <span className="font-medium text-zinc-100">{exp.company}</span> —{' '}
                        {exp.designation}{' '}
                        <span className="font-mono text-zinc-500">({exp.period})</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-zinc-800/80 pt-5">
                  <h4 className="font-display text-xs font-semibold tracking-wide text-blue-400">
                    Technical Skills
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-zinc-300">
                    {SKILL_GROUPS.map(
                      (g) => `${g.category}: ${g.skills.map((s) => s.name).join(', ')}`
                    ).join(' · ')}
                  </p>
                </div>

                <div className="border-t border-zinc-800/80 pt-5">
                  <h4 className="font-display text-xs font-semibold tracking-wide text-blue-400">
                    Key Projects &amp; Published Patent Application
                  </h4>
                  <p className="mt-1.5 text-xs text-zinc-200">
                    {PATENT_PUBLICATION.title} — Indian Patent Application Publication No.{' '}
                    <span className="font-mono">{PATENT_PUBLICATION.publicationNumber}</span> (
                    {PATENT_PUBLICATION.publicationDate})
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Projects: {FEATURED_PROJECTS.map((p) => p.title).join(' · ')}
                  </p>
                  <p className="mt-2 text-xs text-zinc-400">
                    Certifications: {ACHIEVEMENTS_LIST.map((a) => a.title).join(' · ')}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
