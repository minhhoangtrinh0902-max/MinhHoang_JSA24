// ================= GET PRODUCTS =================
function getProducts() {

    try {

        return JSON.parse(
            localStorage.getItem("products")
        ) || [];

    } catch {   

        return [];

    }

}

// ================= FORMAT PRICE =================
function formatPrice(price) {

    return Number(price)
        .toLocaleString("vi-VN") + " VND";

}

// ================= GET PRODUCT ID =================
const params =
    new URLSearchParams(window.location.search);

const id =
    Number(params.get("id"));

// ================= GET DATA =================
const products =
    getProducts();

const product =
    products.find(
        item => Number(item.id) === Number(id)
    );  

// ================= DOM =================
const container =
    document.getElementById(
        "productDetail"
    );

// ================= RENDER =================
if (product) {

    // sản phẩm liên quan
    const relatedProducts =
        products.filter(
            item => item.id !== product.id
        );

    // render
    container.innerHTML = `

        <!-- DETAIL -->
        <div class="detail-card">

            <div class="detail-image">

                <img
                    src="${product.img}"
                    alt="${product.name}"
                >

            </div>

            <div class="detail-info">

                <h1>
                    ${product.name}
                </h1>

                <p class="category">

                    Danh mục:
                    ${product.category}

                </p>

                <h2 class="price">

                    ${formatPrice(product.price)}

                </h2>

                <p class="desc">

                    Sản phẩm chất lượng cao,
                    thiết kế hiện đại,
                    phù hợp cho thể thao
                    và thời trang hằng ngày.

                </p>

                <button
                    onclick="location.href='banhang.html'"
                    class="back-btn"
                >
                    ⬅ Quay lại
                </button>

            </div>

        </div>

        <!-- SLIDER -->
        <div class="slider">

            <h2>
                Sản phẩm liên quan
            </h2>

            <div class="slider-container">

                <!-- LEFT -->
                <button
                    class="slider-btn left"
                    id="prevBtn"
                >
                    ⬅
                </button>

                <!-- WRAPPER -->
                <div class="slider-wrapper">

                    <div class="slide-track">

                        ${relatedProducts.map(item => `

                            <div class="slide-item">

                                <img
                                    src="${item.img}"
                                    alt="${item.name}"
                                >

                                <p>
                                    ${item.name}
                                </p>

                                <h3>
                                    ${formatPrice(item.price)}
                                </h3>

                                <button
                                    onclick="
                                        location.href=
                                        'product-detail.html?id=${item.id}'
                                    "
                                    class="detail-btn"
                                >
                                    Xem Chi Tiết
                                </button>

                            </div>

                        `).join("")}

                    </div>

                </div>

                <!-- RIGHT -->
                <button
                    class="slider-btn right"
                    id="nextBtn"
                >
                    ➡
                </button>

            </div>

        </div>

    `;

    // ================= SLIDER =================
    const track =
        document.querySelector(
            ".slide-track"
        );

    const prevBtn =
        document.getElementById(
            "prevBtn"
        );

    const nextBtn =
        document.getElementById(
            "nextBtn"
        );

    let scrollAmount = 0;

    const scrollStep = 300;

    // ================= NEXT =================
    nextBtn.addEventListener(
        "click",

        () => {

            const maxScroll =

                track.scrollWidth -

                track.parentElement.clientWidth;

            scrollAmount += scrollStep;

            if (
                scrollAmount > maxScroll
            ) {

                scrollAmount = maxScroll;

            }

            track.style.transform =

                `translateX(-${scrollAmount}px)`;

        }

    );

    // ================= PREV =================
    prevBtn.addEventListener(

        "click",

        () => {

            scrollAmount -= scrollStep;

            if (scrollAmount < 0) {

                scrollAmount = 0;

            }

            track.style.transform =

                `translateX(-${scrollAmount}px)`;

        }

    );

}

// ================= NOT FOUND =================
else {

    container.innerHTML = `

        <div class="not-found">

            <h1>
                ❌ Không tìm thấy sản phẩm
            </h1>

            <button
                onclick="location.href='banhang.html'"
                class="back-btn"
            >
                ⬅ Quay lại
            </button>

        </div>

    `;

}