const lembraValores = valor1 => {
  return valor2 => {
    return valor1 + valor2
  }
}

const soma = lembraValores(5)

// Mesmo após o fluxo de execução da função lembraValores ter 'terminado' e ela ter retornado algo, o argumento que foi passado
// para a função lembraValores será 'lembrado' ao executar a função de retorno
// A clousure lembra-se do escopo lexico da função
console.log(typeof soma, soma(7))
console.log(soma(1), soma(-6))

const count = (initValue) => {
  let value = initValue
  const sum = () => {
    console.log(value)
    value++
  }

  return sum
}

const myCount = count(3)

myCount()
myCount()
myCount()
