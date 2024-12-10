let cartCount = 0;

function goToPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.add('hidden'));

    document.getElementById(pageId).classList.remove('hidden');
    document.getElementById('page-container').classList.remove('hidden');
}

function addToCart() {
    cartCount++;
    document.getElementById('cart-count').innerText = cartCount;
}

function showContact() {
    alert('Contact Us: +20 123 456 7890');
}