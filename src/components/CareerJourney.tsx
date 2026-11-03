import { motion, useReducedMotion } from 'motion/react';
import { CAREER_JOURNEY } from '../data/portfolio';

export function CareerJourney() {
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
      id="journey"
      aria-labelledby="journey-heading"
      className="border-t border-zinc-900 py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div {...revealProps}>
          <p className="text-xs font-medium tracking-wide text-blue-400">
            05. Chronological Progression
          </p>
          <h2
            id="journey-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]"
          >
            Every Step Builds the Journey.
          </h2>
          <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            From foundational undergraduate engineering studies in Chennai to hands-on software
            internships and beginning a corporate career in Bengaluru.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CAREER_JOURNEY.map((step, index) => (
            <motion.div
              key={`${step.year}-${step.title}`}
              {...revealProps}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#0B0B0E] p-6 transition-colors duration-150 hover:border-zinc-700"
            >
              <div>
                <div className="flex items-baseline justify-between gap-4 border-b border-zinc-800/80 pb-3">
                  <span className="font-mono text-sm font-medium tabular-nums text-blue-400">
                    {step.year}
                  </span>
                  <span className="font-mono text-xs tabular-nums text-zinc-600">
                    Step 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-zinc-100">
                  {step.title}
                </h3>

                <p className="mt-2.5 text-xs leading-[1.7] text-zinc-400 sm:text-[13px]">
                  {step.summary}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
