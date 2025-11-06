function cambiarColor(id_elemento, color) {
    document.getElementById(id_elemento).style.color = color;

}

function agregarElemento(idelementopadre, html) {
    document.getElementById(idelementopadre).innerHTML = html;
}

function construirH1() {
    return '<h1 id="id_calculadora">Calculador</h1>';
}
function eleminarElemento(idElemento) {

    document.getElementById(idElemento).remove();
}
function ocultarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'none';
}
function mostrarElemento(idElemento) {
    document.getElementById(idElemento).style.display = 'block';
}
function evaluarOperacion(tipo) {
    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);
    let resultado = 0;
    if (tipo === '+') {
        resultado = sumar(num1, num2)
    }
    if (tipo === '-') {
        return restar;
    }
    if (tipo === '*') {
        return multiplicar;
    }
    if (tipo === '/') {
        return dividir;
    }
    document.getElementById('id_resultado').innerText = resultado;
}
function sumar(num1, num2) {

    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function dividir(num1, num2) {
    return num1 / num2;
}

function fundamentosJS() {
    /*3Tipos de variables*/
    var nombre = "Johnsito"; //Antigua, se considera obsoleta
    let apellido = "Andino"; //Variables cambiantes
    let apellido2 = 15;
    apellido2 = "Teran";
    let arreglo = [1, 2, 3, 4, 5];
    let diaSemana = ['Lunes', 'Martes', '...'];
    const IVA = 12.8;
    console.log("Fundamentos de JS");
    console.log(nombre);
    console.log(diaSemana);
    //Arreglos
    const arreglosDiasSemana = ['Lunes', 'Martes', 'Miercoles'];
    arreglosDiasSemana.push('Jueves');
    console.log(arreglosDiasSemana);
    arreglosDiasSemana.unshift('Dias');
    console.log(arreglosDiasSemana);
    console.log(arreglosDiasSemana[0]);
    console.log('Manejo de nulos, undifined y vacio');
    arreglosDiasSemana.push(null);
    arreglosDiasSemana.push('');
    console.log(arreglosDiasSemana[5]);
    console.log(arreglosDiasSemana[6]);
    console.log(arreglosDiasSemana[7]);

    const numerosPares = [2, 4, 6, 8];
    const numerosImpares = [1, 3, 5, 7, 9];
    const numerosTotales = numerosImpares.concat(numerosPares);
    console.log(numerosTotales);

    /*Sentencias de control*/
    let edad = 19;
    if (edad >= 18) {
        console.log('Es mayor de edad')

    } else {
        console.log('Es menor de edad');
    }

    let dia = 'lunes';
    switch (dia) {
        case 'lunes':
            console.log('Es lunes');
            break;
        case 'martes':
            console.log('Es martes');
            break;
        default:
            console.log('no es ninguno de esos dias');
    }

    //Hay dos clases de for, uno tradicional y otro de itacion sobre objetos (JavaScriot)
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }

    //For sobre un arreglo
    const frutas = ['manzana', 'sandia', 'papaya', 'naranja'];
    for(let fruta of frutas) {
        console.log(fruta);
    }

    /*Manejo de objetos*/
    const profesor = {
        nombre:'John',
        apellido:'Andino',
        edad:24,
        ecuatoriano:true,
        genero:'M',
        ciudad:'Quito'
    }

    console.log(profesor);
    console.log(profesor.nombre);
    profesor.apellido = 'Arias';
    console.log(profesor);

    if(profesor.ciudad === 'Quito'){
        console.log('Es Quiteño');
    }

    if(profesor.edad !== 36){
        console.log('es diferente de 36');

    } else{
        console.log('Es 36');
    }

    for(let clave in profesor){
        console.log(clave);
        console.log(profesor[clave]);

    }

}