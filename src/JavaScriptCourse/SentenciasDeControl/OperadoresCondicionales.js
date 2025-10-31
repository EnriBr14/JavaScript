/*
Operadores de comparación

    === Comparar valores
    != Diferente de...
    !== Difente en valor y tipo de dato
    > Operador de mayor
    < Operador de menor
    <= o >= Mayor o menor o igual

 */

const a = 10;
const b = 20;
const c = "10";

console.log(a == b); //False 10 != 20
console.log(a == c); //True pero no toma el tipo de dato
console.log(a === c); // Flase, uno es un tipo de dato entero y otro un string

console.log("Operadores logicos");
/*
 Operadores logicos
 && And
 || Or
 ! Negación, sino es
*/

console.log(a === b && a ===c)
console.log(a == c || a === b);
let com1 = a == c //True
console.log(a == c);
console.log(!com1);