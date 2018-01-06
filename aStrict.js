/* 
Fonte: https://www.w3schools.com/js/js_strict.asp

O strict Mode é usado para evitar más utilizações
do código, mesma que não haja erro. Dessa forma, caso seja usada uma sintaxe
eficiente que possa futuramente causar conflitos
no programa um erro é literalmente lançado. 

Deve-se usar "use strict" para poder utilizar o strict mode;

Se você remover a expressão "use script" deste script não serão lançados erros.
*/

"use strict";
// No strict Mode não se pode:

/*Usar variável não declarada*/ 

//var x;
x = 3.14;
console.log(x);
//delete x;


