// ================= ELEMENTS =================

const form =
    document.getElementById("loginForm");

const loginBtn =
    document.getElementById("loginBtn");

const loadingOverlay =
    document.getElementById("loadingOverlay");

const togglePassword =
    document.getElementById("togglePassword");

const passInput =
    document.getElementById("password");

const eyeIcon =
    document.getElementById("eyeIcon");

// ================= TOAST =================

function showToast(message) {

    const toast =
        document.createElement("div");

    toast.className =
        "toast";

    toast.innerText =
        message;

    document.body.appendChild(toast);

    // hiện toast

    setTimeout(function () {

        toast.classList.add("show");

    }, 100);

    // ẩn toast

    setTimeout(function () {

        toast.classList.remove("show");

        setTimeout(function () {

            toast.remove();

        }, 300);

    }, 3000);

}

// ================= LOADING =================

function toggleLoading(isLoading) {

    loginBtn.disabled =
        isLoading;

    loadingOverlay.classList.toggle(
        "hidden",
        !isLoading
    );

}

// ================= LOGIN =================

form.addEventListener(
    "submit",
    function (e) {

        e.preventDefault();

        const username =
            document
            .getElementById("username")
            .value
            .trim();

        const password =
            passInput.value.trim();

        // kiểm tra rỗng

        if (!username || !password) {

            showToast(
                "Vui lòng nhập đầy đủ thông tin!"
            );

            return;

        }

        // bật loading

        toggleLoading(true);

        // giả lập API

        setTimeout(function () {

            // lấy users

            const users =
                JSON.parse(
                    localStorage.getItem("users")
                ) || [];

            // tìm user

            const existingUser =
                users.find(function (user) {

                    return (
                        user.username === username &&
                        user.password === password
                    );

                });

            // ===== LOGIN SUCCESS =====

            if (existingUser) {

                // lưu user hiện tại

                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(existingUser)
                );

                showToast(
                    "Đăng nhập thành công!"
                );

                // chuyển trang

                setTimeout(function () {

                    window.location.href =
                        "./banhang.html";

                }, 1000);

            }

            // ===== LOGIN FAILED =====

            else {

                showToast(
                    "Sai username hoặc mật khẩu!"
                );

                toggleLoading(false);

            }

        }, 2000);

    }
);

// ================= SHOW / HIDE PASSWORD =================

togglePassword.addEventListener(
    "click",
    function () {

        if (
            passInput.type === "password"
        ) {

            passInput.type =
                "text";

            eyeIcon.classList.remove(
                "fa-eye"
            );

            eyeIcon.classList.add(
                "fa-eye-slash"
            );

        }

        else {

            passInput.type =
                "password";

            eyeIcon.classList.remove(
                "fa-eye-slash"
            );

            eyeIcon.classList.add(
                "fa-eye"
            );

        }

    }
);  