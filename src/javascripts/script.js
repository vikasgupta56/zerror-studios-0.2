
function homeLoader() {
    var loader = gsap.timeline();
    loader
        .from(".upper", {
            opacity: 0,
            duration: 0.8,
            ease: "ease-in-out",
            delay: 1,
            stagger: {
                from: "center",
                amount: 0.2
            }
        }, "a")

        .from(".lower", {
            opacity: 0,
            duration: 0.8,
            ease: "ease-in-out",
            stagger: {
                amount: 0.2
            },
            delay: 1.1,
        }, "a")
        .from("#main-btn", {
            opacity: 0,
            duration: 0.3,
            ease: "ease-in-out",
            delay: 1.5,
        }, "a")
      
}
// Run the loader when the page loads
homeLoader();

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


document.querySelector("#main-btn").addEventListener("click", function () {
    // Store permission
    localStorage.setItem("musicAllowed", "true");
    window.location.href = "/studio";
});

// window.addEventListener("load", () => {
//     localStorage.removeItem("musicAllowed");
// });
