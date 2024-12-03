// login.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent form from refreshing the page

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation
        if (username === "admin" && password === "password") {
            localStorage.setItem('username', username); // Save username in localStorage
            window.location.href = 'welcome.html'; // Redirect to welcome page
        } else {
            alert('Invalid username or password');
        }
    });
});
