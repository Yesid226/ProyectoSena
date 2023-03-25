const botonEditarNotas = document.querySelector('.eNotas');
const botonSubirDocs = document.querySelector('.eDocs');
const botonVerNotas = document.querySelector('.verNotas');
let mainNotas = document.querySelector('.mNotas');
let mainDocs = document.querySelector('.mDocs');
const fecha = document.querySelector('.fecha');

let meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
let diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
let f=new Date();
fecha.textContent = (diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear());

botonEditarNotas.addEventListener('click', (e) => {
    e.preventDefault();

    if (mainNotas.classList.contains('acteditarNotas')){
        mainNotas.classList.remove('acteditarNotas');
    } else if(mainDocs.classList.contains('actsubirDocs')){
        mainDocs.classList.remove('actsubirDocs');
        setTimeout(() => {
            mainNotas.classList.add('acteditarNotas');
        }, 2000);
    } else{
        mainNotas.classList.add('acteditarNotas');
    }

})

botonSubirDocs.addEventListener('click', (e) => {
    e.preventDefault();

    if (mainDocs.classList.contains('actsubirDocs')){
        mainDocs.classList.remove('actsubirDocs');
    } else if(mainNotas.classList.contains('acteditarNotas')){
        mainNotas.classList.remove('acteditarNotas');
        setTimeout(() => {
            mainDocs.classList.add('actsubirDocs');
        }, 2000);
    } else{
        mainDocs.classList.add('actsubirDocs');
    }
})

