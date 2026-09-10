import { motion } from 'framer-motion';
import { Mail, Phone, Send, ExternalLink } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './GithubIcon';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      cta: 'Send Email',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
      cta: 'Call',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'prasenjit-sahoo18',
      href: personalInfo.linkedin,
      cta: 'Connect',
      external: true,
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'Prasenjit-Sahoo18',
      href: personalInfo.github,
      cta: 'Follow',
      external: true,
    },
  ];

  return (
    <section id="contact" className="relative py-24 lg:py-32" aria-label="Contact section">
      <div className="absolute inset-0 grid-bg opacity-30" aria-hidden="true" />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(56,189,248,0.07) 0%, transparent 60%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="section-number mb-4 justify-center flex">// 07 — CONTACT</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            <span className="gradient-text-white">Let's build something</span>
            <br />
            <span className="gradient-text">meaningful.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-lg mx-auto leading-relaxed">
            I'm always interested in building useful products, solving challenging
            problems, and exploring new technologies.
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid sm:grid-cols-2 gap-4 mb-12"
        >
          {contactMethods.map(({ icon: Icon, label, value, href, cta, external }, i) => (
            <motion.a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.01 }}
              className="glass-card rounded-xl p-5 flex items-center gap-4 group"
              aria-label={`${cta} via ${label}: ${value}`}
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-200">
                <Icon size={18} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs text-slate-500 font-mono">{label}</p>
                <p className="text-sm font-medium text-white truncate mt-0.5">{value}</p>
              </div>
              <div className="shrink-0 w-8 h-8 rounded-lg border border-transparent group-hover:border-primary/30 group-hover:bg-primary/5 flex items-center justify-center transition-all duration-200">
                {external ? (
                  <ExternalLink size={13} className="text-primary/0 group-hover:text-primary transition-colors" />
                ) : (
                  <Send size={13} className="text-primary/0 group-hover:text-primary transition-colors" />
                )}
              </div>
            </motion.a>
          ))}
        </motion.div>

        {/* Action buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a
            href={`mailto:${personalInfo.email}`}
            className="btn-primary"
            aria-label="Send email"
          >
            <Mail size={16} />
            Send Email
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="Connect on LinkedIn"
          >
            <Linkedin size={16} />
            Connect on LinkedIn
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline"
            aria-label="View GitHub profile"
          >
            <Github size={16} />
            View GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
