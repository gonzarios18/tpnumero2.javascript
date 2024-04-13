//Realiza un script que pida una cadena de texto y la devuelva al revés.
// Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

let texto = 'Hoy es dia soleado';

let textoInvertido = "";

for (var i = texto.length - 1; i >= 0; i--) {
    textoInvertido += texto[i];
}

console.log("El texto invertido es: " + textoInvertido);
