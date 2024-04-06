/*Haz un script que escriba una pirámide inversa de los números del
 1 al número que indique el usuario (no mayor de 50)  de la siguiente
forma : (suponiendo que indica 30).

303030303030303030303030303030303030303030303030303030303030
2929292929292929292929292929292929292929292929292929292929
28282828282828282828282828282828282828282828282828282828
…..
333
22
1
*/
let i=Number(prompt("Ingrese un numero menor a 50"));
if(i<=0 || i>50 || isNaN(i)){
    alert("El valor ingresado no es valido");
} else{
for(i ; i>=1 ; i--){

    for(let j= i; j>=1 ; j--){

        document.write(i);
    }
    document.write("<br />");
}}