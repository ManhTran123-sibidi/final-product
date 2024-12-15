document.addEventListener('DOMContentLoaded', () => {
    const moreButton = document.querySelector('.user-list .user:last-child'); // Nút "More"
    const userList = document.querySelector('.user-list'); // Danh sách người dùng
    const API_URL = 'https://67409996d0b59228b7f0a55c.mockapi.io/gng/users'; // URL Mock API

    let currentIndex = 0; // Chỉ số người dùng hiện tại
    let users = []; // Danh sách người dùng từ API

    // Lấy dữ liệu từ API khi trang tải
    async function fetchUsers() {
        try {
            const response = await fetch(API_URL);
            users = await response.json();
        } catch (error) {
            console.error('Lỗi khi fetch dữ liệu từ API:', error);
        }
    }

    // Hàm thêm một người dùng
    function addUser() {
        if (currentIndex < users.length) {
            const user = users[currentIndex]; // Lấy người dùng tiếp theo
            const newUser = document.createElement('div');
            newUser.classList.add('user');
            newUser.innerHTML = `
                <img src="${user.avatar}" alt="${user.name}">
                <h2>${user.name}</h2>
                <p>${user.last_active || 'Just Now'}</p>
            `;

            // Thêm người dùng mới vào danh sách trước nút "More"
            userList.insertBefore(newUser, moreButton);

            // Tăng chỉ số
            currentIndex++;
        }

        // Ẩn nút "More" nếu đã thêm hết người dùng
        if (currentIndex >= users.length) {
            moreButton.style.display = 'none';
        }
    }

    // Lắng nghe sự kiện nhấn nút "More"
    moreButton.addEventListener('click', () => {
        addUser(); // Thêm một người dùng mỗi lần nhấn
    });

    // Gọi fetch dữ liệu từ API khi trang tải
    fetchUsers();
});
