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
function unirTexto(num1, num2) {
    return "" + num1 + num2;
}
function resultado(cadena) {
    var arrayDeCadenas = []
    if (cadena.includes('+')) {
        arrayDeCadenas = cadena.split("+")
        return sumar(parseInt(arrayDeCadenas[0]), parseInt(arrayDeCadenas[1]))

    }
    if (cadena.includes('-')) {
        arrayDeCadenas = cadena.split("-")
        return restar(parseInt(arrayDeCadenas[0]), parseInt(arrayDeCadenas[1]))

    }
    if (cadena.includes('*')) {
        arrayDeCadenas = cadena.split("*")
        return multiplicar(parseInt(arrayDeCadenas[0]), parseInt(arrayDeCadenas[1]))

    }
    if (cadena.includes('/')) {
        arrayDeCadenas = cadena.split("/")
        return dividir(parseInt(arrayDeCadenas[0]), parseInt(arrayDeCadenas[1]))

    }
}