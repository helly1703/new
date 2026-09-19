/* =====================================================
   SHOPHUB - FINAL JAVASCRIPT
===================================================== */


/* =====================================================
   MOBILE MENU
===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", function () {

        navLinks.classList.toggle("mobile-open");

    });

}


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("mobile-open");

    });

});


/* =====================================================
   SEARCH BOX
===================================================== */

const searchBtn = document.getElementById("searchBtn");
const searchBox = document.getElementById("searchBox");
const closeSearch = document.getElementById("closeSearch");
const searchInput = document.getElementById("searchInput");

if (searchBtn && searchBox) {

    searchBtn.addEventListener("click", function () {

        searchBox.classList.toggle("active");

        if (searchBox.classList.contains("active")) {

            searchInput.focus();

        }

    });

}


if (closeSearch) {

    closeSearch.addEventListener("click", function () {

        searchBox.classList.remove("active");

        searchInput.value = "";

        showAllProducts();

    });

}


/* =====================================================
   CART VARIABLES
===================================================== */

let cart = [];

const cartBtn = document.getElementById("cartBtn");
const cartModal = document.getElementById("cartModal");
const closeCart = document.getElementById("closeCart");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const cartCount = document.getElementById("cartCount");
const toast = document.getElementById("toast");


/* =====================================================
   PRODUCT DATA
===================================================== */

const products = [

    {
        name: "Elegant Black Handbag",
        price: 1899,
        image: "product1.png"
    },

    {
        name: "Classic White Sneakers",
        price: 2499,
        image: "product2.png"
    },

    {
        name: "Pink Active Sneakers",
        price: 2799,
        image: "product3.png"
    },

    {
        name: "Classic Black Heels",
        price: 1999,
        image: "product4.png"
    },

    {
        name: "Pink Sporty T-Shirt",
        price: 899,
        image: "product5.png"
    },

    {
        name: "Classic White Polo",
        price: 1099,
        image: "product6.png"
    },

    {
        name: "Premium Beauty Collection",
        price: 1299,
        image: "product7.jpg"
    },

    {
        name: "Lip Gloss Collection",
        price: 699,
        image: "product8.webp"
    },

    {
        name: "Wireless Earbuds",
        price: 1499,
        image: "product9.webp"
    },

    {
        name: "Premium Headphones",
        price: 2999,
        image: "product10.jpg"
    },

    {
        name: "Smart Watch",
        price: 2199,
        image: "product11.webp"
    },

    {
        name: "Luxury Beauty Collection",
        price: 1599,
        image: "product12.jpg"
    }

];


/* =====================================================
   OPEN CART
===================================================== */

if (cartBtn) {

    cartBtn.addEventListener("click", function () {

        cartModal.classList.add("active");

        updateCart();

    });

}


/* =====================================================
   CLOSE CART
===================================================== */

if (closeCart) {

    closeCart.addEventListener("click", function () {

        cartModal.classList.remove("active");

    });

}


/* Close cart by clicking outside */

if (cartModal) {

    cartModal.addEventListener("click", function (event) {

        if (event.target === cartModal) {

            cartModal.classList.remove("active");

        }

    });

}


/* =====================================================
   ADD TO CART
===================================================== */

const addCartButtons = document.querySelectorAll(".add-cart");

addCartButtons.forEach(function (button, index) {

    button.addEventListener("click", function () {

        const selectedProduct = products[index];

        cart.push(selectedProduct);

        updateCartCount();

        button.textContent = "✓ Added to Cart";

        button.classList.add("added");

        showToast("✓ Product added to cart!");

        setTimeout(function () {

            button.textContent = "Add to Cart +";

            button.classList.remove("added");

        }, 1500);

    });

});


/* =====================================================
   UPDATE CART COUNT
===================================================== */

function updateCartCount() {

    cartCount.textContent = cart.length;

}


/* =====================================================
   DISPLAY CART
===================================================== */

function updateCart() {

    cartItems.innerHTML = "";

    if (cart.length === 0) {

        cartItems.innerHTML = `
            <p class="empty-cart">
                Your cart is empty.
            </p>
        `;

        cartTotal.textContent = "₹0";

        return;

    }


    let total = 0;


    cart.forEach(function (product, index) {

        total += product.price;


        const cartItem = document.createElement("div");

        cartItem.className = "cart-item";


        cartItem.innerHTML = `

            <img src="${product.image}" 
                 alt="${product.name}">


            <div class="cart-item-info">

                <h4>
                    ${product.name}
                </h4>

                <p>
                    ₹${product.price.toLocaleString("en-IN")}
                </p>

            </div>


            <button 
                class="remove-item"
                onclick="removeFromCart(${index})">

                ✕

            </button>

        `;


        cartItems.appendChild(cartItem);

    });


    cartTotal.textContent =
        "₹" + total.toLocaleString("en-IN");

}


