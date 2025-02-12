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



function detailLoader() {
    var loader = gsap.timeline()
    loader
        .from("#page1 h2,#page1 h3", {
            y: "160%",
            duration: .8
        }, "a")
        .from("nav", {
            y: "-100%",
            opacity: 0,
            duration: .8,
        }, "a")
        .from("#page2", {
            y: "50%",
            duration: .8,
            delay: -.2
        })
}
detailLoader()

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

document.querySelectorAll(".banner-poster").forEach(function (poster) {
    gsap.to(poster, {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        duration: .8,
        scrollTrigger: {
            trigger: poster,
            scroller: "body",
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


}
footerAnimation()
