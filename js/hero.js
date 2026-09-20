let heroImages = [];
let currentIndex = 0;

const heroImage = document.getElementById("heroImage");
const heroDots = document.getElementById("heroDots");

async function loadHero() {
    try {
        const response = await fetch("assets/data/hero.json");

        if (!response.ok) {
            throw new Error("Could not load hero.json");
        }

        heroImages = await response.json();

        console.log("Hero images:", heroImages);

        if (heroImages.length === 0) {
            throw new Error("No hero images found");
        }

        createDots();
        showHero(0);

        setInterval(() => {
            currentIndex++;

            if (currentIndex >= heroImages.length) {
                currentIndex = 0;
            }

            showHero(currentIndex);
        }, 5000);

    } catch (error) {
        console.error("Error loading hero:", error);
    }
}

function showHero(index) {
    const hero = heroImages[index];

    heroImage.src = hero.image;
    heroImage.alt = hero.alt;

    heroImage.classList.add("active");

    updateDots(index);
}

function createDots() {
    heroDots.innerHTML = "";

    heroImages.forEach((_, index) => {
        const dot = document.createElement("button");

        dot.classList.add("dot");

        if (index === 0) {
            dot.classList.add("active");
        }

        dot.addEventListener("click", () => {
            currentIndex = index;
            showHero(currentIndex);
        });

        heroDots.appendChild(dot);
    });
}

function updateDots(index) {
    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

loadHero();