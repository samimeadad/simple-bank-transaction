document.getElementById( 'deposit-button' ).addEventListener( 'click', function () {
    // get the amount deposited
    const depositInputField = document.getElementById( 'deposit-input' );
    const depositInputText = depositInputField.value;
    const depositInputAmount = parseFloat( depositInputText );

    //Get previous deposit total amount
    const depositTotalField = document.getElementById( 'deposit-total' );
    const previousDepositTotalAmount = parseFloat( depositTotalField.innerText );

    //Calculate the new deposit total ammount
    const newDepositTotalAmount = previousDepositTotalAmount + depositInputAmount;

    //Put the new amount to the deposit-total inner text
    depositTotalField.innerText = newDepositTotalAmount;

    //Update Balance

    //Get the previous balance amount
    const balanceTotalField = document.getElementById( 'balance-total' );
    const previousBalanceTotalAmount = parseFloat( balanceTotalField.innerText );

    //Calculate the new balance amount
    const newBalanceTotalAmount = previousBalanceTotalAmount + depositInputAmount;

    //Put the new balance amount to the balance total inner text
    balanceTotalField.innerText = newBalanceTotalAmount;

    //Clear the input field
    depositInputField.value = '';
} );

document.getElementById( 'withdraw-button' ).addEventListener( 'click', function () {
    // get the amount withdrawn
    const withdrawInputField = document.getElementById( 'withdraw-input' );
    const withdrawInputText = withdrawInputField.value;
    const withdrawInputAmount = parseFloat( withdrawInputText );

    //Get previous withdraw total amount
    const withdrawTotalField = document.getElementById( 'withdraw-total' );
    const previousWithdrawTotalAmount = parseFloat( withdrawTotalField.innerText );

    //Calculate the new withdraw total ammount
    const newWithdrawTotalAmount = previousWithdrawTotalAmount + withdrawInputAmount;

    //Put the new amount to the withdraw-total inner text
    withdrawTotalField.innerText = newWithdrawTotalAmount;

    //Update Balance

    //Get the previous balance amount
    const balanceTotalField = document.getElementById( 'balance-total' );
    const previousBalanceTotalAmount = parseFloat( balanceTotalField.innerText );

    //Calculate the new balance amount
    const newBalanceTotalAmount = previousBalanceTotalAmount - withdrawInputAmount;

    //Put the new balance amount to the balance total inner text
    balanceTotalField.innerText = newBalanceTotalAmount;

    //Clear the input field
    withdrawInputField.value = '';


} );