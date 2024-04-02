/*Realizar una página con un script que calcule el valor de la letra
 de un número de DNI (Documento nacional de identidad).

El algoritmo para calcular la letra del dni es el siguiente :

El número debe ser entre 0 y 99999999
Debemos calcular el resto de la división entera entre el número y el número 23.
Según el resultado, de 0 a 22, le corresponderá una letra de las
siguientes:  (T, R, W, A, G, M, Y, F, P, D, X, B, N, J, Z, S, Q, V, H, L, C, K, E) 
Si lo introducido no es un número deberá indicarse con un alert y volver a preguntar.
Deberá de repetirse el proceso hasta que el usuario pulse «cancelar».
*/
//1- Calcular el resto de la division entre un numero y el numero 23
//2-Corresponder una letra de acuerdo al resultado de la division
//3-Si no es un numero indicar en un alert y preguntar de nuevo
//4-Repetir el proceso hasta que pulse cancelar

let dni = Number;

dni = prompt("Ingrese un dni");
if (isNaN(dni)) {
  alert("El valor ingresado no es un numero");
  
} 

while (dni > 0 && dni <= 99999999) {
    
    if (dni === null) 
  break;

  let resultado = 0;

  let letras = "TRWAGMYFPDXBNJZSQVHLCKE";

  resultado = dni % 23;
  let orden = letras.charAt(resultado);
  alert(`La letra correspondiente es ${orden}`);
  
}
