document.getElementById("LoginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn form submit mặc định

  const usernameInput = document.getElementById("username-lg").value.trim();
  const passwordInput = document.getElementById("password-lg").value.trim();

  // Kiểm tra tài khoản admin cố định trước
  const adminAccount = {
    username: "admin",
    password: "123456",
  };

  if (usernameInput === adminAccount.username && passwordInput === adminAccount.password) {
    alert("Login successful! Redirecting to Admin Dashboard...");
    window.location.href = "../asset/Admin/Adminpanel.html"; // Chuyển hướng đến Admin Dashboard
    return; // Thoát ra để không kiểm tra MockAPI nữa
  }

  // Nếu không phải admin, kiểm tra MockAPI
  fetch("https://671e2ffd1dfc42991981847e.mockapi.io/api/v1/user")
    .then((response) => response.json())
    .then((users) => {
      const user = users.find(
        (user) => user.username === usernameInput && user.password === passwordInput
      );
      if (user) {
        alert("Login successful.");
        window.location.href = "index.html"; // Chuyển hướng sau khi đăng nhập thành công
      } else {
        alert("Invalid username or password.");
      }
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Login failed. Please try again later.");
    });
});
