let allProducts = [];

async function initializeSearch() {
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");
    const searchResults = document.getElementById("searchResults");

    if (!searchInput || !searchResults) {
        return;
    }

    try {
        allProducts = await loadProducts();
    } catch (error) {
        console.error("Search error:", error);
        return;
    }

    searchInput.addEventListener("input", function() {
        const searchTerm = this.value.trim().toLowerCase();

        if (searchTerm === "") {
            hideSearchResults();
            return;
        }

        const results = allProducts.filter(function(product) {
            const name = product.name ? product.name.toLowerCase() : "";
            const nameEn = product.nameEn ? product.nameEn.toLowerCase() : "";

            return name.includes(searchTerm) || nameEn.includes(searchTerm);
        });

        displaySearchResults(results);
    });

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".search-wrapper")) {
            hideSearchResults();
        }
    });
}


function displaySearchResults(products) {
    const searchResults = document.getElementById("searchResults");

    searchResults.innerHTML = "";

    if (products.length === 0) {
        searchResults.innerHTML = `
            <div class="search-no-results">
                لا توجد منتجات مطابقة للبحث
            </div>
        `;

        searchResults.classList.add("show");
        return;
    }

    products.forEach(function(product) {
        const resultItem = document.createElement("a");

        resultItem.className = "search-result-item";
        resultItem.href = `product.html?id=${product.id}`;

        resultItem.innerHTML = `
            <img 
                src="${product.image}" 
                alt="${product.name}"
            >

            <div class="search-result-info">
                <div class="search-result-name">
                    ${product.name}
                </div>

                <div class="search-result-price">
                    ${formatPrice(product.price)}
                </div>
            </div>
        `;

        searchResults.appendChild(resultItem);
    });

    searchResults.classList.add("show");
}


function hideSearchResults() {
    const searchResults = document.getElementById("searchResults");

    if (!searchResults) {
        return;
    }

    searchResults.classList.remove("show");
}


initializeSearch();