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
loco()


function serviceAnimation() {
    var isService = false;
    var previousLink = ""

    document.querySelector("#nav-service").addEventListener("click", function () {
        this.classList.add("active");
        document.querySelector("#studio-btn").classList.remove("active");
        isService = !isService;
        openService()
    })
    document.querySelector("#closeService").addEventListener("click", function () {
        isService = !isService;
        openService()
        this.classList.remove("active");
        document.querySelector("#studio-btn").classList.add("active");
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

function snakeTextAnimation() {
    const textElement = document.querySelector("#animated-text");
    const fullText = "At Zerror Studios, we turn “what ifs” into “hell yes.” Whether it’s animated websites that wow, eCommerce solutions that scale, or custom CMS platforms so slick they power some of the world’s biggest media giants(Yes, not exaggerating.We’re low - key changing the game)—we’re all about creating digital moments that punch through the noise, harder than your morning cutting - chai. Born in Mumbai but built for the world, we’re a crew of dreamers, doers, and rule-breakers who believe the internet doesn’t need another meh moment—it needs unforgettable experiences. We don’t just build stuff; we craft digital adventures that make people stop, scroll, and say,“Whoa, who made this?" 
    const initialText = "At Zerror Studios, we turn “what ifs” into “hell yes.” Whether it’s animated websites that wow, eCommerce solutions that scale, or custom CMS platforms so slick they power some of the world’s biggest media giants(Yes, not exaggerating.We’re low - key changing the game)—we’re all about creating digital moments that punch through the noise, harder than your morning cutting - chai." 
    const remainingText = fullText.slice(initialText.length);  // Remaining text to append

    // Set the initial text
    textElement.innerHTML = initialText;

    // Set up ScrollTrigger to animate letters
    const timeline = gsap.timeline({
        scrollTrigger: {
            trigger: "#studio-1",
            scroller: "#main",  // Ensure the scroll happens inside the container
            start: "top 0%",   // Start at 50% of the scroll container height
            end: "top -200%",   // End at the bottom of the container
            scrub: 1,           // Scrub for smooth animation
            pin:true
        }
    });

    timeline.to({}, {  // Empty tween to control the scroll behavior
        onUpdate: () => {
            // Calculate how many letters to remove and append based on scroll progress
            const progress = timeline.scrollTrigger.progress;  // Corrected way to get progress
            const letterCount = Math.floor(progress * remainingText.length);

            // Remove letters from the start of initialText and append letters from remainingText
            const newText = initialText.slice(letterCount) + remainingText.slice(0, letterCount);
            textElement.textContent = newText;
        }
    });
}

snakeTextAnimation();








// var tls = gsap.timeline({
//     scrollTrigger: {
//         trigger: "#studio-1",
//         scroller: "#main",
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 1,
//         pin: true
//     }
// })

// tls
//     .to("#studio-para1", {
//         opacity: 0,
//         duration: .6
//     })
//     .to("#studio-para2", {
//         top: 0,
//         duration: .8
//     })
//     .to("#studio-para3", {
//         opacity: 1,
//         duration: .6
//     })
//     .to("#studio-para2", {
//         opacity: 0,
//         duration: .6
//     })
//     .to("#studio-para3", {
//         top: 0,
//         duration: .8
//     })
//     .to("#studio-para4", {
//         opacity: 1,
//         duration: .6
//     })


function brandLogoAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#studio-brand",
            scroller: "#main",
            start: "top 10%",
            end: "bottom 100%",
            scrub: 1,
            // markers: true
        }
    });

    tl
        .from([".b1", ".b2", ".b3", ".b4"], {
            opacity: 0,
            stagger: 0.3,
            immediateRender: true
        })
        .from("#about-brand", {
            opacity: 0,
            duration: .6,
        })
}

brandLogoAnimation();




function memberAnimation() {

    gsap.from(".m1", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m1",
            scroller: "#main",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    });

    gsap.from(".m2", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m2",
            scroller: "#main",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
        }
    });

    gsap.from(".m3", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m3",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: true,
        }
    });

    gsap.from(".m4", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m4",
            scroller: "#main",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
        }
    });

    gsap.from(".m5", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m5",
            scroller: "#main",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    });

    gsap.from(".m6", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m6",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: true,
        }
    });

    gsap.from(".m7", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m7",
            scroller: "#main",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    });

    gsap.from(".m8", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m8",
            scroller: "#main",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
        }
    });

    gsap.from(".m9", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m9",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: true,
        }
    });


    gsap.from(".m10", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m10",
            scroller: "#main",
            start: "top 50%",
            end: "top 30%",
            scrub: true,
        }
    });

    gsap.from(".m11", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m11",
            scroller: "#main",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    });

    gsap.from(".m12", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m12",
            scroller: "#main",
            start: "top 60%",
            end: "top 40%",
            scrub: true,
        }
    });

    gsap.from(".m13", {
        opacity: 0,
        y: 200,
        duration: 1,
        scrollTrigger: {
            trigger: ".m13",
            scroller: "#main",
            start: "top 80%",
            end: "top 50%",
            scrub: true,
        }
    });



    gsap.to("#studio-contact", {
        scrollTrigger: {
            trigger: "#studio-2",
            scroller: "#main",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: "#studio-contact"
        }
    });



}
memberAnimation()






