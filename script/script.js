
let wishlistCount = 0; 
const wishlistIcon = document.querySelector('.wishlist-ic');
const wishlistCounter = wishlistIcon.querySelector('#wishlist-count');

document.querySelectorAll('.wishlist-btn').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.wishlist-icon');
        const isInWishlist = button.classList.contains('added-to-wishlist');
        if (isInWishlist) {
            button.classList.remove('added-to-wishlist');
            icon.src = 'images/icon/wishlist.ico';
            wishlistCount--;
        } else {
            button.classList.add('added-to-wishlist');
            icon.src = 'images/icon/wishlist_end.ico';
            wishlistCount++;
        }
        wishlistCounter.textContent = wishlistCount;
        if (wishlistCount < 0) {
            wishlistCount = 0;
            wishlistCounter.textContent = wishlistCount;
        }
    });
    
});
document.querySelectorAll('.btn-wish').forEach(button => {
    button.addEventListener('click', () => {
        const icon = button.querySelector('.co-wish');
        const isInWishlist = button.classList.contains('added-to-wishlist');
        
        if (isInWishlist) {
            button.classList.remove('added-to-wishlist');
            icon.src = 'images/icon/wishlist.ico';
            icon.style.filter = 'none'; 
            wishlistCount--;
        } else {
            button.classList.add('added-to-wishlist');
            icon.src = 'images/icon/wishlist_end.ico';
            wishlistCount++;
        }
        
        wishlistCounter.textContent = wishlistCount;
        if (wishlistCount < 0) {
            wishlistCount = 0;
            wishlistCounter.textContent = wishlistCount;
        }
    });
})
var burger = document.getElementById("burger");
var menu = document.getElementById("side-menu");
var closeIcon = document.getElementById("close-icon"); 

burger.addEventListener("click", function() {
    this.classList.toggle("active");
    menu.classList.toggle("show");
});
function closeMenu() {
    burger.classList.remove("active");
    menu.classList.remove("show");
}
document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !burger.contains(event.target)) {
        closeMenu();
    }
});
closeIcon.addEventListener("click", function () {
    closeMenu();
});