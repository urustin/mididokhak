// auth.js

document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        username: document.getElementById('username1').value,
        password: document.getElementById('password1').value
    };

    fetch('http://localhost:5010/auth/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.message) {

            alert(data.message);

        }
    })
    .catch(error => console.error('Error:', error));
});


// login
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = {
        username: document.getElementById('username2').value,
        password: document.getElementById('password2').value
    };

    fetch('http://localhost:5010/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            console.log(data);
            alert(data.message);
            // Store token in localStorage for future requests
            localStorage.setItem('token', data.token);
            // Redirect to profile page
            window.location.href = '/profile.html';
        } else {
            // console.log(response.data);
            alert('Login failed: ' + data.message);
            console.log(data);
        }
    })
    .catch(error => console.log('Error:', error));
});
