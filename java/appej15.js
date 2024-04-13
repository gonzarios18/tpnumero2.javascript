/*Realiza un script que cuente el número de vocales que tiene un texto*/
let texto = 'Aguante San Martin de Tucuman';
texto= texto.toLowerCase();
let contador=0;
for(let i=0;i<texto.length;i++){

if(texto[i]==='a'|| texto[i]==='e'|| texto[i]==='i'|| texto[i]==='o'|| texto[i]==='u'){

    contador++;
    
}


}
console.log(`La cantidad de vocales del texto es ${contador}`);

