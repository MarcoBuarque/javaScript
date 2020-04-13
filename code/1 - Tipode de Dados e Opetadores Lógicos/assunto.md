## Tipos de Dados ##

### Introdução ###

Em uma linguagem de programação existe dados de diferentes tipos com diferentes tamanhos e  propósitos. Por exemplo o inteiro, que é utilizado armazenar números inteiros, a string, que é utilizada para armazenar uma cadeia de caracteres/textos.

Os tipos de dados são essenciais para a computação, já que eles que indicam ao computador ou interpretador as conversões que deveram ser feitas com os dados que estão sendo processados. Além de ajudarem o programador a detectar erros na semântica do código.

##### Grupos de tipos de dados: #####
 - Tipos de dados Primitivos (Nativos ou Básicos):
 São os tipos de dados que formam o alicerce da linguagem de programação, são os blocos de construção básica. Eles são dados que não são representados na forma de Objetos, logo, não possuem métodos que alterem sua 'estrutura'.
 Tipos de dados são imutáveis, uma vez que vc declarou ele, vc pode utiliza-lo para gerar outros tipos, primitivos ou objetos, mas não pode alterá-los
 Por serem os mais simples tipos de dados, são os mais rápidos interpretados.
 
 - Tipos de dados Objetos:
 São mais complexos que os primitivos, e são formados de primitivos e/ou outros dados do tipo Objeto. Eles possuem métodos que podem ser exclusivos de um tipo ou compartilhado com outros, por exemplo, o .length  (Dúvida, a string tem .length e é um tipo primitivo?)

#### O ECMAScript define 9 tipos de dados: ####
 - Tipos primitivos:
    - String () typeof instance === "string"
    - Boolean typeof instance === "boolean"
    - Undefined typeof instance === "undefined"
    - Symbol typeof instance === "symbol"
    - Number typeof instance === "number"
    - BigInt typeof instance === "bigint"
 - Tipos Objeto:
    - Null
    - Objeto
    - Função

##### String #####

As tring são utilizadas para representar textos, esses textos vêm envoltos de aspas simples '' ou aspas duplas "". Uma string é formada por caracteres, também chamados de elementos, cada caracter possui 16-bits unsigned integer, isso é, ocupam 16 bits na memória.

As strings possuem um index, pelo qual é possível acessar cada caracter. O primeiro caracter possui o index 0, o segundo caracter possui index 1, e assim sucessivamente. á duas formas de acessar um caracter em uma string com o [index] ou com o charAt(index)

String possuem o método .length, o qual retorna o tamanho da string

Como string é um tpo de dado primitivo, ela não pode ser alterada, mas é possível criar novas strings ou sub-strings a partir da string definida previamente.
ex String.sunstr(...) ou String.concat('')

Támbem existem alguns caracteres especial para estilizar uma string, como o \n que pula uma linha, o \t que dá um tab no texto, entre outros.

Você pode converter um tipo de dado em uma string utilizando a função String(expressão) ou toString, se o dano não for null ou undefined

Exemplos de strings
- typeof '' === 'string';
- typeof 'bla' === 'string';
- typeof `template literal` === 'string';
- typeof '1' === 'string'; // note that a number within a string is still typeof string
- typeof (typeof 1) === 'string'; // typeof always returns a string
- typeof String(1) === 'string'; // String converts anything into a string, safer than toString

##### Boolean #####
O booleano representa uma entidade lógica, e pode receber o valor true ou false. Ele é utilizado para a realização de operações lógicas, principalemnte de validação

Objetos definidos, como objeto ({}) e array ([]), quando considerado um Objeto Booleano sempre retornam true em uma validação lógica, mesmo estando vazios. Já os tipos que não tem definição (null, uundefined, NaN, 0 e '') retornam falso 

var x1 = new Boolean(false);
var x2 = false;

x1 é um tipo de Objeto Booleano, que possui como valor (valueOf) false, já x2 é um tipo primitivo booleano

test = new Boolean(true)
console.log(typeof(test), typeof(!![]) === typeof(true), typeof(!![]) === typeof(test), typeof(test) === typeof(true))

// Output: object, true, false, false


O operador double-not e a função Boolean() converte qualquer expressão em um  tipo booleano

var x = Boolean(expression);     // use this...

var x = !!(expression);          // ...or this

var x = new Boolean(expression); // don't use this!


Exemplos de Booleans
- typeof true === 'boolean';
- typeof false === 'boolean';
- typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
- typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()








// Numbers
typeof 37 === 'number';
typeof 3.14 === 'number';
typeof(42) === 'number';
typeof Math.LN2 === 'number';
typeof Infinity === 'number';
typeof NaN === 'number'; // Despite being "Not-A-Number"
typeof Number('1') === 'number';      // Number tries to parse things into numbers
typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

typeof 42n === 'bigint';








// Symbols
typeof Symbol() === 'symbol'
typeof Symbol('foo') === 'symbol'
typeof Symbol.iterator === 'symbol'


// Undefined
typeof undefined === 'undefined';
typeof declaredButUndefinedVariable === 'undefined';
typeof undeclaredVariable === 'undefined'; 


// Objects
typeof {a: 1} === 'object';

// use Array.isArray or Object.prototype.toString.call
// to differentiate regular objects from arrays
typeof [1, 2, 4] === 'object';

typeof new Date() === 'object';
typeof /regex/ === 'object'; // See Regular expressions section for historical results


// The following are confusing, dangerous, and wasteful. Avoid them.
typeof new Boolean(true) === 'object'; 
typeof new Number(1) === 'object'; 
typeof new String('abc') === 'object';


// Functions
typeof function() {} === 'function';
typeof class C {} === 'function';
typeof Math.sin === 'function';















Em algumas linguagem, como C, é necessário declarar o tipo de dado da sua variável, e essa variável só poderar ser utilizada para receber aquele tipo de dado atribuido previamente.

Ex em C: 
    int aux;
    aux = 'test'; 
    // Haverá um erro, pois estou dizendo que minha variável é do tipo int (inteiro) e estou atribuindo uma estring a ela 

No JavaScript, essa declaração do tipo de variável não é necessária e uma mesma variável pode se transmutar para diferentes tipos de dados em uma mesma execução 


