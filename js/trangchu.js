// trangchu.js

const buttons = document.querySelectorAll(".card button");

buttons.forEach(button => {
    button.addEventListener("click", function () {

        let isLogin = localStorage.getItem("login");

        // lấy card đang bấm
        let card = this.parentElement;

        // tìm ô thông báo trong card đó
        let thongbao = card.querySelector(".thongbao");

        thongbao.style.display = "block";

        if (isLogin === "true") {
            thongbao.innerText = "Đã thêm vào giỏ hàng!";
            thongbao.style.color = "green";
        } else {
            thongbao.innerText = "Bạn cần đăng nhập!";
            thongbao.style.color = "red";
        }

        setTimeout(() => {
            thongbao.style.display = "none";
        }, 2000);

    });
});