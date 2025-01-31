gsap.registerPlugin(ScrollToPlugin);
function loco() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
// loco()

// Initialize Lenis
const lenis = new Lenis({
    autoRaf: true,
});
window.onload = function () {
    // Scroll to the top
    lenis.scrollTo(0, {
        duration: 0,  // Instant scroll to the top
        smooth: true, // Smooth scroll behavior
    });
};

const porjectData = [
    {
        sectors: [
            {
                name: "Art",
                projects: [1, 2, 3,4]
            },
            {
                name: "Fashion",
                projects: [1, 2, 3,4]
            },
            {
                name: "Hospitality",
                projects: [1, 2, 3,4]
            },
            {
                name: "Sustainability",
                projects: [1, 2, 3,4]
            },
            {
                name: "Beauty",
                projects: [1, 2, 3,4]
            },
            {
                name: "Finance",
                projects: [1, 2, 3,4]
            },
            {
                name: "Lifestyle",
                projects: [1, 2, 3,4]
            },
            {
                name: "Technology",
                projects: [1, 2, 3,4]
            },
            {
                name: "Entertainment",
                projects: [1, 2, 3,4]
            },
            {
                name: "Food & Beverage",
                projects: [1, 2, 3,4]
            },
            {
                name: "Sports",
                projects: [1, 2, 3,4]
            }
        ]
    },
    {
        clients: [
            {
                client: "MoMA",
                projects: [1, 2, 3,4]
            },
            {
                client: "Gucci",
                projects: [1, 2, 3,4]
            },
            {
                client: "Marriott International",
                projects: [1, 2, 3,4]
            },
            {
                client: "Tesla",
                projects: [1, 2, 3,4]
            },
            {
                client: "L'Oréal",
                projects: [1, 2, 3,4]
            },
            {
                client: "Goldman Sachs",
                projects: [1, 2, 3,4]
            },
            {
                client: "Nike",
                projects: [1, 2, 3,4]
            },
            {
                client: "Google",
                projects: [1, 2, 3,4]
            },
            {
                client: "Netflix",
                projects: [1, 2, 3,4]
            },
            {
                client: "Starbucks",
                projects: [1, 2, 3,4]
            },
            {
                client: "Adidas",
                projects: [1, 2, 3,4]
            }
        ]
    },
    {
        services: [
            {
                service: "Web Development",
                projects: [1, 2, 3,4]
            },
            {
                service: "UI/UX Design",
                projects: [1, 2, 3,4]
            },
            {
                service: "Digital Marketing",
                projects: [1, 2, 3,4]
            },
            {
                service: "Branding",
                projects: [1, 2, 3,4]
            },
            {
                service: "SEO Optimization",
                projects: [1, 2, 3,4]
            },
            {
                service: "E-commerce Solutions",
                projects: [1, 2, 3,4]
            },
            {
                service: "Mobile App Development",
                projects: [1, 2, 3,4]
            },
            {
                service: "Software Development",
                projects: [1, 2, 3,4]
            },
            {
                service: "Content Creation",
                projects: [1, 2, 3,4]
            },
            {
                service: "Social Media Management",
                projects: [1, 2, 3,4]
            }
        ]
    }
]

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

function serviceAnimation() {
    var isService = false;
    var previousLink = ""

    document.querySelector("#nav-service").addEventListener("click", function () {
        document.querySelectorAll("nav p").forEach(function (link) {
            if (link.classList.contains("active")) {
                previousLink = link.textContent.toLowerCase()
            }
        })
        isService = !isService;
        openService()
    })
    document.querySelector("#closeService").addEventListener("click", function () {
        isService = !isService;
        openService()
        document.querySelectorAll("nav p").forEach(function (link) {
            if (link.textContent.toLowerCase() === previousLink) {
                link.classList.add("active")
            }
        })
    })

    function openService() {
        if (isService) {
            gsap.set("nav", { backgroundColor: "#fff" })
            gsap.to("#main", {
                top: "calc(100% - 40px)",
                ease: "power3.out",
                duration: .8
            })
            gsap.to("#service-page", {
                top: "-40px",
                ease: "power3.out",
                duration: .8
            })
        } else {
            document.querySelector("#nav-service").classList.remove("active")
            gsap.set("nav", { backgroundColor: "transparent" })
            gsap.to("#main", {
                top: "0%",
                ease: "power3.out",
                duration: .8
            })
            gsap.to("#service-page", {
                top: "-100%",
                ease: "power3.out",
                duration: .8
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
                document.querySelector("#nav-project").classList.add("active");
            }
            else {
                document.querySelector("#nav-project").classList.remove("active");
                history.pushState(null, '', '/');
            }
            this.classList.add("active");
        })
    })

    document.querySelector("#nav-project").addEventListener("click", function () {
        allFilter.forEach(function (item) {
            item.classList.remove("active");
        });
        allFilter[allFilter.length - 1].classList.add("active");
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

        filterList.style.height = "150px";
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

        filterList.style.height = "150px";
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

        filterList.style.height = "150px";
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
