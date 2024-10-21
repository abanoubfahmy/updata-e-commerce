 // استرداد المنتجات من Local Storage
 let productsInCart = localStorage.getItem('productsInCart'); 
 const productsDom = document.querySelector('.products');
let noProductsDom= document.querySelector('noProduct');
 // عرض المنتجات من التخزين المحلي إذا كانت موجودة
 if (productsInCart) {
     let items = JSON.parse(productsInCart);    
     drawCartProductsUI(items);
 }

 // دالة لرسم واجهة المستخدم الخاصة بالمنتجات في العربة
 function drawCartProductsUI(products) {
    // if(JSON.parse(localStorage.getItem('productsInCart')).length==0);
    // noProductsDom.innerHTML="there are no products";
     const productsUI = products.map(item =>
         `
    
         <div class="product-item" style="margin:5px 0px">
             <img src="${item.imageUrl}" class="product-item-img" alt="Product Image" />
             <div class="product-item-desc">
                 <h2>${item.title}</h2>
                 <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
                 <span>Size: ${item.size}</span>
             </div>
             <div class="product-item-actions">
                 <button class="add-to-cart" onclick="addedToCart(${item.id})">Add to Cart</button>
                 <button class="remove-from-cart" onclick="removeFromCart(${item.id})">Remove from Cart</button>
                 <i class="far fa-heart"></i>
             </div>
         </div>
     `).join(""); // تجميع العناصر في سلسلة واحدة

     productsDom.innerHTML = productsUI; // إضافة المنتجات إلى الصفحة
 }

 // التحكم في قائمة العربة
 const cartProductMenu = document.querySelector('.carts-products');
 const cartProductionDivDom = cartProductMenu.querySelector('div');
 const badgeDom = document.querySelector('.badge');
 const shoppingCartIcon = document.querySelector('.ShoppingCart');

 // تحديث قائمة العربة بناءً على البيانات في التخزين المحلي
 (function CartMenuData() {
     let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [];

     if (addedItem.length > 0) {
         cartProductionDivDom.innerHTML = ''; // مسح العناصر السابقة
         addedItem.map(item => {
             cartProductionDivDom.innerHTML += `<p>${item.title}</p>`;
         });
         badgeDom.style.display = "block";
         badgeDom.innerHTML = cartProductionDivDom.children.length;
     }
 })();

 // إضافة عنصر إلى العربة
 function addedToCart(id) {
     // افتراض أن المتغير products يحتوي على جميع المنتجات
     let products = JSON.parse(localStorage.getItem('allProducts')) || [];
     const chosenItem = products.find(item => item.id === id);

     cartProductionDivDom.innerHTML += `<p>${chosenItem.title}</p>`;
     badgeDom.style.display = "block";
     badgeDom.innerHTML = cartProductionDivDom.children.length;

     let addedItem = localStorage.getItem('productsInCart') ? JSON.parse(localStorage.getItem('productsInCart')) : [];
     addedItem = [...addedItem, chosenItem];
     localStorage.setItem("productsInCart", JSON.stringify(addedItem));
 }

 // فتح أو إغلاق قائمة العربة
 shoppingCartIcon.addEventListener("click", openCartMenu);
 function openCartMenu() {
     cartProductMenu.style.display = cartProductMenu.style.display === "block" ? "none" : "block";
 }

 // إزالة عنصر من العربة
 function removeFromCart(id) {
     let productsInCart = localStorage.getItem('productsInCart');

     if (productsInCart) {
         let items = JSON.parse(productsInCart);

         // تصفية العناصر لإزالة العنصر المطلوب
         let filteredItems = items.filter((item) => item.id !== id);

         // تحديث واجهة المستخدم بدون العنصر المحذوف
         drawCartProductsUI(filteredItems);

         // تحديث التخزين المحلي بالقائمة الجديدة
         localStorage.setItem("productsInCart", JSON.stringify(filteredItems));

         // تحديث عرض القائمة في قائمة العربة
         cartProductionDivDom.innerHTML = ''; // مسح العناصر السابقة في القائمة
         filteredItems.map(item => {
             cartProductionDivDom.innerHTML += `<p>${item.title}</p>`;
         });
         badgeDom.innerHTML = cartProductionDivDom.children.length;
     }
 }