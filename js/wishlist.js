// ================= PRODUCTS =================

const PRODUCTS_DB =
JSON.parse(
    localStorage.getItem("products")
) || [];

// ================= ELEMENTS =================

const wishlistContainer =
document.getElementById(
    "wishlist-products"
);

const emptyMessage =
document.getElementById(
    "empty-message"
);

// ================= STORAGE =================

function getWishlist() {

    return JSON.parse(
        localStorage.getItem("wishlist")
    ) || [];

}

function saveWishlist(data) {

    localStorage.setItem(
        "wishlist",
        JSON.stringify(data)
    );

}

function getCart() {

    return JSON.parse(
        localStorage.getItem("cart")
    ) || [];

}

function saveCart(data) {

    localStorage.setItem(
        "cart",
        JSON.stringify(data)
    );

}

// ================= FORMAT PRICE =================

function formatPrice(price) {

    return Number(price)
    .toLocaleString("vi-VN") + "VND";

}

// ================= REMOVE WISHLIST ================= 

function removeWishlist(id) {

    let wishlist = getWishlist();

    wishlist = wishlist.filter(
        item => item !== id
    );

    saveWishlist(wishlist);

    renderWishlist();

}

// ================= ADD TO CART =================

function addToCart(id) {

    let cart = getCart();

    const product =
    PRODUCTS_DB.find(
        item => item.id === id
    );

    // nếu không có sản phẩm
    if(!product) return;

    const existing =
    cart.find(
        item => item.id === id
    );

    if(existing){

        existing.quantity++;

    } else {

        cart.push({

            ...product,
            quantity: 1

        });

    }

    saveCart(cart);

    alert("🛒 Đã thêm vào giỏ hàng");

}

// ================= BUY NOW =================

function buyNow(id){

    addToCart(id);

    window.location.href =
    "giohang.html";

}

// ================= RENDER =================

function renderWishlist(){

    const wishlist =
    getWishlist();

    const products =
    PRODUCTS_DB.filter(product =>

        wishlist.includes(product.id)

    );

    // EMPTY
    if(products.length === 0){

        wishlistContainer.innerHTML = "";

        emptyMessage.style.display =
        "block";

        return;

    }

    emptyMessage.style.display =
    "none";

    // RENDER PRODUCTS

    wishlistContainer.innerHTML =
    products.map(product => `

        <div class="product-card">

            <!-- REMOVE -->

            <button
                class="wishlist-btn"
                onclick="removeWishlist(${product.id})"
            >
                ❤️
            </button>

            <!-- IMAGE -->

            <div class="img-box">

                <img
                    src="${product.img}"
                    alt="${product.name}"
                >

            </div>

            <!-- INFO -->

            <div class="product-info">

                <h3>
                    ${product.name}
                </h3>

                <p class="price">
                    ${formatPrice(product.price)}
                </p>

                <div class="buttons">

                    <button
                        class="add-cart-btn"
                        onclick="addToCart(${product.id})"
                    >
                        Thêm giỏ hàng
                    </button>

                    <button
                        class="buy-now-btn"
                        onclick="buyNow(${product.id})"
                    >
                        Mua ngay
                    </button>

                </div>

            </div>

        </div>

    `).join("");

}

// ================= USER =================

const currentUser =
JSON.parse(
    localStorage.getItem(
        "currentUser"
    )
);

if(currentUser){

    const displayUser =
    document.getElementById(
        "displayUserName"
    );

    if(displayUser){

        displayUser.textContent =
        currentUser.name;

    }

}

// ================= HEADER =================

// ================= HEADER =================

fetch("header.html")

.then(res => res.text())

.then(data => {

    // render header
    document.getElementById(
        "header"
    ).innerHTML = data;

    // ================= CURRENT USER =================

    const currentUser =
    JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

    // ================= DISPLAY USER =================

    if(currentUser){

        // tên user
        document.getElementById(
            "displayUserName"
        ).textContent =
        currentUser.name;

        // avatar
        document.getElementById(
            "displayUserAvatar"
        ).src =
        currentUser.avatar ||
        "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    }

    // ================= AUTO ACTIVE MENU =================

    const currentPage =
    window.location.pathname
    .split("/")
    .pop();

    const navLinks =
    document.querySelectorAll(
        "nav a"
    );

    navLinks.forEach(link => {

        const linkPage =
        link.getAttribute("href");

        if(linkPage === currentPage){

            link.classList.add(
                "active"
            );

        }

    });

});

// ================= FOOTER =================

fetch("footer.html")

.then(res => res.text())

.then(data => {

    document.getElementById(
        "footer"
    ).innerHTML = data;

});

// ================= START =================

renderWishlist();