// get the user values 
const userDeposit = document.getElementById('deposit-input');
const userWithdraw = document.getElementById('withdraw-input');
const previousDeposit = document.getElementById('deposit-total');
const previousWithdraw = document.getElementById('withdraw-total');
const previousBalance = document.getElementById('balance-total');
// deposit button 
document.getElementById('deposit-btn').addEventListener('click', userDepositFunction);
document.getElementById('withdraw-btn').addEventListener('click', userWithdrawFunction);

// userDeposit function declaration 
function userDepositFunction() {
    // get the previous and new deposit amounts and calculate them 
    const previousDepositAmount = parseFloat(previousDeposit.innerText);
    const newDepositAmount = parseFloat(userDeposit.value);
    const newTotalDeposit = previousDepositAmount + newDepositAmount;

    // add the total deposit in the deposit section
    previousDeposit.innerText = newTotalDeposit;

    // get the previous and new balance amounts and calculate them 
    const previousBalanceAmount = parseFloat(previousBalance.innerText);
    const newTotalBalance = previousBalanceAmount + newDepositAmount;

    // add the total balance 
    previousBalance.innerText = newTotalBalance;

    // clear deposit field 
    userDeposit.value = '';
}


// userWithdraw function declaration 
function userWithdrawFunction() {
    // get the previous and new withdraw amounts and calculate them 
    const previousWithdrawAMount = parseFloat(previousWithdraw.innerText);
    const newWithdrawAmount = parseFloat(userWithdraw.value);
    const newTotalWithdraw = previousWithdrawAMount + newWithdrawAmount;

    // if (previousWithdrawAMount >== newWithdrawAmount) {

    // add the total withdraw in the withdraw section
    previousWithdraw.innerText = newTotalWithdraw;

    // get the previous and new balance amounts and calculate them 
    const previousBalanceAmount = parseFloat(previousBalance.innerText);
    const newTotalBalance = previousBalanceAmount - newWithdrawAmount;

    // add the total balance 
    previousBalance.innerText = newTotalBalance;

    // }
    // else {
    //     alert("You don't have enough balance to withdraw!");
    // }
    // clear withdraw field 
    userWithdraw.value = '';
}

