const canvas = document.getElementById("physicsCanvas");

const engine = Matter.Engine.create();
const world = engine.world;

const render = Matter.Render.create({
    canvas: canvas,
    engine: engine,
    options: {
        width: window.innerWidth,
        height: window.innerHeight,
        wireframes: false,
        background: "transparent"
    }
});

const ground = Matter.Bodies.rectangle(
    window.innerWidth / 2,
    window.innerHeight - 30,
    window.innerWidth,
    20,
    {
        isStatic: true,
        render: {
            visible: false
        }
    }
);

const walls = [
    Matter.Bodies.rectangle(-10, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true }),
    Matter.Bodies.rectangle(window.innerWidth + 10, window.innerHeight / 2, 20, window.innerHeight, { isStatic: true })
];

Matter.World.add(world, [ground, ...walls]);

// Rock image URLs
const imageUrls = [
    "https://imgs.search.brave.com/GllfTkMBcFBRKZj_KP1LHLMFEz6o5quKsyTj3Hzm4dI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZm9z/c2lsaXplZC1yb2Nr/LWRpc2NvdmVyeS1w/bmctNTQtMWJvaWV6/NWo5aWs5NGY1Zy5w/bmc",
    "https://imgs.search.brave.com/1RfhQhtrpJGwYYUUsmsaoD_IDtlTVZ4-DHud1JIfQhA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdj/b3JlLmNvbS9maWxl/cy9wcmV2aWV3Lzkw/MHg3NjcvMTE3MjY5/MTcyNTFzeDVuZmQw/djZud3JzcDNxcXly/cm4zdDJmcHFhMWVu/enQ2YThhajh0b2lm/NzVpcHY0b2F1djNs/eGp3eWE5bXRxY2Ry/djN1MG9xb2tzMHdy/bTdnb2tqemtxc3dr/dDJoZTJxcmFqLnBu/Zw",
    "https://imgs.search.brave.com/FU83wZUXmSatFBzj4Bltv7ZFRcPuy10vLlGSVWGjMP8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvZm9z/c2lsaXplZC1yb2Nr/LWRpc2NvdmVyeS1w/bmctMDUwMzIwMjQt/OGF2amVobmFqbmhn/NGhkcy5wbmc",
    "https://imgs.search.brave.com/eA2SGMdS3CTfcIFg-HhOUukQbGwBKkY-cDoEeOg4TEs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdj/b3JlLmNvbS9maWxl/cy9wcmV2aWV3LzEy/ODB4ODA0LzExNzI2/OTE3MjkwNTI1ZHdm/OXFxeDNsY2wxNDhr/bGxjdDRrY2h3Z25o/Z251b3J2MTAzMGRi/aGpqbzBrOHh1cGRm/bG03cWNxdW5pYmM1/b2dzeWx4OXM2MDE1/dWo1cXR2eXk5OWpw/eTI5aGlveHB1cC5w/bmc",
    "https://imgs.search.brave.com/1iv8TOH3cz0YqDNqywUIqvB4uB81Yf6MJYDY5iOyZUM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvaWdu/ZW91cy1yb2NrLWRl/dGFpbC1wbmctcHV3/OTIteDNoOTZrNXB0/OXRxOTliaC5wbmc",
    "https://imgs.search.brave.com/G_psc02mJeq0RUBqiSG5eGLQ_JgfjtqQWvw9o4yVTtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvc3RvbmUvc3Rv/bmVfUE5HMTM1NjMu/cG5n",
    "https://imgs.search.brave.com/G_psc02mJeq0RUBqiSG5eGLQ_JgfjtqQWvw9o4yVTtk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbmdp/bWcuY29tL3VwbG9h/ZHMvc3RvbmUvc3Rv/bmVfUE5HMTM1NjMu/cG5n",
    "https://imgs.search.brave.com/TCSAQKjBTCpedmuz2_fUyjsOTyDpmVsI2KZ5kCC0dxI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5nYWxsLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvNS9TdG9u/ZS1QTkctSW1hZ2Uu/cG5n"
];

function getRandomImageUrl() {
    return imageUrls[Math.floor(Math.random() * imageUrls.length)];
}

// Consistent and larger rocks
function createImageObject(x, y) {
    const screenWidth = window.innerWidth;
    const size = screenWidth < 800 ? 40 : 80;  // smaller rocks on mobile
    const texture = getRandomImageUrl();

    return Matter.Bodies.rectangle(x, y, size, size, {
        restitution: 0.7,
        friction: 0.5,
        frictionAir: 0.02,
        density: 0.001,
        inertia: Infinity,
        render: {
            sprite: {
                texture: texture,
                xScale: size / 256,
                yScale: size / 256
            }
        }
    });
}


// Mouse drag improvement
const mouse = Matter.Mouse.create(render.canvas);
const mouseConstraint = Matter.MouseConstraint.create(engine, {
    mouse: mouse,
    constraint: {
        stiffness: 0.9,
        angularStiffness: 0.9,
        render: { visible: false }
    }
});
Matter.World.add(world, mouseConstraint);
render.mouse = mouse;

render.canvas.addEventListener('wheel', (e) => {
    if (!mouseConstraint.mouse.button) {
        e.preventDefault();
        e.stopPropagation();
    }
}, { passive: false });

let shapesAdded = false;

