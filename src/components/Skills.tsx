import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillCategories } from '../data/portfolio';

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].id);

  const active = skillCategories.find((c) => c.id === activeCategory) ?? skillCategories[0];

  return (
    <section id="skills" className="relative py-24 lg:py-32" aria-label="Skills section">
      {/* Subtle radial */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
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
          <p className="section-number mb-2">// 02 — SKILLS</p>
          <h2 className="section-title gradient-text-white">Technology Stack</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
          <p className="text-slate-400 mt-4 max-w-xl">
            A carefully curated set of tools and technologies I use to build
            production-grade applications.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Category sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-row lg:flex-col gap-2 overflow-x-auto no-scrollbar pb-2 lg:pb-0"
            role="tablist"
            aria-label="Skill categories"
          >
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                role="tab"
                aria-selected={activeCategory === cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-250 whitespace-nowrap shrink-0 lg:shrink text-left w-full ${
                  activeCategory === cat.id
                    ? 'bg-primary/15 border border-primary/30 text-primary shadow-glow-sm'
                    : 'text-slate-400 border border-transparent hover:text-white hover:bg-white/5'
                }`}
              >
                <span className="font-mono text-xs text-primary/50">{cat.id}</span>
                <span>{cat.label}</span>
                <span className="ml-auto font-mono text-xs text-slate-600">{cat.skills.length}</span>
              </button>
            ))}
          </motion.div>

          {/* Skills grid */}
          <div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                role="tabpanel"
                aria-label={`${active.label} skills`}
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {active.skills.map((skill, i) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.07 }}
                      whileHover={{ scale: 1.05, y: -4 }}
                      className="glass-card rounded-xl p-4 flex flex-col items-center gap-3 cursor-default group"
                    >
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-xl group-hover:border-primary/40 group-hover:bg-primary/15 group-hover:shadow-glow-sm transition-all duration-250">
                        {skill.icon.length <= 2 ? (
                          <span className="font-mono font-bold text-primary text-sm">{skill.icon}</span>
                        ) : (
                          <span>{skill.icon}</span>
                        )}
                      </div>
                      {/* Name */}
                      <span className="text-xs font-medium text-slate-300 text-center leading-tight group-hover:text-white transition-colors duration-200">
                        {skill.name}
                      </span>
                      {/* Hover accent */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{ background: 'radial-gradient(circle at center, rgba(56,189,248,0.03) 0%, transparent 70%)' }}
                        aria-hidden="true"
                      />
                    </motion.div>
                  ))}
                </div>

                {/* Decorative connection line */}
                <div className="mt-8 flex items-center gap-3" aria-hidden="true">
                  <div className="h-px flex-1 bg-gradient-to-r from-primary/20 to-transparent" />
                  <span className="font-mono text-xs text-primary/30">
                    {active.id} — {active.label.toUpperCase()}
                  </span>
                  <div className="h-px flex-1 bg-gradient-to-l from-primary/20 to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* All skills marquee strip */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 overflow-hidden"
          aria-hidden="true"
        >
          <div className="flex gap-3 animate-marquee whitespace-nowrap">
            {[...skillCategories.flatMap((c) => c.skills), ...skillCategories.flatMap((c) => c.skills)].map(
              (skill, i) => (
                <span
                  key={`${skill.name}-${i}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/10 bg-primary/5 text-slate-500 text-xs font-mono shrink-0"
                >
                  {skill.name}
                </span>
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
