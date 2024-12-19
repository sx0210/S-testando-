let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productName, productPrice) {
    // Cria um objeto do produto
    const product = {
        name: productName,
        price: productPrice
    };

    // Adiciona o produto ao carrinho
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} foi adicionado ao carrinho!`);
}