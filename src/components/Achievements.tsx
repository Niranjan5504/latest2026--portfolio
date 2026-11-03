import { motion, useReducedMotion } from 'motion/react';
import { FileCheck2 } from 'lucide-react';
import { ACHIEVEMENTS_LIST, PATENT_PUBLICATION } from '../data/portfolio';

export function Achievements() {
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
      id="achievements"
      aria-labelledby="achievements-heading"
      className="border-t border-zinc-900 bg-[#07070A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div {...revealProps}>
          <p className="text-xs font-medium tracking-wide text-blue-400">
            06. Recognition &amp; Credentials
          </p>
          <h2
            id="achievements-heading"
            className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]"
          >
            Achievements &amp; Certifications.
          </h2>
          <p className="mt-3 max-w-[64ch] text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
            Published intellectual property filing, academic coursework certifications,
            conference participation, and technical workshops.
          </p>
        </motion.div>

        {/* Dedicated Published Patent Application Spotlight */}
        <motion.div
          {...revealProps}
          className="mt-12 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-[#0C1222] via-[#0B0B10] to-[#09090D] p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-2 text-xs font-medium text-blue-400">
                <FileCheck2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{PATENT_PUBLICATION.status}</span>
              </div>

              <h3 className="mt-3 font-display text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
                {PATENT_PUBLICATION.title}
              </h3>

              <p className="mt-3 max-w-[60ch] text-sm leading-relaxed text-zinc-300">
                {PATENT_PUBLICATION.attribution} {PATENT_PUBLICATION.disclaimer}
              </p>
            </div>

            <div className="flex flex-col justify-between gap-4 border-t border-zinc-800/80 pt-5 lg:col-span-5 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-8">
              <div>
                <span className="block text-xs text-zinc-400">
                  Indian Patent Application Publication No.
                </span>
                <p className="mt-1 font-mono text-lg font-semibold tabular-nums text-zinc-50">
                  {PATENT_PUBLICATION.publicationNumber}
                </p>
              </div>

              <div>
                <span className="block text-xs text-zinc-400">Publication Date</span>
                <p className="mt-1 font-mono text-sm tabular-nums text-zinc-200">
                  {PATENT_PUBLICATION.publicationDate}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certifications, Conference & Workshops List */}
        <motion.div
          {...revealProps}
          className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {ACHIEVEMENTS_LIST.map((item) => (
            <article
              key={item.id}
              className="flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#0B0B0E] p-6 transition-colors duration-150 hover:border-zinc-700"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs text-zinc-400">
                  <span className="font-mono tabular-nums text-blue-400">
                    {item.index}.
                  </span>
                  <span>
                    {item.category} · {item.yearOrContext}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-base font-semibold leading-snug text-zinc-100 sm:text-lg">
                  {item.title}
                </h3>

                <p className="mt-2.5 text-xs leading-relaxed text-zinc-400 sm:text-[13px]">
                  {item.detail}
                </p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
