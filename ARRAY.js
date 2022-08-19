let rs = require ('readline-sync')

let numeroInserido1 = rs.questionInt( 'Insira o Numero 1: ')
let numeroInserido2 = rs.questionInt( 'Insira o Numero 2: ')
let numeroInserido3 = rs.questionInt( 'Insira o Numero 3: ')
let numeroInserido4 = rs.questionInt( 'Insira o Numero 4: ')
let numeroInserido5 = rs.questionInt( 'Insira o Numero 5: ')

let resultado = numeroInserido1 + numeroInserido2 + numeroInserido3 + numeroInserido4 + numeroInserido5

console.log (`${numeroInserido1} + ${numeroInserido2} + ${numeroInserido3} + ${numeroInserido4} + 
    ${numeroInserido5} = ${resultado}`)
