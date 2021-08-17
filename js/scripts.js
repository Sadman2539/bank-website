// login validation 
document.getElementById('submit-btn').addEventListener('click', function () {
    const userEmail = document.getElementById('user-email').value;
    const userPassword = document.getElementById('user-password').value;
    if (userEmail === 'shontan@baap.com' && userPassword === 'secret') {
        window.location.href = "bank.html";
    }
})