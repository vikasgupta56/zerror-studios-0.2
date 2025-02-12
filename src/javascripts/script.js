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
    const urlParams = new URLSearchParams(window.location.search);
    const mainFilter = urlParams.get('mainFilter');
    if (mainFilter) return;
    var loader = gsap.timeline()
    loader
        .from(".upper", {
            opacity: 0,
            duration: .8,
            timingFunction: "ease-in-out",
            delay: 1.5,
            stagger: {
                from: "center",
                amount: .2
            }
        }, "a")

        .from(".lower", {
            opacity: 0,
            duration: .8,
            timingFunction: "ease-in-out",
            stagger: {
                amount: .2
            },
            delay: 1.6,
        }, "a")

        .from("#main", {
            backgroundColor: "#F5E31A",
            duration: .8,
            timingFunction: "ease-in-out",
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

function serviceListingAnimation(){
    const serviceDets = [
        "Conducting workshops to define your target audience, services, and brand differentiators",
        "Defining your brand’s mission, vision, and market positioning.",
        "Creating brand voice, style guides, and communication strategies",
        "Designing logos, color schemes, typography, icons, and grids to represent your brand.",
        "Developing impactful designs for both print and digital media.",
        "Defining your messaging to effectively connect with users.",
        "Crafting user-centric designs for seamless navigation and interaction.",
        "Designing visually appealing and functional websites.",
        "Writing compelling content that aligns with your brand voice.",
        "Integrating visuals that tell your brand’s story and enhance user experience.",
        "Building responsive, fast, and beautiful websites.",
        "Adding dynamic and smooth animations for a modern web experience.",
        "Customizing content management systems for easy updates and control.",
        "Ensuring robust, scalable functionality to support your website’s performance.",
        "Designing intuitive user experiences based on market research and analytics.",
        "Building visually engaging, user-friendly interfaces for seamless shopping.",
        "Ensuring a smooth, fast, and responsive shopping experience.",
        "Customizing Shopify to meet your unique eCommerce needs.",
        "Scalable and reliable hosting to support your growing business.",
        "Implementing best-in-class security protocols to protect your data and customers.",
        "Providing ongoing maintenance and technical support to ensure your store remains efficient.",
        "Developing content management systems tailored to your specific requirements.",
        "Tailored solutions for digital content creation and publishing.",
        "Building engaging platforms to share your brand’s message with the world.",
        "Creating unique digital marketplaces for diverse industries."
    ]
    
    document.querySelectorAll(".service-wrap .text-effect").forEach(function(textEffect) {
        textEffect.addEventListener("mouseenter",function(e){
            const text = serviceDets[e.target.dataset.index]
    
            gsap.to(document.querySelector("#about-service-text"),{
                text:text,
                duration: 1,
                ease: "power3.out",
                overwrite: "auto"
            })
        })
        textEffect.addEventListener("mouseleave",function(){
            gsap.to(document.querySelector("#about-service-text"),{
                text:"",
                duration: 1,
                ease: "power3.out",
                overwrite: "auto"
            })
        })
    })
}
serviceListingAnimation()

function serviceAnimation() {
    var isService = false;
    var previousLink = ""

    document.querySelector("#nav-service").addEventListener("click", function (e) {
        this.classList.add("active");
        // document.querySelector("#studio-btn").classList.remove("active");
        isService = !isService;
        openService()
    })
    document.querySelector("#closeService").addEventListener("click", function () {
        isService = !isService;
        openService()
        this.classList.remove("active");
        // document.querySelector("#studio-btn").classList.add("active");
    })

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
                onComplete:()=>{
                    gsap.set("body",{overflow: "hidden"})
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
                onComplete:()=>{
                    gsap.set("body",{overflow: "auto"})
                }
            })
        }
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
const clientBtn = document.querySelector("#client-btn")
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

    // document.querySelector("#nav-project").addEventListener("click", function () {
    //     allFilter.forEach(function (item) {
    //         item.classList.remove("active");
    //     });
    //     allFilter[allFilter.length - 1].classList.add("active");
    // })

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

            history.pushState(null, '', '/?mainFilter=all');
            const urlParams = new URLSearchParams(window.location.search);
            const mainFilter = urlParams.get('mainFilter');


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
                    }
                })



        }
    })


}
filterAnimation()

function filterListing() {


    sectorBtn.addEventListener("click", function () {

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

    clientBtn.addEventListener("click", function () {
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
        filterList.style.padding = "13px 13px 50px 13px"
        filterList.style.opacity = "1";

        filterList.innerHTML = "";
        porjectData[1].clients.forEach(function (client) {
            var divw = document.createElement("div")
            var div = document.createElement("div");
            var span = document.createElement("span");
            var p = document.createElement("p")
            p.textContent = client.client
            span.textContent = `(${client.projects.length})`
            divw.classList.add("options-fl-main")
            div.classList.add("options-fl")
            div.appendChild(p)
            div.appendChild(span)
            divw.appendChild(div)
            filterList.appendChild(divw)
        })
    })

    serviceBtn.addEventListener("click", function () {

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

}
footerAnimation()
