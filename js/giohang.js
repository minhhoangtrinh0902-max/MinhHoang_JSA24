// ================= STORAGE =================
const STORAGE = {
    SELECTED: "checkoutItems"
};

// ================= CURRENT USER =================
function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("currentUser")
    );

}

// ================= GET CART KEY =================
function getCartKey() {

    const currentUser =
        getCurrentUser();

    if (!currentUser) {

        return "cart_guest";

    }

    return `cart_${currentUser.username}`;

}

// ================= GET CART =================
function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(
                getCartKey()
            )
        ) || [];

    } catch {

        return [];

    }

}

// ================= SAVE CART =================
function saveCart(cart) {

    localStorage.setItem(

        getCartKey(),

        JSON.stringify(cart)

    );

}

// ================= FORMAT PRICE =================
function formatPrice(price) {

    return Number(price)
        .toLocaleString("vi-VN")
        + " VND";

}

// ================= RENDER CART =================
function renderCart() {

    const cart =
        getCart();

    const container =
        document.getElementById(
            "cart-list"
        );

    const totalBox =
        document.getElementById(
            "total-price"
        );

    if (!container) return;

    // empty
    if (cart.length === 0) {

        container.innerHTML = `

            <h2 class="empty">
                🛒 Giỏ hàng trống
            </h2>

        `;

        totalBox.innerText =
            "Tổng: 0 VND";

        return;

    }

    let html = "";
    let total = 0;

    cart.forEach(item => {

        // total checked
        if (item.checked) {

            total +=
                item.price
                * item.quantity;

        }

        html += `

            <div class="cart-item">

                <input
                    type="checkbox"
                    ${item.checked ? "checked" : ""}
                    onchange="toggleItem('${item.cartId}')"
                >

                <div class="cart-image">

                    <img
                        src="${item.img}"
                        alt="${item.name}"
                    >

                </div>

                <div class="cart-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p class="price">
                        ${formatPrice(item.price)}
                    </p>

                    <div class="quantity-box">

                        <button
                            onclick="changeQuantity('${item.cartId}', -1)"
                        >
                            -
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="changeQuantity('${item.cartId}', 1)"
                        >
                            +
                        </button>

                    </div>

                    <button
                        class="delete-btn"
                        onclick="removeItem('${item.cartId}')"
                    >
                        Xóa
                    </button>

                </div>

            </div>

        `;

    });

    container.innerHTML = html;

    totalBox.innerText =
        `Tổng: ${formatPrice(total)}`;

}

// ================= TOGGLE ITEM =================
function toggleItem(cartId) {

    let cart =
        getCart();

    cart = cart.map(item => {

        if (item.cartId === cartId) {

            item.checked =
                !item.checked;

        }

        return item;

    });

    saveCart(cart);

    renderCart();

}

// ================= SELECT ALL =================
function toggleSelectAll(checked) {

    let cart =
        getCart();

    cart = cart.map(item => {

        item.checked =
            checked;

        return item;

    });

    saveCart(cart);

    renderCart();

}

// ================= CHANGE QUANTITY =================
function changeQuantity(cartId, amount) {

    let cart =
        getCart();

    cart = cart.map(item => {

        if (item.cartId === cartId) {

            item.quantity += amount;

            if (item.quantity < 1) {

                item.quantity = 1;

            }

        }

        return item;

    });

    saveCart(cart);

    renderCart();

}

// ================= REMOVE ITEM =================
function removeItem(cartId) {

    let cart =
        getCart();

    cart = cart.filter(
        item =>
            item.cartId !== cartId
    );

    saveCart(cart);

    renderCart();

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
// ================ FOOTER =================
fetch("footer.html")

    .then(res => res.text())    
    .then(data => {

        // render footer
        document.getElementById(
            "footer"
        ).innerHTML = data;
    });
// ================= CLEAR CART =================
function clearCart() {

    if (
        !confirm(
            "Xóa toàn bộ giỏ hàng?"
        )
    ) {

        return;

    }

    saveCart([]);

    renderCart();

}

// ================= CHECKOUT =================
function goCheckout() {

    const cart =
        getCart();

    const selected =
        cart.filter(
            item => item.checked
        );

    if (selected.length === 0) {

        alert(
            "Vui lòng chọn sản phẩm ❌"
        );

        return;

    }

    localStorage.setItem(

        STORAGE.SELECTED,

        JSON.stringify(selected)

    );

    window.location.href =
        "checkout.html";

}

// ================= START =================
document.addEventListener(

    "DOMContentLoaded",

    () => {

        renderCart();

    }

);