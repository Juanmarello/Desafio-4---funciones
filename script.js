
const pi = 3.14;

const btnCirculo = document.getElementById('area');
const btnTriangulo = document.getElementById('tringulo');

btnCirculo.addEventListener('click', obtenerArea );
btnTriangulo.addEventListener('click', obtenerSuperficie)


function obtenerArea(){
    let radio = prompt('Ingresa valor del radio de la circunferencia en cm');
    let areaCirculo = pi * (radio * radio);
    alert("El area del círculo es de: " + areaCirculo + " cm");
}

function obtenerSuperficie(){
    let base = prompt('Ingresa el valor de la base del triángulo en cm');
    let altura = prompt('Ingresa el valor de la altura del triángulo en cm');
    let superficie = (base * altura) / 2; 
    alert( "La superficie del circulo es de: " + superficie + " cm");
}
