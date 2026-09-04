export const personalInfo = {
  name: "Ashlesha Dhopekar",
  role: "CSE Student | Web Developer | UI/UX Enthusiast",
  greeting: "Hi, I'm Ashlesha 👋",
  tagline: "Computer Science Engineering Student & Aspiring Web Developer",
  location: "Nagpur, Maharashtra, India",
  college: "Tulsiramji Gaikwad Patil College of Engineering, Nagpur",
  degree: "B.Tech in Computer Science & Engineering",
  year: "1st Year Undergraduate",
  email: "ashlesha.dhopekar@example.com",
  phone: "+91 98765 43210",
  github: "https://github.com/ashlesha-dhopekar",
  linkedin: "https://linkedin.com/in/ashlesha-dhopekar",
  bio: "I am a passionate 1st-year Computer Science Engineering student with a strong drive for frontend web development and modern UI/UX design. I love transforming complex ideas into clean, user-friendly, and visually appealing web experiences.",
  aboutDetailed: [
    "Currently pursuing my B.Tech in Computer Science & Engineering at Tulsiramji Gaikwad Patil College of Engineering, Nagpur. I possess a curious mind constantly looking to learn new frameworks, design paradigms, and coding best practices.",
    "My focus lies in building responsive, modern web applications using React.js and Tailwind CSS. I pay extra attention to micro-interactions, dark mode elegance, and clean architecture.",
    "Beyond coding, I actively contribute to campus tech events like TechXplore as an event coordinator, participate in hackathons, and collaborate with peers on innovative projects."
  ],
  stats: [
    { label: "Degree", value: "B.Tech CSE" },
    { label: "Projects Completed", value: "4+" },
    { label: "Tech Skills", value: "10+" },
    { label: "Leadership Roles", value: "Event Lead" }
  ]
};

export const skillsData = [
  { name: "HTML5", category: "Frontend", level: 92, icon: "Code2", color: "from-orange-500 to-red-500", desc: "Semantic tags, accessibility, structural SEO" },
  { name: "CSS3", category: "Frontend", level: 90, icon: "Palette", color: "from-blue-500 to-cyan-500", desc: "Flexbox, Grid, keyframes, custom properties" },
  { name: "JavaScript", category: "Frontend", level: 85, icon: "FileCode2", color: "from-yellow-400 to-amber-500", desc: "ES6+, Async/Await, DOM manipulation, APIs" },
  { name: "React.js", category: "Frontend", level: 82, icon: "Atom", color: "from-cyan-400 to-blue-600", desc: "Hooks, state management, reusable components" },
  { name: "Tailwind CSS", category: "Frontend", level: 88, icon: "Layers", color: "from-sky-400 to-teal-500", desc: "Utility-first design, dark mode, responsive grids" },
  { name: "C Programming", category: "Languages", level: 80, icon: "Terminal", color: "from-blue-600 to-indigo-700", desc: "Data structures, memory allocation, logic building" },
  { name: "Python", category: "Languages", level: 78, icon: "Binary", color: "from-emerald-400 to-teal-600", desc: "Basic algorithms, scripting, problem solving" },
  { name: "Git & GitHub", category: "Tools", level: 84, icon: "GitBranch", color: "from-orange-600 to-rose-600", desc: "Version control, branching, PRs, repository management" },
  { name: "Responsive Web Design", category: "Design", level: 90, icon: "Layout", color: "from-purple-500 to-pink-500", desc: "Mobile-first layouts, break-point optimization" },
  { name: "UI/UX Design", category: "Design", level: 85, icon: "Figma", color: "from-fuchsia-500 to-indigo-500", desc: "User journeys, wireframing, color harmony, typography" }
];

