const volver = document.querySelector('.volver');
const user = document.querySelector('.Vusuario');
const password = document.querySelector('.Vcontraseña');
const ingresar = document.querySelector('.ingresar');
const alerta = document.querySelector('.alerta');
const divMain = document.querySelector('.main');
let textoAlerta = document.querySelector('.alertaT');

const idk = document.querySelector('.idk');

volver.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = "../index.html";
})

ingresar.addEventListener('click', (e) => {

    if(user.value == '' && password.value == ''){
        alerta.classList.add('act');
        textoAlerta.textContent = '¡Debes llenar todos los campos!'

        setTimeout(() => {
            alerta.classList.remove('act');
            textoAlerta.textContent = ''
        }, 10000);
    } else if( user.value == ''){
        alerta.classList.add('act');
        textoAlerta.textContent = '¡Debes poner tu usuario!'

        setTimeout(() => {
            alerta.classList.remove('act');
            textoAlerta.textContent = ''
        }, 10000);
    } else if ( password.value == ''){
        alerta.classList.add('act');
        textoAlerta.textContent = '¡Debes poner tu contraseña!'

        setTimeout(() => {
            alerta.classList.remove('act');
            textoAlerta.textContent = ''
        }, 10000);
    }
})
