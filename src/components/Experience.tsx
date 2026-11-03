import { motion, useReducedMotion } from 'motion/react';
import {
  CURRENT_EMPLOYMENT,
  PREVIOUS_EXPERIENCES,
} from '../data/portfolio';

export function Experience() {
  const prefersReducedMotion = useReducedMotion();

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
      id="experience"
      aria-labelledby="experience-heading"
      className="border-t border-zinc-900 bg-[#07070A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div {...revealProps}>
          <p className="text-xs font-medium tracking-wide text-blue-400">
            04. Professional Experience
          </p>
          <h2
            id="experience-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]"
          >
            Experience &amp; Training.
          </h2>
          <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            Full-time corporate employment presented distinctly alongside software development
            internships and freelance web engagements.
          </p>
        </motion.div>

        {/* CATEGORY 1: Current Full-Time Employment */}
        <motion.div {...revealProps} className="mt-12">
          <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-3">
            <h3 className="font-display text-sm font-semibold tracking-wide text-zinc-200">
              Current Full-Time Employment
            </h3>
            <span className="font-mono text-xs tabular-nums text-blue-400">
              {CURRENT_EMPLOYMENT.statusTag}
            </span>
          </div>

          <article className="mt-6 rounded-2xl border border-zinc-800/80 bg-[#0B0B0F] p-6 sm:p-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
              <div className="lg:col-span-4">
                <p className="font-mono text-xs tabular-nums text-zinc-400">
                  {CURRENT_EMPLOYMENT.period}
                </p>
                <h4 className="mt-2 font-display text-2xl font-bold tracking-tight text-zinc-50">
                  {CURRENT_EMPLOYMENT.company}
                </h4>
                <p className="mt-1 font-display text-base font-medium text-blue-400">
                  {CURRENT_EMPLOYMENT.designation}
                </p>
                <p className="mt-2 text-xs text-zinc-400">
                  <span>Process: {CURRENT_EMPLOYMENT.process}</span>
                  <span aria-hidden="true" className="mx-2 text-zinc-600">
                    ·
                  </span>
                  <span>{CURRENT_EMPLOYMENT.location}</span>
                </p>
                <p className="mt-4 text-xs leading-relaxed text-zinc-500">
                  Employed by Concentrix, assigned to the Google Process.
                </p>
              </div>

              <div className="lg:col-span-8">
                <p className="text-sm leading-[1.78] text-zinc-200 sm:text-[15px]">
                  {CURRENT_EMPLOYMENT.description}
                </p>

                <div className="mt-6 border-t border-zinc-800/80 pt-5">
                  <p className="text-xs font-medium text-zinc-400">Professional Focus</p>
                  <ul className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {CURRENT_EMPLOYMENT.highlights.map((focusItem) => (
                      <li
                        key={focusItem}
                        className="flex items-baseline gap-2.5 text-xs text-zinc-300 sm:text-[13px]"
                      >
                        <span aria-hidden="true" className="text-blue-400">
                          —
                        </span>
                        <span>{focusItem}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </article>
        </motion.div>

        {/* CATEGORY 2: Internships & Freelance Experience */}
        <motion.div {...revealProps} className="mt-16">
          <div className="flex items-baseline justify-between border-b border-zinc-800/80 pb-3">
            <h3 className="font-display text-sm font-semibold tracking-wide text-zinc-200">
              Internships &amp; Freelance Software Experience
            </h3>
            <span className="font-mono text-xs tabular-nums text-zinc-500">
              2023 – 2026
            </span>
          </div>

          <div className="divide-y divide-zinc-800/80">
            {PREVIOUS_EXPERIENCES.map((item) => (
              <article
                key={item.id}
                className="grid grid-cols-1 gap-4 py-8 lg:grid-cols-12 lg:gap-8"
              >
                <div className="lg:col-span-4">
                  <p className="font-mono text-xs tabular-nums text-zinc-400">
                    {item.period}
                  </p>
                  <h4 className="mt-1.5 font-display text-lg font-semibold tracking-tight text-zinc-100">
                    {item.company}
                  </h4>
                  <p className="mt-0.5 text-sm text-zinc-400">{item.designation}</p>
                </div>

                <div className="lg:col-span-8">
                  <p className="text-sm leading-relaxed text-zinc-300">
                    {item.description}
                  </p>
                  <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-zinc-400 sm:text-[13px]">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex items-baseline gap-2.5">
                        <span aria-hidden="true" className="text-zinc-600">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  {item.technologies && item.technologies.length > 0 && (
                    <p className="mt-4 text-xs text-zinc-500">
                      {item.technologies.join(' · ')}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
