// FUnção para imprimir Hello World
function hello () {
  console.log('Hello World')
}

hello()

// Função para imprimir uma mensagem com a idade do usuário 
function imprimeIdade(idade) {
  console.log(`Você tem ${idade} anos`)
}

imprimeIdade(15)

// Função que retorna a soma de dois parâmetros
function soma (x, y) {
  const sum = x + y
  console.log(`A soma de ${x} + ${y} é: ${sum}`)
  return sum
}

console.log(soma(10, 5))

// Função que recebe um limite e retorna um número randômico ]0,limite[
const random = limit => {
  const randomNum = Math.random() // Retorna um numero entre 0 e 1
  return  Math.floor(randomNum * limit) + 1 // Arredonda para baixo o numero
}

console.log(random(50))

// Função que retorna o tipo do dado passado 
const dataType = data => {
  return typeof data
}

console.log(dataType({}))
console.log(dataType([]))
console.log(dataType(1))
console.log(dataType('Olá'))
console.log(dataType(true))
console.log(dataType(BigInt(9007199254740991)))

