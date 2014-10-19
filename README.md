# Markdown Includer PDF
Baseado em Node, ainda usando operações síncronas, tem como objetivo
gerar documentações PDF a partir de arquivos markdown(.md).

A parte do includer é que muitas vezes nossas documentações tem vários
arquivos markdown, aí surgiu a nececidade de um includer para poder ser gerado
uma documentação inteira no PDF sem precisar ser 1 página por vez gerada e nomeadas
com prefixo de ordem.

Primeiro o node irá ler os arquivos importados através do arquivo de entrada que
hoje é o README, irá pegar marcações includer, vai pegar os arquivos da pasta doc, colocar em seus devidos
lugares pra depois gerar projetc.pdf na pasta doc-pdf.

## Examplos
Para ver como funciona, basta:

* clona o projeto.
* digitar o comando: __npm install__
* digitar comando: __node markdown-includer-pdf.js__


### Examples includer generate
@import doc/doc1.md @

@import doc/doc2.md @