function addShapesAndText() {
    if (shapesAdded) return;
    shapesAdded = true;

    let count = 0;
    const maxPebbles = 14;
    const dropInterval = 250;

    const interval = setInterval(() => {
        if (count >= maxPebbles) {
            clearInterval(interval);
            return;
        }

        const x = 100 + Math.random() * (window.innerWidth - 200); // avoid edges
        const y = -200; // higher spawn point
        const pebble = createImageObject(x, y);
        Matter.World.add(world, pebble);
        count++;
    }, dropInterval);
}

const runner = Matter.Runner.create();


function resizeCanvas() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Resize canvas
    render.canvas.width = width;
    render.canvas.height = height;
    render.options.width = width;
    render.options.height = height;

    // Update ground
    Matter.Body.setPosition(ground, {
        x: width / 2,
        y: height - 30
    });
    Matter.Body.setVertices(ground, [
        { x: 0, y: height - 40 },
        { x: width, y: height - 40 },
        { x: width, y: height - 20 },
        { x: 0, y: height - 20 }
    ]);

    // Update walls
    Matter.Body.setPosition(walls[0], { x: -10, y: height / 2 });
    Matter.Body.setVertices(walls[0], [
        { x: -20, y: 0 },
        { x: 0, y: 0 },
        { x: 0, y: height },
        { x: -20, y: height }
    ]);

    Matter.Body.setPosition(walls[1], { x: width + 10, y: height / 2 });
    Matter.Body.setVertices(walls[1], [
        { x: width, y: 0 },
        { x: width + 20, y: 0 },
        { x: width + 20, y: height },
        { x: width, y: height }
    ]);
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);


// document.getElementById("resetButton").addEventListener("click", () => {
//   Matter.World.clear(world, false);
//   Matter.World.add(world, [ground, ...walls]);
//   shapesAdded = false;
// });



const musicBoxes = document.querySelectorAll('.music-box');
const audioInstances = []; // Store audio instances to reuse later

musicBoxes.forEach((box, index) => {
    const audio = new Audio(box.dataset.audio);
    audio.loop = true;
    audioInstances.push(audio); // Save for later access

    const volumeBar = box.querySelector('.volume');
    const volumeControl = box.querySelector('.volume-control');
    let isDragging = false;

    const updateVolume = (e) => {
        const rect = volumeBar.getBoundingClientRect();
        let volume = (e.clientX - rect.left) / rect.width;
        volume = Math.max(0, Math.min(1, volume));

        volumeControl.style.left = (volume * 100) + '%';
        audio.volume = volume;

        if (volume === 0) {
            audio.pause();
        } else {
            if (audio.paused) audio.play();
        }
    };

    volumeBar.addEventListener('mousedown', (e) => {
        isDragging = true;
        updateVolume(e);
    });

    window.addEventListener('mousemove', (e) => {
        if (isDragging) {
            updateVolume(e);
        }
    });

    window.addEventListener('mouseup', () => {
        isDragging = false;
    });
});

document.querySelectorAll("#play-game").forEach((button) => {
    button.addEventListener("click", function () {
        gsap.to("#relax-section", {
            top: "0%",
            duration: 0.6,
        });

          const volumes = [0.3, 0.2, 0.1];

        musicBoxes.forEach((box, index) => {
            const audio = audioInstances[index]; // Use the same instance
            const volumeControl = box.querySelector('.volume-control');
            const volume = volumes[index];

            audio.volume = volume;
            volumeControl.style.left = (volume * 100) + '%';

            if (audio.paused) {
                audio.play();
            }
        });

        
        Matter.Render.run(render);
        Matter.Runner.run(runner, engine);
        addShapesAndText();
    });
});

 document.querySelector("#enter-btn").addEventListener("click", function () {
    if(window.innerWidth < 575) return;
       setTimeout(() => {
         const volumes = [0.3, 0.2, 0.1];

        musicBoxes.forEach((box, index) => {
            const audio = audioInstances[index]; // Use the same instance
            const volumeControl = box.querySelector('.volume-control');
            const volume = volumes[index];

            audio.volume = volume;
            volumeControl.style.left = (volume * 100) + '%';

            if (audio.paused) {
                audio.play();
            }
        });
       }, 1000);

    })





let isMuted = false;

document.querySelector("#mute-music").addEventListener("click", function () {
    // Play toggle sound
    const toggleSound = new Audio('/music/mute.mp3');
    toggleSound.play();

    isMuted = !isMuted;

    musicBoxes.forEach((box, index) => {
        const audio = audioInstances[index];
        const volumeControl = box.querySelector('.volume-control');

        if (isMuted) {
            // Store current volume so we can restore it
            audio.dataset.prevVolume = audio.volume;
            audio.volume = 0;
            volumeControl.style.left = '0%';
        } else {
            const prevVolume = parseFloat(audio.dataset.prevVolume || 0.3);
            audio.volume = prevVolume;
            volumeControl.style.left = (prevVolume * 100) + '%';
            if (audio.paused) audio.play();
        }
    });

    // Update button icon
    document.querySelectorAll("#mute-music").forEach(el => {
        const icon = document.createElement('i');
        icon.className = isMuted ? 'ri-volume-mute-line' : 'ri-volume-up-line';

        el.innerHTML = ''; // Clear existing content
        el.appendChild(icon);
    });
});


document.querySelector("#close-game").addEventListener("click", function () {
    gsap.to("#relax-section", {
        top: "-100%",
        duration: .6,
    })
    //   Matter.World.clear(world, false);
    //   Matter.World.add(world, [ground, ...walls]);
    //   shapesAdded = false;
})