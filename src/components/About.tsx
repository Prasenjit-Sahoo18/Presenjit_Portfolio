import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Star, Code2, Cpu, Globe, Layers } from 'lucide-react';
import { education, personalInfo } from '../data/portfolio';

const snapshots = [
  { icon: GraduationCap, label: 'Degree', value: 'B.Tech CSE' },
  { icon: MapPin, label: 'University', value: "Siksha 'O' Anusandhan (ITER)" },
  { icon: Calendar, label: 'Graduation', value: '2027' },
  { icon: Star, label: 'Year', value: '3rd Year' },
];

const interests = [
  { icon: Globe, label: 'Web Development' },
  { icon: Cpu, label: 'Artificial Intelligence' },
  { icon: Layers, label: 'Backend Engineering' },
  { icon: Code2, label: 'Problem Solving' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 lg:py-32" aria-label="About section">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="section-number mb-2">// 01 — ABOUT</p>
          <h2 className="section-title gradient-text-white">About Me</h2>
          <div className="mt-3 h-px w-16 bg-gradient-to-r from-primary to-transparent" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left — Introduction */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="space-y-5 text-slate-400 leading-relaxed">
              <p className="text-lg text-slate-300">
                I'm a{' '}
                <span className="text-white font-semibold">Computer Science Engineering student</span> at
                Siksha 'O' Anusandhan (ITER), Bhubaneswar, deeply passionate about turning ideas
                into real, working products.
              </p>
              <p>
                My focus is on <span className="text-primary">full-stack development</span>,
                building scalable web applications that are both performant and delightful to use.
                I enjoy bridging the gap between backend architecture and polished frontends.
              </p>
              <p>
                I actively participate in hackathons and ideathons, contribute to open source,
                and serve as a{' '}
                <span className="text-primary">Technical Core Member</span> of the Innovation &
                Entrepreneurship Cell at ITER. I believe in building things that matter — from
                cinema booking platforms to AI-powered coding tools.
              </p>
            </motion.div>

            {/* Code snippet decoration */}
            <motion.div
              variants={itemVariants}
              className="mt-8 glass-card rounded-xl p-4 font-mono text-sm"
              aria-hidden="true"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-400/60" />
                <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
                <div className="w-3 h-3 rounded-full bg-green-400/60" />
                <span className="text-slate-500 text-xs ml-2">developer.ts</span>
              </div>
              <div className="space-y-1 text-xs">
                <p><span className="text-blue-400">const</span> <span className="text-primary">prasenjit</span> <span className="text-white">=</span> {'{'}</p>
                <p className="pl-4"><span className="text-accent">name</span>: <span className="text-green-400">"{personalInfo.name}"</span>,</p>
                <p className="pl-4"><span className="text-accent">role</span>: <span className="text-green-400">"Full-Stack Developer"</span>,</p>
                <p className="pl-4"><span className="text-accent">university</span>: <span className="text-green-400">"ITER, SOA"</span>,</p>
                <p className="pl-4"><span className="text-accent">openToWork</span>: <span className="text-purple-400">true</span>,</p>
                <p>{'}'}</p>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div variants={itemVariants} className="mt-8">
              <p className="text-sm font-mono text-primary/60 mb-4">// Interests</p>
              <div className="flex flex-wrap gap-3">
                {interests.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/10 bg-white/3 text-slate-300 text-sm hover:border-primary/30 hover:text-primary transition-all duration-200"
                  >
                    <Icon size={13} className="text-primary" />
                    {label}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right — Developer Snapshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-semibold text-white">Developer Snapshot</h3>
                <span className="tag">B.Tech 2027</span>
              </div>

              {/* Snapshot stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                {snapshots.map(({ icon: Icon, label, value }) => (
                  <motion.div
                    key={label}
                    whileHover={{ scale: 1.02 }}
                    className="glass rounded-xl p-4 group cursor-default"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Icon size={14} className="text-primary" />
                      <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">{label}</span>
                    </div>
                    <p className="text-sm font-semibold text-white leading-tight">{value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Education highlight */}
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="border border-primary/20 rounded-xl p-4 bg-primary/5 mb-4"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-semibold text-white text-sm">{edu.degree}</p>
                      <p className="text-primary/80 text-xs mt-1">{edu.institution}, {edu.location}</p>
                      <p className="text-slate-500 text-xs mt-1 font-mono">{edu.period}</p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Focus area */}
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-mono">Focus:</span>
                <span className="tag">Full-Stack Development</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
