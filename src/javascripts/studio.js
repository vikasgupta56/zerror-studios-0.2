document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(TextPlugin);
    let soundEnabled = false;

    // Check localStorage on page load
    const isAllowed = localStorage.getItem("musicAllowed") === "true";
    if (isAllowed) {
        soundEnabled = true;
    }
    // Enable sound on first user interaction
    document.addEventListener("click", () => {
        if (!soundEnabled) {
            soundEnabled = true;
            localStorage.setItem("musicAllowed", "true");
        }
    });


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

    function pointer() {
        let rotate = 0;
        let diffrot = 0;
        let currentAngle = 0;
        let timeout;

        // Linear interpolation function
        function lerp(start, end, amt) {
            return (1 - amt) * start + amt * end;
        }

        window.addEventListener("mousemove", function (e) {
            clearTimeout(timeout);

            diffrot = e.clientX - rotate;
            rotate = e.clientX;

            let targetAngle = diffrot * 2;
            targetAngle = Math.max(-80, Math.min(80, targetAngle)); // clamp softly

            // Smoothly interpolate angle
            currentAngle = lerp(currentAngle, targetAngle, 0.2);

            gsap.to("#pointer", {
                left: e.clientX,
                top: e.clientY,
                rotate: currentAngle,
                duration: 0.3,
                ease: "power3.out",
            });

            timeout = setTimeout(() => {
                currentAngle = lerp(currentAngle, 0, 0.2);
                gsap.to("#pointer", {
                    rotate: 0,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }, 100);
        });


        document.querySelectorAll(".showcase-cont-cursor").forEach(function (project) {
            project.addEventListener("mouseenter", function () {
                gsap.to("#pointer", {
                    opacity: 1,
                    duration: 0.2,
                    ease: "power2.out"
                });
            })
            project.addEventListener("mouseleave", function () {
                gsap.to("#pointer", {
                    opacity: 0,
                    duration: 0.2,
                    ease: "power2.out"
                });
            })
        })

    }
    pointer()


    // gsap.set("body", { overflow: "hidden" });

    function homeLoader() {
        var loader = gsap.timeline({
            onComplete: function () {
                // Re-enable scrolling after the animation completes
                gsap.set("body", { overflow: "auto" });
                // imageRenderer(); // Your image rendering function
            }
        });

        // Disable scrolling before the animation starts

        loader
            .to("#main", {
                backgroundColor: "white",
                duration: 0.8,
                ease: "ease-in-out",
                delay: .3,
            }, "b")
            .to("#enter-btn", {
                opacity: 0,
                duration: 0.3,
                ease: "power3.out",
                onComplete: function () {
                    gsap.set("#enter-btn", { display: "none" })
                }
            })
            .to("nav", {
                opacity: 1,
                duration: 1,
                delay: -0.5,
                ease: "power3.out",
            }, "c");
    }
    // homeLoader();

    function imageRenderer() {
        const imageContainer = document.getElementById('image-render');
        const MAX_IMAGES = 10;
        const MIN_DISTANCE = 20;
        let lastX = 0;
        let lastY = 0;
        let index = 0;
        let idleTimeout;
        let clearIntervalId;

        const images = [
            '/cursor/cur1.png', '/cursor/cur2.png', '/cursor/cur3.png',
            '/cursor/cur4.png', '/cursor/cur5.png', '/cursor/cur6.png',
            '/cursor/cur7.jpg', '/cursor/cur8.png', '/cursor/cur9.png',
            '/cursor/cur10.png', '/cursor/cur11.png',
        ];

        // Sound to play when images are created
        const sound = new Audio('/music/buttonHover.mp3');

        const section = document.querySelector("#section1-studio");

        function clearImagesOneByOne() {
            clearInterval(clearIntervalId); // prevent overlap
            clearIntervalId = setInterval(() => {
                if (imageContainer.children.length > 0) {
                    imageContainer.removeChild(imageContainer.children[0]);
                } else {
                    clearInterval(clearIntervalId);
                }
            }, 100); // removes one image every 100ms
        }

        function resetIdleTimer() {
            clearTimeout(idleTimeout);
            idleTimeout = setTimeout(() => {
                clearImagesOneByOne();
            }, 4000); // 4 seconds idle time
        }

        section.addEventListener('mousemove', (e) => {
            const dx = Math.abs(e.clientX - lastX);
            const dy = Math.abs(e.clientY - lastY);
            if (dx < MIN_DISTANCE && dy < MIN_DISTANCE) return;

            lastX = e.clientX;
            lastY = e.clientY;

            const img = document.createElement('img');
            img.src = images[index % images.length];
            img.className = 'trail-image';
            img.style.left = `${e.clientX}px`;
            img.style.top = `${e.clientY}px`;

            imageContainer.appendChild(img);

            // Play the hover sound
            if (soundEnabled) {
                sound.play().catch(error => {
                    console.error("Audio play failed:", error);
                });
            }

            if (imageContainer.children.length > MAX_IMAGES) {
                imageContainer.removeChild(imageContainer.children[0]);
            }

            index++;
            resetIdleTimer();
        });

        section.addEventListener('mouseleave', () => {
            clearTimeout(idleTimeout);
            clearImagesOneByOne();
        });
    }

    imageRenderer();

    function parallaxPgae1() {
        gsap.to("#section1-studio h2", {
            y: -200, // or more/less depending on the intensity you want
            filter: "blur(10px)",
            opacity: 0,
            ease: "none",
            scrollTrigger: {
                trigger: "#section1-studio",
                scroller: "body",
                start: "top top",
                end: "bottom top",
                scrub: 1,
            }
        });
    }
    parallaxPgae1()

    window.addEventListener("load", () => {
        document.fonts.ready.then(() => {
            SplitText.create(".splitlines", {
                type: "lines",
                linesClass: "lines"
            });

            function animateLines(selector) {
                const lines = document.querySelectorAll(`${selector} .lines`);

                lines.forEach((line) => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: line,
                            scroller: "html, body", // ensure full scroll area is considered
                            start: "top 95%",
                            end: "top 75%", // Slightly earlier to trigger animation earlier
                            scrub: 1.5, // Make scroll trigger smoother
                            markers: false, // Turn off markers for cleaner visuals
                        }
                    });

                    tl.from(line, {
                        y: 30,
                        filter: "blur(10px)",
                        opacity: 0,
                        stagger: 0.05, // Reduce stagger for more seamless flow
                        duration: 1.5, // Increase duration for a smoother effect
                        ease: "expo.out", // Smooth and fluid easing
                    });
                });
            }

            // Call for left and right lines
            animateLines('.lineleft');
            animateLines('.lineright');




        });
    });


    const clientData = [
        {
            "name": "THR India",
            "logo": "/Logos/thr_logo.webp",
            "image": "/brands/thr_our_studio.webp"
        },
        {
            "name": "Esquire India",
            "logo": "/Logos/esquire_logo.webp",
            "image": "/brands/esquire_our_studio.webp"
        },
        {
            "name": "Manifest",
            "logo": "/Logos/manifest.webp",
            "image": "/brands/manifest_our_studio.webp"
        },
        {
            "name": "RPSG Group",
            "logo": "/Logos/RPSG_group_logo.webp",
            "image": "/brands/rpsg_group_our_studio.webp"
        },
        {
            "name": "RPSG Lifestyle Media",
            "logo": "/Logos/RPSG_media_logo.webp",
            "image": "/brands/rpsg_media_our_studio.webp"
        },
        {
            "name": "Point Of",
            "logo": "/Logos/point.png",
            "image": "/brands/po_our_studio.webp"
        },
        {
            "name": "Wealth Fusion",
            "logo": "/Logos/wf_logo.webp",
            "image": "/brands/wealth_fusion_our_studio.webp"
        },
        {
            "name": "Casa Carigar",
            "logo": "/Logos/cc_logo_2.webp",
            "image": "/brands/cc_our_studio.webp"
        },
        {
            "name": "WineeMedia",
            "logo": "/Logos/wineemedia_logo_2.webp",
            "image": "/brands/wineemedia_our_studio.webp"
        },
        {
            "name": "JustNosh",
            "logo": "/Logos/justnosh_logo.webp",
            "image": "/brands/just_nosh_our_studio.webp"
        },
        {
            "name": "Hefty Art",
            "logo": "/Logos/hefty_art_logo.webp",
            "image": "/brands/hefty_art_our_studio.webp"
        },
        {
            "name": "Khelo Esports",
            "logo": "/Logos/khelo_esport_logo_2.webp",
            "image": "/brands/khelo_esports_our_studio.webp"
        },
        {
            "name": "The Senseis Store",
            "logo": "/Logos/sensei_store_logo.webp",
            "image": "/brands/sensei_store_our_studio.webp"
        },
        {
            "name": "Mr. & Mrs.",
            "logo": "/Logos/mr_and_mrs_films_logo.webp",
            "image": "/brands/mr_and_mrs_our_studio.webp"
        },
        {
            "name": "Rage",
            "logo": "/Logos/rage_media_logo_2.webp",
            "image": "/brands/rage_our_studio.webp"
        },
        {
            "name": "Dhamaka",
            "logo": "/Logos/dhamaka_record_logo.webp",
            "image": "/brands/dhamaka_records_our_studio.webp"
        },
        {
            "name": "Indian Gaming League",
            "logo": "/Logos/the_greek_life_logo_2.webp",
            "image": "/brands/IGL_our_studio.webp"
        },
        {
            "name": "The Greek Life",
            "logo": "/Logos/the_greek_life_logo_2.webp",
            "image": "/brands/greek_life_our_studio.webp"
        },
        {
            "name": "I White Korea",
            "logo": "/Logos/i_white_korea_logo.webp",
            "image": "/brands/iWhiteKorea_our_studio.webp"
        },
        {
            "name": "ResideInBeing",
            "logo": "/Logos/rib.avif",
            "image": "/brands/reside_in_being_our_studio.webp"
        },
    ]

    function textEffectAnimation() {
        const sound = new Audio('/music/buttonHover.mp3');

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
                if (soundEnabled && window.innerWidth > 575) {
                     sound.play().catch(error => {
                    console.error("Audio play failed:", error);
                });
                }
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
            // gsap.set("nav", { backgroundColor: "#fff" })
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
            // gsap.set("nav", { backgroundColor: "transparent" })
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

    function stringAnimation() {
        let audioIndex = 0;
        const audioFiles = ["/music/1.mp3", "/music/2.mp3", "/music/3.mp3", "/music/4.mp3", "/music/5.mp3", "/music/6.mp3", "/music/7.mp3", "/music/8.mp3"];


        function adjustStrings() {
            const containers = document.querySelectorAll(".string-container");

            containers.forEach((container, index) => {
                const svg = container.querySelector("svg");
                const path = svg.querySelector("path");
                const width = container.clientWidth;
                const height = svg.clientHeight;
                const midY = height / 2;

                // Set the viewBox dynamically based on the actual width and height
                svg.setAttribute("viewBox", `0 0 ${width} ${height}`);
                svg.setAttribute("width", width);
                svg.setAttribute("height", height);

                // Initial straight path
                const initialPath = `M 0 ${midY} Q ${width / 2} ${midY} ${width} ${midY}`;
                path.setAttribute("d", initialPath);

                // String animation
                container.addEventListener("mouseenter", () => {
                    if (soundEnabled) {
                        const audio = new Audio(audioFiles[audioIndex]);
                        audio.volume = 0.8; // Set volume between 0.0 (silent) and 1.0 (full)
                        audio.play().catch(error => {
                    console.error("Audio play failed:", error);
                });
                        audioIndex = (audioIndex + 1) % audioFiles.length;
                    }


                    gsap.to(path, {
                        duration: 0.2,
                        attr: { d: `M 0 ${midY} Q ${width / 2} ${midY - 50} ${width} ${midY}` }, // Reduced the height change
                        ease: "elastic.out(1, 0.2)",
                    });
                });

                container.addEventListener("mousemove", (e) => {
                    const offsetFactorX = 0.01;  // Reduced the X-axis movement
                    const offsetFactorY = 0.2;   // Reduced the Y-axis movement
                    const rect = container.getBoundingClientRect();
                    const xOffset = (e.clientX - rect.left - width / 2) * offsetFactorX;
                    const yOffset = (e.clientY - rect.top - midY) * offsetFactorY;

                    const newPath = `M 0 ${midY} Q ${width / 2 + xOffset} ${midY + yOffset} ${width} ${midY}`;

                    gsap.to(path, {
                        duration: 0.2,
                        attr: { d: newPath },
                        ease: "elastic.out(1, 0.2)",
                    });
                });

                container.addEventListener("mouseleave", () => {
                    gsap.to(path, {
                        duration: 1.2,
                        attr: { d: initialPath },
                        ease: "elastic.out(1, 0.2)",
                    });
                });
            });
        }

        // Adjust on load and resize
        window.addEventListener("load", adjustStrings);
        window.addEventListener("resize", adjustStrings);
    }

    stringAnimation();

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
                    pin: true,
                    anticipatePin: 1,  // Helps smoother transition
                    invalidateOnRefresh: true  // Recalculates values on resize
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


    function dragTeam() {
        const canvas = document.getElementById('teamCanvas');
        const ctx = canvas.getContext('2d');

        // Set canvas resolution to match CSS size
        const rect = canvas.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;

        // Array to hold team member images
        const teamMembers = [];

        // Load images
        const imageSources = [
            '/team/m1.avif', '/team/m2.avif', '/team/m3.avif', '/team/m4.avif', '/team/m5.avif', '/team/m6.avif',
            '/team/m7.avif', '/team/m8.avif', '/team/m9.avif', '/team/m10.avif', '/team/m11.avif', '/team/m12.avif',
        ];

        // Function to load images
        function loadImages(sources, callback) {
            let loadedImages = 0;
            const images = [];

            for (let i = 0; i < sources.length; i++) {
                images[i] = new Image();
                images[i].src = sources[i];
                images[i].onload = () => {
                    loadedImages++;
                    if (loadedImages === sources.length) {
                        callback(images);
                    }
                };
            }
        }

        // Initialize team members
        loadImages(imageSources, (images) => {
            const imageHeight = 500;
            const imageWidths = images.map(img => imageHeight * (img.width / img.height));
            const totalWidth = imageWidths.reduce((sum, w) => sum + w, 0);
            const availableWidth = canvas.width - 300;
            const spacing = (availableWidth - totalWidth) / (images.length + 1);
            let currentX = 150 + spacing;

            images.forEach((img, index) => {
                const imageWidth = imageWidths[index];
                teamMembers.push({
                    image: img,
                    x: currentX,
                    y: canvas.height - imageHeight - 20,
                    width: imageWidth,
                    height: imageHeight,
                    isDragging: false
                });
                currentX += imageWidth + spacing;
            });
            draw();
        });

        // Draw function
        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            teamMembers.forEach(member => {
                ctx.drawImage(member.image, member.x, member.y, member.width, member.height);
            });
        }

        // Pixelate function
        function applyPixelationEffect(member) {
            const pixelSize = 12;
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = member.width;
            tempCanvas.height = member.height;

            // Draw the original image to the temporary canvas
            tempCtx.drawImage(member.image, 0, 0, member.width, member.height);

            // Set the opacity level (less than 1 means more transparency)
            const opacity = 1; // You can adjust this value to make it lighter or more transparent

            // Loop through and apply pixelation using drawImage
            for (let y = 0; y < member.height; y += pixelSize) {
                for (let x = 0; x < member.width; x += pixelSize) {
                    // Sample color from the top-left pixel of each block
                    const imageData = tempCtx.getImageData(x, y, 1, 1).data;
                    tempCtx.fillStyle = `rgba(${imageData[0]}, ${imageData[1]}, ${imageData[2]}, ${imageData[3] / 255})`;
                    tempCtx.fillRect(x, y, pixelSize, pixelSize);
                }
            }

            // Draw the pixelated image onto the main canvas with reduced opacity
            ctx.globalAlpha = opacity; // Set opacity for drawing the image
            ctx.drawImage(tempCanvas, member.x, member.y, member.width, member.height);
            ctx.globalAlpha = 1; // Reset opacity to full for future drawings
        }


        // Mouse event handlers
        let selectedMember = null;
        let offsetX, offsetY;

        canvas.addEventListener('mousedown', (e) => {
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            const sound2 = new Audio('/music/buttonHover.mp3');

            for (let i = teamMembers.length - 1; i >= 0; i--) {
                const member = teamMembers[i];
                if (
                    mouseX > member.x &&
                    mouseX < member.x + member.width &&
                    mouseY > member.y &&
                    mouseY < member.y + member.height
                ) {
                    selectedMember = member;
                    offsetX = mouseX - member.x;
                    offsetY = mouseY - member.y;
                    member.isDragging = true;
                    applyPixelationEffect(member);
                    teamMembers.push(teamMembers.splice(i, 1)[0]);
                    break;
                }
            }
            if (soundEnabled) {
                sound2.play().catch(error => {
                    console.error("Audio play failed:", error);
                });
            }
        });

        canvas.addEventListener('mousemove', (e) => {
            if (selectedMember && selectedMember.isDragging) {
                const newX = e.clientX - offsetX;
                const newY = e.clientY - offsetY;
                selectedMember.x = Math.max(0, Math.min(newX, canvas.width - selectedMember.width));
                selectedMember.y = Math.max(0, Math.min(newY, canvas.height - selectedMember.height));
                draw();
                applyPixelationEffect(selectedMember);
            }
        });

        canvas.addEventListener('mouseup', () => {
            if (selectedMember) {
                selectedMember.isDragging = false;

                // Snap to bottom
                selectedMember.y = canvas.height - selectedMember.height - 20;

                draw();
                selectedMember = null;
            }
        });

    }
    dragTeam()


})