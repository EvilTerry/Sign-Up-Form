function check() {
    let btn = document.querySelector('button');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm_password');
    let error_message = document.querySelector('.error_msg');

    if(confirmPassword.value == '')
        return;
    
    if( password.value == confirmPassword.value)
    {
        error_message.innerHTML = ' ';
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        btn.disabled = false;
    }
    else
    {
        error_message.innerHTML = '* Passwords do not match';
        password.classList.add('error');
        confirmPassword.classList.add('error');
        document.querySelector('button').disabled = true;
    }
}