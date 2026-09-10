// Portfolio Data — Single source of truth for all content

export const personalInfo = {
  name: 'Prasenjit Sahoo',
  initials: 'PS',
  role: 'Computer Science Engineering Student',
  tagline: 'who builds digital experiences.',
  summary:
    'Computer Science Engineering student passionate about building scalable web applications, intelligent platforms, and polished user experiences.',
  email: 'mukeshsahoo902@gmail.com',
  phone: '+91 9861868159',
  github: 'https://github.com/Prasenjit-Sahoo18',
  linkedin: 'https://www.linkedin.com/in/prasenjit-sahoo18',
  resume: '/Prasenjit-Sahoo-Resume.pdf',
  profileImage: '/profile.jpg',
  roles: [
    'Full-Stack Developer',
    'Backend Developer',
    'Problem Solver',
    'AI & Web Developer',
  ],
};

export const education = [
  {
    institution: 'Siksha \'O\' Anusandhan (ITER)',
    location: 'Bhubaneswar',
    degree: 'B.Tech in Computer Science and Engineering',
    period: '2023 – 2027',
    cgpa: '7.61 / 10',
    status: 'Pursuing',
  },
];

export const skillCategories = [
  {
    id: '01',
    label: 'Languages',
    skills: [
      { name: 'Java', icon: '☕' },
      { name: 'Python', icon: '🐍' },
      { name: 'JavaScript', icon: 'JS' },
      { name: 'SQL', icon: '🗃️' },
    ],
  },
  {
    id: '02',
    label: 'Frontend',
    skills: [
      { name: 'React.js', icon: '⚛️' },
      { name: 'TypeScript', icon: 'TS' },
      { name: 'HTML5', icon: '🌐' },
      { name: 'CSS3', icon: '🎨' },
      { name: 'Tailwind CSS', icon: '🌊' },
    ],
  },
  {
    id: '03',
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: '🟢' },
      { name: 'Express.js', icon: '⚡' },
      { name: 'REST APIs', icon: '🔌' },
      { name: 'Django', icon: '🐉' },
    ],
  },
  {
    id: '04',
    label: 'Databases',
    skills: [
      { name: 'MySQL', icon: '🐬' },
      { name: 'PostgreSQL', icon: '🐘' },
      { name: 'MongoDB', icon: '🍃' },
      { name: 'Firebase', icon: '🔥' },
    ],
  },
  {
    id: '05',
    label: 'Tools',
    skills: [
      { name: 'Git', icon: '📦' },
      { name: 'GitHub', icon: '🐙' },
      { name: 'Docker', icon: '🐳' },
      { name: 'VS Code', icon: '🖊️' },
      { name: 'Android Studio', icon: '📱' },
    ],
  },
  {
    id: '06',
    label: 'Core CS',
    skills: [
      { name: 'Data Structures & Algorithms', icon: '🧠' },
      { name: 'DBMS', icon: '🗄️' },
      { name: 'Computer Networks', icon: '🌐' },
      { name: 'CI/CD', icon: '♾️' },
    ],
  },
];

export const projects = [
  {
    id: 1,
    slug: 'showpulse',
    title: 'ShowPulse',
    subtitle: 'Movie Ticket Booking Platform',
    description:
      'A production-grade full-stack movie ticket booking platform. Discover movies, select cities, browse showtimes, pick seats interactively, complete mock payments, and receive digital QR tickets — with a full admin dashboard for theatre management.',
    longDescription:
      'ShowPulse (deployed as CinePulse) is a feature-complete cinema booking experience built with a React + TypeScript frontend and a Node.js/Express backend. From browsing the latest releases to seat selection with real-time locking, mock payments, QR code ticket generation, and booking history — every stage of the booking journey is implemented. An admin panel enables theatre/screen management, movie scheduling, and analytics.',
    featured: true,
    theme: 'cinema',
    techStack: [
      'React', 'TypeScript', 'Vite', 'Tailwind CSS',
      'Node.js', 'Express.js', 'REST APIs', 'PostgreSQL',
      'Prisma', 'JWT', 'bcryptjs', 'QR Code', 'Vitest', 'Supertest',
    ],
    features: [
      'Movie discovery & search/filtering',
      'City / location selection',
      'Interactive seat selection with locking',
      'Mock payment flow',
      'Digital QR ticket generation',
      'Booking history',
      'User authentication (JWT)',
      'Admin dashboard — theatre, screen & show management',
      'Analytics & reporting',
      'Dark / Light theme',
    ],
    liveUrl: 'https://cinepulse-9i9x.onrender.com',
    githubUrl: 'https://github.com/Prasenjit-Sahoo18/ShowPulse',
    accentColor: '#38BDF8',
  },
  {
    id: 2,
    slug: 'codebuzz49',
    title: 'CodeBuzz49',
    subtitle: 'AI-Powered Coding Platform',
    description:
      'An AI-powered competitive coding platform for coding practice, live contests, company-wise problem sets, and intelligent solution guidance with real-time proctoring.',
    longDescription:
      'CodeBuzz49 brings together competitive programming, AI-assisted learning, and exam integrity in one platform. Users can solve company-tagged problems, compete in timed contests, and get AI-powered solution guidance via Google Gemini. Real-time camera-based proctoring using MediaPipe and OpenCV prevents cheating during contests.',
    featured: false,
    theme: 'code',
    techStack: [
      'HTML', 'CSS', 'JavaScript', 'Django',
      'SQLite', 'PostgreSQL', 'Google Gemini API',
      'MediaPipe', 'OpenCV', 'HackerEarth API',
    ],
    features: [
      'Online coding environment',
      'Real-time coding contests',
      'Camera-based proctoring (MediaPipe + OpenCV)',
      'Anti-cheating monitoring',
      'Company-wise coding problems',
      'AI-powered solution generation (Gemini)',
      'Premium coding content',
      'User authentication & management',
      'Code execution engine',
    ],
    liveUrl: 'https://codebuzz-master.onrender.com/',
    githubUrl: 'https://github.com/Prasenjit-Sahoo18/CodeBuzz49',
    accentColor: '#67E8F9',
  },
];

