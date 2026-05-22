// ================= GET CURRENT USER =================
function getCurrentUser() {

    return JSON.parse(
        localStorage.getItem("currentUser")
    );

}

// ================= LOAD PROFILE =================
function loadProfile() {

    const user =
        getCurrentUser();

    // chưa login
    if (!user) {

        alert(
            "Vui lòng đăng nhập!"
        );

        window.location.href =
            "login.html";

        return;

    }

    // username
    document.getElementById(
        "username"
    ).innerText =
        user.username || "Không có";

    // email
    document.getElementById(
        "email"
    ).innerText =
        user.email || "Chưa cập nhật";

    // role
    document.getElementById(
        "role"
    ).innerText =
        user.role || "User";

}

// ================= HOME =================
function goHome() {

    window.location.href =
        "banhang.html";

}

// ================= ORDERS =================
function goOrders() {

    window.location.href =
        "orders.html";

}

// ================= LOGOUT =================
function logout() {

    const confirmLogout =
        confirm(
            "Bạn muốn đăng xuất?"
        );

    if (!confirmLogout) {

        return;

    }

    localStorage.removeItem(
        "currentUser"
    );

    alert(
        "Đăng xuất thành công 👋"
    );

    window.location.href =
        "index.html";

}

// ================= START =================
document.addEventListener(

    "DOMContentLoaded",

    () => {

        loadProfile();

    }

);