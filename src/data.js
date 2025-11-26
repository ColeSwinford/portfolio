export const personalInfo = {
    name: "Cole Swinford",
    tagline: "I build things.",
    role: "Software Engineer",
    // Splitting bio into structured paragraphs for better layout
    bioTitle: "Problem Solver & Builder",
    bioP1: "Driven by ownership and impact, I specialize in architecting full-cycle solutions—taking complex, open-ended technical challenges and turning them into reliable production systems. Whether I’m designing new platforms from scratch or optimizing efficiency and architecture, I focus on maintainability, scalability, and pragmatic design.",
    bioP2: "Beyond my professional work, I’m a tinkerer at heart. This site serves as a home for my personal experiments, open-source contributions, and the projects I build to satisfy my curiosity.",
    email: "site.coleswinford@gmail.com",
    socials: {
        github: "https://github.com/ColeSwinford",
        linkedin: "https://www.linkedin.com/in/steven-cole-swinford-94553b11b/"
    }
};

export const skills = [
    "System Architecture", "C# / .NET", "Docker / Kubernetes", "Git / CI/CD", 
    "SQL / Database Design", "AWS / GCP / Azure", "HTML, CSS, JavaScript, React",
    "Python", "Machine Learning", "Linux Administration", "Java", "Data Structures", 
    "C, C++, Assembly", "FPGAs / VHDL"
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
            "As the organization's first engineer, established modern development standards to reduce technical debt and improve codebase maintainability",
            "Architected internal platforms that automated manual insurance workflows and boosted operational efficiency",
            "Established the organization’s first CI/CD pipelines, transitioning from ad-hoc deployments to reliable, gated releases",
            "Translated complex operational requirements into scalable, production-ready software solutions"
        ]
    },
    {
        id: "IGear Co-op III",
        title: "Software Engineer Co-op III",
        company: "IGear",
        link: "https://www.IGear.com/",
        dates: "May - August 2024",
        bullets: [
            "Enhanced new features of the flagship Squeaks product and integration with Microsoft Teams",
            "Used .NET with C# for fullstack Windows development"
        ]
    },
    {
        id: "IGear Co-op II",
        title: "Software Engineer Co-op II",
        company: "IGear",
        link: "https://www.IGear.com/",
        dates: "August - December 2023",
        bullets: [
            "Built foundation of Microsoft Teams integration feature for flagship Squeaks product",
            "Used Microsoft Teams Adaptive Cards using Markup, Typescript, and .NET with C#",
            "Implemented products using Docker containers and Kubernetes",
            "Built web apps using ASP .NET Razor/Blazor frameworks using HTML, CSS, JavaScript, and C#"
        ]
    },
    {
        id: "IGear Co-op I",
        title: "Software Engineer Co-op I",
        company: "IGear",
        link: "https://www.IGear.com/",
        dates: "January - May 2023",
        bullets: [
            "Prototyped fullstack implementations of new technologies on Windows using .NET with C#",
            "Debugged apps using Android Studio with Kotlin and Markup"
        ]
    }
];

export const projects = [
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
    description: "Spotify playlist aggregator, search, and export",
    tech: "HTML • CSS • Javascript • React",
    link: "https://coleswinford.github.io/spotify-aggregator/",
    image: "/images/Spotify_Aggregator.png"
};