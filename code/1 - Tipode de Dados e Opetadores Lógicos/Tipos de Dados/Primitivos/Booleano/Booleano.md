### Boolean ###
(Exemplo Inicial)
O booleano representa uma entidade lógica, e pode receber o valor true ou false. Ele é utilizado para a realização de operações lógicas, principalemnte de validação

#### Exemplo De Convertendo Tipos De Dados No Tipo Booleano ####
(Exemplo De Convertendo Tipos De Dados No Tipo Booleano)

O operador double-not (!!) e a função Boolean() converte qualquer expressão, objeto ou primitivo, em um  tipo booleano

Objetos definidos, como objeto ({}) e array ([]), quando considerado um Objeto Booleano sempre retornam true em uma validação lógica, mesmo estando vazios. Já os tipos que não tem definição (null, undefined, NaN, 0 e '') retornam falso 

##### A diferença entre Boolean('algo') e new Boolean('algo') #####
(Exemplo De new Boolean() x Boolean())
Boolean(1) retorna um primitivo do tipo Booleano e new Boolean(1) retorna um objeto, uma instância, que quando lhe pedimos o seu valor retorna um primitivo.

Não é recomendado um objeto Boolean para converter um valor não-boleano para um valor boleano. Ao invés disso deve-se usar Boolean() ou o double-not para executar essa tarefa

#### Um pouco mais a fundo ####

O JavaScript converte automaticamente booleanos primitivas para objetos do tipo Booleano, por isso é possível utilizar os métodos do objeto Booleano através de booleanos primitivas

