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

function aboutAnimation() {
    var isAbout = false;
    var previousLink = ""

    document.querySelector("#nav-about").addEventListener("click", function () {
        document.querySelectorAll("nav p").forEach(function(link){
            if(link.classList.contains("active")){
                previousLink = link.textContent.toLowerCase()
            }
        })
        isAbout = !isAbout;
        openAbout()
    })
    document.querySelector("#closeAbout").addEventListener("click", function () {
        isAbout = !isAbout;
        openAbout()
        document.querySelectorAll("nav p").forEach(function(link){
            if(link.textContent.toLowerCase() === previousLink){
                link.classList.add("active")
            }
        })
    })

    function openAbout() {
        if (isAbout) {
            gsap.set("nav", { backgroundColor: "#fff" })
            gsap.to("#main", {
                top: "calc(100% - 50px)",
                ease: "power3.out",
                duration: .8
            })
            gsap.to("#about-page", {
                top: "-50px",
                ease: "power3.out",
                duration: .8
            })
        } else {
            document.querySelector("#nav-about").classList.remove("active")
            gsap.set("nav", { backgroundColor: "transparent" })
            gsap.to("#main", {
                top: "0%",
                ease: "power3.out",
                duration: .8
            })
            gsap.to("#about-page", {
                top: "-100%",
                ease: "power3.out",
                duration: .8
            })
        }
    }
}
aboutAnimation()

var loader = gsap.timeline()
loader
.from("#page1 h2,#page1 h3",{
    y:"160%",
    duration:.8
},"a")
.from("nav",{
    y:"-100%",
    opacity:0,
    duration:.8,
},"a")
.from("#page2",{
    y:"50%",
    duration:.8,
    delay:-.2
})


document.querySelectorAll(".banner-poster").forEach(function(poster){
    console.log(poster);
    
    gsap.to(poster,{
        clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration:.8,
        scrollTrigger:{
            trigger: poster,
            scroller:"#main",
            start: "top 90%",
            end: "top 70%",
        }
    })
})


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


    document.querySelector(".rt-btm input").addEventListener("focus", function () {
        document.querySelector("#input-placeholder").style.display = "none";
    })
    document.querySelector(".rt-btm input").addEventListener("blur", function (e) {
        if (e.target.value == "") {
            document.querySelector("#input-placeholder").style.display = "block";
        }
    })
}
footerAnimation()
