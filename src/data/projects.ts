export type PreviewKind = 'yvexcargo' | 'oma'

export interface CaseStudy {
  slug: string
  title: string
    summary: string
  preview: PreviewKind
  liveUrl: string
  role: string
  type: string
  stack: string[]
  /** Optional: drop real screenshots in src/assets and set paths here to replace the built-in mockups */
  images?: { hero?: string; gallery?: string[] }
  challenge: string[]
  approach: { title: string; body: string }[]
  solution: { title: string; body: string }[]
  result: { heading: string; points: string[] }
}

export const projects: CaseStudy[] = [
  {
    slug: 'yvexcargo',
    title: 'YvexCargo',
    summary:
      'International shipment tracking for clients, and a dashboard for the team that moves each parcel through six stages.',
    preview: 'yvexcargo',
    liveUrl: 'https://yvexcargo.com',
    role: 'Design & full-stack development',
    type: 'Logistics platform',
    stack: ['React', 'Vite', 'TypeScript', 'Express', 'PostgreSQL', 'JWT', 'Vercel', 'Fly.io'],
    challenge: [
      'International shipping is full of waiting. Customers want to know where a parcel is, and operators need one reliable place to move it from one stage to the next.',
      'The platform had to feel trustworthy at first glance, and still be simple enough for a small team to run day to day.',
    ],
    approach: [
      { title: 'Start with the shipment', body: 'Every screen is organised around one idea: a shipment moves through six clear stages. Everything else supports that.' },
      { title: 'Two audiences, one system', body: 'Clients get a calm, readable tracking experience. Operators get an admin dashboard built for speed.' },
      { title: 'Grow it properly', body: 'The first version was a single-file React app. It was then rebuilt as a full-stack product with a real database and authentication.' },
    ],
    solution: [
      { title: 'Six-stage shipment pipeline', body: 'A clear, consistent status model that clients and staff both understand.' },
      { title: 'Admin dashboard', body: 'Create, update and follow shipments from one place, working with live data only.' },
      { title: 'Secure accounts', body: 'Authentication with hashed passwords and token-based sessions.' },
      { title: 'A homepage with presence', body: 'A slow crossfade hero, parallax and scroll reveals, so the first screen feels like a real logistics company.' },
    ],
    result: {
      heading: 'A live logistics product, built end to end.',
      points: [
        'Front end on Vercel, API and PostgreSQL database deployed separately',
        'Full user authentication and an admin workflow',
        'Mobile navigation and routing that behave like a real product',
      ],
    },
  },
  {
    slug: 'oma-synergies',
    title: 'Oma Synergies Travels & Tours',
    summary:
      'A mobile-first site for a travel and study-abroad consultancy: seven services, twelve destinations, and WhatsApp as the front door.',
    preview: 'oma',
    liveUrl: 'https://omasynergiestravel.com',
    role: 'Design & front-end development',
    type: 'Travel & education consultancy website',
    stack: ['React', 'Vite', 'TypeScript', 'CSS', 'Vercel', 'GitHub'],
    challenge: [
      'Study-abroad and travel services are complicated: many destinations, many services, and a lot of anxiety for the person deciding.',
      'The site had to explain seven different services clearly and make it easy to start a conversation, on a phone first, because that is where most visitors are.',
    ],
    approach: [
      { title: 'Mobile is the reference', body: 'The mobile layout was designed first. Desktop only extends it, never overrides it.' },
      { title: 'Order the story', body: 'The homepage follows a fixed journey, from what we do, to how it works, to proof, to destinations, to the final call to action.' },
      { title: 'WhatsApp first', body: 'The contact experience puts a direct WhatsApp conversation ahead of a form, because that is how clients prefer to talk.' },
    ],
    solution: [
      { title: 'Seven services, made clear', body: 'Each service has its own page and a consistent structure, so visitors can compare and decide.' },
      { title: 'Twelve destinations', body: 'Destination pages linked to testimonials, so proof sits right next to the choice.' },
      { title: 'Custom icon system', body: 'A real SVG icon set replaced stock emoji, so the site stops looking like a template.' },
      { title: 'Portal preview', body: 'An interactive preview shows clients what their future dashboard will look like.' },
    ],
    result: {
      heading: 'A mobile-first site for a growing consultancy.',
      points: [
        'Live at omasynergiestravel.com',
        'Consistent look across home, services, destinations and contact',
        'A foundation ready for a full client portal and admin panel',
      ],
    },
  },
]

export const placeholders = [{ id: 'next-a' }, { id: 'next-b' }]

export const getProject = (slug: string) => projects.find((p) => p.slug === slug)
