

##### Boolean #####
O booleano representa uma entidade lógica, e pode receber o valor true ou false. Ele é utilizado para a realização de operações lógicas, principalemnte de validação

Objetos definidos, como objeto ({}) e array ([]), quando considerado um Objeto Booleano sempre retornam true em uma validação lógica, mesmo estando vazios. Já os tipos que não tem definição (null, uundefined, NaN, 0 e '') retornam falso 

var x1 = new Boolean(false);
var x2 = false;

x1 é um tipo de Objeto Booleano, que possui como valor (valueOf) false, já x2 é um tipo primitivo booleano


 O JavaScript converte automaticamente booleanos primitivas para objetos do tipo Booleano, por isso é possível utilizar os métodos do objeto Booleano através de booleanos primitivas

Não use um objeto Boolean para converter um valor não-boleano para um valor boleano. Ao invés disso use Boolean como uma função para executar essa tarefa

A diferença entre Boolean('algo') e new Boolean('algo')
Boolean(1) dá um primitivo do tipo Booleano e new Boolean(1) dá um objeto, uma instância, que quando lhe pedimos o seu valor retorna um primitivo.

O operador double-not e a função Boolean() converte qualquer expressão em um  tipo booleano

var x = Boolean(expression);     // use this...

var x = !!(expression);          // ...or this

var x = new Boolean(expression); // don't use this!
