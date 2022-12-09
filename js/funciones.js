function dividir(num1, num2) {
    return num1 / num2;
}
function multiplicar(num1, num2) {
    return num1 * num2;
}
function sumar(num1, num2) {
    return num1 + num2;
}
function restar(num1, num2) {
    return num1 - num2;
}

function encender() {
    var source = document.getElementById('foco').src
    if (source.includes('1.png')) {
        return '../img/2.png'
    }
    if (source.includes('2.png')) {
        return '../img/1.png'
    }

}