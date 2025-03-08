gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(TextPlugin);
// Initialize Lenis
function smoothScroll() {

    const lenis = new Lenis({
        duration: 2,
        smooth: true,
        autoRaf: true,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
    });
    window.scrollTo(0, 0);
    lenis.scrollTo(0);

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
}
smoothScroll()
const allProjectData = [
    {
        poster: "/projects/Casa Carigar/casa_carigar.webp",
        hoverImg: "/projects/Casa Carigar/casa_carigar_hover.webp",
        title: "Casa Carigar",
        desc: "Luxuary Furniture Marketplace",
        sector: "Life Style",
        service: ["Shopify eCom Development", "Multi-Vendor eCom marketplace", "UI Design", "UX Design"]
    },
    {
        poster: "/projects/Dhamaka Record/Dhamaka_Records.webp",
        hovervideo: "/projects/Dhamaka Record/Dhamaka_Records_Hover.mp4",
        title: "Dhamaka",
        desc: "Marketing Agency",
        sector: "Life Style",
        service: ["UI Design", "UX Design", "Frontend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/Esquire India/Esquire_India.webp",
        hoverImg: "/projects/Esquire India/Esquire_India_Hover.webp",
        title: "Esquire India",
        desc: "Man at his best",
        sector: "Media",
        service: ["Custom CMS", "UI Design", "UX Design", "Frontend Development", "GSAP Web Animations", "Backend Development", "SEO Services"]
    },
    {
        poster: "/projects/Greek Life/Greek_Life.webp",
        hovervideo: "/projects/Greek Life/Greek_Life_Hover.mp4",
        title: "The Greek Life",
        desc: "Destination Management Services",
        sector: "Hospitality",
        service: ["UI Design", "UX Design", "Frontend Development", "Backend Development"]
    },
    {
        poster: "/projects/Hefty Art/Heafty_Art.webp",
        hovervideo: "/projects/Hefty Art/Heafty_Art_Hover.mp4",
        title: "Heafty Art",
        desc: "Web 3.0",
        sector: "ART",
        service: ["UI Design", "Frontend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/Indian Gaming League/IGL_Cover.webp",
        hoverImg: "/projects/Indian Gaming League/IGL_Hover.webp",
        title: "Indian Gaming League",
        desc: "eSport Platform",
        sector: "Life Style",
        service: ["UI Design", "UX Design", "Frontend Development", "Backend Development", "Custom CMS"]
    },
    {
        poster: "/projects/iWhiteKorea/iwhitekorea_1.webp",
        hovervideo: "/projects/iWhiteKorea/iwhitekorea_hover.mp4",
        title: "I White Korea",
        desc: "Korean Beauty Essentials",
        sector: "Beauty",
        service: ["UI Design", "UX Design", "Custom eCom Development", "SEO Services"]
    },
    {
        poster: "/projects/JustNosh/JustNosh.webp",
        title: "JustNosh",
        desc: "Gourmet Snacks",
        sector: "Food",
        service: ["Shopify eCom Development", "E-Commerce Optimizations"]
    },
    {
        poster: "/projects/Khelo Esports/Khelo_Esports.webp",
        hovervideo: "/projects/Khelo Esports/Khelo_Esports_Hover.mp4",
        title: "Khelo Esports",
        desc: "Esports Events",
        sector: "Life Style",
        service: ["UI Design", "UX Design", "Frontend Development", "Backend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/Manifest/Manifest.webp",
        title: "Manifest",
        desc: "Wedding Magazine",
        sector: "Media",
        service: ["Custom CMS", "UI Design", "UX Design", "Frontend Development", "Backend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/Mr. and Mrs/Mr_and_Mrs.webp",
        hovervideo: "/projects/Mr. and Mrs/Mr_and_Mrs_Hover.mp4",
        title: "Mr. & Mrs.",
        desc: "Ads Production & Events",
        sector: "Advertising",
        service: ["UI Design", "UX Design", "Frontend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/Point Of/Point_Of.webp",
        hovervideo: "/projects/Point Of/Point_Of_Hover.mp4",
        title: "Point Of",
        desc: "Creative Agency",
        sector: "Advertising",
        service: ["UI Design", "UX Design", "Frontend Development", "Backend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/Rage Media/Rage_Media.webp",
        hovervideo: "/projects/Rage Media/Rage_Media_Hover.mp4",
        title: "Rage Media",
        desc: "Marketing Agency",
        sector: "Advertising",
        service: ["UI Design", "UX Design", "Frontend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/ResideInBeing/reside_in_being_hover.webp",
        hovervideo: "/projects/ResideInBeing/reside_in_being_hover_2.mp4",
        title: "ResideInBeing",
        desc: "Clothing Label",
        sector: "Fashion",
        service: ["Shopify eCom Development", "UI Design", "UX Design", "SEO Services"]
    },
    {
        poster: "/projects/RPSG Group/rpsg_group.webp",
        title: "RPSG Group",
        desc: "Indian Multinational Conglomerate",
        sector: "Media",
        service: ["Custom CMS", "UI Design", "UX Design", "Frontend Development", "Backend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/Sensei Store/Sensei_Store.webp",
        hovervideo: "/projects/Sensei Store/Sensei_Store_Hover.mp4",
        title: "The Senseis Store",
        desc: "eCommerce Store",
        sector: "Fashion",
        service: ["Custom eCom Development"]
    },
    {
        poster: "/projects/RPSG Lifestyle Media/RPSG_Media.webp",
        hoverImg: "/projects/RPSG Lifestyle Media/RPSG_Media_Hover.webp",
        title: "RPSG Lifestyle Media",
        desc: "Media Powerhouse",
        sector: "Media",
        service: ["UI Design", "UX Design", "Frontend Development", "GSAP Web Animations", "SEO Services"]
    },
    {
        poster: "/projects/THR India/THR_India.webp",
        hoverImg: "/projects/THR India/THR_India_Hover.webp",
        title: "THR India",
        desc: "Bollywood News & Entertainment",
        sector: "Media",
        service: ["UI Design", "UX Design", "SEO Services", "Frontend Development", "Backend Development", "GSAP Web Animations"]
    },
    {
        poster: "/projects/WineeMedia/Winee_Media.webp",
        hovervideo: "/projects/WineeMedia/Winee_Media_hover.mp4",
        title: "WineeMedia",
        desc: "Social Media Marketing Agency",
        sector: "Advertising",
        service: ["UI Design", "UX Design", "Frontend Development", "Backend Development", "GSAP Web Animations", "SEO Services"]
    },
    {
        poster: "/projects/Wealth Fusion/Wealth_Fusion.webp",
        title: "Wealth Fusion",
        desc: "Wealth Management Firm",
        sector: "Finance",
        service: ["UI Design", "UX Design", "Frontend Development", "GSAP Web Animations"]
    },

];

function allProjectRender() {
    var projectContainer = document.getElementById("all-project");
    projectRenderer(allProjectData, projectContainer)
}
allProjectRender()

function projectRenderer(data, container) {
    const isSmallScreen = window.innerWidth <= 576;

    data.forEach(project => {
        const projectElement = document.createElement("a");
        projectElement.href = "/details";
        projectElement.classList.add("project", "project-small");

        const showcaseDiv = document.createElement("div");
        showcaseDiv.classList.add("showcase");

        if (!isSmallScreen) {
            if (project.hovervideo) {
                const showcaseOverDiv = document.createElement("div");
                showcaseOverDiv.classList.add("showcase-over");

                const video = document.createElement("video");
                video.src = project.hovervideo;
                video.autoplay = true;
                video.muted = true;
                video.loop = true;
                video.setAttribute("playsinline", "");

                showcaseOverDiv.appendChild(video);
                showcaseDiv.appendChild(showcaseOverDiv);
                showcaseDiv.addEventListener("mouseenter", () => {
                    showcaseOverDiv.style.opacity = "1";
                });

                showcaseDiv.addEventListener("mouseleave", () => {
                    showcaseOverDiv.style.opacity = "0";
                });
            } else if (project.hoverImg) {
                const showcaseOverDiv = document.createElement("div");
                showcaseOverDiv.classList.add("showcase-over");

                const img = document.createElement("img");
                img.src = project.hoverImg;
                img.alt = "hover-image";

                showcaseOverDiv.appendChild(img);
                showcaseDiv.appendChild(showcaseOverDiv);
                showcaseDiv.addEventListener("mouseenter", () => {
                    showcaseOverDiv.style.opacity = "1";
                });

                showcaseDiv.addEventListener("mouseleave", () => {
                    showcaseOverDiv.style.opacity = "0";
                });
            }
        }

        const img = document.createElement("img");
        img.src = project.poster;
        img.alt = "project-banner";
        img.loading = "lazy";
        showcaseDiv.appendChild(img);

        const title = document.createElement("h3");
        title.textContent = project.title || "Project Title";

        const desc = document.createElement("h4");
        desc.textContent = project.desc || "Project Description";

        projectElement.appendChild(showcaseDiv);
        projectElement.appendChild(title);
        projectElement.appendChild(desc);

        container.appendChild(projectElement);
    });
    projectAnimation();
}


const porjectData = [
    {
        sectors: [
            {
                name: "ART",
                projects: [1]
            },
            {
                name: "Advertising",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Beauty",
                projects: [1]
            },
            {
                name: "Fashion",
                projects: [1, 2]
            },
            {
                name: "Food",
                projects: [1]
            },
            {
                name: "Finance",
                projects: [1]
            },
            {
                name: "Life Style",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Hospitality",
                projects: [1]
            },
            {
                name: "Media",
                projects: [1, 2, 3, 4, 5]
            }
        ]
    },
    {
        clients: [
            {
                client: "MoMA",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Gucci",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Marriott International",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Tesla",
                projects: [1, 2, 3, 4]
            },
            {
                client: "L'Oréal",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Goldman Sachs",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Nike",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Google",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Netflix",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Starbucks",
                projects: [1, 2, 3, 4]
            },
            {
                client: "Adidas",
                projects: [1, 2, 3, 4]
            }
        ]
    },
    {
        services: [
            {
                service: "UI Design",
                projects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
            },
            {
                service: "UX Design",
                projects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
            },
            {
                service: "Frontend Development",
                projects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            },
            {
                service: "GSAP Web Animations",
                projects: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
            },
            {
                service: "Backend Development",
                projects: [1, 2, 3, 4, 5, 6, 7, 8, 9]
            },
            {
                service: "SEO Services",
                projects: [1, 2, 3, 4, 5, 6]
            },
            {
                service: "Shopify eCom Development",
                projects: [1, 2, 3]
            },
            {
                service: "Custom eCom Development",
                projects: [1, 2]
            },
            {
                service: "Multi-Vendor eCom marketplace",
                projects: [1]
            },
            {
                service: "E-Commerce Optimizations",
                projects: [1]
            },
            {
                service: "Custom CMS",
                projects: [1, 2, 3, 4]
            }
        ]
    }
]

function textEffectAnimation() {
    document.querySelectorAll(".text-effect .effect").forEach(function (element) {
        var clutter2 = ""
        element.textContent.split("").forEach(function (letter) {
            if (letter === " ") {
                clutter2 += "<span>&nbsp;</span>"
            } else {
                clutter2 += `<span>${letter}</span>`
            }
        })
        element.innerHTML = clutter2
    })

    document.querySelectorAll(".text-effect").forEach(function (elem) {
        elem.addEventListener("mouseenter", function (e) {
            gsap.fromTo(e.currentTarget.children[0].querySelectorAll("span"), {
                y: "0%",
            }, {
                y: "-100%",
                // duration: .8,
                stagger: {
                    amount: .2
                },
            })
            gsap.fromTo(e.currentTarget.children[1].querySelectorAll("span"), {
                y: "0%",
            }, {
                y: "-100%",
                // duration: .8,
                stagger: {
                    amount: .2
                },
            })
        })
    })
}
textEffectAnimation()


function homeLoader() {
    // const urlParams = new URLSearchParams(window.location.search);
    // const mainFilter = urlParams.get('mainFilter');
    // if (mainFilter) return;
    var loader = gsap.timeline()
    loader
        .from(".upper", {
            opacity: 0,
            duration: .8,
            ease: "ease-in-out",
            delay: 2,
            stagger: {
                from: "center",
                amount: .2
            }
        }, "a")

        .from(".lower", {
            opacity: 0,
            duration: .8,
            ease: "ease-in-out",
            stagger: {
                amount: .2
            },
            delay: 2.1,
        }, "a")

        .from("#main", {
            backgroundColor: "#F5E31A",
            duration: .8,
            ease: "ease-in-out",
        }, "b")

        .from(".header-text", {
            bottom: "0%",
            duration: .6,
            // ease: "power3.out",
        }, "b")

        .from("#page2", {
            opacity: 0,
            y: 30,
            duration: 1,
            delay: -.5,
            ease: "power3.out",
        }, "c")

        .from("#filter-container", {
            opacity: 0,
            y: 10,
            duration: 1,
            delay: -.5,
            ease: "power3.out",
        }, "c")

        .from("nav", {
            opacity: 0,
            duration: 1,
            delay: -.5,
            ease: "power3.out",
        }, "c")
}
homeLoader()

function serviceListingAnimation() {
    const serviceDets = [
        "Digging deep to define your audience, vision, and what sets you apart.",
        "Positioning your brand with a clear mission and a bold identity.",
        "Crafting a voice and visual language that actually speaks to people.",
        "Designing logos, color palettes, and typography that make you instantly recognizable.",
        "Creating high-impact visuals that bring your brand to life.",
        "Writing words that don’t just fill space but make people feel something.",
        "Designing everything from business cards to billboards—cohesive, striking, and unforgettable.",
        "Designing experiences that feel intuitive, effortless, and built for engagement.",
        "Crafting sleek, high-end visuals that make your brand look like a million bucks.",
        "Fast, fluid, and pixel-perfect—our websites don’t just work; they impress.",
        "This is our playground. We craft mind-blowing GSAP animations that make websites feel alive.",
        "Powering your site with solid, scalable, and headache-free architecture.",
        "From technical SEO to on-page magic, we help you rank higher and get seen by the right people.",
        "Rock-solid hosting that keeps your website lightning-fast and always online.",
        "No compromises—enterprise-grade security to keep your data locked down.",
        "Because the internet never sleeps, and neither do we when it comes to keeping your site running.",
        "Powering high-performance Shopify stores with custom design, seamless UX, and rock-solid scalability.",
        "Ditch the templates—our tailor-made GSAP-enhanced stores deliver next-level design, freedom, and immersive shopping experiences.",
        "Building dynamic platforms where multiple vendors, customers, and cutting-edge features come together for a seamless ecosystem.",
        "Fine-tuning online stores with intuitive UX, frictionless checkouts, and data-driven strategies to boost conversions.",
        "Designing and developing sleek, high-performance apps that people actually love using.",
        "We don’t do cookie-cutter solutions—we build CMS platforms tailored to your needs.",
        "Whether it's niche or mass-market, we build digital marketplaces that stand out and scale up.",
        "High-traffic, high-functionality platforms designed for brands that want to be heard.",
        "Analyzing speed, security, and infrastructure to keep your platform fast, safe, and ahead of the game.",
        "Expert guidance on bespoke digital solutions, from choosing the right tech stack to building scalable, future-ready systems.",
        "A squad of elite developers, designers, and strategists working as an extension of your in-house team."
    ]

    document.querySelectorAll(".service-wrap .text-effect").forEach(function (textEffect) {
        textEffect.addEventListener("mouseenter", function (e) {
            const text = serviceDets[e.target.dataset.index]

            gsap.to(document.querySelector("#about-service-text"), {
                text: text,
                duration: 1,
                ease: "power3.out",
                overwrite: "auto"
            })
        })
        textEffect.addEventListener("mouseleave", function () {
            gsap.to(document.querySelector("#about-service-text"), {
                text: "",
                duration: 1,
                ease: "power3.out",
                overwrite: "auto"
            })
        })
    })
}
serviceListingAnimation()

var isMenuService = false;
var isService = false;
function serviceAnimation() {
    var previousLink = ""

    document.querySelectorAll(".service-open-btn").forEach(function (btn) {
        btn.addEventListener("click", function (e) {
            document.querySelector("#nav-service").classList.add("active");
            // document.querySelector("#studio-btn").classList.remove("active");
            isService = !isService;
            openService()
        })
    })
    document.querySelector("#closeService").addEventListener("click", function () {
        isService = !isService;
        openService()
        document.querySelector("#menu-button").textContent = "close"
        isMenuService = false;
        this.classList.remove("active");
        // document.querySelector("#studio-btn").classList.add("active");
    })


}
function openService() {
    if (isService) {
        gsap.set("nav", { backgroundColor: "#fff" })
        gsap.to("#main", {
            top: "calc(100% - 40px)",
            ease: "power3.out",
            duration: 1.2
        })
        gsap.to("#service-page", {
            top: "-40px",
            ease: "power3.out",
            duration: 1.2,
            onComplete: () => {
                gsap.set("body", { overflow: "hidden" })
            }
        })
    } else {
        document.querySelector("#nav-service").classList.remove("active")
        gsap.set("nav", { backgroundColor: "transparent" })
        gsap.to("#main", {
            top: "0%",
            ease: "power3.out",
            duration: 1.2
        })
        gsap.to("#service-page", {
            top: "-100%",
            ease: "power3.out",
            duration: 1.2,
            onComplete: () => {
                gsap.set("body", { overflow: "auto" })
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 200);
            }
        })
    }
}
serviceAnimation()

var currentCategory = "#featured-project"
// window.onload = function () {
//     const urlParams = new URLSearchParams(window.location.search);
//     const mainFilter = urlParams.get('mainFilter');

//     // If mainFilter exists
//     if (mainFilter) {
//         // Fade out the #featured-project element

//         currentCategory = "#all-project"
//         var allFilter = document.querySelectorAll("#filter-container p")
//         allFilter.forEach(function (filter) {
//             filter.classList.remove("active");
//             if (filter.textContent.toLowerCase() === "all") {
//                 filter.classList.add("active");
//             }
//         })
//         var navLink = document.querySelectorAll("nav p")
//         navLink.forEach(function (link) {
//             link.classList.remove("active");
//         })
//         document.querySelector("#nav-project").classList.add("active");


//         document.querySelector("#featured-project").style.opacity = 0;

//         // Use setTimeout to delay hiding it until opacity transition is complete
//         setTimeout(function () {
//             // Hide #featured-project after it fades out
//             document.querySelector("#featured-project").style.display = 'none';

//             // Show #all-project
//             const allProject = document.querySelector("#all-project");
//             allProject.style.display = 'flex'; // Show it immediately
//             setTimeout(() => {
//                 allProject.style.opacity = 1; // Fade it in
//             }, 50); // Delay for smooth transition
//         }, 500); // Match the duration of opacity transition
//     }
// };

const filterList = document.querySelector("#flip-filter-container")
const sectorBtn = document.querySelector("#sectors-btn")
// const clientBtn = document.querySelector("#client-btn")
const serviceBtn = document.querySelector("#service-btn")

function filterAnimation() {
    const allFilter = document.querySelectorAll("#filter-container p")
    allFilter.forEach(function (filter) {
        filter.addEventListener("click", function () {
            allFilter.forEach(function (item) {
                item.classList.remove("active");
            });
            if (this.textContent.toLowerCase() === "all") {
                filterList.style.opacity = "0";
                filterList.style.height = "0";
                filterList.style.padding = "0"
                // document.querySelector("#nav-project").classList.add("active");
            }
            // else {
            //     // document.querySelector("#nav-project").classList.remove("active");
            //     history.pushState(null, '', '/');
            // }
            this.classList.add("active");
        })
    })

    const navLink = document.querySelectorAll("nav p")
    navLink.forEach(function (link) {
        link.addEventListener("click", function () {
            navLink.forEach(function (item) {
                item.classList.remove("active");
            });
            this.classList.add("active");
        })
    })

    // ALL PROJECT FILTER
    document.querySelectorAll(".all-project-button").forEach(function (btn) {
        btn.addEventListener("click", function () {

            document.querySelectorAll(".listing-filter").forEach(function (p) {
                p.querySelector(".name-space").textContent = ``
                p.querySelector(".name-project-count").textContent = ``
                p.querySelector(".filter-close").innerHTML = ``
            })
            filterList.style.opacity = "0";
            filterList.style.height = "0";
            filterList.style.padding = "0"

            const page2Height = document.querySelector("#page2").getBoundingClientRect().top
            const currentContainer = document.querySelector(currentCategory)
            const projectContainer = document.querySelector("#all-project")

            if (currentCategory === '#all-project') {
                gsap.to(window, {
                    scrollTo: { y: 0, autoKill: false },
                    duration: 1
                })
                return; // Exit early, skipping the timeline
            }

            var tl = gsap.timeline()
            tl
                .to(currentContainer, {
                    onStart: function () {
                        gsap.to(window, {
                            scrollTo: { y: 0, autoKill: false },
                            duration: 1
                        })
                    },
                    opacity: 0,
                    ease: "power3.out",
                    duration: .5,
                    onComplete: function () {
                        gsap.set(currentContainer, { display: "none" })
                    }
                })
                .to(projectContainer, {
                    opacity: 1,
                    ease: "power3.out",
                    duration: .5,
                    onStart: function () {
                        gsap.set(projectContainer, { display: "flex" })
                    },
                    onComplete: function () {
                        currentCategory = "#all-project"
                        setTimeout(() => {
                            ScrollTrigger.refresh();
                        }, 200);
                    }
                })
        })
    })

    //FEATURED PROJECT FILTER
    document.querySelector("#featured-btn").addEventListener("click", function () {

        document.querySelectorAll(".listing-filter").forEach(function (p) {
            p.querySelector(".name-space").textContent = ``
            p.querySelector(".name-project-count").textContent = ``
            p.querySelector(".filter-close").innerHTML = ``
        })

        filterList.style.opacity = "0";
        filterList.style.height = "0";
        filterList.style.padding = "0"

        const page2Height = document.querySelector("#page2").getBoundingClientRect().top
        const currentContainer = document.querySelector(currentCategory)
        const projectContainer = document.querySelector("#featured-project")

        if (currentCategory === '#featured-project') {
            gsap.to(window, {
                scrollTo: { y: 0, autoKill: false },
                duration: 1
            })
            return; // Exit early, skipping the timeline
        }

        var tl = gsap.timeline()
        tl
            .to(currentContainer, {
                onStart: function () {
                    gsap.to(window, {
                        scrollTo: { y: 0, autoKill: false },
                        duration: 1
                    })
                },
                opacity: 0,
                ease: "power3.out",
                duration: .5,
                onComplete: function () {
                    gsap.set(currentContainer, { display: "none" })
                }
            })
            .to(projectContainer, {
                opacity: 1,
                ease: "power3.out",
                duration: .5,
                onStart: function () {
                    gsap.set(projectContainer, { display: "flex" })
                },
                onComplete: function () {
                    currentCategory = "#featured-project"
                    setTimeout(() => {
                        ScrollTrigger.refresh();
                    }, 200);
                }
            })
    })

    // LISTING FILTER
    document.querySelector("#flip-filter-container").addEventListener("click", function (e) {

        if (e.target.tagName === "P") {
            filterList.style.opacity = "0";
            filterList.style.height = "0";
            filterList.style.padding = "0";

            const currentContainer = document.querySelector(currentCategory);
            var projectContainer = document.querySelector("#filter-project");
            const filterBy = e.target.textContent.trim();

            function renderProjects(filterBy) {
                projectContainer.innerHTML = ""; // Clear previous content

                const filteredProjects = allProjectData.filter(project =>
                    project.sector === filterBy || (project.service && project.service.includes(filterBy))
                );
                allFilter.forEach(function (filter) {
                    if (filter.classList.contains("active")) {
                        filter.querySelector(".name-space").textContent = ` : ${e.target.textContent.trim()}`
                        filter.querySelector(".name-project-count").textContent = `(${filteredProjects.length})`
                        filter.querySelector(".filter-close").innerHTML = `<i class="ri-close-line"></i>`
                    }
                });


                projectRenderer(filteredProjects, projectContainer)
            }

            var tl = gsap.timeline();
            tl.to(currentContainer, {
                opacity: 0,
                ease: "power3.out",
                duration: 0.5,
                onComplete: function () {
                    gsap.set(currentContainer, { display: "none" });
                    renderProjects(filterBy);
                }
            })
                .to(projectContainer, {
                    opacity: 1,
                    ease: "power3.out",
                    duration: 0.5,
                    onStart: function () {
                        gsap.set(projectContainer, { display: "flex" });
                    },
                    onComplete: function () {
                        currentCategory = "#filter-project";
                        setTimeout(() => {
                            ScrollTrigger.refresh();
                        }, 200);
                    }
                });
        }
    });


}
filterAnimation()


function backToFeatured(btn){
    const currentContainer = document.querySelector("#filter-project")
    const projectContainer = document.querySelector("#featured-project")

    gsap.to(window, {
        scrollTo: { y: 0, autoKill: false },
        duration: 1
    })
    var tl = gsap.timeline()
    tl
        .to(currentContainer, {
            onStart: function () {
                gsap.to(window, {
                    scrollTo: { y: 0, autoKill: false },
                    duration: 1
                })
            },
            opacity: 0,
            ease: "power3.out",
            duration: .5,
            onComplete: function () {
                gsap.set(currentContainer, { display: "none" })
            }
        })
        .to(projectContainer, {
            opacity: 1,
            ease: "power3.out",
            duration: .5,
            onStart: function () {
                gsap.set(projectContainer, { display: "flex" })
                document.querySelector(btn).classList.remove("active")
                document.querySelector("#featured-btn").classList.add("active")
            },
            onComplete: function () {
                currentCategory = "#featured-project"
                setTimeout(() => {
                    ScrollTrigger.refresh();
                }, 200);
            }
        })

}


function filterListing() {
    var isOpen = null;

    sectorBtn.addEventListener("click", function () {

        if (isOpen === "sector") {
            console.log("yes it is");

            document.querySelectorAll(".listing-filter").forEach(function (p) {
                p.querySelector(".name-space").textContent = ``
                p.querySelector(".name-project-count").textContent = ``
                p.querySelector(".filter-close").innerHTML = ``
            })

            filterList.style.opacity = "0";
            filterList.style.height = "0";
            filterList.style.padding = "0"

            backToFeatured("#sectors-btn")
            isOpen = null;
            return;
        }

        document.querySelectorAll(".listing-filter").forEach(function (p) {
            p.querySelector(".name-space").textContent = ``
            p.querySelector(".name-project-count").textContent = ``
            p.querySelector(".filter-close").innerHTML = ``
        })

        if (window.innerWidth < 575) {
            filterList.style.height = "500px";
        } else if (window.innerHeight < 1199) {
            filterList.style.height = "170px";
        } else if (window.innerHeight < 991) {
            filterList.style.height = "180px";
        } else if (window.innerHeight < 767) {
            filterList.style.height = "220px";
        } else {
            filterList.style.height = "150px";
        }
        isOpen = "sector";
        filterList.style.padding = "13px 13px 50px 13px"
        filterList.style.opacity = "1";

        filterList.innerHTML = "";
        porjectData[0].sectors.forEach(function (sector) {
            var divw = document.createElement("div")
            var div = document.createElement("div")
            var span = document.createElement("span")
            var p = document.createElement("p")
            p.textContent = sector.name
            span.textContent = `(${sector.projects.length})`
            divw.classList.add("options-fl-main")
            div.classList.add("options-fl")
            div.appendChild(p)
            div.appendChild(span)
            divw.appendChild(div)
            filterList.appendChild(divw)
        })
    })

    // clientBtn.addEventListener("click", function () {
    //     if (isOpen === "client") {
    //         document.querySelectorAll(".listing-filter").forEach(function (p) {
    //             p.querySelector(".name-space").textContent = ``
    //             p.querySelector(".name-project-count").textContent = ``
    //             p.querySelector(".filter-close").innerHTML = ``
    //         })

    //         filterList.style.opacity = "0";
    //         filterList.style.height = "0";
    //         filterList.style.padding = "0"
    //         isOpen = null;
    //         return;
    //     }

    //     document.querySelectorAll(".listing-filter").forEach(function (p) {
    //         p.querySelector(".name-space").textContent = ``
    //         p.querySelector(".name-project-count").textContent = ``
    //         p.querySelector(".filter-close").innerHTML = ``
    //     })

    //     if (window.innerWidth < 575) {
    //         filterList.style.height = "500px";
    //     } else if (window.innerHeight < 1199) {
    //         filterList.style.height = "170px";
    //     } else if (window.innerHeight < 991) {
    //         filterList.style.height = "180px";
    //     } else if (window.innerHeight < 767) {
    //         filterList.style.height = "220px";
    //     } else {
    //         filterList.style.height = "150px";
    //     }
    //     isOpen = "client";
    //     filterList.style.padding = "13px 13px 50px 13px"
    //     filterList.style.opacity = "1";

    //     filterList.innerHTML = "";
    //     porjectData[1].clients.forEach(function (client) {
    //         var divw = document.createElement("div")
    //         var div = document.createElement("div");
    //         var span = document.createElement("span");
    //         var p = document.createElement("p")
    //         p.textContent = client.client
    //         span.textContent = `(${client.projects.length})`
    //         divw.classList.add("options-fl-main")
    //         div.classList.add("options-fl")
    //         div.appendChild(p)
    //         div.appendChild(span)
    //         divw.appendChild(div)
    //         filterList.appendChild(divw)
    //     })
    // })

    serviceBtn.addEventListener("click", function () {

        if (isOpen === "service") {
            document.querySelectorAll(".listing-filter").forEach(function (p) {
                p.querySelector(".name-space").textContent = ``
                p.querySelector(".name-project-count").textContent = ``
                p.querySelector(".filter-close").innerHTML = ``
            })

            filterList.style.opacity = "0";
            filterList.style.height = "0";
            filterList.style.padding = "0"
            backToFeatured("#service-btn")
            isOpen = null;
            return;
        }

        document.querySelectorAll(".listing-filter").forEach(function (p) {
            p.querySelector(".name-space").textContent = ``
            p.querySelector(".name-project-count").textContent = ``
            p.querySelector(".filter-close").innerHTML = ``
        })

        if (window.innerWidth < 575) {
            filterList.style.height = "500px";
        } else if (window.innerHeight < 1199) {
            filterList.style.height = "170px";
        } else if (window.innerHeight < 991) {
            filterList.style.height = "180px";
        } else if (window.innerHeight < 767) {
            filterList.style.height = "220px";
        } else {
            filterList.style.height = "150px";
        }
        isOpen = "service";
        filterList.style.padding = "13px 13px 50px 13px"
        filterList.style.opacity = "1";

        filterList.innerHTML = "";
        porjectData[2].services.forEach(function (service) {
            var divw = document.createElement("div")
            var div = document.createElement("div")
            var span = document.createElement("span")
            var p = document.createElement("p")
            p.textContent = service.service
            span.textContent = `(${service.projects.length})`
            divw.classList.add("options-fl-main")
            div.classList.add("options-fl")
            div.appendChild(p)
            div.appendChild(span)
            divw.appendChild(div)
            filterList.appendChild(divw)
        })
    })

}
filterListing()


function projectAnimation() {
    document.querySelectorAll(".project").forEach(function (project) {
        project.addEventListener("mouseover", function () {
            project.classList.add("active");
            let video = project.querySelector("video");
            if (video) {  // Ensure video exists before accessing properties
                video.currentTime = 0;
                video.play();
            }
        })
        project.addEventListener("mouseleave", function () {
            project.classList.remove("active");
        })
    })
}
projectAnimation()

function footerAnimation() {

    const updateTime = () => {
        const date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';

        hours = hours % 12 || 12; // Convert 24-hour to 12-hour format
        minutes = minutes.toString().padStart(2, '0'); // Ensure two-digit minutes

        const timeString = `${hours}:${minutes} ${ampm}`;

        document.querySelector("#time").textContent = timeString; // Update the DOM

        return timeString; // Return the formatted time string
    };
    updateTime();
    setInterval(updateTime, 60000);

    if (window.innerWidth > 991) {
        var ft = gsap.timeline({
            scrollTrigger: {
                trigger: "footer",
                scroller: "body",
                start: "top 0%",
                end: "top -80%",
                scrub: 1,
                pin: true
            }
        })

        ft
            .to(".footer-layer", {
                opacity: .9,
            }, "a")
            .to("#footer-content", {
                transform: "translateY(0%)",
                delay: .5
            }, "a")
    }



}
footerAnimation()


var isMenu = false;
document.querySelector("#menu-button").addEventListener("click", function () {
    if (isMenuService) {
        isService = false;
        openService()
        document.querySelector("#menu-button").textContent = "close"
        isMenuService = false;
        return;
    }
    if (!isMenu) {
        gsap.set("#menu-container", { display: "flex" })
        document.querySelector("#menu-button").textContent = "close"
        var tl = gsap.timeline()
        tl
            .to("#menu-container", {
                opacity: 1,
                duration: 0.5
            })
            .from(".menu-top, .menu-btm", {
                y: "30",
                opacity: 0,
                duration: 0.3,
                stagger: 0.1
            })
        isMenu = true;
    }
    else {
        gsap.to("#menu-container", {
            opacity: 0,
            duration: 0.5,
            onComplete: function () {
                gsap.set("#menu-container", { display: "none" })
                document.querySelector("#menu-button").textContent = "menu"

            }
        })
        isMenu = false;
    }
})


document.querySelector("#menu-service").addEventListener("click", function () {
    if (!isMenuService) {
        document.querySelector("#menu-button").textContent = "menu"
        isMenuService = true;
    }
})