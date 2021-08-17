// variables declaration 
const previousDeposit = document.getElementById('deposit-total');
const userDeposit = document.getElementById('deposit-input');
const previousWithdraw = document.getElementById('withdraw-total');
const userWithdraw = document.getElementById('withdraw-input');
const previousBalance = document.getElementById('balance-total');

// deposit of money
document.getElementById('deposit-btn').addEventListener('click', function () {
    transactionUpdate(previousDeposit, userDeposit, previousBalance, true);
})

//withdraw money
document.getElementById('withdraw-btn').addEventListener('click', function () {
    transactionUpdate(previousWithdraw, userWithdraw, previousBalance, false);

})
// transaction update 
function transactionUpdate(previousInput, userInput, userBalance, isAdd) {
    // update deposit and withdraw 
    const previousAmount = parseFloat(previousInput.innerText);
    const userInputAmount = parseFloat(userInput.value);
    if (userInputAmount > 0) {
        const totalAmount = previousAmount + userInputAmount;
        const previousBalanceAmount = parseFloat(userBalance.innerText);
        previousInput.innerText = totalAmount;

        // update balance 
        if (isAdd) {
            const newBalanceAmount = previousBalanceAmount + userInputAmount;
            userBalance.innerText = newBalanceAmount;

        } else {
            const newBalanceAmount = previousBalanceAmount - userInputAmount;
            userBalance.innerText = newBalanceAmount;
        }
    }
    // clear the value field 
    userInput.value = '';
}


