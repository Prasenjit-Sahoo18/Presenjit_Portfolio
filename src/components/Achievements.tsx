import { motion } from 'framer-motion';
import { achievements } from '../data/portfolio';

const medalColors: Record<string, string> = {
  '1st Runner-Up': 'from-slate-300 to-slate-500',
  '6th Rank': 'from-primary to-secondary',
};

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 lg:py-32" aria-label="Achievements section">
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 100%, rgba(56,189,248,0.05) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="section-number mb-2 justify-center flex">// 05 — ACHIEVEMENTS</p>
          <h2 className="section-title gradient-text-white">Hackathon Highlights</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary to-transparent mx-auto" />
          <p className="text-slate-400 mt-4 max-w-xl mx-auto text-sm">
            Competitive performance across national-level hackathons and ideathons.
          </p>
        </motion.div>

        {/* Achievement cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, index) => (
            <motion.article
              key={ach.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 relative overflow-hidden group"
              aria-label={`${ach.rank} at ${ach.event}`}
            >
              {/* Background glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at 50% 0%, rgba(56,189,248,0.08) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />

              {/* Medal icon */}
              <div className="mb-5 relative">
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${
                    medalColors[ach.rank] ?? 'from-primary to-secondary'
                  } flex items-center justify-center shadow-glow-sm text-2xl`}
                >
                  {ach.icon}
                </div>
                {/* Number indicator */}
                <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-deep border border-primary/30 flex items-center justify-center">
                  <span className="font-mono text-[9px] text-primary">{String(index + 1).padStart(2, '0')}</span>
                </div>
              </div>

              {/* Rank */}
              <div
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold mb-3 bg-gradient-to-r ${
                  medalColors[ach.rank] ?? 'from-primary to-secondary'
                } text-deep`}
              >
                {ach.rank}
              </div>

              {/* Event */}
              <h3 className="font-bold text-white text-lg leading-tight mb-2">{ach.event}</h3>

              {/* Description */}
              <p className="text-slate-500 text-xs leading-relaxed">{ach.description}</p>

              {/* Badge */}
              {ach.badge && (
                <div className="mt-4 pt-4 border-t border-primary/10">
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-medium">
                    🎯 {ach.badge}
                  </span>
                </div>
              )}

              {/* Decorative corner */}
              <div
                className="absolute top-0 right-0 w-16 h-16 opacity-10 group-hover:opacity-20 transition-opacity"
                style={{
                  background: 'radial-gradient(circle, rgba(56,189,248,0.8) 0%, transparent 70%)',
                }}
                aria-hidden="true"
              />
            </motion.article>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <p className="section-number mb-2">// 05b — CERTIFICATIONS</p>
          <h3 className="text-2xl font-bold text-white mb-8">Certifications</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              {
                title: 'OCI Foundations Associate',
                issuer: 'Oracle',
                fullName: 'Oracle Cloud Infrastructure Foundations Associate',
                color: '#F80000',
                abbr: 'OCI',
              },
              {
                title: 'Cybersecurity Essentials',
                issuer: 'Cisco',
                fullName: 'Cisco Cybersecurity Essentials',
                color: '#1BA0D7',
                abbr: 'CISCO',
              },
              {
                title: 'Cloud Practitioner',
                issuer: 'AWS',
                fullName: 'AWS Certified Cloud Practitioner',
                color: '#FF9900',
                abbr: 'AWS',
              },
            ].map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="glass-card rounded-xl p-5 flex items-start gap-4"
              >
                {/* Issuer badge */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-xs text-white"
                  style={{ background: `${cert.color}20`, border: `1px solid ${cert.color}40` }}
                >
                  <span style={{ color: cert.color }} className="font-mono text-[10px] font-bold">
                    {cert.abbr}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white text-sm">{cert.title}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{cert.issuer}</p>
                  <p className="text-slate-600 text-[10px] mt-1 leading-tight">{cert.fullName}</p>
                  {/* Verified indicator */}
                  <div className="flex items-center gap-1 mt-2">
                    <div
                      className="w-3 h-3 rounded-full flex items-center justify-center"
                      style={{ background: `${cert.color}30` }}
                    >
                      <span style={{ color: cert.color }} className="text-[8px]">✓</span>
                    </div>
                    <span className="text-[10px] font-mono" style={{ color: cert.color }}>Certified</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
