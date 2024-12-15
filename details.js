const products = [
    {
      id: 1,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-1.jpg"
    },
    {
      id: 2,
      name: "Sports Shoes",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-2.jpg"
    },
    {
      id: 3,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-3.jpg"
    },
    {
      id: 4,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-4.jpg"
    },
    {
      id: 5,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-5.jpg"
    },
    {
      id: 6,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-6.jpg"
    },
    {
      id: 7,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-7.jpg"
    },
    {
      id: 8,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-8.jpg"
    },
    {
      id: 9,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-9.jpg"
    },
    {
      id: 10,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-10.jpg"
    },
    {
      id: 11,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-11.jpg"
    },
    {
      id: 12,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-12.jpg"
    },
    {
      id: 13,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-13.jpg"
    },
    {
      id: 14,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-14.jpg"
    },
    {
      id: 15,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-15.jpg"
    },
    {
      id: 16,
      name: "Red Printed T-shirt",
      price: "$50.00",
      description: "Red printed T-shirt with a comfortable fit",
      category: "Apparel",
      img: "../asset/image/product-16.jpg"
    }
  ];
localStorage.setItem("products", JSON.stringify(products));

// Lấy tham chiếu đến các phần tử trong trang chi tiết
const productImg = document.getElementById("product-img");
const productName = document.getElementById("product-name");
const productPrice = document.getElementById("product-price");
const productDescription = document.getElementById("product-description");

// Lấy dữ liệu sản phẩm từ localStorage
const productData = JSON.parse(localStorage.getItem("selectedProduct"));

// Kiểm tra nếu có dữ liệu và hiển thị sản phẩm
if (productData) {
  productImg.src = productData.image;
  productName.textContent = productData.name;
  productPrice.textContent = `$${productData.price}`;
  productDescription.textContent = productData.description;
} else {
  console.log("No product data available.");
}

// Hàm để lưu thông tin sản phẩm vào localStorage khi người dùng chọn sản phẩm
function selectProduct(product) {
  localStorage.setItem("selectedProduct", JSON.stringify(product));
  window.location.href = "ProductDetail.html"; // Chuyển hướng đến trang chi tiết
}
