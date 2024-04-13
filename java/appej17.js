/*Realiza un script que muestre la posición 
de la primera vocal de un texto introducido por teclado.*/


let texto = prompt("Por favor ingrese un texto:");

texto = texto.toLowerCase();

for (let i = 0; i < texto.length; i++) {
    if (texto[i] === 'a' || texto[i] === 'e' || texto[i] === 'i' || texto[i] === 'o' || texto[i] === 'u') {
        console.log(`La posición de la primera vocal del texto ingresado es ${i}`);
        break;
    }
}
