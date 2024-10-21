const products = [
    { id: 1, title: "mobile", size: "Large", imageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp" },
    { id: 2, title: "smartphone", size: "Small", imageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp" },
    { id: 3, title: "AISmart", size: "Medium", imageUrl: "51yh3V5taFL._AC_UY327_FMwebp_QL65_.webp" }
];
localStorage.setItem("products",JSON.stringify(products));