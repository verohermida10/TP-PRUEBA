const products = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    description: "256GB Titanio Negro",
    price: 1800,
    image:
      "https://images.unsplash.com/photo-1695048133142-1a20484d2569?q=80&w=1000&auto=format&fit=crop"
  },

  {
    id: 2,
    name: "PlayStation 5",
    description: "Consola Sony + DualSense",
    price: 950,
    image:
      "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?q=80&w=1000&auto=format&fit=crop"
  },

  {
    id: 3,
    name: "MacBook Air M3",
    description: "Laptop ultraliviana 16GB RAM",
    price: 2400,
    image:
      "https://images.unsplash.com/photo-1517336714739-489689fd1ca8?q=80&w=1000&auto=format&fit=crop"
  },

  {
    id: 4,
    name: "Auriculares Gamer RGB",
    description: "Sonido envolvente 7.1",
    price: 120,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?q=80&w=1000&auto=format&fit=crop"
  },

  {
    id: 5,
    name: "Smartwatch Pro",
    description: "Monitoreo cardíaco y GPS",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1000&auto=format&fit=crop"
  },

  {
    id: 6,
    name: "Zapatillas Urbanas",
    description: "Edición limitada streetwear",
    price: 210,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1000&auto=format&fit=crop"
  }
];

const container = document.getElementById("products-container");
const cart = document.getElementById("cart");
const cartBtn = document.getElementById("cart-btn");
const closeCart = document.getElementById("close-cart");
const cartItems = document.getElementById("cart-items");
const totalElement = document.getElementById("total");
const cartCount = document.getElementById("cart-count");

let shoppingCart = [];

function renderProducts() {
  products.forEach(product => {

    const div = document.createElement("div");
    div.classList.add("product");

    div.innerHTML = `
      <img src="${product.image}" alt="${product.name}">

      <div class="product-info">
        <h3>${product.name}</h3>

        <p class="description">
          ${product.description}
        </p>

        <p class="price">$${product.price}</p>

        <button onclick="addToCart(${product.id})">
          Agregar al carrito
        </button>
      </div>
    `;

    container.appendChild(div);
  });
}

function addToCart(id) {

  const product = products.find(p => p.id === id);

  shoppingCart.push(product);

  updateCart();
}

function updateCart() {

  cartItems.innerHTML = "";

  let total = 0;

  shoppingCart.forEach(item => {

    total += item.price;

    const div = document.createElement("div");

    div.classList.add("cart-item");

    div.innerHTML = `
      <img src="${item.image}">

      <div>
        <h4>${item.name}</h4>
        <p>$${item.price}</p>
      </div>
    `;

    cartItems.appendChild(div);
  });

  totalElement.textContent = total;
  cartCount.textContent = shoppingCart.length;
}

cartBtn.addEventListener("click", () => {
  cart.classList.add("active");
});

closeCart.addEventListener("click", () => {
  cart.classList.remove("active");
});

renderProducts();