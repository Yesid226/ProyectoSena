const volver = document.querySelector('.volver');
const user = document.querySelector('.Vusuario');
const password = document.querySelector('.Vcontraseña');
const ingresar = document.querySelector('.ingresar');
const alerta = document.querySelector('.alerta');
const escogerRol = document.querySelector('.escogeRol');
const divRoles = document.querySelector('.roles2');
const divMain = document.querySelector('.main');
let textoAlerta = document.querySelector('.alertaT');

const idk = document.querySelector('.idk')

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
    } else if (acudiente == false && estudiante == false && docente == false){
        alert('¡Debes escoger un rol primero!');
    } else {
        checarRoles();
        e.preventDefault();
    }
})

escogerRol.addEventListener('click', (e) => {
    e.preventDefault();

    divRoles.classList.toggle('act');
    verificarRoles();
})

function verificarRoles(){

    if (divRoles.classList.contains('act')){
        divMain.classList.add('act')
    } else {
        divMain.classList.remove('act');
    }
}

function checarRoles(){

    acudiente = document.getElementById('acudiente').checked;
    estudiante = document.getElementById('estudiante').checked;
    docente = document.getElementById('docente').checked;

    if (acudiente && estudiante && docente){

        alert('¡Solo debes escoger un rol!');
        location.reload();

    } else if (acudiente && estudiante){
        alert('¡Solo debes escoger un rol!');
        location.reload();
    } else if (acudiente && docente){
        alert('¡Solo debes escoger un rol!');
        location.reload();
    } else if (estudiante && docente){
        alert('¡Solo debes escoger un rol!');
        location.reload();
    }else if (acudiente){
        setTimeout(() => {
            location.href = '../roles/acudiente/acudiente.html'
        }, 1500);
        
    } else if (estudiante){
        setTimeout(() => {
            location.href = '../roles/estudiante/estudiante.html'
        }, 1500);
        
    } else if (docente){
        setTimeout(() => {
            location.href = '../roles/docente/docente.html'
        }, 1500);
        
    }

}