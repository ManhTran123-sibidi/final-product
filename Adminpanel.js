let editProductForm = document.querySelector('.edit-product-form');
let addProductBtn = document.querySelector('.edit-btn');
let cancelEditBtn = document.querySelector('#cancel-edit');
let productTable = document.querySelector('.product-table tbody');

let selectRow = null;
// Xử lý khi nhấn vào nút "Chỉnh sửa"
for (let i = 0; i < editProductBtn.length; i++) {
  editProductBtn[i].addEventListener('click', function(event) {
    selectedRow = event.target.closest('tr'); // Lấy dòng sản phẩm được chỉnh sửa
    const cells = selectedRow.querySelectorAll('td'); // Lấy các ô dữ liệu trong dòng

    // Điền dữ liệu vào form
    document.querySelector('#product-name').value = cells[1].textContent;
    document.querySelector('#product-price').value = cells[2].textContent;
    document.querySelector('#product-category').value = cells[3].textContent;

    // Hiển thị form chỉnh sửa
    editProductForm.style.display = 'block';
  });
}

// Xử lý hủy form chỉnh sửa
cancelEditBtn.addEventListener('click', function() {
  editProductForm.style.display = 'none'; // Ẩn form chỉnh sửa
  selectedRow = null;
});

// Xử lý khi submit form chỉnh sửa
document.querySelector('#edit-product-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Ngừng hành động mặc định của form

  const name = document.querySelector('#product-name').value;
  const price = document.querySelector('#product-price').value;
  const category = document.querySelector('#product-category').value;

  // Cập nhật thông tin trong bảng
  if (selectedRow) {
    selectedRow.cells[1].textContent = name;
    selectedRow.cells[2].textContent = price;
    selectedRow.cells[3].textContent = category;
  }

  // Ẩn form chỉnh sửa
  editProductForm.style.display = 'none';
  selectedRow = null;
});

