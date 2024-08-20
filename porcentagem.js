var valor = parseFloat(prompt("digite o valor a converter: "));
var porcentagem = parseInt(prompt("digite a porcentagem que deseja encotrar:"));

//converter um numero inteiro para decimal
//só é possivel achar a % usando numero decimal
var porcentagemDecimal = porcentagem / 100;
//multiplica o valor pela porcentagem para encontrar o resultado
var resultado = valor * porcentagemDecimal;

console.log("O Resultado é: " + resultado);