/* =====================================================
   REMOVE FROM CART
===================================================== */

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCartCount();

    updateCart();

    showToast("Product removed from cart");

}


/* =====================================================
   TOAST MESSAGE
===================================================== */

function showToast(message) {

    toast.textContent = message;

    toast.classList.add("show");


    setTimeout(function () {

        toast.classList.remove("show");

    }, 2000);

}


/* =====================================================
   WISHLIST
===================================================== */

const heartButtons = document.querySelectorAll(".heart");

heartButtons.forEach(function (heart) {

    heart.addEventListener("click", function () {

        heart.classList.toggle("active");


        if (heart.classList.contains("active")) {

            heart.textContent = "♥";

        } else {

            heart.textContent = "♡";

        }

    });

});


/* =====================================================
   SEARCH PRODUCTS
===================================================== */

if (searchInput) {

    searchInput.addEventListener("input", function () {

        const searchValue =
            searchInput.value.toLowerCase().trim();


        const productCards =
            document.querySelectorAll(".product-card");


        productCards.forEach(function (card) {

            const productName =
                card.querySelector("h3")
                    .textContent
                    .toLowerCase();


            if (productName.includes(searchValue)) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

}


/* =====================================================
   SHOW ALL PRODUCTS
===================================================== */

function showAllProducts() {

    const productCards =
        document.querySelectorAll(".product-card");


    productCards.forEach(function (card) {

        card.style.display = "block";

    });

}


/* =====================================================
   VIEW ALL BUTTON
===================================================== */

const viewAllBtn =
    document.getElementById("viewAllBtn");


if (viewAllBtn) {

    viewAllBtn.addEventListener("click", function () {

        showAllProducts();

        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


/* =====================================================
   CHECKOUT
===================================================== */

const checkoutBtn =
    document.getElementById("checkoutBtn");

const checkoutModal =
    document.getElementById("checkoutModal");

const closeCheckout =
    document.getElementById("closeCheckout");


if (checkoutBtn) {

    checkoutBtn.addEventListener("click", function () {

        if (cart.length === 0) {

            showToast("Your cart is empty!");

            return;

        }


        cartModal.classList.remove("active");

        checkoutModal.classList.add("active");

    });

}


/* =====================================================
   CLOSE CHECKOUT
===================================================== */

if (closeCheckout) {

    closeCheckout.addEventListener("click", function () {

        checkoutModal.classList.remove("active");

    });

}


/* Close checkout by clicking outside */

if (checkoutModal) {

    checkoutModal.addEventListener("click", function (event) {

        if (event.target === checkoutModal) {

            checkoutModal.classList.remove("active");

        }

    });

}


/* =====================================================
   PLACE ORDER
===================================================== */

const checkoutForm =
    document.getElementById("checkoutForm");

const successModal =
    document.getElementById("successModal");


if (checkoutForm) {

    checkoutForm.addEventListener("submit", function (event) {

        event.preventDefault();


        checkoutModal.classList.remove("active");

        successModal.classList.add("active");


        cart = [];

        updateCartCount();

        updateCart();

        checkoutForm.reset();

    });

}


/* =====================================================
   CONTINUE SHOPPING
===================================================== */

const continueShopping =
    document.getElementById("continueShopping");


if (continueShopping) {

    continueShopping.addEventListener("click", function () {

        successModal.classList.remove("active");


        document
            .getElementById("products")
            .scrollIntoView({
                behavior: "smooth"
            });

    });

}


/* =====================================================
   CLOSE SUCCESS MODAL OUTSIDE
===================================================== */

if (successModal) {

    successModal.addEventListener("click", function (event) {

        if (event.target === successModal) {

            successModal.classList.remove("active");

        }

    });

}


/* =====================================================
   ESCAPE KEY
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        if (cartModal) {

            cartModal.classList.remove("active");

        }

        if (checkoutModal) {

            checkoutModal.classList.remove("active");

        }

        if (successModal) {

            successModal.classList.remove("active");

        }

        if (searchBox) {

            searchBox.classList.remove("active");

        }

    }

});


/* =====================================================
   INITIAL SETUP
===================================================== */

updateCartCount();
