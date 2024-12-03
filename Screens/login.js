// welcome.js
document.addEventListener('DOMContentLoaded', () => {
    const username = localStorage.getItem('username');

    if (username) {
        document.getElementById('welcomeMessage').textContent = `Welcome, ${username}!`;
    } else {
        // If no username is found, redirect to login page
        window.location.href = 'login.html';
    }

    document.getElementById('logoutButton').addEventListener('click', () => {
        localStorage.removeItem('username'); // Clear the username
        window.location.href = 'login.html'; // Redirect to login page
    });
});
