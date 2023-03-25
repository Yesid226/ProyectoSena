
let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
let f=new Date();
console.log(diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

const crearCuenta = document.querySelector('.CC');
const registrar = document.querySelector('.registrar');
let mainRegistro = document.querySelector('.mainR');
let alerta = document.getElementById('alert');
let h4Alerta = document.querySelector('.h4Alerta');
let cancelar = document.querySelector('.cancelar');

crearCuenta.addEventListener('click', (e) => {
    e.preventDefault();

    setTimeout(() => {
        cancelar.classList.add('act');
        setTimeout(() => {
            cancelar.textContent = 'Cancelar';
        }, 500);
    }, 3000);

    if (mainRegistro.classList.contains('act')){
        mainRegistro.classList.remove('act');
    } else {
        mainRegistro.classList.add('act');

        if(mainRegistro.classList.contains('act')){

            setTimeout(() => {
                alerta.classList.add('afk');
                if(alerta.classList.contains('afk')){
                    h4Alerta.textContent = '¡Por favor rellena los campos de registro!'
                }
            }, 18000)
        }
    }
    
})

registrar.addEventListener('click', (e) => {
    e.preventDefault();
    mainRegistro.classList.remove('act');
    cancelar.classList.remove('act');
    cancelar.textContent = '';
    alerta.classList.remove('afk');
    h4Alerta.textContent = '¡Te has registrado con éxito!';

    setTimeout(() => {
        alerta.classList.add('act');
    }, 1500); 

    setTimeout(() => {
        if (alerta.classList.contains('act')){
        alerta.classList.remove('act');
        }
    }, 7000);

})
