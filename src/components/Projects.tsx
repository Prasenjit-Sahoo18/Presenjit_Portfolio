import { motion } from 'framer-motion';
import { ExternalLink, Play, Star } from 'lucide-react';
import { GithubIcon as Github } from './GithubIcon';
import { projects } from '../data/portfolio';

// Abstract visual compositions for each project
function ShowPulseVisual() {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden select-none" aria-hidden="true">
      {/* Background pattern */}
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 60% 40%, rgba(56,189,248,0.12) 0%, transparent 60%)' }} />

      {/* Cinema screen */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-32 h-20 rounded-lg border border-primary/30 bg-primary/5 flex items-center justify-center">
        <div className="w-24 h-14 rounded border border-primary/20 bg-primary/5 flex items-center justify-center">
          <Play size={20} className="text-primary/60" fill="currentColor" />
        </div>
      </div>

      {/* Seat rows */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 space-y-1.5">
        {[5, 7, 7, 5].map((count, row) => (
          <div key={row} className="flex gap-1 justify-center">
            {Array.from({ length: count }).map((_, i) => {
              const isBooked = (row === 1 && i === 2) || (row === 1 && i === 3) || (row === 2 && i === 4);
              const isSelected = (row === 0 && i === 2);
              return (
                <div
                  key={i}
                  className={`w-5 h-4 rounded-t-md text-xs border ${
                    isBooked
                      ? 'bg-red-500/30 border-red-500/40'
                      : isSelected
                      ? 'bg-primary/50 border-primary/60 shadow-glow-sm'
                      : 'bg-primary/10 border-primary/20'
                  }`}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Movie cards floating */}
      <div className="absolute left-2 top-1/2 -translate-y-1/2 w-14 h-20 rounded-lg bg-navy-light border border-primary/20 flex flex-col overflow-hidden">
        <div className="flex-1 bg-gradient-to-b from-primary/30 to-transparent" />
        <div className="p-1">
          <div className="h-1.5 w-8 bg-white/20 rounded mb-1" />
          <div className="h-1 w-5 bg-primary/30 rounded" />
        </div>
      </div>
      <div className="absolute right-2 top-1/2 -translate-y-1/2 w-14 h-20 rounded-lg bg-navy-light border border-primary/20 flex flex-col overflow-hidden">
        <div className="flex-1 bg-gradient-to-b from-accent/30 to-transparent" />
        <div className="p-1">
          <div className="h-1.5 w-8 bg-white/20 rounded mb-1" />
          <div className="h-1 w-5 bg-accent/30 rounded" />
        </div>
      </div>

      {/* QR ticket */}
      <div className="absolute bottom-2 right-4 w-12 h-12 border border-primary/30 bg-navy rounded p-1 grid grid-cols-3 gap-px">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`rounded-sm ${Math.random() > 0.4 ? 'bg-primary/40' : 'bg-transparent'}`} />
        ))}
      </div>
    </div>
  );
}

function CodeBuzzVisual() {
  const codeLines = [
    { text: 'def solve(n):', color: 'text-blue-400' },
    { text: '  dp = [0] * (n+1)', color: 'text-white/70' },
    { text: '  for i in range(1, n+1):', color: 'text-blue-400' },
    { text: '    dp[i] = dp[i-1] + 1', color: 'text-green-400' },
    { text: '  return dp[n]', color: 'text-accent' },
  ];

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0"
        style={{ background: 'radial-gradient(circle at 40% 60%, rgba(103,232,249,0.08) 0%, transparent 60%)' }} />

      {/* Code editor */}
      <div className="absolute inset-4 rounded-xl border border-accent/20 bg-navy/80 flex flex-col overflow-hidden">
        {/* Editor header */}
        <div className="flex items-center gap-1.5 px-3 py-2 border-b border-white/5 bg-navy">
          <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-400/60" />
          <span className="ml-2 text-xs text-slate-500 font-mono">solution.py</span>
        </div>

        {/* Code lines */}
        <div className="flex-1 p-3 font-mono text-xs space-y-1 overflow-hidden">
          {codeLines.map((line, i) => (
            <div key={i} className={`${line.color} flex items-center gap-2`}>
              <span className="text-slate-600 w-3 text-right shrink-0">{i + 1}</span>
              <span>{line.text}</span>
            </div>
          ))}
        </div>

        {/* AI assistant panel */}
        <div className="border-t border-white/5 px-3 py-2 bg-accent/5">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 rounded-full bg-accent/30 flex items-center justify-center">
              <span className="text-[8px] text-accent font-bold">AI</span>
            </div>
            <div className="flex-1 h-1.5 bg-accent/20 rounded-full overflow-hidden">
              <div className="h-full w-2/3 bg-accent/50 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Proctoring camera indicator */}
      <div className="absolute top-6 right-6 w-8 h-6 rounded border border-accent/30 bg-navy flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-accent/40" />
      </div>
      <div className="absolute top-7 right-5 w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />

      {/* Stars/rank */}
      <div className="absolute bottom-6 left-6 flex gap-0.5">
        {[1, 2, 3].map((s) => (
          <Star key={s} size={8} className="text-yellow-400 fill-current" />
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 lg:py-32" aria-label="Projects section">
      <div
        className="absolute left-0 top-1/3 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.05) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-number mb-2">// 03 — PROJECTS</p>
          <h2 className="section-title gradient-text-white">Featured Work</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
          <p className="text-slate-400 mt-4 max-w-xl">
            Production-grade applications built with modern technologies and shipped to the web.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`project-glow glass-card rounded-2xl overflow-hidden ${
                project.featured ? 'ring-1 ring-primary/20' : ''
              }`}
              aria-label={`${project.title} project`}
            >
              {project.featured && (
                <div className="px-6 pt-4 flex items-center gap-2">
                  <Star size={12} className="text-primary" fill="currentColor" />
                  <span className="text-xs font-mono text-primary/70 tracking-widest">FEATURED PROJECT</span>
                </div>
              )}

              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Visual */}
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  transition={{ duration: 0.3 }}
                  className={`relative h-56 sm:h-72 lg:h-auto min-h-[280px] bg-navy/60 border-r border-primary/10 ${
                    index % 2 === 1 ? 'lg:order-2' : ''
                  }`}
                >
                  {project.theme === 'cinema' ? <ShowPulseVisual /> : <CodeBuzzVisual />}
                  {/* Project number */}
                  <div className="absolute top-4 left-4 font-mono text-5xl font-bold text-primary/5 select-none">
                    {String(project.id).padStart(2, '0')}
                  </div>
                </motion.div>

                {/* Info */}
                <div className={`p-6 sm:p-8 flex flex-col ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-white">{project.title}</h3>
                      <p className="text-primary text-sm font-mono mt-0.5">{project.subtitle}</p>
                    </div>
                    <div className="flex gap-2 shrink-0">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} GitHub repository`}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 border border-white/10 hover:text-primary hover:border-primary/40 transition-all duration-200"
                      >
                        <Github size={14} />
                      </a>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${project.title} live demo`}
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 border border-white/10 hover:text-primary hover:border-primary/40 transition-all duration-200"
                      >
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>

                  <p className="text-slate-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Key features */}
                  <div className="mb-5">
                    <p className="text-xs font-mono text-primary/50 mb-2">Key Features</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                      {project.features.slice(0, 6).map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-slate-400">
                          <div className="w-1 h-1 rounded-full bg-primary shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.techStack.slice(0, 8).map((tech) => (
                      <span key={tech} className="tag text-[10px]">{tech}</span>
                    ))}
                    {project.techStack.length > 8 && (
                      <span className="tag text-[10px]">+{project.techStack.length - 8} more</span>
                    )}
                  </div>

                  {/* CTA buttons */}
                  <div className="flex gap-3 mt-auto">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-xs px-4 py-2"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline text-xs px-4 py-2"
                    >
                      <Github size={13} />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* GitHub more */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="https://github.com/Prasenjit-Sahoo18"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline text-sm"
          >
            <Github size={15} />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
