// ############## String ##########################

// Exemplo De De Imutabilidade
console.log('\n Exemplo de De Imutabilidade\n')

let test8 = 'string para test'
stringTest = test8.concat('concatenacao')
test8.concat('concatenacao') // tentando acrescentar a string 'concatenacao' em test8

console.log('String original:', test8, '\nString concat:', stringTest)
