//Ejercicio 2: Construir un programa que permita ingresar un número, si el número es mayor de 500, se debe calcular y mostrar en pantalla el 18% de este.
//Ejercicio 3: Crea una aplicación que pida un número y calcule su factorial (El factorial de un número es el producto de todos los enteros entre 1 y el propio número y se representa por el número seguido de un signo de exclamación. Por ejemplo 5! = 1x2x3x4x5=120)

/*
Ejercicio 1: Elaborar un programa que permita ingresar el nombre del trabajador,
su sueldo básico y el número de hijos, se deberá mostrar su bonificación y 
el sueldo final.  Tenga en cuenta que la empresa está dando una bonificación 
del 7% del sueldo básico sólo en el caso el trabajador tuviese hijos.
*/


let trabajador=prompt("Ingrese nombre del trabajador")
let sueldob=parseFloat(prompt("Ingrese sueldo básico"))
let nhijos=+prompt("Ingrese número de hijos")

if (nhijos===0) {
    let bono=0
    let sueldof=sueldob
    Mensaje = `Estimado trabajador ${trabajador} le corresponde: <br> 
    Una bonificación de: s/.${bono} <br> 
    Y su sueldo final es: s/.${sueldof}`
    document.write(Mensaje)
} else{
    bono=(sueldob*0.07)*nhijos
    sueldof=sueldob+bono
    Mensaje = `Estimado trabajador ${trabajador} le corresponde: <br> 
    Una bonificación de: s/.${bono} <br> 
    Y su Sueldo final es: s/.${sueldof}`
    document.write(Mensaje)
}
