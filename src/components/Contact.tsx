import { useState, type FormEvent } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Globe,
  Linkedin,
  Mail,
  Send,
} from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolio';

export function Contact() {
  const prefersReducedMotion = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [senderName, setSenderName] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE_DATA.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = PROFILE_DATA.email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2600);
    }
  };

  const handleComposeSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanSubject =
      subject.trim() ||
      `Portfolio Inquiry${senderName.trim() ? ` from ${senderName.trim()}` : ''}`;
    const bodyLines = [
      senderName.trim() ? `From: ${senderName.trim()}` : '',
      message.trim(),
    ]
      .filter(Boolean)
      .join('\n\n');

    const mailtoHref = `mailto:${PROFILE_DATA.email}?subject=${encodeURIComponent(
      cleanSubject
    )}&body=${encodeURIComponent(bodyLines)}`;

    window.location.href = mailtoHref;
  };

  const revealProps = prefersReducedMotion
    ? {}
    : {
        initial: { opacity: 0, y: 18 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, margin: '-60px' },
        transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] as const },
      };
const handleWhatsAppSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const phoneNumber = "919363389485"; // Replace with your WhatsApp number

  const whatsappMessage = `Hello Niranjan!

Name / Organization: ${senderName}
Subject: ${subject}

Message:
${message}`;

  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
};
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="border-t border-zinc-900 bg-[#07070A] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left Column: Direct Contact & Verified Profiles */}
          <motion.div {...revealProps} className="lg:col-span-6">
            <p className="text-xs font-medium tracking-wide text-blue-400">
              08. Direct Contact
            </p>
            <h2
              id="contact-heading"
              className="mt-2 font-display text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl [text-wrap:balance]"
            >
              Let&apos;s Connect.
            </h2>
            <p className="mt-4 max-w-[54ch] text-sm leading-[1.75] text-zinc-300 sm:text-[15px]">
              Have an opportunity, project idea, or professional discussion in mind? Feel free
              to reach out.
            </p>

            {/* Primary Email Actions */}
            <div className="mt-8 rounded-2xl border border-zinc-800/80 bg-[#0B0B0F] p-6">
              <span className="text-xs text-zinc-400">Direct Email Address</span>
              <p className="mt-1.5 font-mono text-sm font-medium break-all text-zinc-100 sm:text-base">
                {PROFILE_DATA.email}
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${PROFILE_DATA.email}`}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#2563EB] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 transition-colors duration-150 hover:bg-[#1D4ED8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  <Mail className="h-4 w-4" aria-hidden="true" />
                  <span>Email Me</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyEmail}
                  aria-label="Copy email address to clipboard"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/70 px-4 py-2.5 text-sm font-medium text-zinc-200 whitespace-nowrap shrink-0 transition-colors duration-150 hover:border-zinc-700 hover:bg-zinc-900 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                >
                  {copied ? (
                    <>
                      <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                      <span>Email Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>

              <p aria-live="polite" className="sr-only">
                {copied ? 'Email address copied to clipboard.' : ''}
              </p>
            </div>

            {/* Verified External Profiles */}
            <div className="mt-8 divide-y divide-zinc-800/80 border-y border-zinc-800/80">
              <a
                href={PROFILE_DATA.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[56px] items-center justify-between gap-4 py-3.5 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <div className="flex items-center gap-3">
                  <Github className="h-4 w-4 text-zinc-400 group-hover:text-blue-400" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-zinc-100">GitHub</span>
                    <span className="block font-mono text-xs text-zinc-400">
                      github.com/Niranjan5504
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-zinc-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400 shrink-0"
                  aria-hidden="true"
                />
              </a>

              <a
                href={PROFILE_DATA.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[56px] items-center justify-between gap-4 py-3.5 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <div className="flex items-center gap-3">
                  <Linkedin className="h-4 w-4 text-zinc-400 group-hover:text-blue-400" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-zinc-100">LinkedIn</span>
                    <span className="block font-mono text-xs text-zinc-400">
                      linkedin.com/in/niranjan-kumar-a-769696276
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-zinc-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400 shrink-0"
                  aria-hidden="true"
                />
              </a>

              <a
                href={PROFILE_DATA.existingPortfolioUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex min-h-[56px] items-center justify-between gap-4 py-3.5 transition-colors duration-150 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
              >
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-zinc-400 group-hover:text-blue-400" aria-hidden="true" />
                  <div>
                    <span className="block text-sm font-medium text-zinc-100">
                      Web Portfolio Archive
                    </span>
                    <span className="block font-mono text-xs text-zinc-400">
                      niranjan55.netlify.app
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  className="h-4 w-4 text-zinc-500 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400 shrink-0"
                  aria-hidden="true"
                />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Client-Side Direct Email Composer */}
          
<motion.div {...revealProps} className="lg:col-span-6">
  <form
    onSubmit={handleWhatsAppSubmit}
    className="rounded-2xl border border-zinc-800/80 bg-[#0B0B0F] p-6 sm:p-8"
  >
    <h3 className="font-display text-lg font-semibold text-zinc-100">
      Connect on WhatsApp
    </h3>

    <p className="mt-1 text-xs leading-relaxed text-zinc-400">
      Send me a message directly through WhatsApp. I'll be happy to connect with you.
    </p>

    <div className="mt-6 space-y-4">
      <div>
        <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-300">
          Your Name or Organization
        </label>
        <input
          id="contact-name"
          type="text"
          required
          value={senderName}
          onChange={(e) => setSenderName(e.target.value)}
          placeholder="e.g., Hiring Team at Acme Tech"
          className="mt-1.5 min-h-[44px] w-full rounded-lg border border-zinc-800 bg-[#07070A] px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-subject" className="block text-xs font-medium text-zinc-300">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="Job Opportunity / Project Discussion"
          className="mt-1.5 min-h-[44px] w-full rounded-lg border border-zinc-800 bg-[#07070A] px-3.5 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <div>
        <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-300">
          Message
        </label>
        <textarea
          id="contact-message"
          rows={4}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hello Niranjan, I would love to connect with you regarding..."
          className="mt-1.5 w-full rounded-lg border border-zinc-800 bg-[#07070A] px-3.5 py-2.5 text-sm leading-relaxed text-zinc-100 placeholder:text-zinc-600 focus:border-blue-500 focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex min-h-[44px] cursor-pointer w-full items-center justify-center gap-2 rounded-lg bg-[#16A34A] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-150 hover:bg-[#15803D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
      >
        <MessageCircle className="h-4 w-4" aria-hidden="true" />
        <span>Send via WhatsApp</span>
      </button>
    </div>
  </form>
</motion.div>

        </div>
      </div>
    </section>
  );
}
