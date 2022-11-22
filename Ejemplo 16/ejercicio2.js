//Ejercicio 2

let grado=+prompt("Ingrese el grado en Celsius")
function pasarFarenheit(grado) {
    Fahrenheit=grado*1.8+32
    return Fahrenheit
}

Mensaje = `${grado} grados Celsius equivale a  ${pasarFarenheit(grado)} Farenheit`
document.write(Mensaje)

