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

export const skills = [
    "System Architecture",
    "C# / .NET",
    "Docker",
    "Git / CI/CD",
    "SQL / Database Design",
    "MongoDB",
    "Azure",
    "HTML, CSS, JavaScript, React",
    "Python",
    "Linux Administration"
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

export const projects = [
    {
        title: "Spotify Backup",
        description: "Self-hosted Dockerized Python utility to locally archive complete Spotify library metadata.",
        tech: "Python • Docker • Bash • REST API",
        icon: "fa-brands fa-github",
        link: "https://github.com/ColeSwinford/spotify-backup",
        image: "/images/spotify-backup.png"
    },
    {
        title: "IG Analyzer",
        description: "Instagram followers analyzer and export",
        tech: "HTML • CSS • Javascript • React",
        icon: "fa-brands fa-github",
        link: "https://coleswinford.github.io/ig-analyzer/",
        image: "/images/IG_Analyzer.png"
    },
    {
        title: "Zenodoro",
        description: "Relaxing, zen-themed pomodoro timer",
        tech: "HTML • CSS • JavaScript",
        icon: "fa-brands fa-github",
        link: "https://coleswinford.github.io/Zenodoro/",
        image: "/images/zenodoro.png"
    },
    {
        title: "EZ Hotkey",
        description: "Easy-to-use hotkey program for Windows",
        tech: "Python",
        icon: "fa-brands fa-github",
        link: "https://github.com/ColeSwinford/Python--EZ-Hotkey",
        image: "/images/EZ_Hotkey.png"
    },
    {
        title: "Funky Monkey Friday",
        description: "Discord bot that alerts your server when it's Funky Monkey Friday",
        tech: "Python • discord.py",
        icon: "fa-brands fa-github",
        link: "https://github.com/ColeSwinford/Python--Funky-Monkey-Friday-Bot",
        image: "/images/FMF.png"
    }
];

export const featuredProject = {
    title: "Spotify Aggregator",
    description: "Spotify playlist aggregator, search, and export. (view demo on repo)",
    tech: "HTML • CSS • Javascript • React • REST API",
    link: "https://github.com/ColeSwinford/spotify-aggregator",
    image: "/images/Spotify_Aggregator.png"
};