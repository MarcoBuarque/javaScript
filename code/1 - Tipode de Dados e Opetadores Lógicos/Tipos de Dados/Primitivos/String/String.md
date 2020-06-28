### String ###

As string são utilizadas para representar textos, esses textos vêm envoltos de aspas simples '' ou aspas duplas "" ou crases ``, sendo o último caso chamado de template literals. Uma string é formada por caracteres, também chamados de elementos, cada caracter possui 16-bits unsigned integer, isso é, ocupam 16 bits na memória.

As strings possuem um index, pelo qual é possível acessar cada caracter. O primeiro caracter possui o index 0, o segundo caracter possui index 1, e assim sucessivamente. Há duas formas de acessar um caracter em uma string com o String[index] ou com o charAt(index) 
(Exemplo Acessando Caracter)

O objeto String só possui uma propriedade, a String.length, ela retorna quantos caracteres possui a string, o tamanho da string. Espaços vazios, mesmo que venham após o último caracter da string, também contam como parte da string, são elementos da string, e, consequentemente, contam para o tamanho da mesma. 
(Exemplo Prop e Metodos)

Como string é um tipo de dado primitivo, ela não pode ser alterada, mas é possível criar novas strings ou sub-strings a partir de uma string definida previamente, utilizando métodos do objeto String.
(Exemplo De Imutabilidade)

#### Principais Métodos: #### (exemplo Principais Métodos)
(Exemplo Prop e Metodos)
 - str.concat(otherStr, otherStr2, ...): Retonar uma nova string a partir da  concatenação das strings passadas como parâmetro, enfileirando-as de acordo com a ordem que os argumentos foram passados. Também é possível concatenar strings com a adição (str + ' ' + otherStr + ... + otherStrN).

 - str.trim(): Retorna uma nova string a partir de uma string predeterminada, removendo os espaços em branco antes do primeiro caracter da string e depois do último caracter da string, além de todo sinal de fim de linha de texto (LF, CR, etc.). Ele possui algumas variações: o trimEnd/trimRight() e o trimStart/trimLeft() (nomes sugestivos).
 
 - str.toUpperCase(): Retorna uma nova string, com todos os caracteres da original, só que em caixa baixa.

 - str.toLowerCase(): Retorna uma nova string, com todos os caracteres da original, só que em caixa alta.

 - str.includes('alguma coisa'): Retorna um booleano referente se a substring passada como argumento está presente na string que chama o método ou não.

 - str.startWith('alguma coisa'):  Retorna um booleano referente se a string começa com substring passada como argumento.
 - str.endsWith('alguma coisa'):  Retorna um booleano referente se a string finaliza com substring passada como argumento.

 - str.replace(): // TODO

 - str.slice(): // TODO

 - str.repeat():

 - str.split(): // TODO

 - str.indexOf():

 - str.lastIndexOf():

 - str.normalize(): Converte um code point (UNICODE) para um caracter, seguindo um padrão de padronização ("NFC", "NFD", "NFKC", ou "NFKD").

 - str.match(): 

 - str.padEnd():

 - str.padStart():

 - str.fromCharCode():

 - str.fromCodePoint():

 - str.charAt():

 - str.charCodeAt():

 - str.toSource():

 - str.search():

 - str.sub():

 - str.substr(): // TODO

 - str.substring():

// TODO acrescentar mais metodos https://bognarjunior.wordpress.com/2015/01/12/string-javascript-metodos/

Nota: Com a chegada do template literals no JScript, ele passou a ser mais utilizado para fazer junções de strings que os seus métodos específicos. 

#### Catacteres especiais ####
(Exemplo Caracteres Especiais)
Támbem existem alguns caracteres especial para estilizar uma string, como o \n que pula uma linha, o \t que dá um tab no texto, entre outros.

// TODO: Acrescentar exemplos

#### Convertendo Tipos De Dados No Tipo String ####
(Exemplo De Convertendo Tipos De Dados No Tipo String)
Você pode converter um tipo de dado primitivo ou objeto em uma string utilizando a função String(expressão) ou o método .toString(), se o dano não for null ou undefined


##### A diferença entre String('algo') e new String('algo') #####
(Exemplo De new String() x String())
String(1) dá um primitivo do tipo String e new String(1) dá um objeto, uma instância, que quando lhe pedimos o seu valor retorna um primitivo.

Não é aconselhado usar o New String(algo) com uma expressão, para isso utilize apenas o String(algo)


#### Um pouco mais ####
(Exemplo De )
 O JavaScript converte automaticamente strings primitivas para objetos do tipo String, por isso é possível utilizar os métodos do objeto String através de strings primitivas.  Em contextos onde um método é invocado de uma string primitiva ou uma propriedade é procurada, o JavaScript irá criar um objeto com a string primitiva e executar o método ou acessar a propriedade procurada.

 String primitivas e objetos String também dão resultados diferentes quando usado eval. Primitivas passadas para eval são tratadas como código fonte; Objetos String são tratados como todos os outros objetos são, retornando o objeto. (exemplo eval)

 Um objeto String pode ser convertido sempre para sua contraparte primitiva com o método valueOf.


