document.addEventListener("DOMContentLoaded", () => {
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

    // Call scrollTo once
    lenis.scrollTo(0);

    // Define the RAF loop
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    // Start the animation frame loop
    requestAnimationFrame(raf);
}

smoothScroll();



const clientData = [
    {
        "name": "THR India",
        "logo": "/zs-logos/thr-logo.png",
        "image": "/brands/thr_our_studio.webp"
    },
    {
        "name": "Esquire India",
        "logo": "/zs-logos/esquire.png",
        "image": "/brands/esquire_our_studio.webp"
    },
    {
        "name": "Manifest",
        "logo": "/zs-logos/manifest.png",
        "image": "/brands/manifest_our_studio.webp"
    },
    {
        "name": "RPSG Group",
        "logo": "/zs-logos/rpsg.png",
        "image": "/brands/rpsg_group_our_studio.webp"
    },
    {
        "name": "RPSG Lifestyle Media",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/rpsg_media_our_studio.webp"
    },
    {
        "name": "Point Of",
        "logo": "/zs-logos/rib.avif",
        "image": "/brands/po_our_studio.webp"
    },
    {
        "name": "Wealth Fusion",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/wealth_fusion_our_studio.webp"
    },
    {
        "name": "Casa Carigar",
        "logo": "/zs-logos/hart.png",
        "image": "/brands/cc_our_studio.webp"
    },
    {
        "name": "WineeMedia",
        "logo": "/zs-logos/ks.png",
        "image": "/brands/wineemedia_our_studio.webp"
    },
    {
        "name": "JustNosh",
        "logo": "/zs-logos/logo.png",
        "image": "/brands/just_nosh_our_studio.webp"
    },
    {
        "name": "Hefty Art",
        "logo": "/zs-logos/senseis.png",
        "image": "/brands/hefty_art_our_studio.webp"
    },
    {
        "name": "Khelo Esports",
        "logo": "/zs-logos/point.png",
        "image": "/brands/khelo_esports_our_studio.webp"
    },
    {
        "name": "The Senseis Store",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/sensei_store_our_studio.webp"
    },
    {
        "name": "Mr. & Mrs.",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/mr_and_mrs_our_studio.webp"
    },
    {
        "name": "Rage",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/rage_our_studio.webp"
    },
    {
        "name": "Dhamaka",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/dhamaka_records_our_studio.webp"
    },
    {
        "name": "Indian Gaming League",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/IGL_our_studio.webp"
    },
    {
        "name": "The Greek Life",
        "logo": "/zs-logos/hart.png",
        "image": "/brands/greek_life_our_studio.webp"
    },
    {
        "name": "I White Korea",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/iWhiteKorea_our_studio.webp"
    },
    {
        "name": "ResideInBeing",
        "logo": "/zs-logos/nosh.png",
        "image": "/brands/reside_in_being_our_studio.webp"
    },
]

function homeLoader() {
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

        .from("#toph", {
            top: "50%",
            duration: .8,
            ease: "power3.out",
        }, "b")
        .from(".banner-studio", {
            opacity: 0,
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
        .to(".btmwrap", {
            opacity: 1,
            duration: 1,
            delay: -.5,
            ease: "power3.out",
        }, "c")
}
homeLoader()


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
            document.querySelector("#studio-btn").classList.remove("active");
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
        document.querySelector("#studio-btn").classList.add("active");
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
                // setTimeout(() => {
                //     ScrollTrigger.refresh();
                // }, 200);
            }
        })
    }
}
serviceAnimation()

function studioSection1Animation() {
    var tlh = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1-studio",
            scroller: "body",
            start: "top top",
            end: "top -100%",
            pin: true,
            scrub: 1
        }
    })
    tlh
        .to(".banner-studio", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"
        }, "a")
        .to(".banner-studio img", {
            objectPosition: "50% 10%"
        }, "a")
        .to("#toph", {
            y: -70,
            opacity: 0,
            duration: .3
        }, "a")
        .to("#btmh", {
            y: 70,
            opacity: 0,
            duration: .3
        }, "a")
}
studioSection1Animation()

function brandListingAnimtion() {
    var clutter = ""
    clientData.forEach(function (data, i) {
        clutter += `<div class="client" data-index=${i}>
                        <p class="brand-count">${i + 1 > 9 ? i + 1 : `0${i + 1}`}.</p>
                        <p>${data.name}</p>
                    </div>`
    })
    document.querySelector("#brand-list").innerHTML = clutter

    var showcaseImg = document.querySelector("#brand-showcase-img")
    var brandLogo = document.querySelector("#brand-logo img")
    document.querySelectorAll("#brand-listing .client").forEach(function (client) {
        client.addEventListener("mouseenter", function (e) {
            if (e.target.dataset.index) {
                var client = clientData[e.target.dataset.index];
                showcaseImg.src = client.image;
                brandLogo.src = client.logo;

                gsap.set(showcaseImg, { scale: 1 });

                gsap.fromTo(
                    showcaseImg,
                    { scale: 1.08, opacity: 0 },
                    {
                        scale: 1,
                        opacity: 1,
                        duration: 0.6,
                        ease: "power2.out"
                    }
                );
            }
        });

        client.addEventListener("mouseleave", function (e) {
            gsap.to(showcaseImg, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.out",
            });
            showcaseImg.src = "/images/blank.png";
        });
    });
    document.querySelector("#brand-listing").addEventListener("mousemove", function (e) {
        const scrollPosition = e.clientY - document.querySelector("#brand-listing").getBoundingClientRect().top
        gsap.to(document.querySelector("#brand-logo"), {
            top: scrollPosition,
        })
    })
    document.querySelector("#brand-list").addEventListener("mouseenter", function () {
        gsap.to(document.querySelector("#brand-logo"), {
            opacity: 1,
        })
    })
    document.querySelector("#brand-list").addEventListener("mouseleave", function () {
        gsap.to(document.querySelector("#brand-logo"), {
            opacity: 0,
        })
    })


    gsap.to("#brand-showcase", {
        scrollTrigger: {
            trigger: "#studio-brand",
            scroller: "body",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            pin: "#brand-showcase"
        }
    });

}
brandListingAnimtion()

