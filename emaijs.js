// document.getElementById('RegForm').addEventListener('submit', function(e) {
//     e.preventDefault(); // Ngăn không cho form gửi theo cách mặc định

   
//     const username = document.getElementById('username').value;
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     const confirmpassword = document.getElementById('confirmpassword').value;
//     if (password !== confirmpassword) {
//         alert('Mật khẩu không khớp!');
//         return;
//     }

//     // Khởi tạo EmailJS với User ID của bạn
//     emailjs.init('service_zik5yhe'); 

//     // Gửi thông tin qua EmailJS
//     const templateParams = {
//         username: username,
//         email: email,
//         password: password
//     };
// });
// emailjs.send('service_zik5yhe', 'template_ntkefpn', {
//     from_name: 'John Doe',          // Tên người gửi
//     email_id: 'johndoe@example.com', // Email người gửi
//     message: 'This is a test message' // Nội dung tin nhắn
// }, 'YOUR_PUBLIC_KEY')
// .then(function(response) {
//     console.log('Email sent successfully!', response.status, response.text);
// }, function(error) {
//     console.error('Failed to send email:', error);
// });
