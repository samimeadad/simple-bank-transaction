document.getElementById( 'login-button' ).addEventListener( 'click', function () {

    //Get User Email
    const emailField = document.getElementById( 'user-email' );
    const emailText = emailField.value;

    //Get User Passwrld
    const passwordField = document.getElementById( 'user-password' );
    const passwordText = passwordField.value;

    //User input validation with pre-defined user email and password
    if ( emailText == 'sami@baap.com' && passwordText == 'secret' ) {
        window.location.href = 'banking.html'
    }
    else {
        alert( 'Wrong User Name or Password!' )
    }
} );