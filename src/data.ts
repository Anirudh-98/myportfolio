// Edit this file to put in your own details, projects and links.

export type FeaturedProject = {
  company: string
  title: string
  summary: string
  href: string
  /** Two phone screenshots (put files in /public/images). */
  screens: [string, string]
  /** Tailwind gradient stop for the card's bottom tint. */
  tint: string
  /** 'end' shows the bottom of the phones, 'start' shows the top. */
  align: 'start' | 'end'
  /** Laptop + phone mockup shown instead of the two phones (put files in /public/images). */
  cover?: string
  /** Add this to open a project page instead of linking straight to `href`. */
  details?: ProjectDetails
}

export type ProjectDetails = {
  role: string
  stack: string[]
  scale: string
  overview: string
  sections: { heading: string; body: string }[]
  highlights: { title: string; body: string }[]
  /** Real desktop and mobile screenshots for the interface section. */
  screenshots?: { desktop: string; mobile: string }
  /** UI screenshots shown in phone frames, used when there are no screenshots. */
  gallery: string[]
}

export type OtherProject = {
  title: string
  summary: string
  href: string
  image: string
}

export const profile = {
  name: 'Anirudh Jyothula',
  /** Shown above your name on hover. Replace with your own photo. */
  photo: '/images/portrait.webp',
  roles: ['full-stack developer', 'startup founder', 'digital product builder'],
  location: 'Hyderabad, India',
  experience: '6+ years in software development',
  tagline: 'I build digital products that turn ambitious ideas into working experiences.',
  intro:
    'From easy-to-use interfaces to scalable backend systems, I design and develop full-stack web applications that solve real problems and deliver meaningful results.',
  /** The company you founded, shown under the hero text. */
  previously: { label: 'Viscano', href: 'https://www.viscano.com', projects: '20+' },
  email: 'teamviscano@gmail.com',
  /** `display` is what visitors see; `tel` is what the phone dials. */
  phone: { display: '+91 63013 61466', tel: '+916301361466' },
  socials: {
    linkedin: 'https://www.linkedin.com/',
    behance: 'https://www.behance.net/',
  },
  about: {
    /** Path to your intro video in /public, e.g. '/intro.mp4'. Leave empty to show the poster only. */
    video: '',
    videoPoster: '/images/about-video-poster.webp',
    heading: 'Six years of building for the web, and a studio of my own',
    paragraphs: [
      'I’m Anirudh, a full-stack developer and startup founder based in Hyderabad. For more than six years I’ve been designing and building web applications, from the first sketch of an interface to the backend systems that keep it running.',
      'I founded Viscano, a digital studio where I’ve delivered 20+ projects for businesses across India: a lead platform for a brand with 100+ showrooms, a portfolio and booking site for one of the biggest Telugu creators, e-commerce stores, and websites for non-profits and agencies.',
      'Alongside client work, I build my own products. DetailResume, my SaaS, helps job seekers in India get past applicant tracking systems with a free ATS score and an AI rewrite in under a minute.',
      'I care about the details that make a product work: fast load times, search visibility, responsive design and systems that teams can run on their own. If you have an idea worth building, I’d love to hear about it.',
    ],
    /** Images for the click & drag stack (first one is on top). Swap in your own photos any time. */
    photos: [
      '/images/detailresume-square.webp',
      '/images/vensai-square.webp',
      '/images/kusum-square.webp',
      '/images/bppf-square.webp',
      '/images/vidhara-square.webp',
    ],
  },
}

