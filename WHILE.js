let rs = require('readline-sync')
let numeroFatorial = rs.question('insira o numero para calcular o fatorial: ')
let resultado = 1 
while(numeroFatorial > 1){ // inicio do loop
    resultado = numeroFatorial * resultado  // primeira instrução
    numeroFatorial = numeroFatorial -1      // segunda instrução
    if(numeroFatorial >1){
        break 
// break quebra o loop
    }
}
console.log(resultado)