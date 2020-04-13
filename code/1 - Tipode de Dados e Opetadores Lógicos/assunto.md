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



#### Um pouco mais a fundo ####

Os tipos primitivos Booleano, String e NUmber são convertidos automaticamente pelo JavaScript  para objetos dos seus respectivos tipos, por isso é possível utilizar os métodos do objeto x através de x primitivas


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


