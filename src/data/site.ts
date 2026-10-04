/**
 * All site copy and links live here. Edit this file — components never need touching.
 * Items marked TODO are placeholders to replace before launch.
 */

export const site = {
  brand: 'Yown', // TODO: replace with your full name or studio name
  title: 'AI Web Developer · Data Analyst · Digital Marketer',
  location: 'Available worldwide · Remote',
  year: new Date().getFullYear(),
}

export const nav = [
  { label: 'Work', target: 'work' },
  { label: 'Services', target: 'services' },
  { label: 'About', target: 'about' },
  { label: 'Contact', target: 'contact' },
] as const

export const hero = {
  headline: ['I build digital', 'products that turn', 'ideas into', 'growth.'],
  emphasis: 'growth.',
  identity: ['AI Web Developer', 'Data Analyst', 'Digital Marketer'],
  description:
    'I design and build intelligent digital experiences, transform data into actionable insights, and create digital strategies that help businesses grow.',
  primary: 'Explore My Work',
  secondary: 'Start a Project',
}

export const services = [
  {
    index: '01',
    verb: 'Build',
    title: 'AI Web Development',
    body: 'I design and develop modern, responsive websites and digital products using modern web technologies and AI-assisted development.',
    points: ['Websites & web apps', 'Responsive, mobile-first interfaces', 'AI-assisted development workflow'],
  },
  {
    index: '02',
    verb: 'Analyze',
    title: 'Data Analytics',
    body: 'I transform raw data into clear insights, dashboards and information that support better business decisions.',
    points: ['Data cleaning & analysis', 'Dashboards & reporting', 'Insights you can act on'],
  },
  {
    index: '03',
    verb: 'Grow',
    title: 'Digital Marketing',
    body: 'I use digital strategy, analytics, content and online marketing to help businesses improve their visibility and growth.',
    points: ['SEO & visibility', 'Content strategy', 'Performance tracking'],
  },
]

export const about = {
  heading: ['Technology.', 'Data.', 'Growth.'],
  paragraphs: [
    'I work across three things that usually sit in separate teams: building websites, making sense of data, and getting the right people to find them.',
    'That mix matters. A well-built site that nobody can find does little, and traffic you never measure teaches you nothing. So I build the product, look at what the numbers say, and use that to decide what to do next.',
    'I use AI tools as part of how I work, to move faster and try more ideas. The decisions, the taste and the accountability stay with me.',
  ],
  facts: [
    { k: 'Focus', v: 'Web, data & marketing' },
    { k: 'Approach', v: 'Build · Measure · Improve' },
    { k: 'Works with', v: 'Founders & small businesses' },
    { k: 'Base', v: 'Remote, worldwide' },
  ],
}

export const skills = [
  { group: 'Development', items: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'GitHub', 'Vercel'] },
  { group: 'Data', items: ['Python', 'SQL', 'Power BI', 'Excel'] },
  { group: 'AI', items: ['AI-assisted development', 'AI tools', 'AI integrations'] },
  { group: 'Marketing', items: ['SEO', 'Digital Marketing', 'Content Strategy', 'Analytics'] },
]

export const contact = {
  headline: ['Have a project', 'in mind?'],
  sub: 'Let’s build something meaningful.',
  cta: 'Start a Conversation',
  // TODO: replace every link below with your real details
  links: [
    { label: 'Email', value: 'hello@example.com', href: 'mailto:hello@example.com' },
    { label: 'LinkedIn', value: 'linkedin.com/in/your-handle', href: 'https://www.linkedin.com/in/your-handle' },
    { label: 'X', value: '@your_handle', href: 'https://x.com/your_handle' },
    { label: 'WhatsApp', value: '+000 000 000 0000', href: 'https://wa.me/0000000000000' },
  ],
}
