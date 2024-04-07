/*Crea un script que escriba los números del 1 al 500, 
que indique cuáles son múltiplos de 4 y de 9 y que
cada 5 líneas muestre una línea horizontal. Por ejemplo :

1
2
3
4 (Múltiplo de 4)
5-
————————————————————-

6
7
8 (Múltiplo de 4)
9 (Múltiplo de 9)
10*/
//1-Escribir un script del 1 al 500.
//2-Indicar los numeros multiplos de 4 y 9.
//3-Cada 5 lineas mostrar una linea horizontal.

let numeros = 1;

for (numeros; numeros <= 500; numeros++) {
  document.write(numeros);
  if (numeros % 4 === 0) {
    document.write(" Multiplo de 4");
  } else if (numeros % 9 === 0) {
    document.write(" Multiplo de 9");

  }
  document.write("<br>");
if(numeros%5===0){
  document.write('<hr>');
}
}

