const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirmPassword');
const btn = document.querySelector('button');
const errorMsg = document.querySelector('#errorMsg');

btn.addEventListener('click', () => {
    if(password != confirmPassword){
        errorMsg.classList.remove('hidden')
        errorMsg.classList.add('error');
        password.classList.add('errorBorder');
        confirmPassword.classList.add('errorBorder');

    }
})