export const featured: FeaturedProject[] = [
  {
    company: 'DetailResume · my own SaaS product',
    title: 'From resume to interview-ready in 60 seconds',
    summary:
      'A SaaS product I founded, designed and built: a free ATS resume checker and AI rewriter that helps job seekers in India get past applicant tracking systems.',
    href: 'https://detailresume.com/',
    cover: '/images/detailresume-mockup.webp',
    screens: ['/images/project2-mobile.webp', '/images/project2-mobile-2.webp'],
    tint: 'to-sky-50',
    align: 'start',
    details: {
      role: 'Founder, designer and full-stack developer',
      stack: ['React', 'Firebase', 'AI', 'Google sign-in'],
      scale: 'Free, ₹49 and ₹99 plans, built for India',
      overview:
        'DetailResume is my own product, which I took from idea to paying customers on my own. Job seekers paste their resume and the job description they are applying for. In under a minute they get an ATS match score, every missing keyword and a fully rewritten resume that is ready to send.',
      sections: [
        {
          heading: 'The problem',
          body: 'Most companies in India, from TCS and Infosys to Flipkart, Swiggy and startups, screen resumes with an applicant tracking system before a person reads them. Good candidates are filtered out for missing keywords, weak bullet points or career gaps, and never find out why. The tools that exist are built for the US and priced in dollars.',
        },
        {
          heading: 'What I built',
          body: 'A three-step flow: paste your resume and the job description, get a free score out of 100 with a gap analysis, then unlock the full rewrite. The AI adds missing keywords naturally, strengthens weak bullets and reframes career gaps. It then produces an ATS-safe A4 PDF and an editable DOCX, with a before-and-after comparison so users can see the score go up.',
        },
        {
          heading: 'Built for Indian job seekers',
          body: 'Freshers get their own logic, with section ordering and project suggestions for 0–1 years of experience. Pricing is a one-time payment of ₹49 or ₹99 with no subscription, and the free analysis needs only a Google sign-in.',
        },
        {
          heading: 'Built to be found',
          body: 'Organic search is the growth engine, so the site was built for SEO and GEO from day one. Detailed structured data describes the product, its plans and its three-step process, which helps it appear in Google and in AI search answers for queries like “free ATS resume checker India”.',
        },
      ],
      highlights: [
        {
          title: 'Free ATS score',
          body: 'A 0–100 match score for any resume against any job description, in under 60 seconds.',
        },
        {
          title: 'AI resume rewriter',
          body: 'A full rewrite with missing keywords worked in naturally, not stuffed.',
        },
        {
          title: 'Career gap reframing',
          body: 'Turns employment gaps into believable upskilling or freelance entries.',
        },
        {
          title: 'In-browser editor',
          body: 'Users can fine-tune the AI output and add LinkedIn, GitHub and portfolio links before downloading.',
        },
        {
          title: 'PDF and DOCX export',
          body: 'A clean, ATS-safe A4 PDF plus an editable Word file.',
        },
        {
          title: 'Simple, local pricing',
          body: 'Free analysis, then a one-time ₹49 or ₹99, with no subscription.',
        },
      ],
      screenshots: { desktop: '/images/detailresume-desktop.webp', mobile: '/images/detailresume-mobile.webp' },
      gallery: [],
    },
  },
  {
    company: 'Vensai Prime',
    title: 'Routing every lead to the right showroom, instantly',
    summary:
      'Built end to end with React, Next.js and Firebase, with WhatsApp API integration that forwards each enquiry straight to the nearest of 100+ showrooms across India.',
    href: 'https://vensaiprime.com/',
    cover: '/images/vensai-mockup.webp',
    screens: ['/images/project1-mobile-2.webp', '/images/project1-mobile.webp'],
    tint: 'to-amber-50',
    align: 'end',
    details: {
      role: 'Full-stack developer, end to end',
      stack: ['React', 'Next.js', 'Firebase', 'WhatsApp API'],
      scale: '1,000+ products, 100+ showrooms across India',
      overview:
        'Vensai Prime sells through a network of more than 100 showrooms across India. I designed and built their web platform from the ground up: a fast, search-friendly catalogue of more than 1,000 products, and a lead pipeline that puts every enquiry in front of the right showroom the moment it is submitted.',
      sections: [
        {
          heading: 'The challenge',
          body: 'With showrooms spread across the country, enquiries were only useful if they reached the right local team quickly. Leads sitting in a shared inbox or a spreadsheet went cold, and customers were left waiting for a call back.',
        },
        {
          heading: 'What I built',
          body: 'A Next.js and React front end that loads quickly and works well on phones, backed by Firebase for data and lead storage. When a customer submits an enquiry, the system works out which showroom it belongs to and forwards it straight to that team on WhatsApp, the app they already use all day.',
        },
        {
          heading: 'Built to be found',
          body: 'More than 1,000 products are live on the site, each with its own page. Server-rendered pages, optimised images and clean structured data keep load times short and help every product rank in Google. The content is also structured for generative engine optimisation (GEO), so the brand and its products can show up in AI search answers too.',
        },
        {
          heading: 'The result',
          body: 'Showroom teams get new leads where they already work, with the customer’s details ready to act on. Customers get a quicker response, and the business has one place where every enquiry is recorded.',
        },
      ],
      highlights: [
        {
          title: 'Instant lead routing',
          body: 'Every enquiry is matched to its showroom and delivered automatically, with no manual sorting.',
        },
        {
          title: 'WhatsApp integration',
          body: 'Leads arrive as WhatsApp messages, so teams can reply to customers in seconds.',
        },
        {
          title: 'Built to scale',
          body: 'Firebase keeps the platform reliable across 100+ locations, and new showrooms are easy to add.',
        },
        {
          title: '1,000+ product catalogue',
          body: 'A large catalogue that stays easy to browse, with a dedicated page for every product.',
        },
        {
          title: 'Fast loading',
          body: 'Server-rendered Next.js pages and optimised images keep the site fast on any phone or connection.',
        },
        {
          title: 'SEO and GEO ready',
          body: 'Search-friendly pages and structured data help products appear in Google and in AI-powered search results.',
        },
      ],
      screenshots: { desktop: '/images/vensai-desktop.webp', mobile: '/images/vensai-mobile.webp' },
      gallery: [],
    },
  },
  {
    company: 'Kusum Ganji',
    title: 'A digital home for one of Telugu media’s biggest voices',
    summary:
      'A portfolio and brand-booking platform for a leading Hyderabad influencer trusted by 2,000+ brands, with a custom admin panel so his team can update it without a developer.',
    href: 'https://kusumganji.com/',
    cover: '/images/kusum-mockup.webp',
    screens: ['/images/project3-mobile.webp', '/images/project3-mobile-2.webp'],
    tint: 'to-indigo-50',
    align: 'start',
    details: {
      role: 'Full-stack developer, end to end',
      stack: ['React', 'TanStack Router', 'Firebase', 'Firestore'],
      scale: '100M+ views, 2,000+ brands, 8 platforms',
      overview:
        'Kusum Ganji is one of the most recognised Telugu creators in India, known for his founder interviews and brand promotions across YouTube, Instagram and a network of partner channels. I built his official website: a story-driven portfolio that turns his reach into brand enquiries, plus a custom admin panel that lets his team keep everything up to date.',
      sections: [
        {
          heading: 'The challenge',
          body: 'More than a decade of work, 100M+ views and thousands of brand collaborations were spread across eight different platforms. Brands had no single place to understand his reach, see his work and start a conversation, and his team needed a way to update content without relying on a developer.',
        },
        {
          heading: 'What I built',
          body: 'A homepage told in chapters, covering his story, impact, interviews, media network, services, a wall of video moments, testimonials, press and a journal. It sits alongside a platforms page, a booking page with a detailed brand brief form, and a page for his Caring Hearts Foundation, which has supported children since 2009.',
        },
        {
          heading: 'Content the team controls',
          body: 'Behind the site is an admin panel built on Firebase. The team can add interviews with chapters and highlights, manage the video wall, publish blog posts, update the platform list and review every brief that comes in. Uploaded images are compressed in the browser, so the site stays fast as the content grows.',
        },
        {
          heading: 'Built to be found',
          body: 'Every page is set up for search and sharing, with structured data that links his Instagram, YouTube, Facebook and LinkedIn profiles, a sitemap and rich social previews. That helps people searching for Telugu influencers or brand promotion in Hyderabad, and AI search tools, find the right information about him.',
        },
      ],
      highlights: [
        {
          title: 'Story-driven homepage',
          body: 'Chapter by chapter, the homepage takes brands from who he is to why they should work with him.',
        },
        {
          title: 'Brand booking flow',
          body: 'A structured brief form captures the company, industry, goal and timeline, so the team can reply with a tailored proposal.',
        },
        {
          title: 'Custom admin panel',
          body: 'Interviews, video reels, blogs, platforms and enquiries are all managed in one place.',
        },
        {
          title: 'One home for eight platforms',
          body: 'His full media network is brought together on a single page, with featured videos from each channel.',
        },
        {
          title: 'Social impact',
          body: 'A dedicated page tells the story of the Caring Hearts Foundation and invites CSR partnerships.',
        },
        {
          title: 'SEO and GEO ready',
          body: 'Structured data, a sitemap and social previews help him appear in Google and in AI-powered search.',
        },
      ],
      screenshots: { desktop: '/images/kusum-desktop.webp', mobile: '/images/kusum-mobile.webp' },
      gallery: [],
    },
  },
  {
    company: 'BPPF · Bharathiya Parampara Prathistan Foundation',
    title: 'Telling the story of villages that grow with the land',
    summary:
      'A website for a non-profit that restores rural India through forestation, water, natural farming, education and health, and invites donors to adopt a village.',
    href: 'https://bppfindia.org/',
    cover: '/images/bppf-mockup.webp',
    screens: ['/images/project1-mobile.webp', '/images/project1-mobile-2.webp'],
    tint: 'to-emerald-50',
    align: 'start',
    details: {
      role: 'Full-stack developer, end to end',
      stack: ['React', 'Next.js'],
      scale: '5 pillars, 10+ pages, Section 8 non-profit',
      overview:
        'Bharathiya Parampara Prathistan Foundation (BPPF) is a Section 8 non-profit working towards rural communities that are environmentally resilient, economically self-sustaining and rooted in traditional wisdom. I built their website to explain that mission clearly and turn visitors into donors, volunteers and CSR partners.',
      sections: [
        {
          heading: 'The challenge',
          body: 'BPPF’s work is broad: forestation, water harvesting, natural farming, government schools and community health, all carried out village by village. The site had to make that feel like one mission, and make it easy for someone to decide to support a whole village.',
        },
        {
          heading: 'What I built',
          body: 'A site built around their idea that “a village is more than a place, it is an ecosystem”. Each of the Five Pillars has its own page, and the Adopt a Village page walks donors through a six-step roadmap from village assessment to self-sustainability. There are also pages on their approach, impact, tradition and culture, and ways to participate.',
        },
        {
          heading: 'Built on trust',
          body: 'Donors need to trust a non-profit before they give. A dedicated transparency page, registration details, bank transfer information and an FAQ on the adoption model and CSR partnerships answer their questions up front, and a WhatsApp button keeps the team one tap away.',
        },
        {
          heading: 'Built to be found',
          body: 'Server-rendered Next.js pages load quickly and are easy for search engines and AI search tools to read, so people looking for rural development, natural farming or CSR partners in India can find BPPF.',
        },
      ],
      highlights: [
        {
          title: 'Five Pillars, one mission',
          body: 'Forestation, water, agriculture, education and health, each explained on its own page.',
        },
        {
          title: 'Adopt a Village journey',
          body: 'A clear six-step roadmap that makes a multi-year commitment easy to understand.',
        },
        {
          title: 'Impact dashboard',
          body: 'Animated stats and an impact page show what the foundation has achieved.',
        },
        {
          title: 'Transparency first',
          body: 'Registration, donation details and FAQs build confidence before anyone gives.',
        },
      ],
      screenshots: { desktop: '/images/bppf-desktop.webp', mobile: '/images/bppf-mobile.webp' },
      gallery: [],
    },
  },
  {
    company: 'Vidhara',
    title: 'A bold home for a hyperlocal growth agency',
    summary:
      'A website for a Hyderabad marketing and promotions agency that grows retail brands like Starbucks, Decathlon and Cult, and launches Telugu films.',
    href: 'https://vidhara.services/',
    cover: '/images/vidhara-mockup.webp',
    screens: ['/images/project3-mobile-2.webp', '/images/project3-mobile.webp'],
    tint: 'to-orange-50',
    align: 'end',
    details: {
      role: 'Full-stack developer, end to end',
      stack: ['React', 'GSAP'],
      scale: '19+ brands, 70+ films, 21M+ local reach',
      overview:
        'Vidhara is a Hyderabad-based marketing and promotions agency built on one promise: create, connect, grow. They work with global franchises that need measurable footfall and with cinema production houses that need release-week buzz. I built a website that shows both sides with confidence and turns visitors into campaign enquiries.',
      sections: [
        {
          heading: 'The challenge',
          body: 'Vidhara serves two very different audiences. Retail and franchise brands want hard numbers like walk-ins and leads, while film producers want reach and hype. The site had to speak to both without feeling like a generic agency template, which is exactly what Vidhara stands against.',
        },
        {
          heading: 'What I built',
          body: 'A bold, story-led site with smooth GSAP animation. It covers who they are, six service verticals, clients, testimonials and the founder’s journey from film promotions to launching Vidhara. Every service page shows results from both a retail and a cinema point of view, from a +140% footfall increase for Cult franchise gyms to 5.2 million impressions across Telangana and Andhra Pradesh in a single week.',
        },
        {
          heading: 'Built to convert',
          body: 'A campaign enquiry form captures the contact’s name, brand, phone, email, service and project type, and call and WhatsApp buttons are always close by. Animated counters put the agency’s numbers front and centre: 19+ brands scaled, a 126% average footfall boost, 70+ films promoted and 21M+ local reach.',
        },
      ],
      highlights: [
        {
          title: 'Six service verticals',
          body: 'Brand strategy, digital growth, performance ads, social and PR, creative production, and web.',
        },
        {
          title: 'Dual case studies',
          body: 'Every service shows proof for both retail brands and film releases.',
        },
        {
          title: 'Trusted names up front',
          body: 'Starbucks, Decathlon, Cult, Saregama and more, shown in a client wall.',
        },
        {
          title: 'Lead capture',
          body: 'A detailed enquiry form, plus one-tap call and WhatsApp.',
        },
      ],
      screenshots: { desktop: '/images/vidhara-desktop.webp', mobile: '/images/vidhara-mobile.webp' },
      gallery: [],
    },
  },
  {
    company: 'The Fehu Code',
    title: 'An online store celebrating Indian craft',
    summary:
      'An e-commerce store for a sustainable fashion brand selling handloom sarees, jhumkas and apparel, with a custom design studio for personalised t-shirts.',
    href: 'https://www.fehu.org.in/',
    cover: '/images/fehu-mockup.webp',
    screens: ['/images/project2-mobile-2.webp', '/images/project2-mobile.webp'],
    tint: 'to-rose-50',
    align: 'start',
    details: {
      role: 'Developer, store build and custom features',
      stack: ['Shopify', 'Firebase'],
      scale: 'Sarees, jhumkas, menswear and womenswear',
      overview:
        'The Fehu Code celebrates Indian art and culture through modern, comfortable apparel, from handloom, Ajrakh and Bagru block-print sarees to jhumkas, kurtis and oversized t-shirts. I built their online store to make the collection easy to browse and buy, and to let customers design their own pieces.',
      sections: [
        {
          heading: 'The challenge',
          body: 'The brand’s range is wide, from sarees in many fabrics and prints to menswear and accessories. Shoppers needed to find the right piece quickly, and the store had to communicate the brand’s values of organic materials, artisan craft and fair labour.',
        },
        {
          heading: 'What I built',
          body: 'A Shopify store with clear navigation for men and women, saree collections by fabric, print and price, a latest-drop section, sales and clearance, and a gallery of happy customers. Free shipping and secure checkout are visible throughout to build confidence.',
        },
        {
          heading: 'Custom design studio',
          body: 'A custom feature lets customers upload their own artwork to personalise an oversized t-shirt. Uploads are stored securely in Firebase, so the team can review each design before it goes into production.',
        },
      ],
      highlights: [
        {
          title: 'Curated collections',
          body: 'Cotton, silk, handloom, embroidery, Ajrakh and Bagru block-print sarees, plus an “under ₹1,500” edit.',
        },
        {
          title: 'Design your own tee',
          body: 'Customers upload artwork and the brand produces a one-of-a-kind piece.',
        },
        {
          title: 'Smooth checkout',
          body: 'Free shipping across India, secure payments and clear store policies.',
        },
        {
          title: 'Brand storytelling',
          body: 'Customer photos, a newsletter and the brand’s sustainability values are woven into the store.',
        },
      ],
      screenshots: { desktop: '/images/fehu-desktop.webp', mobile: '/images/fehu-mobile.webp' },
      gallery: [],
    },
  },
]

export const others: OtherProject[] = [
  {
    title: 'Nirgunam, a sacred path to inner freedom',
    summary:
      'A spiritual platform for Manish Nirgunam and the Sri Mata Group, bringing yatras, dharmic products and gatherings like Maha Shivratri together, with event registration and an admin portal built on Firebase.',
    href: 'https://www.nirgunam.org/',
    image: '/images/nirgunam-mockup.webp',
  },
  {
    title: 'RadDeals, a creative agency site',
    summary:
      'A fast, animated website for a creative agency trusted by 250+ brands, covering branding, video, VFX and digital products, with a portfolio and journal the team manages through Firebase.',
    href: 'https://raddeals.in/',
    image: '/images/raddeals-mockup.webp',
  },
]
