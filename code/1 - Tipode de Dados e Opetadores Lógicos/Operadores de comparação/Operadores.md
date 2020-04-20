
### Comparações no JScript ###
As comparações geram um retorno booleanos, e elas são feitas por meio dos operadores de comparações, que são dividos em 3 grupos: operadores de Comparação abstrata, Comparação abstrata relacional e Comparação estritra.

##### Comparação abstrata ####
Compara o conteúdo dos operandos. Há uma conversão implícita nos operandos, antes desses conteúdos serem comparados.

 - igual (==): retorna true (verdade) se os operandos possuem conteúdo correspondentes
 - diferente (!=): retorna true (verdade) se os operandos não possuem conteúdo correspondentes
##### Comparação abstrata relacional ####
Cada um desses operadores chamará a função valueOf () em cada operando antes que uma comparação seja feita.

 - maior (>):
 - maior ou igual (>=):
 - menor (<):
 - menor ou igual (<=):
##### Comparação estritra ####
Compara o tipo e o conteúdo dos operandos, sem nenhum tipo de conversão.

 - idêntico (===): O operador de identidade retorna true (verdade) se os operandos são estritamente iguais, sem conversão de tipo. 
 - não idêntico (!==): retorna verdadeiro se os operandos não são iguais e / ou não são do mesmo tipo.

 ### Algumas regras ###
  -Uma expressão comparando Objetos somente é verdadeira se os operandos referenciarem o mesmo Objeto. Há a comparação entre a referência deles, se eles referenciam a mesma posição de memória.
 -Os tipo Null e Undefined são estritamente iguais entre eles mesmos e abstratamente iguais entre si. Para qualquer objetos não-primitivo x e y que têm a mesma estrutura, mas são - - - -Objetos distintos entre si, qualquer igualdade será avaliada como falsa.
 -Quando há a comparação entre um objeto e um dado primitivo, no processo de conversão, o operador tenta converter o objeto para um tipo primitivo e 'pegar' o valor de retorno padrão do objeto, por meio do valueOf ou por meio do toString, para realizar a comparação.
 -NaN não é igual a nada, incluindo NaN. 
 -Zeros positivos e negativos são iguals entre si.