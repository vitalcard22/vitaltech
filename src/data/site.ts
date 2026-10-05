/**
 * All site copy and links live here. Edit this file; components never need touching.
 */

export const site = {
  brand: 'Nwanehiudu Henry Chisom',
  title: 'AI Web Developer · Data Analyst · Digital Marketer',
  role: 'Senior Data Analyst & Digital Marketer',
  company: 'Uvanka Company Limited',
  location: 'Open to remote freelance projects',
  year: new Date().getFullYear(),
}

export const nav = [
  { label: 'Work', target: 'work' },
  { label: 'Services', target: 'services' },
  { label: 'About', target: 'about' },
] as const

export const hero = {
  /** Each entry is one line on desktop. "|" marks an extra break used only on phones. */
  headline: ['I build|digital', 'products|that turn', 'ideas into', 'growth.'],
  emphasis: 'growth.',
  designation: ['AI Web Developer', 'Data Analyst', 'Digital Marketer'],
  statement:
    'I combine web development, data and digital marketing to turn ideas into useful digital products and measurable business growth.',
  primary: 'See selected work',
  secondary: 'Let’s work together',
}

/** Web, Data and Growth: the three disciplines, used as a recurring tag across the site. */
export const services = [
  {
    index: '01',
    tag: 'Web',
    title: 'AI web development',
    body: 'Websites and web apps built with AI-assisted workflows. I move fast, and I review every line before it goes live.',
  },
  {
    index: '02',
    tag: 'Data',
    title: 'Data & business intelligence',
    body: 'Dashboards, reporting, KPIs and visualisation that show a business what is actually happening, in Excel, Power BI, SQL and Python.',
  },
  {
    index: '03',
    tag: 'Growth',
    title: 'Digital marketing & SEO',
    body: 'Search visibility, analytics and performance work that starts from the data instead of guesses.',
  },
  {
    index: '04',
    tag: 'Web · Data · Growth',
    title: 'Digital product development',
    body: 'Turning an idea into a structured, usable product: what it does, who uses it, how it is built and how you will know it works.',
  },
]

export const about = {
  heading: 'I started from data.',
  paragraphs: [
    'Computer Science gave me the technical foundation. Working with business data at Uvanka showed me how decisions actually get made. Digital marketing showed me how those decisions turn into action.',
    'So I stopped treating them as three jobs. A site that nobody finds does little. Traffic you never measure teaches you nothing. A dashboard nobody acts on is decoration.',
    'Today I bring the three together and build digital products. I use AI tools to move faster. The judgement and the accountability stay with me.',
  ],
  triad: ['I can build it.', 'I can analyse it.', 'I know how to grow it.'],
}

export const toolkit = [
  { tag: 'Web', items: ['React', 'TypeScript', 'HTML & CSS', 'Java', 'GitHub', 'Vercel', 'AI-assisted development'] },
  { tag: 'Data', items: ['Excel', 'Power BI', 'SQL', 'Python (basic)', 'Data visualisation', 'Business intelligence', 'KPI reporting', 'Microsoft Office'] },
  { tag: 'Growth', items: ['SEO', 'Google Analytics', 'Digital marketing', 'Market research'] },
]

export const experience = {
  heading: 'Experience',
  lede: 'Same company, wider remit. I started by analysing the data and now own more of what happens with it.',
  roles: [
    {
      period: '2022',
      role: 'Data Analyst',
      company: 'Uvanka Company Limited',
      points: ['Analysing business and customer data', 'Building dashboards and reports'],
    },
    {
      period: '2023 — Present',
      role: 'Senior Data Analyst & Digital Marketer',
      company: 'Uvanka Company Limited',
      points: [
        'Developing KPIs and preparing management reports',
        'Analysing marketing performance',
        'Researching markets and competitors',
        'Supporting business decisions with data',
        'Improving reporting processes',
        'Working across teams',
      ],
    },
  ],
}

export const contact = {
  headline: ['Have an idea', 'worth building?'],
  cta: 'Let’s work together',
  links: [
    { label: 'Email', value: 'nwanehiuduchisom@gmail.com', href: 'mailto:nwanehiuduchisom@gmail.com' },
    { label: 'WhatsApp', value: '+234 813 540 7221', href: 'https://wa.me/2348135407221' },
    // TODO: add LinkedIn and X here when you have them, for example:
    // { label: 'LinkedIn', value: 'linkedin.com/in/your-handle', href: 'https://www.linkedin.com/in/your-handle' },
  ],
}
