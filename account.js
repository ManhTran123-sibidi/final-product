var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");
var indicator = document.getElementById("indicator");

function showRegister() {
    RegForm.style.transform = "translateX(0)";
    LoginForm.style.transform = "translateX(0)";
    indicator.style.transform = "translateX(100px)";
}

function showLogin() {
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    indicator.style.transform = "translateX(0)";
}

document.querySelector('.form-btn span:nth-child(1)').onclick = showLogin;
document.querySelector('.form-btn span:nth-child(2)').onclick = showRegister;