export const projectsData = [
  {
    id: "ecommerce",
    title: "Electronic E-Commerce Website",
    category: "Web Application",
    shortDesc: "A modern online gadget store with interactive product catalog, category filters, shopping cart management, and checkout UI.",
    fullDesc: "Tech Hub is a feature-rich e-commerce store crafted for electronics and gadgets. It features dynamic filtering by price and brand, live product search, modal preview, reactive cart management with total calculation, and a clean dark/light UI.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "Context API"],
    imageType: "ecommerce",
    github: "https://github.com/ashlesha-dhopekar/electronic-ecommerce",
    demo: "https://tech-hub-gadgets.example.com",
    features: [
      "Dynamic search & category filtering",
      "Interactive shopping cart drawer with quantity manager",
      "Product quick-view detail modal",
      "Responsive checkout workflow design"
    ]
  },
  {
    id: "portfolio",
    title: "Personal Developer Portfolio",
    category: "Web Application",
    shortDesc: "A sleek, recruiter-friendly personal portfolio showcasing CSE education, skills, projects, and hackathon achievements.",
    fullDesc: "Designed and engineered from scratch using React.js and Tailwind CSS. Features dynamic Light/Dark theme switching, smooth scroll navigation, interactive modal viewers, and clean typography tailored for tech recruiters.",
    tags: ["React.js", "Tailwind CSS", "Lucide Icons", "Responsive UI"],
    imageType: "portfolio",
    github: "https://github.com/ashlesha-dhopekar/personal-portfolio",
    demo: "https://ashlesha-portfolio.example.com",
    features: [
      "Seamless dark/light mode toggle",
      "Interactive resume viewer modal",
      "Filterable skill cards with proficiency meters",
      "Validated contact form with instant notifications"
    ]
  },
  {
    id: "bookstore",
    title: "Bookstore Website",
    category: "Web Application",
    shortDesc: "Online book browsing platform with reading list bookmarking, genre sorting, and reviews section.",
    fullDesc: "BookVerse is an aesthetic digital library where users can explore trending books, filter by genre (Tech, Fiction, Science, CSE Textbooks), preview synopsis, and manage a personalized reading list.",
    tags: ["React.js", "CSS3", "JavaScript", "Local Storage"],
    imageType: "bookstore",
    github: "https://github.com/ashlesha-dhopekar/bookstore-app",
    demo: "https://bookverse-library.example.com",
    features: [
      "Genre-wise book filtering & search",
      "Personalized 'Wishlist / Favorites' saved in LocalStorage",
      "Detailed book modal with author details & rating overview",
      "Clean reader-focused typography"
    ]
  },
  {
    id: "landing",
    title: "Responsive Tech Landing Page",
    category: "Landing Page",
    shortDesc: "High-conversion SaaS product showcase landing page featuring pricing cards, testimonial slider, and call-to-action sections.",
    fullDesc: "A modern SaaS landing page designed for a next-gen developer workflow tool. Implements micro-interactions, smooth hover animations, pricing toggle (Monthly/Yearly), and responsive mobile drawer navigation.",
    tags: ["HTML5", "Tailwind CSS", "JavaScript", "UI/UX"],
    imageType: "landing",
    github: "https://github.com/ashlesha-dhopekar/responsive-saas-landing",
    demo: "https://saas-flow-landing.example.com",
    features: [
      "Hero section with dynamic visual mockup",
      "Pricing matrix with monthly/annual billing switch",
      "Customer review testimonials grid",
      "100% mobile-friendly responsive layout"
    ]
  }
];

