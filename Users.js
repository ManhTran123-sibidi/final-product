function createUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const role = document.getElementById('role').value;
    const status = document.getElementById('status').value;
    const registrationDate = document.getElementById('registrationDate').value;

    // Kiểm tra xem các giá trị có hợp lệ không
    if (name && email && role && status && registrationDate) {
        // Thực hiện API POST để tạo người dùng mới
        fetch("https://671e2ffd1dfc42991981847e.mockapi.io/api/v1/VisiCard", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                role: role,
                status: status,
                dateRegistered: registrationDate
            })
        })
        .then(function(res) {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(function(data) {
            console.log(data); 
            alert("Data added successfully!");
            // Sau khi thêm thành công, đóng form
            document.getElementById("userFormContainer").style.display = "none";
        })
        .catch(function(error) {
            console.error('There has been a problem with your fetch operation:', error);
        });
    } else {
        alert("Please fill in all fields.");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    // Lấy nút thêm người dùng và gắn sự kiện
    document.getElementById("addUserButton").addEventListener("click", function() {
        document.getElementById("userFormContainer").style.display = "block";
        document.getElementById("addUserForm").onsubmit = function(event) {
            event.preventDefault();
            createUser();
        };
    });
// Lấy nút thêm người dùng và gắn sự kiện
document.getElementById("addUserButton").addEventListener("click", function() {
    document.getElementById("userFormContainer").style.display = "block";
    document.getElementById("addUserForm").onsubmit = function(event) {
        event.preventDefault();
        createUser(); // Gọi hàm createUser khi form được gửi
    };
});
    // hàm sửa
    function updateUser(userId) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const role = document.getElementById('role').value;
        const status = document.getElementById('status').value;
        const registrationDate = document.getElementById('registrationDate').value;

        fetch(`https://671e2ffd1dfc42991981847e.mockapi.io/api/v1/VisiCard/${userId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                role: role,
                status: status,
                dateRegistered: registrationDate
            })
        })
        .then(function(res) {
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            return res.json();
        })
        .then(function(data) {
            alert("User data updated successfully!");
            document.getElementById("userFormContainer").style.display = "none";
            fetchAndRenderTable(); // Cập nhật lại bảng sau khi cập nhật
        })
        .catch(function(error) {
            console.error("There has been a problem with your fetch operation:", error);
        });
    }


    // hàm xóa
    let delete_btn = document.getElementById("deleteButton");
    if (delete_btn) {
        delete_btn.addEventListener("click", function() {
            fetch("https://671e2ffd1dfc42991981847e.mockapi.io/api/v1/VisiCard/" + "1", {
                method: "DELETE"
            })
            .then(function (res) {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then(function (data) {
                console.log(data);
                alert("Data deleted successfully!");
            })
            .catch(function (error) {
                console.error('There has been a problem with your fetch operation:', error);
            });
        });
    }

    // Đóng form khi nhấn nút Hủy
    document.getElementById("cancelBtn").addEventListener("click", function() {
        document.getElementById("userFormContainer").style.display = "none";
    });
});
const userTableBody = document.getElementById('userTableBody');
const addUserButton = document.getElementById('addUserButton');
function displayUsers() {
    userTableBody.innerHTML = ''; // Xóa các hàng cũ
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>${user.status}</td>
            <td>${user.date}</td>
            <td>
                <button class="edit-btn" onclick="editUser(${user.id})">Chỉnh sửa</button>
                <button class="delete-btn" onclick="deleteUser(${user.id})">Xóa</button>
            </td>
        `;
        userTableBody.appendChild(row);
    }
};
fetchAndRenderTable();

function fetchAndRenderTable() {
    fetch("https://671e2ffd1dfc42991981847e.mockapi.io/api/v1/VisiCard")
        .then(response => response.json())
        .then(data => {
            const tableBody = document.getElementById("userTableBody");
            tableBody.innerHTML = ""; // Xóa nội dung bảng hiện tại
            data.forEach(user => {
                tableBody.innerHTML += `
                    <tr>
                        <td>${user.id}</td>
                        <td>${user.name}</td>
                        <td>${user.email}</td>
                        <td>${user.role}</td>
                        <td>${user.status}</td>
                        <td>${user.dateRegistered}</td>
                    </tr>
                `;
            });
        })
        .catch(error => {
            console.error("Error fetching data: ", error);
        });
}