function clientAnimeMobile() {
    var clientList = document.querySelectorAll(".client");
    var logoContainerImg = document.querySelector("#client-logo img");

    function updateClientOpacity() {
        let closest = null;
        let closestDistance = Infinity;

        clientList.forEach((client, index) => {
            let rect = client.getBoundingClientRect();
            let distance = Math.abs(rect.top - window.innerHeight / 2); // Exactly center

            if (distance < closestDistance) {
                closestDistance = distance;
                closest = client;
            }
        });

        clientList.forEach((client) => {
            gsap.to(client, { opacity: client === closest ? 1 : 0.5, duration: 0.3 });
        });

        let closestIndex = Array.from(clientList).indexOf(closest);
        if (closestIndex !== -1) {
            logoContainerImg.src = clientData[closestIndex].logo;
        }
    }

    clientList.forEach((c, index) => {
        gsap.to(c, {
            scrollTrigger: {
                trigger: c,
                scroller: "body",
                start: "top 50%",
                end: "top 40%",
                scrub: 1,
                // markers: true, 
                onUpdate: updateClientOpacity,
            }
        });
    });

    // Handle fading last client
    gsap.to(clientList[clientList.length - 1], {
        scrollTrigger: {
            trigger: clientList[clientList.length - 1],
            scroller: "body",
            start: "bottom 90%",
            end: "bottom 20%",
            scrub: 1,
            onLeave: () => gsap.to(clientList[clientList.length - 1], { opacity: 0.5, duration: 0.3 }),
            onLeaveBack: () => gsap.to(clientList[clientList.length - 1], { opacity: 0.5, duration: 0.3 }),
        }
    });

    ScrollTrigger.refresh(); // Ensures positioning is updated
}



if(window.innerWidth < 575){
    clientAnimeMobile()
}

function memberAnimation() {
    gsap.from(".m1", {
        opacity: 1,
        y: 400,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top 45%",
            end: "top 35%",
            scrub: 1,
        }
    });

    gsap.from(".m2", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top 22%",
            end: "top 8%",
            scrub: 1,
        }
    });

    gsap.from(".m3", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top 30%",
            end: "top 20%",
            scrub: 1,
        }
    });

    gsap.from(".m4", {
        opacity: 1,
        y: 1000,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -45%",
            end: "top -55%",
            scrub: 1,
        }
    });

    gsap.from(".m5", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -15%",
            end: "top -35%",
            scrub: 1,
        }
    });

    gsap.from(".m6", {
        opacity: 1,
        y: 800,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -30%",
            end: "top -40%",
            scrub: 1,
        }
    });

    gsap.from(".m7", {
        opacity: 1,
        y: 800,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -70%",
            end: "top -85%",
            scrub: 1,
        }
    });

    gsap.from(".m8", {
        opacity: 1,
        y: 800,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -105%",
            end: "top -120%",
            scrub: 1,
        }
    });

    gsap.from(".m9", {
        opacity: 1,
        y: 600,
        duration: 2,
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top -85%",
            end: "top -100%",
            scrub: 1,
        }
    });

    // gsap.from(".m10", {
    //     opacity: 1,
    //     y: 1000,
    //     duration: 2,
    //     scrollTrigger: {
    //         trigger: "#studio-2",
    //         scroller: "body",
    //         start: "top -160%",
    //         end: "top -175%",
    //         scrub: 1,
    //     }
    // });

    // gsap.from(".m11", {
    //     opacity: 1,
    //     y: 600,
    //     duration: 2,
    //     scrollTrigger: {
    //         trigger: "#studio-2",
    //         scroller: "body",
    //         start: "top -125%",
    //         end: "top -140%",
    //         scrub: 1,
    //     }
    // });

    // gsap.from(".m12", {
    //     opacity: 1,
    //     y: 800,
    //     duration: 2,
    //     scrollTrigger: {
    //         trigger: "#studio-2",
    //         scroller: "body",
    //         start: "top -170%",
    //         end: "top -185%",
    //         scrub: 1,
    //     }
    // });

    // gsap.from(".m13", {
    //     opacity: 1,
    //     y: 600,
    //     duration: 2,
    //     scrollTrigger: {
    //         trigger: "#studio-2",
    //         scroller: "body",
    //         start: "top -210%",
    //         end: "top -230%",
    //         scrub: 1,
    //     }
    // });

    gsap.to("#studio-contact", {
        opacity: 1,
        duration: 1,
        scrollTrigger: {
            trigger: "#studio-contact",
            scroller: "body",
            start: "top 30%",
            end: "top 5%",
            scrub: true,
        }
    });

    gsap.to("#studio-contact", {
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "body",
            start: "top top",
            end: "100% 40%",
            scrub: true,
            pin: "#studio-contact",
        }
    });




}

if (window.innerWidth > 991) {
    memberAnimation()
}


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


})