// checkout.js

// ================= STORAGE =================
const STORAGE = {
    SELECTED: "checkoutItems"
};

// ================= CURRENT USER =================
function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

}

// ================= GET CART KEY =================
function getCartKey() {

    const currentUser =
        getCurrentUser();

    // chưa login
    if (!currentUser) {

        return "cart_guest";

    }

    // cart theo user
    return `cart_${currentUser.username}`;

}

// ================= GET ORDER KEY =================
function getOrderKey() {

    const currentUser =
        getCurrentUser();

    // chưa login
    if (!currentUser) {

        return "orders_guest";

    }

    // orders theo user
    return `orders_${currentUser.username}`;

}

// ================= GET DATA =================
function getData(key) {

    try {

        return JSON.parse(
            localStorage.getItem(key)
        ) || [];

    } catch {

        return [];

    }

}

// ================= SET DATA =================
function setData(key, data) {

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

// ================= CLEAN PRICE =================
function cleanPrice(price) {

    // nếu đã là number
    if (typeof price === "number") {

        return price;

    }

    return Number(

        String(price)
            .replace(/[^\d]/g, "")

    );

}

// ================= FORMAT PRICE =================
function formatPrice(price) {

    return cleanPrice(price)
        .toLocaleString("vi-VN")
        + " VND";

}

// ================= LOAD CHECKOUT =================
function loadCheckoutCart() {

    const cart =
        getData(
            STORAGE.SELECTED
        );

    const cartItems =
        document.getElementById(
            "cartItems"
        );

    if (!cartItems) return;

    // không có sản phẩm
    if (cart.length === 0) {

        cartItems.innerHTML = `

            <h3>
                Không có sản phẩm
            </h3>

        `;

        return;

    }

    let total = 0;

    cartItems.innerHTML = "";

    cart.forEach(item => {

        const price =
            cleanPrice(item.price);

        total +=
            price * item.quantity;

        cartItems.innerHTML += `

            <div class="cart-item">

                <img src="${item.img}">

                <div class="cart-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ${formatPrice(price)}
                    </p>

                    <span>
                        Số lượng:
                        ${item.quantity}
                    </span>

                </div>

            </div>

        `;

    });

    // total
    cartItems.innerHTML += `

        <div class="cart-total">

            Tổng:
            ${formatPrice(total)}

        </div>

    `;

}

// ================= PLACE ORDER =================
function placeOrder() {

    const fullname =
        document
            .getElementById("fullname")
            .value
            .trim();

    const phone =
        document
            .getElementById("phone")
            .value
            .trim();

    const address =
        document
            .getElementById("address")
            .value
            .trim();

    // payment
    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        )?.value || "COD";

    // validate
    if (
        !fullname ||
        !phone ||
        !address
    ) {

        alert(
            "Vui lòng nhập đầy đủ thông tin ❌"
        );

        return;

    }

    // sản phẩm checkout
    const selected =
        getData(
            STORAGE.SELECTED
        );

    // không có sản phẩm
    if (selected.length === 0) {

        alert(
            "Không có sản phẩm ❌"
        );

        return;

    }

    // total
    let total = 0;

    selected.forEach(item => {

        total +=
            cleanPrice(item.price)
            * item.quantity;

    });

    // tạo order
    const order = {

        orderId:
            Date.now(),

        customer: {

            fullname,
            phone,
            address

        },

        paymentMethod:
            payment,

        items:
            selected,

        total,

        status:
            "Đang xử lý",

        createdAt:
            new Date()
                .toLocaleString("vi-VN")

    };

    // lấy orders user
    let orders =
        getData(
            getOrderKey()
        );

    // thêm order
    orders.unshift(order);

    // lưu order
    setData(

        getOrderKey(),

        orders

    );

    // lấy cart user
    let cart =
        getData(
            getCartKey()
        );

    // xóa sản phẩm đã mua
    cart = cart.filter(cartItem => {

        return !selected.some(
            selectedItem =>
                selectedItem.cartId ===
                cartItem.cartId
        );

    });

    // lưu cart mới
    setData(

        getCartKey(),

        cart

    );

    // xóa checkout items
    localStorage.removeItem(
        STORAGE.SELECTED
    );

    alert(
        "Đặt hàng thành công 🎉"
    );

    // chuyển trang
    window.location.href =
        "./orders.html";

}

// ================= START =================
document.addEventListener(

    "DOMContentLoaded",

    loadCheckoutCart

);