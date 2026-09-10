import { motion } from 'framer-motion';
import { Briefcase, CheckCircle, Tag } from 'lucide-react';
import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 lg:py-32" aria-label="Experience section">
      <div className="absolute inset-0 grid-bg opacity-20" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-number mb-2">// 04 — EXPERIENCE</p>
          <h2 className="section-title gradient-text-white">Training & Experience</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical timeline line */}
          <div
            className="absolute left-4 md:left-8 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #38BDF8, rgba(56,189,248,0.1))' }}
            aria-hidden="true"
          />

          {experience.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative pl-12 md:pl-20 pb-12 last:pb-0"
            >
              {/* Timeline node */}
              <div
                className="absolute left-2.5 md:left-6 top-1 w-4 h-4 rounded-full border-2 border-primary bg-deep shadow-glow-sm"
                aria-hidden="true"
              />

              {/* Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-8">
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <Briefcase size={15} className="text-primary" />
                      <span className="text-xs font-mono text-primary/70 uppercase tracking-widest">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{exp.company}</h3>
                    <p className="text-primary text-sm font-medium mt-0.5">{exp.role}</p>
                    <p className="text-slate-500 text-xs mt-1">{exp.program}</p>
                  </div>
                  <div className="glass px-3 py-1.5 rounded-lg">
                    <p className="font-mono text-xs text-primary/70">{exp.period}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6">{exp.description}</p>

                {/* Highlights */}
                <div className="mb-6">
                  <p className="text-xs font-mono text-primary/50 mb-3">// Highlights</p>
                  <ul className="space-y-2">
                    {exp.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-400">
                        <CheckCircle size={13} className="text-primary mt-0.5 shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Tag size={12} className="text-primary/50" />
                    <p className="text-xs font-mono text-primary/50">Technologies</p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tag text-[10px]">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extracurriculars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-20"
        >
          <p className="section-number mb-2">// 04b — ACTIVITIES</p>
          <h3 className="text-2xl font-bold text-white mb-8">Extracurricular Activities</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                icon: '💡',
                role: 'Technical Core Member',
                org: 'Innovation and Entrepreneurship Cell (IEC), ITER',
                desc: 'Active technical member driving innovation, organizing tech events, and mentoring peers in development.',
              },
              {
                icon: '🌍',
                role: 'Open Source Contributor',
                org: 'GirlScript Summer of Code 2025',
                desc: 'Contributing to meaningful open source projects as part of GirlScript Summer of Code 2025.',
              },
              {
                icon: '⚡',
                role: 'Active Participant',
                org: 'Hackathons, Ideathons & Technical Events',
                desc: 'Regular participant in competitive hackathons, ideathons, and technical events across institutions.',
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-5"
              >
                <div className="text-2xl mb-3">{item.icon}</div>
                <h4 className="font-semibold text-white text-sm">{item.role}</h4>
                <p className="text-primary text-xs font-mono mt-1 mb-2">{item.org}</p>
                <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
