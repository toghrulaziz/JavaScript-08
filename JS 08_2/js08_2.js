document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var login = document.getElementById('login').value;
    var remember = document.getElementById('remember').checked;

    var resultElement = document.getElementById('result');
    resultElement.textContent = "Hello, " + login + "!";
    resultElement.textContent += remember ? " I remembered you." : " I did not remember you.";
});