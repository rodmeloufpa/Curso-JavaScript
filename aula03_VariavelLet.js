
//Fonte: https://medium.com/@raphalima8/vari%C3%A1veis-em-es6-var-let-e-const-como-funcionam-e-qual-delas-usar-413938f732f9

/* 
A variá tipo let quando declarada fora de uma função, ou seja, ela fica acessível no escopo global. Mas quando declarada dentro de qualquer bloco seja ele uma função, um if ou um loop, 
ela fica acessível apenas dentro do bloco (e sub-blocos) do qual foi declarada.

Com let não é possível redeclarar uma variável ao contrário do podemos fazer com var.
*/

"use strict";
var a = 1;// Variável global
if (a<2)
{
    var a = 5;
}
console.log("O valor da variável global mudou de 1 para: "+a);

let b = 6;
if(b<7)
{
    let b = 9;
}
console.log("O valor da variável global não muda: "+b);

// Tentando redeclarar uma variável let
let c = 2;
let c = 3; // Aqui ocorrerá um erro!!!!Não é possível redeclarar a variável
console.log(c);