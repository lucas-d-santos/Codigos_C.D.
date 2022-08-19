let rs = require ('readline-sync')

let numeroInseridos =[]
let resultado = 0 
for (let i = 0; i < 2; i++){
    let numeroInseridos = rs.questionInt (`Insira um Numero ${i}: `)
    numeroInseridos.push(numeroInseridos)
    resultado = resultado + numeroInseridos
}
 let imprimir = ""
 for (let n = 0; n < numeroInseridos.length; n++){
    imprimir = `${imprimir} + ${numeroInseridos[n]}`

 }
imprimir = imprimir + "=" + resultado
console.log(imprimir)
 