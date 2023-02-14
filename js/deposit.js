/*
    1. add event handler
    2. get the deposit amount from the input field
    2-5. For input field use .value to get the value inside the input field
    3. get the current deposit amount  
    3-5. for non-input (element other than input, textarea) use innerText to get the text
    4. add number to set the total deposit
    4-5. set the deposit total
    5. get balance current total
    6. calculate current total balance
    7. clear input fields
*/

// step 1: 
document.getElementById('btn-deposit').addEventListener('click', function() {
    //step 2: 
    //step 2.5:
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    //console.log(depositAmount);
    const newDepositAmount = parseFloat(newDepositAmountString);
    
    //step 3:  
    // step 3.5:
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);
    
    //step 4:
    const currentDepositTotal = previousDepositTotal + newDepositAmount
    // step 4.5:
    depositTotalElement.innerText = currentDepositTotal;
    
    // step 5: 
    const balanceTotalElement = document.getElementById('balance-total');
    const  previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    
    // step 6: 
    const currentBalanceTotal = previousBalanceTotal + newBalanceAmount;
    balanceTotalElement.innerText = currentBalanceTotal;
    
    // step-7:
    depositField.value = '';
    
});

