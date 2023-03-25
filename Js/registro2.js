const formulario = document.getElementById('formu');
let alerta = document.getElementById('alert');
let alertap = document.querySelector('.Alerta');

formulario.addEventListener('submit', (e) => {

    e.preventDefault();

    const data = Object.fromEntries(
        new FormData(e.target)
    );

    console.log(data);

    const hasErrors = validateFields(data);

    if(hasErrors) return

})


/** *
 * @param (string) property 
 */

function printMessageError(property){

    alerta.classList.add('act');
    alertap.textContent = `¡Debes completar todos los campos!`

    setTimeout(() => {
        alerta.classList.remove('act');
        alertap.textContent = '';
    }, 5000);

}

function printMessageRegu(property){

    alerta.classList.add('act');
    alertap.textContent = `¡Debes usar carácteres válidos! `

    setTimeout(() => {
        alerta.classList.remove('act');
        alertap.textContent = '';
    }, 5000);

}

function printMessageCorrect(property){

    alerta.classList.add('pcorrect');
    alertap.textContent = 'Registrado con éxito, redireccionando...'

    setTimeout(() => {
        alerta.classList.remove('pcorrect');
        alertap.textContent = '';
        location.href = "../login/login.html"
    }, 5000);

}


/**
 * @param {*} data
 */

function validateFields(data){
    let hasErrors = false;
    let expresiones = /[`!#$%^&*()+\=\[\]{};':"\\|,<>\/?~]/

    for (const key in data){
        if (data[key] === ''){
            hasErrors = true;
            printMessageError(key);
        } else if (expresiones.test(data[key])){
            hasErrors = true;
            printMessageRegu(key);
        } else if (data[key] != ''){
            printMessageCorrect(key);
        } 
    }

    return hasErrors;
}