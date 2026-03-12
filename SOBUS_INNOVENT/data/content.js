/**
 * ============================================================
 * INNOVENT CLUB — CONTENT CONFIGURATION FILE
 * ============================================================
 * Edit this file to update all website content, links, and data.
 * No need to touch index.html for content changes.
 *
 * Sections:
 *  - SITE_CONFIG     : Global site settings
 *  - NAVBAR          : Navigation links
 *  - HERO            : Hero section text and CTA
 *  - ABOUT           : About section + stats
 *  - WHY_INNOVENT    : Feature cards
 *  - TIMELINE        : Event timeline steps
 *  - TOPICS          : Innovation topic cards
 *  - GALLERY         : Gallery images
 *  - TEAM            : Team members
 *  - REGISTRATION    : Registration section
 *  - CONTACT         : Contact info + footer links
 * ============================================================
 */

const CONTENT = {

  /* ----------------------------------------------------------
   * SITE CONFIG — Global settings
   * ---------------------------------------------------------- */
  SITE_CONFIG: {
    siteName: "Innovent",
    tagline: "Sobus Center of Excellence",
    logoText: "INNOVENT",
    faviconPath: "assets/images/favicon.png",

    /**
     * HOW TO CHANGE REGISTRATION LINK:
     * Simply replace the URL below with the new Google Form link.
     * All "Register Now" buttons across the site use this one value.
     */
    registrationLink: "https://forms.gle/B8VZQLpTm1EnGVfA7",
  },

  /* ----------------------------------------------------------
   * NAVBAR — Navigation links
   * ---------------------------------------------------------- */
  NAVBAR: {
    links: [
      { label: "Home",         href: "#home" },
      { label: "About",        href: "#about" },
      { label: "Why Innovent", href: "#why" },
      { label: "Timeline",     href: "#timeline" },
      { label: "Topics",       href: "#topics" },
      { label: "Gallery",      href: "#gallery" },
      { label: "Team",         href: "#team" },
      { label: "Contact",      href: "#contact" },
    ],
    ctaLabel: "Register Now",
  },

  /* ----------------------------------------------------------
   * HERO — Main banner section
   * ---------------------------------------------------------- */
  HERO: {
    badge: "Idea Competition 2025",
    headline: "Come Innovate with us for a Better",
    headlineAccent: "'Bharat'",
    subheadline: "Where Your Idea Meets Opportunity at your Village, Taluka and City Level",
    description:
      "Innovent is coming to your city. Join the biggest Idea Competition of 2025 in your area. Experience the thrill of tinkering with ideas, creating plans for new technologies, and solving problems at the grassroot level.",
    primaryCTA: { label: "Register Now", href: "registrationLink" }, // uses SITE_CONFIG.registrationLink
    secondaryCTA: { label: "Learn More", href: "#about" },
    /**
     * HOW TO CHANGE HERO BACKGROUND IMAGE:
     * Replace the path below with your image path inside assets/images/
     * e.g. "assets/images/hero-bg.jpg"
     */
    backgroundImage: "assets/images/hero-bg.jpg",
  },

  /* ----------------------------------------------------------
   * ABOUT — What is Innovent section + stats
   * ---------------------------------------------------------- */
  ABOUT: {
    sectionLabel: "About Us",
    heading: "What is Innovent?",
    paragraphs: [
      "Innovent is here to help take your ideas from local to national levels. This IDEA COMPETITION connects startups, innovators, mentors, and investors at your village, taluka, and city levels to create impactful solutions and foster innovation nationwide.",
      "Innovent bridges your ideas with the guidance and resources needed to bring them to life. Regardless of your location, language, or background, Innovent helps turn your ideas into solutions that can reach every corner of India.",
      "It provides a platform for innovators, developers, designers, and thinkers like you to transform ideas into real-world prototypes, inspiring students and educators to celebrate creativity, technology, and innovation at the grassroots level.",
    ],
    /**
     * HOW TO CHANGE STATS:
     * Edit the 'value' and 'label' fields below.
     */
    stats: [
      { value: "50+",  label: "Startup Ideas" },
      { value: "3",    label: "Languages" },
      { value: "10+",  label: "Colleges" },
      { value: "500+", label: "Students" },
      { value: "10+",  label: "Mentors" },
      { value: "5+",   label: "Innovation Fields" },
    ],
    /**
     * HOW TO CHANGE ABOUT IMAGE:
     * Replace the path below with your image inside assets/images/
     */
    image: "assets/images/about-illustration.jpg",
    imageAlt: "Innovent community collaborating on ideas",
  },

  /* ----------------------------------------------------------
   * WHY_INNOVENT — Feature / benefit cards
   * ---------------------------------------------------------- */
  WHY_INNOVENT: {
    sectionLabel: "Why Choose Us",
    heading: "Why Innovent?",
    subheading: "A platform that breaks barriers and builds futures.",
    /**
     * HOW TO ADD / EDIT FEATURES:
     * Add or modify objects in the array below.
     * 'icon' uses Font Awesome class names (fas fa-xxx).
     */
    features: [
      {
        icon: "fas fa-language",
        title: "No Language Barrier",
        description:
          "Present your ideas in Marathi, Hindi and English — for the first time in Idea Competition history.",
      },
      {
        icon: "fas fa-map-marked-alt",
        title: "Local Talents, National Impact",
        description:
          "No matter your location or language, join us to take your ideas to the National level.",
      },
      {
        icon: "fas fa-chalkboard-teacher",
        title: "Mentorship",
        description:
          "Guidance from industry experts and successful entrepreneurs who have walked the path.",
      },
      {
        icon: "fas fa-handshake",
        title: "Networking",
        description:
          "Make a bigger impact by collaborating with other innovators across India.",
      },
      {
        icon: "fas fa-tools",
        title: "Skill Development",
        description:
          "Workshops and sessions to enhance startup skills and entrepreneurial thinking.",
      },
      {
        icon: "fas fa-trophy",
        title: "Recognition",
        description:
          "Opportunity to not only get recognized but also win multiple awards across levels.",
      },
    ],
  },

  /* ----------------------------------------------------------
   * TIMELINE — Event timeline steps
   * ---------------------------------------------------------- */
  TIMELINE: {
    sectionLabel: "Event Process",
    heading: "Event Timeline",
    subheading: "Your journey from idea to impact.",
    /**
     * HOW TO EDIT TIMELINE STEPS:
     * Edit the step, title, date, and description fields below.
     */
    steps: [
      {
        step: "01",
        title: "Submit Ideas",
        date: "Phase 1",
        description: "Submit your innovative ideas online through our registration portal.",
        icon: "fas fa-lightbulb",
      },
      {
        step: "02",
        title: "Shortlisting",
        date: "Phase 2",
        description: "Mentors and investors review submitted ideas and shortlist the most impactful ones.",
        icon: "fas fa-filter",
      },
      {
        step: "03",
        title: "Masterclasses",
        date: "Phase 3",
        description: "Participate in interactive mentorship workshops to refine and develop your ideas.",
        icon: "fas fa-chalkboard",
      },
      {
        step: "04",
        title: "Prizes & Recognition",
        date: "Phase 4",
        description: "Idea Presentation, Final Winners Declaration, and award ceremony.",
        icon: "fas fa-award",
      },
    ],
  },

  /* ----------------------------------------------------------
   * TOPICS — Innovation topic cards
   * ---------------------------------------------------------- */
  TOPICS: {
    sectionLabel: "Innovation Areas",
    heading: "Event Topics",
    subheading: "Tackle real-world problems across these key domains.",
    /**
     * HOW TO EDIT TOPICS:
     * Add, remove, or modify objects in the array below.
     * 'color' is a CSS gradient for the card accent.
     */
    topics: [
      {
        icon: "fas fa-heartbeat",
        title: "Health, Wellness & Telemedicine",
        color: "linear-gradient(135deg, #ef4444, #f97316)",
        description:
          "Create ideas for health technology, wellness, and telemedicine. Innovations in remote patient monitoring, virtual consultations, and platforms to improve healthcare access in underserved regions.",
        tags: ["Telemedicine", "Wellness", "MHealth"],
      },
      {
        icon: "fas fa-seedling",
        title: "Agriculture & Food Security",
        color: "linear-gradient(135deg, #22c55e, #84cc16)",
        description:
          "Explore solutions for sustainable agriculture, food security, and innovative farming techniques. Technology to improve food supply chains, yields, and market access for farmers.",
        tags: ["AgriTech", "Food", "Farming"],
      },
      {
        icon: "fas fa-recycle",
        title: "Sustainable Waste Management",
        color: "linear-gradient(135deg, #06b6d4, #3b82f6)",
        description:
          "Ideate solutions for waste management and eco-friendly initiatives. Solar-powered innovations, recycling breakthroughs, and value-added products from waste like organic fertilizers.",
        tags: ["GreenTech", "Recycling", "Sustainability"],
      },
      {
        icon: "fas fa-graduation-cap",
        title: "Education & Skill Development",
        color: "linear-gradient(135deg, #a855f7, #ec4899)",
        description:
          "Create projects around innovative teaching methods, digital learning tools, and skill-building initiatives. Supporting primary education and skill-based solutions for rural communities.",
        tags: ["EdTech", "Skills", "Learning"],
      },
      {
        icon: "fas fa-users",
        title: "Social Impact & Empowerment",
        color: "linear-gradient(135deg, #f59e0b, #ef4444)",
        description:
          "Create social technology solutions to empower the most rural, last-mile population. Addressing social challenges, women's empowerment, and public health campaigns.",
        tags: ["SocialTech", "Empowerment", "Impact"],
      },
    ],
  },

  /* ----------------------------------------------------------
   * GALLERY — Images showcase
   * ---------------------------------------------------------- */
  GALLERY: {
    sectionLabel: "Our Gallery",
    heading: "Where Innovation Meets Opportunity",
    subheading: "Coming together for a progressive Bharat.",
    /**
     * HOW TO ADD/CHANGE GALLERY IMAGES:
     * Add image objects to the array below.
     * Place images in: assets/images/gallery/
     * 'src'  : path to the image file
     * 'alt'  : descriptive alt text (important for accessibility)
     * 'caption' : short caption shown on hover
     */
    images: [
      {
        src: "assets/images/gallery-1.jpg",
        alt: "Innovent group photo — participants, mentors and faculty at NMIMS Shirpur",
        caption: "Innovent Programme — Group Photo",
      },
      {
        src: "assets/images/gallery-2.jpg",
        alt: "Innovent participants brainstorming ideas",
        caption: "Brainstorming Sessions",
      },
      {
        src: "assets/images/gallery-3.jpg",
        alt: "Mentors guiding student innovators",
        caption: "Mentorship Programs",
      },
      {
        src: "assets/images/gallery-4.jpg",
        alt: "Students presenting their innovative ideas",
        caption: "Idea Presentations",
      },
      {
        src: "assets/images/gallery-5.jpg",
        alt: "Award ceremony at Innovent",
        caption: "Award Ceremony",
      },
      {
        src: "assets/images/gallery-6.jpg",
        alt: "Networking event at Innovent",
        caption: "Networking",
      },
    ],
    flyers: [
      {
        label: "Download English Flyer",
        href: "assets/images/innovent-flyer-english.png",
      },
      {
        label: "Download Marathi Flyer",
        href: "assets/images/innovent-flyer-marathi.png",
      },
    ],
  },

  /* ----------------------------------------------------------
   * TEAM — Team members
   * ---------------------------------------------------------- */
  TEAM: {
    sectionLabel: "Our Team",
    heading: "Meet the Team",
    subheading: "The passionate minds driving innovation across campus.",
    /**
     * HOW TO ADD/EDIT TEAM MEMBERS:
     * Add objects to the array below.
     * 'photo' : image path inside assets/images/
     * 'social': add/remove social link objects as needed
     */
    members: [
      {
        name: "Dr. Swapnil Mahajan",
        role: "Center In-Charge and Head Incubation",
        bio: "NMIMS Sobus Center of Excellence for Innovation and Entrepreneurship, SVKM's NMIMS Mukesh Patel Technology Park, Shirpur.",
        photo: "assets/images/Dr. SGM Photo.JPG",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Daksh Gurjar",
        role: "President",
        bio: "Leading the Innovent initiative with vision and dedication.",
        photo: "assets/images/Daksh_Gurjar.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Ronit Gandhi",
        role: "President",
        bio: "Driving innovation and fostering entrepreneurial thinking.",
        photo: "assets/images/Ronit_Gandhi.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Ayushi Joshi",
        role: "Vice President",
        bio: "Supporting leadership and coordinating strategic initiatives.",
        photo: "assets/images/Ayushi_Joshi.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Minakshi Singh",
        role: "Vice President",
        bio: "Ensuring smooth operations and team coordination.",
        photo: "assets/images/Minakshi_Singh.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Krishita Lodhiya",
        role: "EM Lead",
        bio: "Managing events and creating memorable experiences.",
        photo: "assets/images/Krishita_Lodhiya.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Yash Gehlot",
        role: "EM Lead",
        bio: "Orchestrating event logistics and participant engagement.",
        photo: "assets/images/Yash_Gehlot.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Neelansh Kansal",
        role: "SMM Lead",
        bio: "Building digital presence and social media strategy.",
        photo: "assets/images/Neelansh_kansal.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Gurjot Singh",
        role: "SMM Lead",
        bio: "Creating engaging content and managing online communities.",
        photo: "assets/images/Gurjot_Singh.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Vidhi Shah",
        role: "Documentation Lead",
        bio: "Maintaining records and ensuring comprehensive documentation.",
        photo: "assets/images/Vidhi_Shah.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Monashmi Chatterjee",
        role: "Documentation Lead",
        bio: "Organizing information and streamlining documentation processes.",
        photo: "assets/images/Monashmi_Chatterjee.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Tanisq Kaur Makhija",
        role: "PR & Marketing Lead",
        bio: "Amplifying Innovent's reach through strategic marketing.",
        photo: "assets/images/Tanisq_Kaur_Makhija.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
      {
        name: "Vaibhav Raghuvanshi",
        role: "PR & Marketing Lead",
        bio: "Building partnerships and promoting innovation initiatives.",
        photo: "assets/images/Vaibhav_Raghuvanshi.jpeg",
        social: [
          { platform: "linkedin", icon: "fab fa-linkedin", href: "#" },
        ],
      },
    ],
  },

  /* ----------------------------------------------------------
   * REGISTRATION — CTA section before footer
   * ---------------------------------------------------------- */
  REGISTRATION: {
    badge: "Join Innovent 2025",
    heading: "Ready to Transform Your Idea?",
    subheading:
      "Join hundreds of innovators from across India. Present your ideas, get mentored, and win recognition at village, taluka, and city levels.",
    ctaLabel: "Register Now — It's Free!",
    note: "Open to students from all colleges across India. No entry fee.",
  },

  /* ----------------------------------------------------------
   * CONTACT — Contact info & footer
   * ---------------------------------------------------------- */
  CONTACT: {
    sectionLabel: "Get In Touch",
    heading: "Contact Us",
    subheading: "Have questions? We'd love to hear from you.",
    info: [
      {
        icon: "fas fa-map-marker-alt",
        label: "Address",
        value: "Sobus Center of Excellence, NMIMS Campus, Shirpur",
      },
      {
        icon: "fas fa-envelope",
        label: "Email",
        value: "info@sobusinsight.org",
        href: "mailto:info@sobusinsight.org",
      },
      {
        icon: "fas fa-envelope",
        label: "Careers",
        value: "career@sobusinsight.org",
        href: "mailto:career@sobusinsight.org",
      },
    ],
    social: [
      { platform: "Instagram", icon: "fab fa-instagram", href: "#" },
      { platform: "LinkedIn",  icon: "fab fa-linkedin",  href: "#" },
      { platform: "Twitter",   icon: "fab fa-twitter",   href: "#" },
      { platform: "YouTube",   icon: "fab fa-youtube",   href: "#" },
    ],
    footerLinks: [
      { label: "Home",      href: "#home" },
      { label: "About",     href: "#about" },
      { label: "Topics",    href: "#topics" },
      { label: "Timeline",  href: "#timeline" },
      { label: "Register",  href: "registrationLink" },
    ],
    copyright: "© 2025 Sobus Insight Forum. All rights reserved.",
    builtFor: "Built for a better Bharat.",
  },
};
