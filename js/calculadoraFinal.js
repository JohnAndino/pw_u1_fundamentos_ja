let num1=0;
let num2=0;


function mostrarDisplay(valor){
    let elemento = document.getElementById('display');
    elemento.innerText = elemento.innerText + valor;
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

function porcentaje() {

}
function evaluarOperacion(tipo) {

    let num1 = parseFloat(document.getElementById('id_n1').value);
    let num2 = parseFloat(document.getElementById('id_n2').value);

    let resultado = 0;

    if (tipo === '+' && tipo === '=') {
        resultado = sumar(num1, num2);
    }
    if (tipo === '-' && tipo === '=') {
        resultado = restar(num1, num2);
    }
    if (tipo === '*' && tipo === '=') {
        resultado = multiplicar(num1, num2)

    }
    if (tipo === '/' && tipo === '=') {
        resultado = dividir(num1, num2)
    }
    document.getElementById('id_resultado').innerText = resultado;

}


