let elemento;
let actual = '';
let num1 = null;
let num2 = null;
let operador = '';

function mostrarDisplay(valor) {
    elemento = document.getElementById('display');
    if (valor === '=') {
        evaluarOperacion();
    } else if (valor === 'truncar') {
        borrarTodo();
    } else if (valor === 'borrar') {
        borrarUltimo();
    } else if (valor === '+' || valor === '-' || valor === '*' || valor === '/') {
        guardarOperador(valor);
    } else if (valor === '%') {
        porcentaje();
    } else {
        actual += valor;
        actualizarDisplay();
    }
}

function actualizarDisplay() {
    elemento.innerText = actual;
}

function borrarTodo() {
    actual = '';
    operador = '';
    num1 = null;
    num2 = null;
    actualizarDisplay();
}

function borrarUltimo() {
    actual = actual.slice(0, -1);
    actualizarDisplay();
}

function guardarOperador(op) {
    if (num1 === null) {
        num1 = parseFloat(actual);
        operador = op;
        actual += op;
        actualizarDisplay();
    } else {
        operador = op;
        actual += op;
        actualizarDisplay();
    }
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
    if (num2 === 0) {
        return 'No se puede dividir para cero'
    } else {
        return num1 / num2;
    }

}

function porcentaje() {
    if (actual !== '') {
        let aux = parseFloat(actual);
        let resultado = aux / 100;
        elemento.innerText = resultado;
        actual = resultado.toString();
    }
}

function evaluarOperacion() {
    let opSeparada = separarOperacion(actual);
    if (!opSeparada) {
        return;
    } else {
        num1 = opSeparada[0];
        operador = opSeparada[1];
        num2 = opSeparada[2];

        let resultado = 0;

        switch (operador) {
            case '+': 
                resultado = sumar(num1, num2); 
                break;
            case '-': 
                resultado = restar(num1, num2); 
                break;
            case '*': 
                resultado = multiplicar(num1, num2); 
                break;
            case '/': 
                resultado = dividir(num1, num2); 
                break;
            default: 
                return;
        }

        elemento.innerText = actual + '=' + resultado;
        actual = resultado.toString();
        num1 = resultado;
        num2 = null;
    }
}

function separarOperacion(cadena) {
    let operadores = ['+', '-', '*', '/'];
    for (let op of operadores) {
        if (cadena.includes(op)) {
            let [n1, n2] = cadena.split(op);
            if (n1 !== '' && n2 !== '') {
                return [parseFloat(n1), op, parseFloat(n2)];
            }
        }
    }
    return null;
}

