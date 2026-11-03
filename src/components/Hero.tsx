import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolio';
import { PortfolioImage } from './PortfolioImage';

const MARQUEE_ITEMS = [
  'B.Tech Information Technology',
  'Software Development Enthusiast',
  'Concentrix · Google Process',
  'React.js & Next.js',
  'Node.js & Firebase',
  'Published Patent Application IN202641120639 A1',
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = (delay = 0) =>
    prefersReducedMotion
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          transition: {
            duration: 0.48,
            delay,
            ease: [0.16, 1, 0.3, 1] as const,
          },
        };

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-24 sm:pt-32"
    >
      {/* Subtle architectural radial ambience */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-1/2 -z-10 h-[520px] w-[960px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.13),transparent_68%)]"
      />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        {/* Split-Screen Hero */}
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Editorial Typographic Hierarchy */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <motion.p
                {...motionProps(0)}
                className="text-xs font-medium tracking-wide text-zinc-400"
              >
                <span>{PROFILE_DATA.location}</span>
                <span aria-hidden="true" className="mx-2 text-zinc-600">
                  ·
                </span>
                <span>
                  {PROFILE_DATA.currentEmployer} ({PROFILE_DATA.currentProcess})
                </span>
                <span aria-hidden="true" className="mx-2 text-zinc-600">
                  ·
                </span>
                <span>Class of 2025</span>
              </motion.p>

              <motion.h1
                id="hero-heading"
                {...motionProps(0.05)}
                className="mt-5 font-display text-[clamp(2.35rem,4.5vw,4.15rem)] leading-[1.06] font-bold tracking-tight text-zinc-50 [text-wrap:balance]"
              >
                {PROFILE_DATA.heroHeading}
              </motion.h1>

              <motion.p
                {...motionProps(0.1)}
                className="mt-4 font-display text-lg font-medium tracking-tight text-blue-400 sm:text-xl [text-wrap:balance]"
              >
                IT Graduate <span aria-hidden="true" className="mx-1.5 text-zinc-600">|</span>{' '}
                Software Development Enthusiast{' '}
                <span aria-hidden="true" className="mx-1.5 text-zinc-600">|</span> Content
                Moderator
              </motion.p>

              <motion.p
                {...motionProps(0.15)}
                className="mt-6 max-w-[64ch] text-[15px] lg:text-justify leading-[1.75]  text-zinc-300 tracking-[0.01em] sm:text-base"
              >
                {PROFILE_DATA.heroIntro}
              </motion.p>
            </div>

            <motion.div {...motionProps(0.2)} className="mt-9 pt-2">
              {/* Primary & Secondary CTAs */}
              <div className="flex flex-wrap items-center gap-3.5">
                <a
                  href="#projects"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  <span>Explore My Work</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={PROFILE_DATA.resumePath}
                  download={PROFILE_DATA.resumeFileName}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-800 bg-[#0D0D10] px-5 py-2.5 text-sm font-medium text-zinc-100 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-700 hover:bg-zinc-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  <Download className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Verified Social Links */}
              <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-zinc-800/80 pt-6 text-sm text-zinc-400">
                <a
                  href={PROFILE_DATA.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Niranjan Kumar A on GitHub"
                  className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-100 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                >
                  <Github className="h-4 w-4" aria-hidden="true" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PROFILE_DATA.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Niranjan Kumar A on LinkedIn"
                  className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-100 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                >
                  <Linkedin className="h-4 w-4" aria-hidden="true" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  aria-label="Send email to Niranjan Kumar A"
                  className="inline-flex min-h-[40px] items-center gap-2 whitespace-nowrap shrink-0 transition-colors duration-150 hover:text-zinc-100 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Email</span>
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Architectural Visual Frame */}
          
<motion.div
  {...motionProps(0.12)}
  className="relative flex items-center justify-center lg:col-span-5"
>
  <div className="relative mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-zinc-800/80 bg-[#0A0A0D] aspect-[4/5] sm:aspect-[5/6] lg:aspect-[4/5]">

    <PortfolioImage
      src="/PHOTO.jpg"
      alt={PROFILE_DATA.heroImageAlt}
      fallbackTitle="Niranjan Kumar A — Portfolio"
      priority
      className="absolute inset-0 h-full w-full"
      imgClassName="h-full w-full object-cover object-center transition-transform duration-500 hover:scale-[1.02]"
    />

    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent"
    />

    <div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-4">
      <div>
        <p className="font-display text-sm font-semibold text-zinc-100">
          {PROFILE_DATA.name}
        </p>
        <p className="mt-0.5 text-xs text-zinc-300">
          B.Tech Information Technology · MSEC Chennai
        </p>
      </div>

      <span className="font-mono text-xs tabular-nums text-zinc-400 shrink-0">
        2021 – 2025
      </span>
    </div>
  </div>
</motion.div>

        </div>

        {/* Full-Width Factual Profile Strip Below Split */}
        <div className="mt-14 grid grid-cols-1 gap-6 border-y border-zinc-800/80 py-7 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PROFILE_DATA.heroPillars.map((pillar) => (
            <div key={pillar.label} className="flex flex-col">
              <span className="text-xs font-medium text-zinc-500">{pillar.label}</span>
              <span className="mt-1.5 font-display text-sm font-semibold text-zinc-100 sm:text-[15px]">
                {pillar.value}
              </span>
              <span className="mt-1 font-mono text-xs tabular-nums text-zinc-400">
                {pillar.meta}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Subtle Editorial Marquee Divider */}
      <div
        aria-hidden="true"
        className="mt-12 overflow-hidden border-b border-zinc-900 bg-[#070709] py-3.5"
      >
        <div className="animate-editorial-marquee flex w-max items-center gap-8 text-xs tracking-wide text-zinc-500">
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, idx) => (
            <span key={`${item}-${idx}`} className="flex items-center gap-8 whitespace-nowrap">
              <span>{item}</span>
              <span className="text-zinc-700">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
