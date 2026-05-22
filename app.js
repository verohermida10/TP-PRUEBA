const products = [
  {
    id: 1,
    name: "Auriculares Gamer",
    price: 120,
    image: "https://picsum.photos/300/200?random=1"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 450,
    image: "https://picsum.photos/300/200?random=2"
  },
  {
    id: 3,
    name: "Notebook",
    price: 980,
    image: "https://picsum.photos/300/200?random=3"
  },
  {
    id: 4,
    name: "Zapatillas Deportivas",
    price: 85,
    image: "https://picsum.photos/300/200?random=4"
  }
];

const productsContainer = document.getElementById("products-container");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

const cartBtn = document.getElementById("cart-btn");
const cartModal = document.getElementById("cart-modal");
const closeCart = document.getElementById("close-cart");

let cart = [];

function renderProducts() {
  products.forEach(product => {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <div class="product-info">
        <h3>${product.name}</h3>
        <p class="price">$${product.price}</p>
        <button onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    `;

    productsContainer.appendChild(card);
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  cart.push(product);

  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";

  let total = 0;

  cart.forEach(item => {
    total += item.price;

    const li = document.createElement("li");
    li.innerHTML = `
      ${item.name} - $${item.price}
    `;

    cartItems.appendChild(li);
  });

  totalElement.textContent = total;
  cartCount.textContent = cart.length;
}

cartBtn.addEventListener("click", () => {
  cartModal.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cartModal.classList.remove("active");
});

renderProducts();