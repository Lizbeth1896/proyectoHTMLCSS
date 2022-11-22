let num1=+prompt("Ingrese primer número")
let num2=+prompt("Ingrese segundo numero")

function suma(num1,num2) {
    suma=num1+num2
    return suma
}

Mensaje = `La suma de los numeros es  ${suma(num1,num2)}`
document.write(Mensaje)
