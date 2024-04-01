/*Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”.
 Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.*/
//1-Pedir las cadenas de texto con prompt//
//2-Al apretar cancelar mostrar todos los textos ingresados//

let chistes = '';
do {
  let texto = prompt("Por favor ingrese un texto");

  if (texto === null) {
    break;
  }

  chistes += "-" + texto;

  alert = (`Tu chiste fue ${texto}`);

} 
while (true) {
alert(`Tus textos fueron ${chistes}`);
}               