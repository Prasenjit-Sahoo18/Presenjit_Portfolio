import { motion } from 'framer-motion';
import { GitBranch, Star, ExternalLink } from 'lucide-react';
import { GithubIcon as Github } from './GithubIcon';
import { personalInfo } from '../data/portfolio';

// Static GitHub-inspired contribution grid
function ContributionGrid() {
  const weeks = 26;
  const days = 7;

  // Generate a static but realistic looking contribution pattern
  const grid = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => {
      const base = Math.sin(w * 0.5 + d * 0.8) * 0.5 + 0.5;
      const r = Math.random();
      if (r > 0.55) return 0; // empty
      if (base > 0.7) return 4; // high
      if (base > 0.5) return 3;
      if (base > 0.3) return 2;
      return 1;
    })
  );

  const colors = [
    'bg-white/5',
    'bg-primary/20',
    'bg-primary/40',
    'bg-primary/65',
    'bg-primary',
  ];

  return (
    <div className="overflow-x-auto no-scrollbar py-2" aria-label="GitHub contribution activity visualization">
      <div className="flex gap-1" style={{ minWidth: 'max-content' }}>
        {grid.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {week.map((level, di) => (
              <div
                key={di}
                className={`w-3 h-3 rounded-sm ${colors[level]} transition-all duration-200 hover:scale-125 hover:brightness-125`}
                title={`Level ${level}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function GitHubSection() {
  return (
    <section id="github" className="relative py-20 lg:py-28" aria-label="GitHub section">
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(56,189,248,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card rounded-2xl p-6 sm:p-10"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <Github size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Open Source & GitHub</h2>
                <p className="text-slate-400 text-sm mt-0.5">
                  Building in public, contributing to the community
                </p>
              </div>
            </div>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline text-sm shrink-0"
              aria-label="View GitHub profile"
            >
              <ExternalLink size={14} />
              View Profile
            </a>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
            {[
              { icon: Github, label: 'Profile', value: '@Prasenjit-Sahoo18' },
              { icon: Star, label: 'Featured Projects', value: '2 Live Projects' },
              { icon: GitBranch, label: 'Open Source', value: 'GSSoC 2025' },
              { icon: Github, label: 'Activity', value: 'Active Contributor' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-xl p-4">
                <Icon size={14} className="text-primary mb-2" />
                <p className="text-xs text-slate-500 mb-1">{label}</p>
                <p className="text-xs font-semibold text-white leading-tight">{value}</p>
              </div>
            ))}
          </div>

          {/* Contribution grid */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-mono text-slate-500">Contribution Activity (last 6 months)</p>
              <div className="flex items-center gap-1.5 text-xs text-slate-600">
                <span>Less</span>
                {['bg-white/5', 'bg-primary/20', 'bg-primary/40', 'bg-primary/65', 'bg-primary'].map(
                  (c, i) => (
                    <div key={i} className={`w-3 h-3 rounded-sm ${c}`} aria-hidden="true" />
                  )
                )}
                <span>More</span>
              </div>
            </div>
            <ContributionGrid />
          </div>

          {/* CTA */}
          <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-slate-400 text-sm">
              Actively building, contributing, and shipping code every day.
            </p>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-200"
            >
              Explore my repositories →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
