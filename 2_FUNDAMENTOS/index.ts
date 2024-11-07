 // 1 - Number
 let x: number = 10

 console.log(x)

 console.log (typeof x)

 let y: number = 10.111

 console.log(y)

 console.log (typeof y)

 console.log(y.toPrecision(3))

 // 2 - String

 const firstName: string = "Thyago";

 console.log(firstName.toUpperCase())

 let fullName: string

 const lastName: string = "Rosa"

 fullName = firstName + " " + lastName

 console.log(fullName)

// 3 - Boolean
let a: boolean = false
console.log(a)
console.log(typeof a)

a = true
console.log(a)

// 4 - Inference e Annotation
let ann: string = "Teste"

let inf = "Teste1"

console.log("testando")

// 5 - desafio
const n: number = 1

const nString = x.toString()

const printNumber: string = `Eu vou imprimir o número ${nString}`

console.log(printNumber)
