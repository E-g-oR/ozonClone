const cart = () => {
    const cartBtn = document.querySelector('a#cart');
    const cart = document.querySelector('.cart');

    const openCartDialog = () => {
        cart.style.display = 'flex';
    }

    const closeCartDialog = () => {
        cart.style.display = 'none';
    }

    cartBtn.addEventListener('click', openCartDialog);

    cart.addEventListener('click', (e) => {
        if (e.target.classList.contains('cart') || e.target.classList.contains('cart-close')) {
            closeCartDialog();
        }
    })
}

export default cart