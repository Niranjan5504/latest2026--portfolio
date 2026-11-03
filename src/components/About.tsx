import { motion, useReducedMotion } from 'motion/react';
import { PROFILE_DATA } from '../data/portfolio';

const WORKING_PRINCIPLES = [
  {
    index: '01',
    title: 'Independent Ownership',
    detail:
      'Taking clear responsibility across freelance client deliverables, academic builds, and daily process standards.',
  },
  {
    index: '02',
    title: 'Practical Problem-Solving',
    detail:
      'Translating user needs—from accessible kitchen guidance to college symposium coordination—into working web interfaces.',
  },
  {
    index: '03',
    title: 'Continuous Learning',
    detail:
      'Expanding software fundamentals while building policy evaluation discipline at Concentrix in the Google Process.',
  },
];

export function About() {
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
      id="about"
      aria-labelledby="about-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div {...revealProps}>
          <p className="text-xs font-medium tracking-wide text-blue-400">
            01. Profile &amp; Academic Foundation
          </p>
          <h2
            id="about-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]"
          >
            {PROFILE_DATA.aboutHeading}
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Editorial Narrative */}
          <motion.div
            {...revealProps}
            className="space-y-5 text-[15px] leading-[1.78] text-zinc-300 tracking-[0.01em] sm:text-base lg:col-span-7"
          >
            {PROFILE_DATA.aboutParagraphs.map((paragraph, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? 'max-w-[68ch] text-base font-medium text-zinc-100 sm:text-lg sm:leading-[1.68]'
                    : 'max-w-[68ch]'
                }
              >
                {paragraph}
              </p>
            ))}
          </motion.div>

          {/* Education Card & Working Ethos */}
          <motion.div {...revealProps} className="flex flex-col justify-between gap-10 lg:col-span-5">
            {/* Single-Elevation Education Card */}
            <div className="rounded-2xl border border-zinc-800/80 bg-[#0B0B0E] p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <span className="text-xs font-medium text-zinc-400">
                  Undergraduate Degree
                </span>
                <span className="font-mono text-xs font-medium tabular-nums text-blue-400">
                  {PROFILE_DATA.education.period}
                </span>
              </div>

              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight text-zinc-50">
                {PROFILE_DATA.education.degree}
              </h3>

              <p className="mt-2 text-sm font-medium text-zinc-200">
                {PROFILE_DATA.education.institution}
              </p>

              <p className="mt-1 text-xs text-zinc-400">
                {PROFILE_DATA.education.location}
              </p>

              <div className="mt-6 border-t border-zinc-800/80 pt-4 text-xs text-zinc-400">
                <span>Graduated 2025</span>
                <span aria-hidden="true" className="mx-2 text-zinc-600">
                  ·
                </span>
                <span>Information Technology Discipline</span>
              </div>
            </div>

            {/* Clean Unboxed Principles Index */}
            <div className="divide-y divide-zinc-800/80 border-y border-zinc-800/80">
              {WORKING_PRINCIPLES.map((item) => (
                <div key={item.index} className="py-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-xs tabular-nums text-zinc-500">
                      {item.index}.
                    </span>
                    <h3 className="font-display text-sm font-semibold text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-1.5 pl-7 text-xs leading-relaxed text-zinc-400 sm:text-[13px]">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
