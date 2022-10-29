var resultado = 0;
var num1 = 0;
var num2 = 0; 
var num3 = 0;

num1 = prompt('Digite o primeiro número:');
num2 = prompt('Digite o segundo número:');
num3 = prompt('Digite o terceiro número:');

function Programa(num1,num2,num3){

    var resultado = num1 * 1 + num2 * 1 + num3 * 1;
    return fornecerMedia(resultado);      
        
}
function fornecerMedia(numero){  
    var media = numero / 3;           
    return console.log(`Resultado da soma: ${numero}  Media: ${media} `);
}

Programa(num1,num2,num3);
