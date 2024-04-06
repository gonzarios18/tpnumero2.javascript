/*Crea script para generar pirámide siguiente con los números del 
1 al número que indique el usuario (no mayor de 50) 

1
12
123
1234
12345
123456
*/
//1-Pedir un numero menor a 50
//2-Aumentar los numeros de 1 en 1
//3-Realizar el aumento en forma piramidal hasta el numero que el usuario elija

//let numeroIngresado=Number(prompt("Ingrese un numero menor a 50"));

let numeroIngresado=Number(prompt("Ingrese un numero menor a 50"));
 if(numeroIngresado<1 || numeroIngresado>50 || isNaN(numeroIngresado)){

    alert("Ingrese un valor valido");

} else {

for(let i=1;i<=numeroIngresado;i++){

    
    for(let contador= 1; contador<=i;contador++){

        document.write(contador);
    }
    document.write('<br>');
}
}