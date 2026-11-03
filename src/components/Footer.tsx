import { PROFILE_DATA } from '../data/portfolio';

const FOOTER_LINKS = [
  { label: 'Home', href: '' },
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Projects', href: 'projects' },
  { label: 'Experience', href: 'experience' },
  { label: 'Achievements', href: 'achievements' },
  { label: 'Contact', href: 'contact' },
];

export function Footer() {
  return (
    <footer className="border-t border-zinc-900 bg-[#050505] py-12">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <a
              href=""
              className="font-display text-lg font-bold tracking-tight text-zinc-100 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              {PROFILE_DATA.name}
            </a>
            <p className="mt-1 text-xs text-zinc-400">
              IT Graduate · Software Development Enthusiast · Content Moderator at Concentrix
              (Google Process)
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-zinc-400">
            {FOOTER_LINKS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="py-1 whitespace-nowrap transition-colors duration-150 hover:text-zinc-100 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-zinc-900 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} {PROFILE_DATA.name}. All rights reserved.
          </p>
          <p>Bengaluru, Karnataka, India</p>
        </div>
      </div>
    </footer>
  );
}
