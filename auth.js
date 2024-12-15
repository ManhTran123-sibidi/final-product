function login() {

    if(checkLogin()) {
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "index.html";
    } else {
        alert("Login failed. Please try again.");
    }
}
function checkLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    // Kiem tra tai khoan va mat khau
    if (username === "admin" && password === "123456") {
        return true;
    } else {
        return false;
    }
}