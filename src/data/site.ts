/**
 * All site copy and links live here. Edit this file — components never need touching.
 * Items marked TODO are placeholders to replace before launch.
 */

export const site = {
  brand: 'Nwanehiudu Henry Chisom',
  title: 'AI Web Developer · Data Analyst · Digital Marketer',
  role: 'Senior Data Analyst & Digital Marketer',
  company: 'Uvanka Company Limited (Agro City)',
  location: 'Open to remote freelance projects',
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
  role: 'AI web developer, data analyst and digital marketer.',
  description:
    'I build websites and web apps, dig into the data behind them, and run the marketing that brings people in. By day I work at Uvanka Company Limited; the rest of my time goes to freelance projects.',
  primary: 'See my work',
  secondary: 'Start a project',
}

export const services = [
  {
    index: '01',
    verb: 'Build',
    title: 'AI web development',
    body: 'Websites and web apps in React and TypeScript, designed for phones first and shipped on Vercel. I use AI tools to move faster, and I read every line that goes live.',
    points: ['Websites and web apps', 'Mobile-first layouts', 'AI-assisted, human-reviewed'],
  },
  {
    index: '02',
    verb: 'Analyze',
    title: 'Data analytics',
    body: 'Spreadsheets and exports turned into clean tables, dashboards and a plain answer to what is working. I work in Python, SQL, Power BI and Excel.',
    points: ['Data cleaning', 'Dashboards and reports', 'Recommendations you can act on'],
  },
  {
    index: '03',
    verb: 'Grow',
    title: 'Digital marketing',
    body: 'SEO, content and campaign tracking, tied back to the numbers so you can see what brought people in and what to stop doing.',
    points: ['SEO', 'Content strategy', 'Performance tracking'],
  },
]

export const about = {
  heading: ['Technology.', 'Data.', 'Growth.'],
  lede: 'Most teams split building, measuring and marketing into three jobs. I do all three, so each one informs the others.',
  paragraphs: [
    'A well-built site that nobody finds does little, and traffic you never measure teaches you nothing. So I build the product, read what the numbers say, and use that to decide what to do next.',
    'I use AI tools as part of how I work, to move faster and try more ideas. The decisions, the taste and the accountability stay with me.',
  ],
  facts: [
    { k: 'Right now', v: 'Senior Data Analyst and Digital Marketer at Uvanka Company Limited (Agro City)' },
    { k: 'On the side', v: 'Websites and digital products for small businesses' },
    { k: 'Method', v: 'Build, measure, improve' },
    { k: 'Availability', v: 'Open to remote freelance projects' },
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
  sub: 'Tell me what you need built, measured or grown. Email and WhatsApp both reach me directly.',
  cta: 'Email me',
  // TODO: add LinkedIn and X here when you have the links, for example:
  // { label: 'LinkedIn', value: 'linkedin.com/in/your-handle', href: 'https://www.linkedin.com/in/your-handle' },
  // { label: 'X', value: '@your_handle', href: 'https://x.com/your_handle' },
  links: [
    { label: 'Email', value: 'nwanehiuduchisom@gmail.com', href: 'mailto:nwanehiuduchisom@gmail.com' },
    { label: 'WhatsApp', value: '+234 813 540 7221', href: 'https://wa.me/2348135407221' },
  ],
}
