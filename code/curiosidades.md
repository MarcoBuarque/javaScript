### O que é UNICODE ? ###

O Unicode é um padrão adotado internacionalmente que padroniza a representação dos caracteres de todos os idiomas do mundo. Ou seja, cada carecter utilizado no mundo, seja letra, símbolos de pontuação, símbolos técnicos, é padronizado, e possui seu código específico. Isso permite que diferentes sistemas de diferentes linguagens de programação, reconheçam um caracter da mesma forma.

Exemplo: a letra 'A' terá o mesmo código (U+0041) no Java, em C, em Python, em qualquer sistema de programação.

- Uma letra em maiúsculo possuem code point diferente dessa mesma letra em minúsculo 'a' (code point: U+0061) e 'A' (code pint: U+0041)

- Os primeiros 127 code points são compatíveis com os códigos utilizados na tabela ASCII

- UTF-8, ISO-8859-1, UCS-2, UTF=32 são maneiras diferentes de converter e armazenar (encodings) dados de string em Unicode. Sendo que algum deles utilizam subconjuntos do unicode, não representando todos os caracteres mapeados pelo Unicode