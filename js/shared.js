const WHATSAPP_NUMBER = "201222910027";

function formatPrice(price) {
    return price.toLocaleString("ar-EG") + " ج.م";
}


const SITE_URL = "https://dream-sat.vercel.app";

function formatPrice(price) {
    return price.toLocaleString("ar-EG") + " ج.م";
}

function buildWhatsAppLink(product) {
    const productUrl = `${SITE_URL}/product.html?id=${product.id}`;

    const message = `محتاج اطلب: ${product.name}

${productUrl}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

async function loadProducts() {
    const response = await fetch("assets/data/products.json");
    if (!response.ok) {
        throw new Error("تعذر تحميل ملف المنتجات");
    }
    const data = await response.json();
    return data.products;
}

async function loadBestSeller() {
    const response = await fetch("assets/data/best-seller.json");
    if (!response.ok) {
        throw new Error("تعذر تحميل ملف المنتجات");
    }
    const data = await response.json();
    return data.products;
}



const navWrapper = document.querySelector(".nav-wrapper");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScrollY = window.scrollY;
    const navHeight = 250;
    if (currentScrollY <= navHeight) {
        navWrapper.classList.remove("nav-hidden");
        lastScrollY = currentScrollY;
        return;
    }
    if (currentScrollY > lastScrollY) {
        navWrapper.classList.add("nav-hidden");
    } else if (currentScrollY < lastScrollY) {
        navWrapper.classList.remove("nav-hidden");
    }

    lastScrollY = currentScrollY;
});

function observeCardsForFadeIn() {
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll(".product, .category-card, .product-page-card, .fade-section").forEach(card => {
        revealObserver.observe(card);
    });
}
observeCardsForFadeIn();