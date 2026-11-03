import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SKILL_GROUPS, type SkillGroup } from '../data/portfolio';
import { cn } from '../lib/utils';

type FilterId = 'all' | SkillGroup['id'];

const FILTER_TABS: Array<{ id: FilterId; label: string }> = [
  { id: 'all', label: 'All Domains' },
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'programming', label: 'Programming' },
  { id: 'database', label: 'Database' },
  { id: 'tools', label: 'Tools' },
];

export function Skills() {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<FilterId>('all');
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    context: string;
  }>({
    name: 'React.js',
    category: 'Frontend Development',
    context:
      'Used in Staff Profile Management System, Asthra2k24 Symposium, Inviot, and Honeycomb Technologies.',
  });

  const filteredGroups =
    activeFilter === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.id === activeFilter);

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
      id="skills"
      aria-labelledby="skills-heading"
      className="border-t border-zinc-900 bg-[#07070A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <motion.div
          {...revealProps}
          className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end"
        >
          <div>
            <p className="text-xs font-medium tracking-wide text-blue-400">
              02. Technical Capabilities
            </p>
            <h2
              id="skills-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]"
            >
              Technical Skills.
            </h2>
            <p className="mt-3 max-w-[62ch] text-sm leading-relaxed text-zinc-400 sm:text-[15px]">
              Core technologies explored through academic coursework, hands-on internships,
              and independent web development projects. Select any technology below to inspect
              its practical context.
            </p>
          </div>

          {/* Interactive Segmented Filter Controls */}
          <div
            role="tablist"
            aria-label="Filter technical skill categories"
            className="flex flex-wrap items-center gap-1 rounded-xl border border-zinc-800/80 bg-[#0D0D11] p-1"
          >
            {FILTER_TABS.map((tab) => {
              const isSelected = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setActiveFilter(tab.id)}
                  className={cn(
                    'min-h-[36px] rounded-lg px-3 py-1.5 text-xs cursor-pointer font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                    isSelected
                      ? 'bg-[#2563EB] text-white'
                      : 'text-zinc-400 hover:text-zinc-100'
                  )}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Active Skill Applied Context Bar */}
        <div
          aria-live="polite"
          className="mt-8 flex flex-col justify-between gap-2 rounded-xl border border-zinc-800/80 bg-[#0B0B0F] px-5 py-4 sm:flex-row sm:items-center"
        >
          <div className="flex flex-wrap items-baseline gap-2 text-sm">
            <span className="font-display font-semibold text-zinc-100">
              {selectedSkill.name}
            </span>
            <span aria-hidden="true" className="text-zinc-600">
              ·
            </span>
            <span className="text-xs text-blue-400">{selectedSkill.category}</span>
          </div>
          <p className="text-xs leading-relaxed text-zinc-300 sm:text-right sm:text-[13px]">
            {selectedSkill.context}
          </p>
        </div>

        {/* Categorized Skill Groups Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredGroups.map((group, index) => (
            <motion.div
              key={group.id}
              {...revealProps}
              className={cn(
                'flex flex-col justify-between rounded-2xl border border-zinc-800/80 bg-[#0B0B0E] p-6',
                activeFilter === 'all' && index === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              )}
            >
              <div>
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-display text-lg font-semibold tracking-tight text-zinc-100">
                    {group.category}
                  </h3>
                  <span className="font-mono text-xs tabular-nums text-zinc-500 shrink-0">
                    {String(group.skills.length).padStart(2, '0')} {group.skills.length === 1 ? 'tech' : 'techs'}
                  </span>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-zinc-400 sm:text-[13px]">
                  {group.summary}
                </p>
              </div>

              {/* Interactive Skill Controls */}
              <div className="mt-6 flex flex-wrap gap-2.5 border-t border-zinc-800/80 pt-5">
                {group.skills.map((skill) => {
                  const isActive = selectedSkill.name === skill.name;
                  return (
                    <button
                      key={skill.name}
                      type="button"
                      aria-pressed={isActive}
                      onClick={() =>
                        setSelectedSkill({
                          name: skill.name,
                          category: group.category,
                          context: skill.context,
                        })
                      }
                      className={cn(
                        'min-h-[40px] rounded-lg border px-4 py-2 text-sm font-medium whitespace-nowrap shrink-0 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
                        isActive
                          ? 'border-blue-500 bg-blue-500/15 text-zinc-50'
                          : 'border-zinc-800 bg-[#101015] text-zinc-200 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white'
                      )}
                    >
                      {skill.name}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
