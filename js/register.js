let form = document.querySelector("form")
form.addEventListener("submit", (e) => {
    e.preventDefault()

    let username = document.getElementById("username").value.trim()
    let email = document.getElementById("email").value.trim()
    let password = document.getElementById("password").value.trim()

    let lowerCaseLetter = /[a-z]/g;
    let upperCaseLetter = /[A-Z]/g;
    let numbers = /[0-9]/g;

    // 1. Kiểm tra định dạng
    if (username.length < 6) {
        alert("Tài khoản phải ít nhất 6 ký tự.")
        return;
    }
    if (password.length < 8) {
        alert("Mật khẩu phải ít nhất 8 ký tự.")
        return;
    }
    if (!password.match(lowerCaseLetter) || !password.match(upperCaseLetter) || !password.match(numbers)) {
        alert("Mật khẩu phải có chữ thường, chữ hoa và số.")
        return;
    }

    // 2. Lấy danh sách user từ LocalStorage
    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 3. Kiểm tra trùng lặp (Username, Email, hoặc Password)
    let duplicateUser = users.find(user => 
        user.username === username || 
        user.email === email || 
        user.password === password
    );

    if (duplicateUser) {
        if (duplicateUser.username === username) {
            alert("Tên đăng nhập này đã tồn tại!");
        } else if (duplicateUser.email === email) {
            alert("Email này đã được sử dụng!");
        } else if (duplicateUser.password === password) {
            alert("Mật khẩu này đã có người sử dụng, vui lòng chọn mật khẩu khác!");
        }
        return; // Dừng lại không lưu
    }

    // 4. Nếu mọi thứ ổn, tiến hành lưu
    users.push({
        email: email,
        password: password,
        username: username,
    });

    localStorage.setItem("users", JSON.stringify(users));
    
    alert("Đăng ký thành công!");
    window.location.href = "./login.html";
});