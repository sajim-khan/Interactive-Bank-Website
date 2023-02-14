// Step : add the click event handler with the submit button 
document.getElementById("btn-submit").addEventListener("click", function() {
    // step 2: get the email address inside the email input field
    // always remember to use .value to get text from input field
    const emailField = document.getElementById("user-email");
    const email = emailField.value;
    //console.log(email);
    
    //step 3: get password
    // 3.a : set id on the html element
    // 3.b : get the element
    // 3.c : get the value from the element
    const passwordField = document.getElementById("user-password");
    const password = passwordField.value;
    //console.log(password);
    
    // step 4: check valid user
    // Do not try this
    if(email === 'sajimkhan@gmail.com' && password === 'sajimkhan'){
        //console.log('valid user');
        window.location.href = 'bank.html';
    } else {
        console.log('invalid user');
    }
});



