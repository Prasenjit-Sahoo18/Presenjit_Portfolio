import { Mail, Heart } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './GithubIcon';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 py-10" aria-label="Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / tagline */}
          <div className="text-center sm:text-left">
            <div className="flex items-center gap-2 justify-center sm:justify-start mb-1">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span className="text-deep font-bold text-xs font-mono">PS</span>
              </div>
              <span className="font-semibold text-white">Prasenjit Sahoo</span>
            </div>
            <p className="font-mono text-xs text-primary/60">Building. Learning. Shipping.</p>
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3" role="list" aria-label="Social links">
            {[
              { href: personalInfo.github, icon: Github, label: 'GitHub' },
              { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 border border-white/10 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-slate-600 flex items-center gap-1">
            © {year} Prasenjit Sahoo. Made with{' '}
            <Heart size={10} className="text-primary/60 fill-current" aria-label="love" />
          </p>
        </div>
      </div>
    </footer>
  );
}
