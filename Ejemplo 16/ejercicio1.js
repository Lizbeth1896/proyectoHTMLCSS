//Ejercicio 1
let num1=+prompt("Ingrese primer número")
let num2=+prompt("Ingrese segundo numero")

function resta(num1,num2) {
    resta=num1-num2
    return resta
}

Mensaje = `La resta de los numeros es  ${resta(num1,num2)}`
document.write(Mensaje)




/*
let multipli=function (x,y) {
    return x*y
}

let expon=function (x,y) {
    return Math.pow(x,y)
}

let suma=function(x,y) {
    return x+y
}

let resta=function (x,y) {
    return x-y
}

Mensaje = `La multiplicación es: ${multipli(num1,num2)} <br> 
    La potencia es: ${expon(num1,num2)} <br> 
    La suma es: ${suma(num1,num2)} <br>
    La resta es: ${resta(num1,num2)}`

document.write(Mensaje)

//var result=multipli(num1,num2)
//alert("La multiplicación es: "+result)

//result=expon(num1,num2)
//alert("La potencia es: "+result)

//result=suma(num1,num2)
//alert("La suma es: "+result)

//result=resta(num1,num2)
//alert("La resta es: "+result)

*/
