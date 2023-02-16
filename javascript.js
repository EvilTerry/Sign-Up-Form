function check() {
    let btn = document.querySelector('button');
    let password = document.getElementById('password');
    let confirmPassword = document.getElementById('confirm_password');

    if(confirmPassword.value == '')
        return;
    
    if( password.value == confirmPassword.value)
    {
        password.classList.remove('error');
        confirmPassword.classList.remove('error');
        btn.disabled = false;
    }
    else
    {
        password.classList.add('error');
        confirmPassword.classList.add('error');
        document.querySelector('button').disabled = true;
    }
}