// ================= GET DATA =================
function getData(key){

    try{

        return JSON.parse(
            localStorage.getItem(key)
        ) || [];

    }catch{

        return [];

    }

}

// ================= CURRENT USER =================
function getCurrentUser(){

    return JSON.parse(
        localStorage.getItem(
            "currentUser"
        )
    );

}

// ================= GET ORDER KEY =================
function getOrderKey(){

    const currentUser =
        getCurrentUser();

    // chưa login
    if(!currentUser){

        return "orders_guest";

    }

    // orders riêng theo user
    return `orders_${currentUser.username}`;

}

// ================= CLEAN PRICE =================
function cleanPrice(price){

    // nếu là number
    if(typeof price === "number"){

        return price;

    }

    // chuyển string -> number
    return Number(

        String(price)
            .replace(/[^\d]/g,"")

    );

}

// ================= FORMAT PRICE =================
function formatPrice(price){

    return cleanPrice(price)
        .toLocaleString("vi-VN")
        + " VND";

}

// ================= LOAD ORDERS =================
function loadOrders(){

    // lấy orders theo user
    const orders =
        getData(
            getOrderKey()
        );

    const box =
        document.getElementById(
            "orders"
        );

    if(!box) return;

    // ================= EMPTY =================
    if(orders.length === 0){

        box.innerHTML = `

            <div class="empty">

                Chưa có đơn hàng 🛒

            </div>

        `;

        return;

    }

    // ================= CLEAR =================
    box.innerHTML = "";

    // ================= LOOP ORDERS =================
    orders.forEach(order => {

        let productsHTML = "";

        // ================= PRODUCTS =================
        order.items.forEach(item => {

            productsHTML += `

                <div class="product">

                    <img
                        src="${item.img}"
                        alt="${item.name}"
                    >

                    <div class="product-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${formatPrice(item.price)}
                        </p>

                        <span>
                            Số lượng:
                            ${item.quantity}
                        </span>

                    </div>

                </div>

            `;

        });

        // ================= RENDER ORDER =================
        box.innerHTML += `

            <div class="order-card">

                <!-- TOP -->
                <div class="order-top">

                    <div>

                        <h2>
                            Mã đơn:
                            #${order.orderId}
                        </h2>

                        <p>
                            ${order.createdAt}
                        </p>

                        <p>
                            Khách hàng:
                            ${order.customer.fullname}
                        </p>

                        <p>
                            SĐT:
                            ${order.customer.phone}
                        </p>

                        <p>
                            Địa chỉ:
                            ${order.customer.address}
                        </p>

                        <p>
                            Thanh toán:
                            ${order.paymentMethod}
                        </p>

                    </div>

                    <div class="status">

                        ${order.status}

                    </div>

                </div>

                <!-- PRODUCTS -->
                ${productsHTML}

                <!-- TOTAL -->
                <div class="total">

                    Tổng:
                    ${formatPrice(order.total)}

                </div>

            </div>

        `;

    });

}

// ================= START =================
document.addEventListener(

    "DOMContentLoaded",

    loadOrders

);