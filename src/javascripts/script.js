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

const porjectData = [
    {
        sectors: [
            {
                name: "Art",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Fashion",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Hospitality",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Sustainability",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Beauty",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Finance",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Lifestyle",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Technology",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Entertainment",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Food & Beverage",
                projects: [1, 2, 3, 4]
            },
            {
                name: "Sports",
                projects: [1, 2, 3, 4]
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
                service: "Web Development",
                projects: [1, 2, 3, 4]
            },
            {
                service: "UI/UX Design",
                projects: [1, 2, 3, 4]
            },
            {
                service: "Digital Marketing",
                projects: [1, 2, 3, 4]
            },
            {
                service: "Branding",
                projects: [1, 2, 3, 4]
            },
            {
                service: "SEO Optimization",
                projects: [1, 2, 3, 4]
            },
            {
                service: "E-commerce Solutions",
                projects: [1, 2, 3, 4]
            },
            {
                service: "Mobile App Development",
                projects: [1, 2, 3, 4]
            },
            {
                service: "Software Development",
                projects: [1, 2, 3, 4]
            },
            {
                service: "Content Creation",
                projects: [1, 2, 3, 4]
            },
            {
                service: "Social Media Management",
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
            delay: 1.5,
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
            delay: 1.6,
        }, "a")

        .from("#main", {
            backgroundColor: "#F5E31A",
            duration: .8,
            ease: "ease-in-out",
        }, "b")

        .from(".header-text", {
            bottom: "0%",
            duration: .8,
            ease: "power3.out",
        }, "b")

        .from("#page2", {
            opacity: 0,
            y: 10,
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
        "Elevating Shopify stores with custom design, smooth UX, and seamless performance.",
        "No templates, no shortcuts—just high-performance online stores built for scale.",
        "Empowering brands with custom-built platforms for vendors, customers, and everything in between.",
        "Designing and developing sleek, high-performance apps that people actually love using.",
        "We don’t do cookie-cutter solutions—we build CMS platforms tailored to your needs.",
        "High-traffic, high-functionality platforms designed for brands that want to be heard.",
        "Whether it's niche or mass-market, we build digital marketplaces that stand out and scale up."
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
            }
        })
    }
}
serviceAnimation()

var currentCategory = "#featured-project"

window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const mainFilter = urlParams.get('mainFilter');

    // If mainFilter exists
    if (mainFilter) {
        // Fade out the #featured-project element

        currentCategory = "#all-project"
        var allFilter = document.querySelectorAll("#filter-container p")
        allFilter.forEach(function (filter) {
            filter.classList.remove("active");
            if (filter.textContent.toLowerCase() === "all") {
                filter.classList.add("active");
            }
        })
        var navLink = document.querySelectorAll("nav p")
        navLink.forEach(function (link) {
            link.classList.remove("active");
        })
        document.querySelector("#nav-project").classList.add("active");


        document.querySelector("#featured-project").style.opacity = 0;

        // Use setTimeout to delay hiding it until opacity transition is complete
        setTimeout(function () {
            // Hide #featured-project after it fades out
            document.querySelector("#featured-project").style.display = 'none';

            // Show #all-project
            const allProject = document.querySelector("#all-project");
            allProject.style.display = 'flex'; // Show it immediately
            setTimeout(() => {
                allProject.style.opacity = 1; // Fade it in
            }, 50); // Delay for smooth transition
        }, 500); // Match the duration of opacity transition
    }
};

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
            else {
                // document.querySelector("#nav-project").classList.remove("active");
                history.pushState(null, '', '/');
            }
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

        history.pushState(null, '', '/');
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

            allFilter.forEach(function (filter) {
                if (filter.classList.contains("active")) {
                    filter.querySelector(".name-space").textContent = ` : ${e.target.textContent}`
                    filter.querySelector(".name-project-count").textContent = `(4)`
                    filter.querySelector(".filter-close").innerHTML = `<i class="ri-close-line"></i>`
                }
            })

            filterList.style.opacity = "0";
            filterList.style.height = "0";
            filterList.style.padding = "0"

            // const page2Height = document.querySelector("#page2").getBoundingClientRect().top
            const currentContainer = document.querySelector(currentCategory)
            const projectContainer = document.querySelector("#filter-project")

            // if (currentCategory === '#featured-project') {
            //     gsap.to(window, {
            //         scrollTo: { y: 0, autoKill: false },
            //         duration: 1
            //     })
            //     return; // Exit early, skipping the timeline
            // }

            var tl = gsap.timeline()
            tl
                .to(currentContainer, {
                    // onStart: function () {
                    //     gsap.to(window, {
                    //         scrollTo: { y: 0, autoKill: false },
                    //         duration: 1
                    //     })
                    // },
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
                        currentCategory = "#filter-project"
                        setTimeout(() => {
                            ScrollTrigger.refresh();
                        }, 200);
                    }
                })



        }
    })


}
filterAnimation()


function filterListing() {
    var isOpen = null;

    sectorBtn.addEventListener("click", function () {

        if (isOpen === "sector") {
            document.querySelectorAll(".listing-filter").forEach(function (p) {
                p.querySelector(".name-space").textContent = ``
                p.querySelector(".name-project-count").textContent = ``
                p.querySelector(".filter-close").innerHTML = ``
            })

            filterList.style.opacity = "0";
            filterList.style.height = "0";
            filterList.style.padding = "0"
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