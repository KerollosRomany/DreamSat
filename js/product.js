function getProductIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    return Number(params.get("id"));
}

function renderProductDetails(product) {
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-name-en").textContent = product.nameEn;
    document.getElementById("product-price").textContent = formatPrice(product.price);

    const img = document.getElementById("product-image");
    img.src = product.image;
    img.alt = product.name;

    document.getElementById("product-description").innerHTML = product.description.replace(/\n/g, "<br>");

    document.getElementById("product-whatsapp").href = buildWhatsAppLink(product);

    document.title = `${product.name} | دريم سات`;
}

function createRelatedCard(product) {
    const div = document.createElement("div");
    div.className = "product-page-card";

    div.innerHTML = `
        <a href="product.html?id=${product.id}">
            <img class="product-page-card-img" src="${product.image}" alt="${product.name}">
            <h3 class="product-page-card-name">${product.name}</h3>
            <span class="product-page-card-price">${formatPrice(product.price)}</span>
        </a>
        <a href="${buildWhatsAppLink(product)}" class="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <span>اطلب الآن</span>
        </a>
    `;

    return div;
}

function renderRelatedProducts(currentProduct, allProducts) {
    const container = document.querySelector(".related-products");

    container.querySelectorAll(".product-page-card").forEach(el => el.remove());

    const related = allProducts.filter(
        p => p.category === currentProduct.category && p.id !== currentProduct.id
    );

    related.forEach(product => {
        container.appendChild(createRelatedCard(product));
    });
}

async function renderProductPage() {
    const id = getProductIdFromUrl();

    try {
        const products = await loadProducts();
        const product = products.find(p => p.id === id);

        if (!product) {
            document.querySelector(".product-page").innerHTML = "<p>عذراً، هذا المنتج غير موجود</p>";
            return;
        }

        renderProductDetails(product);
        renderRelatedProducts(product, products);
        observeCardsForFadeIn();
    } catch (error) {
        document.querySelector(".product-page").innerHTML = "<p>حدث خطأ في تحميل المنتج</p>";
        console.error(error);
    }
}

renderProductPage();