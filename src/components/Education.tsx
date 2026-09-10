import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education } from '../data/portfolio';

export default function Education() {
  return (
    <section id="education" className="relative py-16 lg:py-24" aria-label="Education section">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <p className="section-number mb-2">// 06 — EDUCATION</p>
          <h2 className="text-2xl font-bold gradient-text-white">Education</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        {education.map((edu, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-2xl p-6 sm:p-8 max-w-2xl"
          >
            <div className="flex items-start gap-5">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <GraduationCap size={24} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-lg">{edu.degree}</h3>
                <p className="text-primary font-medium text-sm mt-0.5">{edu.institution}</p>

                <div className="flex flex-wrap gap-4 mt-3">
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <MapPin size={12} className="text-primary/60" />
                    {edu.location}
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-slate-400">
                    <Calendar size={12} className="text-primary/60" />
                    {edu.period}
                  </div>
                </div>

                <div className="mt-3">
                  <span className="tag text-[10px]">{edu.status}</span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
