const retornaProxPar = num => {
  if (num % 2 === 0) return console.log('o numero par é:', num)
  retornaProxPar(num + 1)
}

retornaProxPar(1)

const retornaProxPrimo = num => {
  let divisao = 2 // Número é divisível por ele mesmo e por um
  let i = 2 // No caso de num = 1, ele vai passar direto pelo while e cair no if
  while (divisao <= 2 && i < num) {
    if (num % i === 0) {
      divisao++
    }
    i++
  }
  if (divisao === 2) return console.log('o numero primo é:', num)
  retornaProxPrimo(num + 1)
}

retornaProxPrimo(1)
retornaProxPrimo(2)
retornaProxPrimo(3)
retornaProxPrimo(10)
retornaProxPrimo(114)
