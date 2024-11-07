"use strict";
// 1 - Number
let x = 10;
console.log(x);
console.log(typeof x);
let y = 10.111;
console.log(y);
console.log(typeof y);
console.log(y.toPrecision(3));
// 2 - String
const firstName = "Thyago";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Rosa";
fullName = firstName + " " + lastName;
console.log(fullName);
// 3 - Boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - Inference e Annotation
let ann = "Teste";
let inf = "Teste1";
console.log("testando");
// 5 - desafio
const n = 2;
const nString = n.toString();
const printNumber = `Eu vou imprimir o número ${nString}`;
console.log(printNumber);
