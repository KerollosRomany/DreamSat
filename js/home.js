// إنشاء عنصر كرت منتج واحد لصفحة الرئيسية
function createProductCard(product) {
    const article = document.createElement("article");
    article.className = "product";

    article.innerHTML = `
        <a href="product.html?id=${product.id}">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-name-en">${product.nameEn}</p>
            <img src="${product.image}" alt="${product.name}">
            <span class="price">${formatPrice(product.price)}</span>
        </a>
        <a href="${buildWhatsAppLink(product)}" class="btn-whatsapp" target="_blank" rel="noopener noreferrer">
                        <span>اطلب الآن</span>
        </a>
    `;

    return article;
}

// عرض المنتجات في قسم "الأكثر مبيعاً"
async function renderBestSellers() {
    const container = document.querySelector(".best-sellers .products");
    if (!container) return;

    try {
        const products = await loadBestSeller();
        container.innerHTML = "";
        products.forEach(product => {
            container.appendChild(createProductCard(product));
        });
        observeCardsForFadeIn();
    } catch (error) {
        container.innerHTML = "<p>حدث خطأ في تحميل المنتجات</p>";
        console.error(error);
    }
}

renderBestSellers();