const userInfo = document.querySelector('#user_info');
const useDom = document.querySelector('#user');
const links = document.querySelector('#links');
const logoutBtn = document.querySelector('#logout');

// استرجاع اسم المستخدم من التخزين المحلي
const username = localStorage.getItem('username');

if (username) {
    links.remove(); // إزالة الروابط عند تسجيل الدخول
    userInfo.style.display = "flex"; // عرض معلومات المستخدم
    useDom.innerHTML = username; // عرض اسم المستخدم
}

logoutBtn.addEventListener('click', function() {
    localStorage.clear();
    setTimeout(() => {
        window.location = 'register.html';
    }, 1500);
});
