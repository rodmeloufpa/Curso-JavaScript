/* Sequência de Fibonacci: 0,1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...*/

var a = 0;
var b = 1;
var c;
var contador = 10;
for (var i = 0; i<contador;i++ )
{
    c = a; // 
    a=b;; // 
    b=a+c;
    console.log("Fibonacci: "+c); // 
}
