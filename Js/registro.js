const volver = document.querySelector('.volver');
const registrar = document.querySelector('.registrar');

let contraseña = document.querySelector('.Rcontraseña');
let confirmarContraseña = document.querySelector('.RRcontraseña');

let nombre = document.querySelector('.Rnombres');
let apellido = document.querySelector('.Rapellidos');
let correo = document.querySelector('.Rcorreo');
let cedula = document.querySelector('.Rcedula');
let fecha = document.querySelector('.Rfecha');

let alerta = document.getElementById('alert');
let alertap = document.querySelector('.Alerta');

volver.addEventListener('click', (e) => {
    e.preventDefault();
    location.href = "../index.html";
})

registrar.addEventListener('click', (e) => {
    e.preventDefault();

    if (confirmarContraseña.value === contraseña.value && contraseña.value != '' &&  nombre.value != '' &&  apellido.value != '' &&  correo.value != '' &&  cedula.value != null &&  fecha.value != ''){
        alerta.classList.add('pcorrect');
        alertap.textContent = 'Te has registrado con éxito, redireccionando...';

        setTimeout(() => {
            alerta.classList.remove('pcorrect');
            alertap.textContent = '';
            location.href = "../login/login.html"
        }, 5000);
    } else {
        alerta.classList.add('act');
        registrar.classList.add('act')
        alertap.textContent = '¡Debes completar todos los campos!';

        setTimeout(() => {
            alerta.classList.remove('act');
            registrar.classList.remove('act');
            alertap.textContent = '';
        }, 5000);

        if (confirmarContraseña.value != contraseña.value){
            alerta.classList.add('act');
            alertap.textContent = '¡Las contraseñas deben ser igual en ambos campos!'

            setTimeout(() => {
                alerta.classList.remove('act');
                alertap.textContent = '';
            }, 5000);

        } 
    }

})
