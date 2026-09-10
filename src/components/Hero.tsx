import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, ChevronDown, Download, ExternalLink } from 'lucide-react';
import { GithubIcon as Github, LinkedinIcon as Linkedin } from './GithubIcon';
import { personalInfo } from '../data/portfolio';

const roles = personalInfo.roles;

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  // Typewriter effect
  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(current.slice(0, charIndex + 1));
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1800);
        } else {
          setCharIndex((c) => c + 1);
        }
      } else {
        setDisplayed(current.slice(0, charIndex - 1));
        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setCharIndex(0);
          setRoleIndex((i) => (i + 1) % roles.length);
        } else {
          setCharIndex((c) => c - 1);
        }
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  const scrollDown = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  } as const;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg opacity-60" aria-hidden="true" />

      {/* Radial glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/4 w-[700px] h-[700px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            {/* Status badge */}
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border border-primary/30 bg-primary/5 text-primary">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                Available for Software Development Opportunities
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p variants={itemVariants} className="font-mono text-primary text-base mb-2">
              Hi, I'm Prasenjit.
            </motion.p>

            {/* Main headline */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
            >
              <span className="gradient-text-white">Computer Science</span>
              <br />
              <span className="gradient-text-white">Engineer</span>{' '}
              <span className="text-slate-400 text-3xl sm:text-4xl md:text-5xl font-semibold">
                {personalInfo.tagline}
              </span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div variants={itemVariants} className="flex items-center gap-2 h-10 mb-6">
              <span className="font-mono text-lg text-primary/70">{'>'}</span>
              <span className="font-mono text-lg text-primary font-medium min-w-[16ch]">
                {displayed}
                <span className="animate-blink text-primary">|</span>
              </span>
            </motion.div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-slate-400 text-lg max-w-lg leading-relaxed mb-8">
              {personalInfo.summary}
            </motion.p>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-8">
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary text-sm"
              >
                <ExternalLink size={15} />
                View My Work
              </button>
              <a
                href={personalInfo.resume}
                download
                className="btn-outline text-sm"
                aria-label="Download resume PDF"
              >
                <Download size={15} />
                Download Resume
              </a>
            </motion.div>

            {/* Social links */}
            <motion.div variants={itemVariants} className="flex items-center gap-4">
              {[
                { href: personalInfo.github, icon: Github, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: Linkedin, label: 'LinkedIn' },
                { href: `mailto:${personalInfo.email}`, icon: Mail, label: 'Email' },
                { href: `tel:${personalInfo.phone.replace(/\s/g, '')}`, icon: Phone, label: 'Phone' },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center text-slate-500 border border-white/10 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
              <div className="h-px flex-1 max-w-[80px] bg-gradient-to-r from-primary/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* Right — Profile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Decorative grid */}
              <div
                className="absolute inset-0 -m-8 rounded-3xl opacity-30"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(56,189,248,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.15) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
                aria-hidden="true"
              />

              {/* Outer glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute -inset-3 rounded-[2.5rem] border border-dashed border-primary/20"
                aria-hidden="true"
              />

              {/* Inner animated border */}
              <motion.div
                animate={{ boxShadow: ['0 0 20px rgba(56,189,248,0.3)', '0 0 50px rgba(56,189,248,0.5)', '0 0 20px rgba(56,189,248,0.3)'] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="relative rounded-[2rem] overflow-hidden border-2 border-primary/40"
                style={{ width: 320, height: 380 }}
              >
                {/* Profile image */}
                <img
                  src={personalInfo.profileImage}
                  alt="Prasenjit Sahoo — Full-Stack Developer"
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(2,6,23,0.7) 0%, transparent 40%)',
                  }}
                  aria-hidden="true"
                />
                {/* Name overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-bold text-white text-lg leading-tight">Prasenjit Sahoo</p>
                  <p className="text-primary text-xs font-mono mt-0.5">Full-Stack Developer</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          onClick={scrollDown}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-500 hover:text-primary transition-colors duration-200"
          aria-label="Scroll to about section"
        >
          <span className="text-xs font-mono">scroll</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
