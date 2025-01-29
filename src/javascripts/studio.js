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

var tls = gsap.timeline({
    scrollTrigger: {
        trigger: "#studio-1",
        scroller: "#main",
        start: "top 0%",
        end: "top -100%",
        scrub: 1,
        pin:true
    }
})

tls
.to("#studio-para1",{
    opacity: 0,
    duration:.6
})
.to("#studio-para2",{
    top: 0,
    duration:.8
})
.to("#studio-para3",{
    opacity: 1,
    duration:.6
})
.to("#studio-para2",{
    opacity: 0,
    duration:.6
})
.to("#studio-para3",{
    top: 0,
    duration:.8
})
.to("#studio-para4",{
    opacity: 1,
    duration:.6
})


function brandLogoAnimation() {
    var tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#studio-brand",
            scroller: "#main",
            start: "top 10%",
            end: "top 0%",
            scrub: true,
            // markers: true
        }
    })

    tl
        .to(".b1", {
            opacity: 1
        })
        .to(".b2", {
            opacity: 1
        })
        .to(".b3", {
            opacity: 1
        })
        .to(".b4", {
            opacity: 1
        })

}
brandLogoAnimation()


function memberAnimation(){
    
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

}
memberAnimation()


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


