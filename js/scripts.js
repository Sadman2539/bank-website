const userEmail = document.getElementById('user-email');

const userPassword = document.getElementById('user-password');
const submitButton = document.getElementById('submit-btn');

submitButton.addEventListener('click', function () {
    if (userEmail.value === 'shontan@baap.com' && userPassword.value === 'secret') {
        window.location.href = "bank.html";
    }
    else {
        console.log('Please ')
    }
})