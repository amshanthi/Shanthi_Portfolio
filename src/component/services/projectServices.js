const projects = [
    {
        id: 1,
        title: "Game Hub",
        description:
            "A collection of interactive HTML5 games built with JavaScript and CreateJS.",
        tech: ["HTML5", "JavaScript", "CreateJS", "TweenJS/GSAP", "Adobe Animate"],
        image: "/projects/game-hub.png",
        demo: "https://game-83v945h43-shanthis-projects-52be68d7.vercel.app/",
        github: "https://github.com/amshanthi/GameHub",
        category: "game",
    },
    // {
    //     id: 2,
    //     title: "NextCart E-Commerce ",
    //     description:
    //         "A modern shopping application with product browsing and cart functionality.",
    //     tech: ["React", "JavaScript", "CSS", "Tailwind CSS"],
    //     image: "/projects/nextcart.png",
    //     demo: "/nextcart",
    //     github: "#",
    //     category: "react",
    // },
    {
        id: 3,
        title: "MovieFlix",
        description:
            "A movie discovery website to explore movies and view movie details.",
        tech: ["React", "JavaScript", "CSS", "REST API"],
        image: "/projects/movie-site.png",
        demo: "https://movieapp-8uo99o18c-shanthis-projects-52be68d7.vercel.app/",
        github: "https://github.com/amshanthi/MovieApp",
        category: "react",
    },
];
const skills = [
    {
        title: "Game Development",
        icon: "🎮",
        items: [
            "ActionScript 3",
            "Adobe Animate",
            "CreateJS",
            "HTML5 Canvas",
            "JavaScript",
            "GSAP",
            "Flash",
            "Game mechanics",
        ],
    },
    {
        title: "Frontend & Tools",
        icon: "💻",
        items: [
            "Reactjs",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "Git",
            "GitHub",
            "Vite",
        ],
    },
];
const experiences = [
    {
        year: "2013 – 2015",
        role: "AS3 Programmer",
        company: "Netaxis IT Solutions",
        description:
            "Started my career developing interactive Flash-based games and applications using ActionScript 3.",
    },
    {
        year: "2015 – 2016",
        role: "AS3 Programmer",
        company: "Yolk Tech",
        description:
            "Worked on interactive game development, animations, and user experiences using ActionScript 3 and Adobe Flash.",
    },
    {
        year: "2016 – 2025",
        role: "Associate HTML5 Developer",
        company: "Sankhyaa Learning Pvt. Ltd.",
        description:
            "Worked on HTML5 games and interactive learning experiences using JavaScript, CreateJS, Adobe Animate, and modern web technologies.",
    },
];
export { projects, skills, experiences };