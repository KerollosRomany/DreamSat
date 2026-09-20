const CATEGORIES = {
    screens: {
        title: "جميع الشاشات معها حامل هدية",
        description: "أحدث شاشات LED و Smart TV بأفضل الأسعار وضمان أصلي",
        image: "assets/images/Tv-png_002_.png"
    },
    "kitchen-appliances": {
        title: "أجهزة المطبخ",
        description: "كل ما يحتاجه مطبخك من أجهزة كهربائية بجودة عالية",
        image: "assets/images/kitchen.png"
    },
    beverages: {
        title: "المشروبات والأدوات الحرارية",
        description: "تشكيلة من الكاتلات وسخانات القهوة إلى المجات والأكواب الحرارية",
        image: "assets/images/Kettles-_-Coffee-Machines_1__1.png"
    },
    shavers: {
        title: "ماكينات الحلاقة",
        description: "تسوق أفضل ماكينات الحلاقة والعناية الشخصية بأحدث الموديلات وأسعار مناسبة",
        image: "assets/images/vgr.webp"
    },
    tank: {
        title: "منتجات تانك",
        description: "تشكيلة من منتجات تانك تشمل فلاتر المياه، الكولمانات، والأيس تانك ",
        image: "assets/images/tank-products.png"
    },
    "water-coolers": {
        title: "مبردات المياه",
        description: "تشكيلة متنوعة من مبردات المياه لتوفير المياه الباردة والساخنة بسهولة",
        image: "assets/images/water-cooler.png"
    },
    "kitchen-exhaust": {
        title: "الشفاطات",
        description: "تشكيلة متنوعة من الشفاطات بتصميمات عملية وأداء مناسب",
        image: "assets/images/شفاطات.webp"
    },

    irons: {
        title: "المكاوي",
        description: "تشكيلة متنوعة من المكاوي العملية لكيّ الملابس بسهولة وسرعة",
        image: "assets/images/Irons.png"
    },

    "satellites-receivers": {
        title: "مستلزمات الدش والرسيفرات",
        description: "أطباق دش، عدسات LNB، رسيفرات، ريموتات وأسلاك دش لمختلف الاستخدامات",
        image: "assets/images/مستلزمات الدش والرسيفرات.png"
    }

};

function getCategoryFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("category");
}

function renderCategoryBanner(categoryKey) {
    const info = CATEGORIES[categoryKey];

    document.getElementById("breadcrumb-category").textContent = info ? info.title : "قسم غير معروف";
    document.getElementById("category-title").textContent = info ? info.title : "قسم غير معروف";
    document.getElementById("category-description").textContent = info ? info.description : "";

    const img = document.getElementById("category-image");
    if (info) {
        img.src = info.image;
        img.alt = info.title;
    }

    document.title = `${info ? info.title : "قسم"} | دريم سات`;
}

function createCategoryCard(product) {
    const article = document.createElement("article");
    article.className = "category-card";

    article.innerHTML = `
        <div class="category-card-details">
            <a href="product.html?id=${product.id}">
                <img src="${product.image}" alt="${product.name}" class="category-product-image">
                <h3 class="category-product-name">${product.name}</h3>
                <span class="category-product-price">${formatPrice(product.price)}</span>
            </a>
        </div>
        <div class="category-card-contact">
            <a href="${buildWhatsAppLink(product)}" class="btn-whatsapp" target="_blank" rel="noopener noreferrer">
               <span>اطلب الآن</span>
            </a>
        </div>
    `;

    return article;
}

// عرض منتجات القسم الحالي فقط
async function renderCategoryPage() {
    const categoryKey = getCategoryFromUrl();
    renderCategoryBanner(categoryKey);

    const container = document.querySelector(".category-products");

    try {
        const products = await loadProducts();
        const filtered = products.filter(p => p.category === categoryKey);

        container.innerHTML = "";

        if (filtered.length === 0) {
            container.innerHTML = "<p>لا توجد منتجات في هذا القسم حالياً</p>";
            return;
        }

        filtered.forEach(product => {
            container.appendChild(createCategoryCard(product));
        });
        observeCardsForFadeIn();
    } catch (error) {
        container.innerHTML = "<p>حدث خطأ في تحميل المنتجات</p>";
        console.error(error);
    }
}

renderCategoryPage();