export const experienceData = [
  {
    role: "Event Coordinator",
    organization: "TechXplore - National Level Technical Fest",
    period: "2024 - Present",
    location: "TGPCET, Nagpur",
    type: "Leadership & Event Management",
    description: "Spearheaded planning and execution of coding competitions and web development workshops during the annual college technical festival.",
    points: [
      "Coordinated with 200+ participants across various inter-college coding events.",
      "Managed event logistics, marketing banners, and online registration portals.",
      "Assisted judges in evaluating web development and UI design submissions."
    ],
    badge: "Tech Fest Leader"
  },
  {
    role: "College Event Management Team Member",
    organization: "Tulsiramji Gaikwad Patil College of Engineering",
    period: "2024 - Present",
    location: "Nagpur, Maharashtra",
    type: "Teamwork & Volunteer",
    description: "Active student coordinator involved in organizing cultural, technical, and academic seminars across the CSE department.",
    points: [
      "Facilitated guest speaker hosting and workshop stage arrangements.",
      "Designed promotional graphics and event posters using modern design tools.",
      "Ensured smooth participant onboarding and time management."
    ],
    badge: "Student Representative"
  },
  {
    role: "Hackathon Participant",
    organization: "College & Regional Hackathons",
    period: "2024",
    location: "Nagpur",
    type: "Innovation & Problem Solving",
    description: "Collaborated in 24-hour hackathon teams to build rapid prototype web applications addressing real-world problems.",
    points: [
      "Built responsive frontend prototypes within tight deadlines.",
      "Pitched technical solutions to mentor panels and industry judges.",
      "Strengthened teamwork, Git workflow, and fast-paced problem solving."
    ],
    badge: "Hackathon Competitor"
  },
  {
    role: "Frontend Developer (Self-Directed)",
    organization: "Independent Learning & Open Source",
    period: "2024 - Present",
    location: "Remote / Self-Paced",
    type: "Technical Development",
    description: "Continuously building practical web applications to master modern frontend technologies and clean UI paradigms.",
    points: [
      "Created 4+ complete web application projects using React.js and Tailwind CSS.",
      "Implemented clean code architecture and Git version control practices.",
      "Practiced modern UI/UX design concepts including glassmorphism and dark mode design."
    ],
    badge: "Web Dev Enthusiast"
  }
];

export const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Tulsiramji Gaikwad Patil College of Engineering (TGPCET)",
    location: "Nagpur, Maharashtra, India",
    period: "2024 - 2028 (Expected)",
    status: "First Year (1st Sem)",
    highlights: [
      "Core Subjects: C Programming, Engineering Mathematics, Digital Logic, Basic Electrical & Electronics",
      "Active member of CSE Student Technical Club",
      "Event Coordinator for TechXplore Annual Tech Fest"
    ]
  },
  {
    degree: "Higher Secondary Certificate (HSC - 12th)",
    institution: "State Board of Secondary & Higher Secondary Education",
    location: "Nagpur, Maharashtra",
    period: "2022 - 2024",
    status: "Completed",
    highlights: [
      "Stream: Science (Physics, Chemistry, Mathematics & Information Technology)",
      "Developed early interest in Computer Programming & Logic Building"
    ]
  },
  {
    degree: "Secondary School Certificate (SSC - 10th)",
    institution: "State Board of Secondary & Higher Secondary Education",
    location: "Nagpur, Maharashtra",
    period: "2022",
    status: "Completed",
    highlights: [
      "Academic Distinction with focus on Mathematics and Science",
      "Participated in school science exhibitions and essay competitions"
    ]
  }
];

export const achievementsData = [
  {
    title: "TechXplore Event Coordinator Recognition",
    issuer: "TGPCET Nagpur",
    date: "2024",
    category: "Leadership",
    description: "Awarded Certificate of Appreciation for successfully organizing and coordinating the TechXplore technical festival.",
    icon: "Award"
  },
  {
    title: "Web Development Certification",
    issuer: "Online Learning Platform",
    date: "2024",
    category: "Technical Skill",
    description: "Completed comprehensive training in Modern HTML5, CSS3, JavaScript ES6+, and React.js web application development.",
    icon: "GraduationCap"
  },
  {
    title: "College Hackathon Finalist",
    issuer: "CSE Department Hackathon",
    date: "2024",
    category: "Competition",
    description: "Recognized among top teams for building a rapid web prototype for smart campus event management.",
    icon: "Trophy"
  },
  {
    title: "UI/UX Design Workshop",
    issuer: "Design Enthusiasts Guild",
    date: "2024",
    category: "Design",
    description: "Participated in hands-on masterclass covering wireframing, color psychology, and mobile-first responsive layout design.",
    icon: "Sparkles"
  }
];
