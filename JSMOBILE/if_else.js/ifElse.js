
// Refatoração: refazer com melhorias 
//IF, IF para IF / ELSE IF

/**
 * escreva um código que pergunte qual a cor preferida, SE for vermelho, imprima "vermelho". Se for azul, imprima "azul,"
 * SE NAO nao coheço essa cor
 */

const cor_preferida = prompt('Qual a sua cor preferida?');

if (cor_preferida == 'vermelho') {
  console.log("imprima vermelho");
}

else if (cor_preferida == 'azul') {
  console.log("imprima azul");
}

else {
  console.log("nao coheço essa cor");
}

console.log(cor_preferida.length)