export const personalInfo = {
    name: "Cole Swinford",
    tagline: "I build things.",
    role: "Software Engineer",
    bioTitle: "Problem Solver & Builder",
    bioP1: "Driven by ownership and impact, I specialize in architecting full-cycle solutions—taking complex, open-ended technical challenges and turning them into reliable production systems. Whether I’m designing new platforms from scratch or optimizing efficiency and architecture, I focus on maintainability, scalability, and pragmatic design.",
    bioP2: "Beyond my professional work, I’m a tinkerer at heart. This site serves as a home for my personal experiments, open-source contributions, and the projects I build to satisfy my curiosity.",
    email: "hello@coleswinford.com",
    socials: {
        github: "https://github.com/ColeSwinford",
        linkedin: "https://www.linkedin.com/in/steven-cole-swinford-94553b11b/"
    }
};

export const skillCategories = [
    {
        category: "Languages & Frameworks",
        skills: [
            "C# / .NET",
            ".NET Web APIs & Blazor",
            "TypeScript",
            "Python"
        ]
    },
    {
        category: "Backend & Systems",
        skills: [
            "RESTful API Design",
            "Background Services",
            "System Observability & Logging",
            "Automated Workflows"
        ]
    },
    {
        category: "Data & Persistence",
        skills: [
            "MongoDB (NoSQL)",
            "SQL & Relational Databases",
            "Database Schema Design"
        ]
    },
    {
        category: "DevOps & Infrastructure",
        skills: [
            "Docker & Containerization",
            "CI/CD Build & Deployment",
            "Cloud Infrastructure",
            "Linux & Shell Scripting"
        ]
    }
];

// ... (Experience and Projects arrays remain the same as before)
export const experience = [
    {
        id: "SIHO Insurance",
        title: "Software Engineer",
        company: "SIHO Insurance",
        link: "https://www.siho.org/",
        dates: "June 2025 - Present",
        bullets: [
            "Operating as the organization's first dedicated software engineer, owning the end-to-end technical architecture, DevOps infrastructure, and platform modernization strategy.",
            "Architected a modular monolith application structure, strictly defining module boundaries and data ownership to eliminate premature distributed-system complexity while ensuring future scalability.",
            "Established the organization's CI/CD pipeline and built a standardized Docker containerization strategy, reducing manual deployment efforts by over 90%.",
            "Developed reusable internal libraries for Serilog structured logging and Azure Communication Services, reducing setup time for new services by 85%.",
            "Engineered automated background solutions across core compliance and internal data workflows, eliminating manual bottlenecks and cutting processing times from hours to minutes."
        ]
    },
    {
        id: "IGear Co-op III",
        title: "Software Engineer Co-op III",
        company: "IGear",
        link: "https://www.IGear.com/",
        dates: "May - August 2024",
        bullets: [
            "Developed core system enhancements for the flagship Squeaks platform and expanded its Microsoft Teams integration.",
            "Engineered full-stack C# and .NET application components, connecting desktop client UIs with backend service logic."
        ]
    },
    {
        id: "IGear Co-op II",
        title: "Software Engineer Co-op II",
        company: "IGear",
        link: "https://www.IGear.com/",
        dates: "August - December 2023",
        bullets: [
            "Developed the foundational Microsoft Teams integration for the flagship Squeaks product, building custom Adaptive Cards with TypeScript, .NET, and C#.",
            "Built web applications using ASP.NET Core, Blazor, HTML, CSS, and C#.",
            "Containerized and deployed application services using Docker and Kubernetes."
        ]
    },
    {
        id: "IGear Co-op I",
        title: "Software Engineer Co-op I",
        company: "IGear",
        link: "https://www.IGear.com/",
        dates: "January - May 2023",
        bullets: [
            "Prototyped full-stack .NET and C# feature concepts on Windows environments to evaluate technical viability.",
            "Executed quality assurance and UI testing for mobile applications using Android Studio, Kotlin, and Markup."
        ]
    }
];

export const featuredProject = {
    title: "Local AI Video Compressor",
    description: "A fully client-side, privacy-first video compressor using in-browser computer vision models and WebCodecs hardware acceleration to hit exact target file sizes.",
    tech: "TypeScript • ONNX WebGPU • WebCodecs • WebAssembly",
    link: "https://video-compressor.coleswinford.com/",
    image: "/images/Local_AI_Video_Compressor.webp"
};

export const projects = [
    {
        title: "Spotify Backup",
        description: "Self-hosted Dockerized Python utility to locally archive complete Spotify library metadata.",
        tech: "Python • Docker • Bash • REST API",
        link: "https://github.com/ColeSwinford/spotify-backup",
        image: "/images/spotify-backup.svg",
        icon: "github"
    },
    {
        title: "IG Analyzer",
        description: "Instagram follower analysis and export utility.",
        tech: "React • JavaScript",
        link: "https://github.com/ColeSwinford/IG-Analyzer",
        image: "/images/IG_Analyzer.svg",
        icon: "github"
    },
    {
        title: "Spotify Aggregator",
        description: "Spotify playlist aggregation, search, and export engine.",
        tech: "React • JavaScript • REST API",
        link: "https://github.com/ColeSwinford/Spotify-Aggregator",
        image: "/images/Spotify_Aggregator.svg",
        icon: "github"
    },
    {
        title: "Zenodoro",
        description: "Relaxing, zen-themed pomodoro timer.",
        tech: "JavaScript • CSS • HTML",
        link: "https://github.com/ColeSwinford/Zenodoro",
        image: "/images/zenodoro.webp",
        icon: "github"
    },
    {
        title: "EZ Hotkey",
        description: "Lightweight Windows hotkey and automation utility.",
        tech: "Python",
        link: "https://github.com/ColeSwinford/EZ-Hotkey",
        image: "/images/EZ_Hotkey.webp",
        icon: "github"
    },
    {
        title: "Funky Monkey Friday",
        description: "Discord bot delivering scheduled server notifications for Funky Monkey Friday.",
        tech: "Python • discord.py",
        link: "https://github.com/ColeSwinford/funky-monkey-friday",
        image: "/images/FMF.webp",
        icon: "github"
    }
];
