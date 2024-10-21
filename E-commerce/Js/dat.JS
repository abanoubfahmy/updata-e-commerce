const products = [
    { id: 1, title: "mobile", size: "Large", imageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp" },
    { id: 2, title: "smartphone", size: "Small", imageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp" },
    { id: 3, title: "AISmart", size: "Medium", imageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp" }
];

(function drawProductsUI() {
    const productsDom = document.querySelector('.products');
    const productsUI = products.map(item => `
        <div class="product-item" style="margin:5px 0px">
            <img src="${item.imageUrl}" class="product-item-img" alt="Product Image" />
            <div class="product-item-desc">
                <h2>${item.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <span>Size: ${item.size}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addedToCart(${item.id})">Remove to cart</button>
                <i class="far fa-heart"></i>
            </div>
        </div>
    `).join(""); // تجميع العناصر في سلسلة واحدة

    productsDom.innerHTML = productsUI; // إضافة المنتجات إلى الصفحة
})();
