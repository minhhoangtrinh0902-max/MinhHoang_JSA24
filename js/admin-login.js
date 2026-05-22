// admin-login.js

// ================= ELEMENTS =================

const usernameInput =
    document.getElementById("username");

const passwordInput =
    document.getElementById("password");

const error =
    document.getElementById("error");

const loadingOverlay =
    document.getElementById("loadingOverlay");

// ================= HASH PASSWORD =================

async function hashPassword(password){

    const encoder =
        new TextEncoder();

    const data =
        encoder.encode(password);

    const hashBuffer =
        await crypto.subtle.digest(
            "SHA-256",
            data
        );

    return Array.from(
        new Uint8Array(hashBuffer)
    )

    .map(b =>
        b.toString(16).padStart(2,"0")
    )

    .join("");

}

// ================= ADMIN ACCOUNT =================

const ADMIN = {

    username:"admin",

    passwordHash:
        "8d969eef6ecad3c29a3a629280e686cf0c3f5d5a86aff3ca12020c923adc6c92"

};

// ================= LOGIN =================

async function login(){

    const username =
        usernameInput.value.trim();

    const password =
        passwordInput.value.trim();

    // RESET ERROR
    error.innerText = "";

    // CHECK EMPTY
    if(
        username === ""
        ||
        password === ""
    ){

        error.innerText =
            "Vui lòng nhập đầy đủ thông tin";

        return;

    }

    // SHOW FULL SCREEN LOADING
    loadingOverlay.style.display =
        "flex";

    // HASH PASSWORD
    const hashed =
        await hashPassword(password);

    // FAKE DELAY
    setTimeout(() => {

        // SUCCESS
        if(

            username === ADMIN.username
            &&
            hashed === ADMIN.passwordHash

        ){

            localStorage.setItem(

                "admin_login",

                JSON.stringify({
                    username
                })

            );

            error.style.color =
                "#8cffb0";

            error.innerText =
                "Đăng nhập thành công...";

            setTimeout(() => {

                location.href =
                    "admin.html";

            },1000);

        }

        // FAIL
        else{

            error.style.color =
                "#ffb3b3";

            error.innerText =
                "Sai tài khoản hoặc mật khẩu";

        }

        // HIDE LOADING
        loadingOverlay.style.display =
            "none";

    },2000);

}

// ================= ENTER LOGIN =================

document.addEventListener(

    "keydown",

    function(e){

        if(e.key === "Enter"){

            login();

        }

    }

);

// ================= LOGOUT =================

function logout(){
    location.href =
        "index.html";
}