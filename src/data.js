export const personalInfo = {
    name: "Cole Swinford",
    tagline: "I build things.",
    role: "Software Engineer",
    // Splitting bio into structured paragraphs for better layout
    bioTitle: "Problem Solver & Builder",
    bioP1: "Driven by ownership and impact, I specialize in architecting full-cycle solutions—taking complex, open-ended business problems and turning them into reliable production systems. Whether I’m designing new platforms from scratch or optimizing performance-critical legacy code, I prioritize maintainability, scalability, and pragmatic design.",
    bioP2: "Beyond my professional work, I’m a tinkerer at heart. This site serves as a home for my personal experiments, open-source contributions, and the projects I build to satisfy my curiosity.",
    email: "site.coleswinford@gmail.com",
    socials: {
        github: "https://github.com/ColeSwinford",
        linkedin: "https://www.linkedin.com/in/steven-cole-swinford-94553b11b/"
    }
};

export const skills = [
    "C, C++, Assembly", "C# / .NET Core", "HTML, CSS, JavaScript", 
    "Python", "SQL / Database Design", "Java", "AWS / GCP / Azure", 
    "Linux Administration", "Git / CI/CD", "Virtualization", 
    "Docker / Kubernetes", "System Architecture", "Data Structures", 
    "Machine Learning", "FPGAs / VHDL"
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
            "Enhanced new features of the flagship Squeaks product and integration with Microsoft Teams",
            "Used .NET with C# for fullstack Windows development"
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
    title: "Zenodoro",
    description: "Relaxing, zen-themed pomodoro timer",
    link: "https://coleswinford.github.io/Zenodoro/",
    image: "/images/zenodoro.png"
};