/* Realiza un script que pida números hasta que se pulse “cancelar”.
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/
//1-Solicitar numeros
//2-Dejar de pedir cuando se pulse cancelar
//3-Indicar con alert si no es numero
//4-Cuando presiono cancelar mostrar suma de todos los numeros

let suma = 0;

while (true) {
    let numero = prompt("Ingrese un número:");

 
    if (numero === null || isNaN(numero)) {
      
        break;
    } 
    
    suma += Number(numero);
}


alert(`La suma total de los números introducidos es: ${suma}`);
