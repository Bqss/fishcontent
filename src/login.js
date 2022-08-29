// validate function

const checkIsEmpty = (e) => {
    return e.value ? { isValid: true, message: '' } : { isValid: false, message: e.name + ' tidak boleh kosong!' }
}



const validateAll = (e) => {
    const label = e.parentElement.querySelector('.validate');
    const result = checkIsEmpty(e);
    label.innerHTML = result.message;
    if (result.isValid) {
        label.classList.add('hidden');
        e.classList.remove('input--invalid')
    } else {
        label.classList.remove('hidden');
        e.classList.add('input--invalid');
    }
    return result.isValid;
}

// event handler
const form = document.querySelector('form');
const inputs = form.querySelectorAll('input:not([type=submit])');
const passwords = document.querySelector('input[type=password]');
const toastToggler = document.querySelector('.toast-toggler');

toastToggler.onclick = () => {
    const parent = toastToggler.parentElement;
    parent.classList.add('animate-fade-reverse');
    parent.onanimationend = () => parent.classList.add('hidden')
}

const toggler = passwords.nextElementSibling;
toggler.addEventListener('click',(event) => {
    event.preventDefault();
    toggler.classList.toggle('expanded');
    toggler.classList.contains('expanded') ? passwords.type = 'text' : passwords.type = 'password';
})

inputs.forEach(e => {
    e.addEventListener('input', ({ target }) => {
        validateAll(target);
    });
})

// iki handle submit e bang 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const isCanSubmit = [...inputs].map(e => validateAll(e)).every(e => e);
    // can submit  => form e memenuhi 
    if (isCanSubmit) {
        
    }
});