export const experience = [
  {
    id: 1,
    company: 'KFintech',
    role: 'Training-cum-Intern',
    program: 'KFintech Training-cum-Internship Program',
    type: 'Training & Internship',
    period: '2024',
    description:
      'Completed an intensive industry training program covering full-stack development, DevOps fundamentals, and industry-standard development workflows.',
    highlights: [
      'Gained hands-on experience with modern web development stacks',
      'Worked on REST API design, authentication, and authorization',
      'Practiced database design and optimization with SQL & MongoDB',
      'Introduced to Docker, CI/CD pipelines, and cloud fundamentals',
      'Used Chrome DevTools for debugging and performance profiling',
    ],
    technologies: [
      'Git', 'Linux', 'React.js', 'Node.js', 'Express.js',
      'MongoDB', 'SQL', 'Docker', 'REST APIs', 'Authentication',
      'Authorization', 'Database Design', 'CI/CD', 'Cloud Fundamentals',
    ],
  },
];

export const achievements = [
  {
    id: 1,
    title: '1st Runner-Up',
    event: 'Hackathon EATM 2025',
    description: 'Secured 1st Runner-Up position at Hackathon EATM 2025.',
    icon: '🥈',
    rank: '1st Runner-Up',
  },
  {
    id: 2,
    title: '6th Rank',
    event: 'SOA Ideathon 2025',
    description: 'Ranked 6th at SOA Ideathon 2025 and qualified for Smart India Hackathon.',
    badge: 'Qualified for Smart India Hackathon',
    icon: '🏆',
    rank: '6th Rank',
  },
  {
    id: 3,
    title: '6th Rank',
    event: 'NIT Rourkela Web Hackathon',
    description: 'Ranked 6th at the NIT Rourkela Web Hackathon.',
    icon: '🏆',
    rank: '6th Rank',
  },
];

export const certifications = [
  {
    id: 1,
    title: 'OCI Foundations Associate',
    issuer: 'Oracle',
    fullName: 'Oracle Cloud Infrastructure Foundations Associate',
    color: '#F80000',
    icon: 'OCI',
  },
  {
    id: 2,
    title: 'Cybersecurity Essentials',
    issuer: 'Cisco',
    fullName: 'Cisco Cybersecurity Essentials',
    color: '#1BA0D7',
    icon: 'CISCO',
  },
  {
    id: 3,
    title: 'Cloud Practitioner',
    issuer: 'AWS',
    fullName: 'AWS Certified Cloud Practitioner',
    color: '#FF9900',
    icon: 'AWS',
  },
];

export const extracurriculars = [
  {
    id: 1,
    role: 'Technical Core Member',
    organization: 'Innovation and Entrepreneurship Cell (IEC), ITER',
    description:
      'Active technical member driving innovation, organizing tech events, and mentoring peers in development.',
    icon: '💡',
  },
  {
    id: 2,
    role: 'Open Source Contributor',
    organization: 'GirlScript Summer of Code 2025',
    description:
      'Contributing to open source projects as part of GirlScript Summer of Code 2025.',
    icon: '🌍',
  },
  {
    id: 3,
    role: 'Active Participant',
    organization: 'Hackathons, Ideathons & Technical Events',
    description:
      'Regular participant in competitive hackathons, ideathons, and technical events across institutions.',
    icon: '⚡',
  },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' },
];
