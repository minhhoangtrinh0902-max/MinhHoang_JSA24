// ================= DATABASE =================
const PRODUCTS_DB = [
    { id: 1, name:"Nike Air Max", price:2500000, category: "running", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600" },
    { id: 2, name:"Adidas Runner", price:2200000, category: "running", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRaZtKXg91f9kNSJ-cz5ulxZaBFv4DGPjYa-w9GAmIEdZbDMqzfWfdhjb4ciA4zXfZhcVv6zsDZY4UOYqG5UEq4J5yoMC8bp8KR72woxQYEMuG6XYF0C0uW" },
    { id: 3, name:"Sandal Sport", price:850000, category: "lifestyle", img:"https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600" },
    { id: 4, name:"Puma Future", price:1950000, category: "running", img:"https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=600" },
    { id: 5, name:"Reebok Classic Leather", price:2390000, category: "lifestyle", img:"https://static.ftshp.digital/img/p/1/2/6/8/4/0/7/1268407-full_product.jpg" },
    { id: 6, name:"Reebok Club C 85", price:2150000, category: "lifestyle", img:"https://i.ebayimg.com/images/g/eYEAAOSw9sxmhcB~/s-l1200.png" },
    { id: 7, name:"Reebok Classic Nylon", price:1990000, category: "lifestyle", img:"https://media.finishline.com/s/finishline/230984_001?%24Main%24=&fmt=auto&w=320&h=320" },
    { id: 8, name:"Reebok Workout Plus", price:2490000, category: "lifestyle", img:"https://uptherestore.com/cdn/shop/files/reebok-workout-plus-chalk-1_1160x.jpg?v=1768355205" },
    { id: 9, name:"Adidas Superstar", price:2300000, category: "lifestyle", img:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTqFOhRdbZSaZr9B3Iv9m6MMR95GLC99KLcXHelFR7JjcOWZUXZts6ne0WV7wNMZzBMQgb31N7SIxo-GEEhSJpJtTxgIgzC_525U7kCbP5KDrvXAhNXh_1-" },
    { id: 11, name:"Adidas Predator", price:6300000, category: "football", img:"https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQuCAYDbLfZAIkXtw7GRtZW0SbSwvB4CkdbfRvBUmWbJ7sQs17YxNADFd5LBH_v_MfyzfeLomz0-sCl6BRet3xtbLNN20OzJ0fP4arQBIX7ADj-tutVXS0" },
    { id: 12, name:"Adidas Harden Vol. 8", price:3290000, category: "basketball", img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRdmQaxR3lG1Yine6I6XvxwPmLrhbv6R7SAUj_NjiH4QWAhfSNxuneev0zLBm3h5ZS8dm7RL3aL-n1LXBzNbKzHaw3zbxTfvZb_dHMF22nih8z3tPPVHrJXZg" },
    { id: 13, name:"Adidas Dame 9", price:3150000, category: "basketball", img:"https://encrypted-tbn₀.gstatic.com/shopping?q=tbn:ANd9GcS8M58Of2xt86J49FMMfJKXaJ2OnfmZReuEOn9jK4CDQupcr8Si-XEIqU4iPb2i9CXk-qSx6drp8np4Bh4P8XTPvHfdNrbr4ZjZwxUNv-w" },
    { id: 14, name:"Adidas Trae Young 3", price:2990000, category: "basketball", img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRBpaNY3pfbdncQer0fiSEzGQZe8L639vo5Ku1fGi7CAVmNpd3MitpQzYxQgYE230k-dhMegrjFWu6l5J-Vran5Vfg8KvTCIHdhI6LG4vlKk7fuLe9kyL6CWA"},
    { id: 15, name:"Adidas Pro Bounce 2018", price:2790000, category: "running", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcR1pxZD2cM_So2ttJUllGidp34S5pvZVVNiGaemoWc5Fbc81U4pjGlnyn8_NnfZUyXBrZ_nFpLDBcv2YMpKAmsiC3B2bzL-ek7UxlAKLlhvzZL8LTDVk0m_" },
    { id: 16, name:"Adidas Ultraboost 21", price:3490000, category: "running", img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7L0TPTnV-UMAfr6f8BE1cA-HJhy3hf_zrrvx32NkxTwL7gf8QZp3j7wyo8Q-lKWCiS4OjilKv-fjjOexFNBEZqxjoy6DESDrq41BfC1gecD7OxHTWzQns" },
    { id: 17, name:"Adidas NMD_R1", price:2990000, category: "lifestyle", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ__BGTwD2VcC4leaqBzfbGBC72y2Y5oaTFdMpaOWUgVgkzlHoXgUfnOWUt9H20Dzeiw335vr6jZh6LSrt_3Uqctmj21Av-ERb5Ri4X3QWbsLI6eCe8fcqG" },
    { id: 18, name:"Adidas Gazelle", price:1990000, category: "lifestyle", img:"https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT1r7Qas_wlwkQzU6x6AJQXtyiyHsrfoCcb_PhYMPn-JI6bjbxHSYU4usTmVsXown2XsYaUzl0xWbDW5-xY6T1a4Y3RQStnAjjCVtp2d8mLtZZTmbylQ3yV" },
    { id: 19, name:"Nike Pegasus", price:3829000, category: "running", img:"https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.7/h_334,c_limit/u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c8fe3313-6668-409f-9a7b-b57309986ae9/AIR+ZOOM+PEGASUS+42.png"},
    { id: 20, name:"Nike Air Force 1", price:3290000, category: "lifestyle", img:"https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTedi9tIdno-KDdb2vrVIJ9OajIaEhkjQV806fLev_A8JslOelgS5wNn0EJGbp4XvWoXeOTtevNmQMkEdy6t6Fzz9w15ikBCNm7a1zZkBxwGRJ-DkRt40hzTg" },
    { id: 21, name:"Nike Jordan Trunner O/S", price:3239000, category: "running", img:"https://static.nike.com/a/images/t_web_pw_592_v2/f_auto/u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/8bcf22ad-1634-4161-bfe6-53f94c226c33/WMNS+JORDAN+TRUNNER+O%2FS.png"},
    { id: 22, name:"Nike Mercurial Vapor 16 Academy 'Vini Jr'", price:2779000, category: "football", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/217e5ea6-a807-4b4e-9bc0-5fb2f9fe761b/ZM+VAPOR+16+ACADEMY+FG%2FMG+VJR.png" },
    { id: 23, name: "Mũ Lưỡi Trai Ferrari HYPERCAR Replica", price:1100000, category: "accessories", img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/027197/01/fnd/VNM/fmt/png/M%C5%A9-L%C6%B0%E1%BB%A1i-Trai-Ferrari-HYPERCAR-Replica" },
    { id: 24, name: "Mũ Replica McLAREN RACING 1000th Grand Prix Piastri", price:1200000, category: "accessories", img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/027744/01/fnd/VNM/fmt/png/M%C5%A9-Replica-McLAREN-RACING-1000th-Grand-Prix-Piastri"},
    { id: 25, name: "Mũ ftblEssentials Bồ Đào Nha", price:600000, category: "accessories", img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/027088/01/fnd/VNM/fmt/png/M%C5%A9-ftblEssentials-B%E1%BB%93-%C4%90%C3%A0o-Nha" },
    { id: 26, name: "Quả Bóng Bồ Đào Nha ftblCulture", price:600000, category: "accessories", img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/084983/01/fnd/VNM/fmt/png/Qu%E1%BA%A3-B%C3%B3ng-B%E1%BB%93-%C4%90%C3%A0o-Nha-ftblCulture" },
    { id: 27, name: "Túi Đeo Hông PUMA RUN", price:850000, category: "accessories", img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/091703/01/fnd/VNM/fmt/png/T%C3%BAi-%C4%90eo-H%C3%B4ng-PUMA-RUN" },
    { id: 28, name: "Ba lô PUMA x HYROX 46L", price:4300000, category: "accessories", img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/091611/01/fnd/VNM/fmt/png/Ba-l%C3%B4-PUMA-x-HYROX-46L" },
    { id: 29, name: "Giày Chạy Bộ FAST-R NITRO™ Elite 3 Showtime Nam", price:7000000, category: "running", img:"https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/313615/01/sv01/fnd/VNM/fmt/png/Gi%C3%A0y-Ch%E1%BA%A1y-B%E1%BB%99-FAST-R-NITRO%E2%84%A2-Elite-3-Showtime-Nam" },
    { id: 30, name: "Korea VaporFast Home", price:639000, category: "accessories", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/afb6980d-6fb5-42d0-810a-9d9737065ccb/KOR+U+NK+VPRFAST+KH+HM.png" },
    { id: 31, name: "Nike Phantom 6 Low Academy", price:2103000, category: "running", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/df5e7e0b-4a8e-4f4d-b59e-bd1b3a00cf4e/PHANTOM+6+LOW+ACAD+TF.png" },
    { id: 32, name: "Nike Strike", price:409000, category: "accessories", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/03db8388-37f7-4209-ada8-fdf265a47c3a/U+NK+STRIKE+CREW+WC22.png" },
    { id: 33, name: "Nike G.T. Cut 4 'Rob Dillingham' EP", price:5589000, category: "basketball", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/d4f60cf8-67d2-445a-87be-04506701fbf7/G.T.+CUT+4+RD+EP.png" },
    { id: 34, name: "Nike S.T. Flare EP", price:3519000, category: "basketball", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/476969bc-72aa-4251-b6ab-48cc568b1b73/NIKE+S.T.+FLARE+EP.png" },
    { id: 35, name: "Luka 77 'Bred'", price: 4109000, category: "basketball", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/16bfa98b-bc99-458c-a3a9-d0c439e803f2/JORDAN+ZION+4+PF.png" },
    { id: 36, name: "Nike Free Metcon 7", price: 3669000, category: "lifestyle", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/664c0ff8-c3d3-4d56-a203-c4bc67a25011/NIKE+FREE+METCON+7.png" },
    { id: 37, name: "Nike Mercurial Superfly 10 Academy", price: 2779000, category: "football", img:"https://static.nike.com/a/images/t_web_pdp_535_v2/f_auto,u_9ddf04c7-2a9a-4d76-add1-d15af8f0263d,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a067366e-04f6-4027-8950-b58fd5d63283/ZM+SUPERFLY+10+ACAD+FG%2FMG.png"}   
];

// ================= STORAGE =================

const STORAGE = {

    PRODUCTS: "products"

};

// ================= USER CART KEY =================

function getCartKey() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "currentUser"
            )
        );

    // chưa đăng nhập
    if (!currentUser) {

        return "cart_guest";

    }

    // cart riêng
    return `cart_${currentUser.username}`;

}

// ================= INIT PRODUCTS =================

function initProducts() {

    if (
        !localStorage.getItem(
            STORAGE.PRODUCTS
        )
    ) {

        saveProducts(
            PRODUCTS_DB
        );

    }

}

// ================= GET DATA =================

function getData(key) {

    try {

        return JSON.parse(
            localStorage.getItem(key)
        ) || [];

    }

    catch {

        return [];

    }

}

// ================= SAVE DATA =================

function saveData(key, data) {

    localStorage.setItem(

        key,

        JSON.stringify(data)

    );

}

// ================= PRODUCTS =================

function getProducts() {

    return getData(
        STORAGE.PRODUCTS
    );

}

function saveProducts(data) {

    saveData(
        STORAGE.PRODUCTS,
        data
    );

}

// ================= CART =================

function getCart() {

    try {

        return JSON.parse(
            localStorage.getItem(
                getCartKey()
            )
        ) || [];

    }

    catch {

        return [];

    }

}

function saveCart(cart) {

    localStorage.setItem(

        getCartKey(),

        JSON.stringify(cart)

    );

}

// ================= WISHLIST =================

function getWishlist() {

    try {

        return JSON.parse(
            localStorage.getItem(
                "wishlist"
            )
        ) || [];

    }

    catch {

        return [];

    }

}

function saveWishlist(data) {

    localStorage.setItem(

        "wishlist",

        JSON.stringify(data)

    );

}

function toggleWishlist(id) {

    let wishlist =
        getWishlist();

    const exists =
        wishlist.includes(id);

    // đã thích
    if (exists) {

        wishlist =
            wishlist.filter(
                item => item !== id
            );

    }

    // chưa thích
    else {

        wishlist.push(id);

    }

    saveWishlist(wishlist);

    renderProducts(
        getProducts()
    );

}

// ================= FORMAT PRICE =================

function formatPrice(price) {

    return Number(price)
        .toLocaleString("vi-VN")
        + " VND";

}

// ================= HEADER =================

fetch("header.html")

.then(res => res.text())

.then(data => {

    document.getElementById(
        "header"
    ).innerHTML = data;

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "currentUser"
            )
        );

    // hiển thị user
    if (currentUser) {

        document.getElementById(
            "displayUserName"
        ).textContent =
            currentUser.name;

        document.getElementById(
            "displayUserAvatar"
        ).src =
            currentUser.avatar ||
            "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";

    }

    // active menu
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

        if (linkPage === currentPage) {

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

// ================= FILTER =================

function filterByCategory(category) {

    const allProducts =
        getProducts();

    if (category === "all") {

        renderProducts(
            allProducts
        );

    }

    else {

        const filtered =
            allProducts.filter(

                product =>
                    product.category === category

            );

        renderProducts(filtered);

    }

    updateActiveButton(category);

}

// ================= ACTIVE BUTTON =================

function updateActiveButton(category) {

    const buttons =
        document.querySelectorAll(
            ".btn-filter"
        );

    buttons.forEach(btn => {

        btn.classList.remove(
            "active"
        );

        if (

            btn.innerText
                .toLowerCase()
                .includes(category)

        ) {

            btn.classList.add(
                "active"
            );

        }

    });

}

// ================= RENDER PRODUCTS =================

function renderProducts(products) {

    const container =
        document.getElementById(
            "products"
        );

    if (!container) return;

    const wishlist =
        getWishlist();

    // empty
    if (products.length === 0) {

        container.innerHTML = `

            <p class="empty">
                Không có sản phẩm 😢
            </p>

        `;

        return;

    }

    let html = "";

    products.forEach(product => {

        const liked =
            wishlist.includes(
                product.id
            );

        html += `

            <div class="card">

                <!-- WISHLIST -->

                <button
                    class="wishlist-btn ${liked ? "liked" : ""}"
                    onclick="toggleWishlist(${product.id})"
                >
                    ❤️
                </button>

                <!-- IMAGE -->

                <a href="product-detail.html?id=${product.id}">

                    <img
                        src="${product.img}"
                        alt="${product.name}"
                    >

                </a>

                <!-- NAME -->

                <h3>
                    ${product.name}
                </h3>

                <!-- PRICE -->

                <p class="price">
                    ${formatPrice(product.price)}
                </p>

                <!-- ACTIONS -->

                <div class="actions">

                    <button
                        onclick="addToCart(${product.id})"
                    >
                        Thêm giỏ hàng
                    </button>

                    <button
                        onclick="
                            location.href=
                            'product-detail.html?id=${product.id}'
                        "
                    >
                        Xem chi tiết
                    </button>

                </div>

            </div>

        `;

    });

    container.innerHTML = html;

}

// ================= LOAD PRODUCTS =================

function loadProducts() {

    const products =
        getProducts();

    renderProducts(products);

}

// ================= SHOW DETAIL =================

function showDetail(id) {

    const products =
        getProducts();

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;

    alert(

`Tên: ${product.name}
Giá: ${formatPrice(product.price)}`

    );

}

// ================= ADD TO CART =================

function addToCart(id) {

    const products =
        getProducts();

    const product =
        products.find(
            p => p.id === id
        );

    if (!product) return;

    let cart =
        getCart();

    const existing =
        cart.find(
            item => item.id === id
        );

    // đã có
    if (existing) {

        existing.quantity += 1;

    }

    // chưa có
    else {

        cart.push({

            cartId:
                crypto.randomUUID(),

            id: product.id,

            name: product.name,

            price: product.price,

            img: product.img,

            category: product.category,

            quantity: 1,

            checked: false

        });

    }

    saveCart(cart);

    showToast(
        "Đã thêm vào giỏ hàng 🛒",
        "success"
    );

}

// ================= SEARCH =================

const searchInput =
    document.getElementById(
        "search"
    );

function searchProducts(keyword) {

    const products =
        getProducts();

    const filtered =
        products.filter(

            product =>

                product.name
                    .toLowerCase()
                    .includes(
                        keyword.toLowerCase()
                    )

        );

    renderProducts(filtered);

}

// ================= SEARCH EVENT =================

if (searchInput) {

    searchInput.addEventListener(

        "input",

        () => {

            const keyword =
                searchInput.value
                .trim();

            if (keyword === "") {

                loadProducts();

                return;

            }

            searchProducts(keyword);

        }

    );

}

// ================= STORAGE SYNC =================

window.addEventListener(

    "storage",

    e => {

        if (
            e.key === STORAGE.PRODUCTS
        ) {

            loadProducts();

        }

    }

);

// ================= DISPLAY USER =================

function displayUser() {

    const currentUser =
        JSON.parse(
            localStorage.getItem(
                "currentUser"
            )
        );

    const userDisplay =
        document.getElementById(
            "displayUserName"
        );

    if (!userDisplay) return;

    // đã đăng nhập
    if (

        currentUser &&
        currentUser.username

    ) {

        userDisplay.innerText =
            currentUser.username;

    }

    // chưa đăng nhập
    else {

        userDisplay.innerText =
            "Đăng nhập";

    }

}

// ================= TOAST =================

function showToast(message, type = "success") {

    const toastBox =
        document.getElementById(
            "toastBox"
        );

    const toast =
        document.createElement(
            "div"
        );

    toast.classList.add(
        "toast",
        type
    );

    let icon = "";

    // success
    if (type === "success") {

        icon =
            `<i class="fa-solid fa-circle-check"></i>`;

    }

    // error
    else if (type === "error") {

        icon =
            `<i class="fa-solid fa-circle-xmark"></i>`;

    }

    // warning
    else {

        icon =
            `<i class="fa-solid fa-triangle-exclamation"></i>`;

    }

    toast.innerHTML = `

        <div class="toast-content">

            ${icon}

            <span>
                ${message}
            </span>

        </div>

        <!-- CLOSE -->

        <button class="toast-close">

            <i class="fa-solid fa-xmark"></i>

        </button>

    `;

    toastBox.appendChild(
        toast
    );

    // close
    toast
        .querySelector(
            ".toast-close"
        )
        .addEventListener(

            "click",

            function () {

                toast.remove();

            }

        );

    // auto remove
    setTimeout(() => {

        toast.remove();

    }, 3000);

}

// ================= INIT =================

document.addEventListener(

    "DOMContentLoaded",

    () => {

        initProducts();

        loadProducts();

        displayUser();

    }

);