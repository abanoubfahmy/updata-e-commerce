const productsDom = document.querySelector('.products');
const cartProductMenu = document.querySelector('.carts-products');
const cartProductionDivDom = cartProductMenu.querySelector('div');
const badgeDom = document.querySelector('.badge');
const shoppingCartIcon = document.querySelector('.ShoppingCart');
const products=JSON.parse(localStorage.getItem('products'));

let addedItem = localStorage.getItem('productsInCart') ? 
    JSON.parse(localStorage.getItem('productsInCart')) : [];

// Display products
(function drawProductsUI() {
    const productsUI = products.map(item => `
        <div class="product-item" style="margin:5px 0px">
            <img src="${item.imageUrl}" class="product-item-img" alt="Product Image" />
            <div class="product-item-desc">
                <a onclick='saveItemData(${item.id})'>${item.title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                <span>Size: ${item.size}</span>
            </div>
            <div class="product-item-actions">
                <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to Cart</button>
                <i class="far fa-heart"></i>
            </div>
        </div>
    `).join(""); // تجميع العناصر في سلسلة واحدة

    productsDom.innerHTML = productsUI; // إضافة المنتجات إلى الصفحة
})();

// Check if there are items in localStorage and populate the cart
(function CartMenuData() {
    if (addedItem.length > 0) {
        addedItem.map(item => {
            cartProductionDivDom.innerHTML += `<p>${item.title}</p>`;
        });
        badgeDom.style.display = "block";
        badgeDom.innerHTML = cartProductionDivDom.children.length;
    }
})();

// Add to cart
function addedToCart(id) {
    const chosenItem = products.find(item => item.id === id);
    cartProductionDivDom.innerHTML += `<p>${chosenItem.title}</p>`;
    badgeDom.style.display = "block";
    badgeDom.innerHTML = cartProductionDivDom.children.length;

    // Update the addedItem array and localStorage
    addedItem = [...addedItem, chosenItem];
    localStorage.setItem("productsInCart", JSON.stringify(addedItem));
}

// // Check if the user is logged in
// function checkLoggedUser() {
//     if (!localStorage.getItem("username")) {
//         window.location = "login.html";
//     }
// }

// Open or close the cart menu
shoppingCartIcon.addEventListener("click", openCartMenu);
function openCartMenu() {
    cartProductMenu.style.display = cartProductMenu.style.display === "block" ? "none" : "block";
}

// Execute when the page loads
document.addEventListener('DOMContentLoaded', function() {
    checkLoggedUser();
});
       function saveItemData(id){
        localStorage.setItem("productId", id);
        window.location = "cartDetails.html";
       }