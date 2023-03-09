const form = document.querySelector('form');
const submitButton = document.querySelector('.btn');
const fields = document.querySelectorAll('input');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');

submitButton.addEventListener('click', (e)=>{
    fields.forEach((input)=>{
        if(input.value.trim()===''){
            const errorMessage = input.nextElementSibling.nextElementSibling;
            errorMessage.style.display = 'block';
            input.style.borderColor= "#FF7979";
            input.style.outline = 'none';
            const errorIcon = input.nextElementSibling;
            errorIcon.style.display = 'block';
           
        }
    });
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(!(emailInput.value.trim().match(emailRegex))){
        const errorMessage = emailInput.nextElementSibling.nextElementSibling;
        errorMessage.style.display = 'block';
        const errorIcon = emailInput.nextElementSibling;
        errorIcon.style.display = 'block';
    }
    if(passwordInput.value.length<8){
        const errorMessage = passwordInput.nextElementSibling.nextElementSibling;
        errorMessage.style.display = 'block';
        const errorIcon = passwordInput.nextElementSibling;
        errorIcon.style.display = 'block';
        passwordInput.style.borderColor= "#FF7979";
        passwordInput.style.outline = 'none';
    } else{
        const errorMessage = passwordInput.nextElementSibling.nextElementSibling;
        errorMessage.style.display = 'none';
        const errorIcon = passwordInput.nextElementSibling;
        errorIcon.style.display = 'none';
        passwordInput.style.borderColor= '';
        passwordInput.style.outline = '';
    }
});



form.addEventListener('input', (e)=>{
    fields.forEach((input)=>{
        if(input.value.trim() !== ''){
        const errorMessage = input.nextElementSibling.nextElementSibling;
        errorMessage.style.display = 'none';
        const errorIcon = input.nextElementSibling;
        errorIcon.style.display = 'none';
        input.style.borderColor= '';
        input.style.outline = '';
        }
    })
})