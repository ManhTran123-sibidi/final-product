document.getElementById('RegForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmpassword = document.getElementById('confirmpassword').value;

    if (password !== confirmpassword) {
        alert("Passwords do not match.");
        return;
    }

    var user = {
        username: username,
        email: email,
        password: password
    };

    fetch('https://671e2ffd1dfc42991981847e.mockapi.io/api/v1/user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => {
        alert("Registration successful.");
        showLogin(); 
    })
    .catch(error => {
        console.error('Error:', error);
        alert("Registration failed.");
    });
});
