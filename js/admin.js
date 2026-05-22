const STORAGE_KEY = "products";

// ================= GET PRODUCTS =================

function getProducts(){

    try{

        return JSON.parse(
            localStorage.getItem(STORAGE_KEY)
        ) || [];

    }

    catch{

        return [];

    }

}

// ================= SAVE PRODUCTS =================

function saveProducts(data){

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}

// ================= ELEMENTS =================

const form =
    document.getElementById("productForm");

const list =
    document.getElementById("productList");

const idInput =
    document.getElementById("productId");

const nameInput =
    document.getElementById("name");

const priceInput =
    document.getElementById("price");

const categoryInput =
    document.getElementById("category");

const imgInput =
    document.getElementById("img");

const searchInput =
    document.getElementById("searchInput");

const previewImage =
    document.getElementById("previewImage");

const totalProducts =
    document.getElementById("totalProducts");

const loading =
    document.getElementById("loadingOverlay");

const toast =
    document.getElementById("toast");

// ================= SHOW LOADING =================

function showLoading(){

    loading.style.display =
        "flex";

}

// ================= HIDE LOADING =================

function hideLoading(){

    loading.style.display =
        "none";

}

// ================= SHOW TOAST =================

function showToast(message){

    toast.innerText =
        message;

    toast.classList.add("show");

    setTimeout(() => {

        toast.classList.remove("show");

    },2500);

}

// ================= IMAGE PREVIEW =================

imgInput.addEventListener(

    "input",

    function(){

        previewImage.src =

            imgInput.value ||

            "https://via.placeholder.com/200x200?text=Preview";

    }

);

// ================= RENDER =================

function render(){

    const products =
        getProducts();

    const keyword =
        searchInput.value
        .toLowerCase();

    // FILTER
    const filtered =
        products.filter(p =>

            p.name
            .toLowerCase()
            .includes(keyword)

        );

    list.innerHTML = "";

    // TOTAL
    totalProducts.innerText =
        filtered.length;

    // EMPTY
    if(filtered.length === 0){

        list.innerHTML = `

            <tr>

                <td colspan="6">

                    Không tìm thấy sản phẩm

                </td>

            </tr>

        `;

        return;

    }

    // RENDER DATA
    filtered.forEach(p => {

        list.innerHTML += `

            <tr>

                <td>
                    ${p.id}
                </td>

                <td>

                    <img
                        src="${p.img}"
                    >

                </td>

                <td>
                    ${p.name}
                </td>

                <td>

                    ${Number(p.price)
                        .toLocaleString("vi-VN")}đ

                </td>

                <td>
                    ${p.category}
                </td>

                <td>

                    <button
                        class="edit"
                        onclick="edit(${p.id})"
                    >
                        Sửa
                    </button>

                    <button
                        class="delete"
                        onclick="removeItem(${p.id})"
                    >
                        Xóa
                    </button>

                </td>

            </tr>

        `;

    });

}

// ================= SEARCH =================

searchInput.addEventListener(

    "input",

    render

);

// ================= ADD / UPDATE =================

form.addEventListener(

    "submit",

    e => {

        e.preventDefault();

        showLoading();

        setTimeout(() => {

            let products =
                getProducts();

            // CREATE DATA
            const data = {

                id:

                    idInput.value

                    ? Number(idInput.value)

                    : Math.max(
                        0,
                        ...products.map(
                            p => p.id
                        )
                    ) + 1,

                name:
                    nameInput.value,

                price:
                    Number(priceInput.value),

                category:
                    categoryInput.value,

                img:
                    imgInput.value

            };

            // UPDATE
            if(idInput.value){

                const index =
                    products.findIndex(
                        p =>
                            p.id ==
                            idInput.value
                    );

                products[index] =
                    data;

                showToast(
                    "Cập nhật sản phẩm thành công"
                );

            }

            // ADD
            else{

                products.push(data);

                showToast(
                    "Thêm sản phẩm thành công"
                );

            }

            // SAVE
            saveProducts(products);

            // RENDER
            render();

            // RESET FORM
            form.reset();

            idInput.value = "";

            previewImage.src =
                "https://via.placeholder.com/200x200?text=Preview";

            hideLoading();

        },1000);

    }

);

// ================= DELETE =================

function removeItem(id){

    showLoading();

    setTimeout(() => {

        let products =
            getProducts().filter(
                p => p.id !== id
            );

        // RESET ID
        products =
            products.map(
                (p,index) => ({

                    ...p,

                    id:index + 1

                })
            );

        // SAVE
        saveProducts(products);

        // RENDER
        render();

        hideLoading();

        showToast(
            "Đã xóa sản phẩm"
        );

    },1000);

}

// ================= EDIT =================

function edit(id){

    const products =
        getProducts();

    const p =
        products.find(
            item => item.id === id
        );

    if(!p) return;

    idInput.value =
        p.id;

    nameInput.value =
        p.name;

    priceInput.value =
        p.price;

    categoryInput.value =
        p.category;

    imgInput.value =
        p.img;

    previewImage.src =
        p.img;

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

    showToast(
        "Đang chỉnh sửa sản phẩm"
    );

}

// ================= STORAGE SYNC =================

window.addEventListener(

    "storage",

    render

);

// ================= INIT =================

render();