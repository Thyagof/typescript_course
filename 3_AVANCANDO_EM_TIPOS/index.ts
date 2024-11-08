// 1 - arrays
let numbers: number[] = [1, 2, 3]
numbers.push(5)
console.log(numbers[2])

const nome: string[] = ["Thyago", "Augusto"]

// 2 - outra sintaxe array - Num é muito comum hoje em dia
const nums: Array<number> = [100, 200]

nums.push(300)

console.log(nums[0])

// 3 - any - EVITAR O USO PQ VAI CONTRA O PRINCÍPIO DO TYPESCRIPT
const arr1: any = [1, "Teste", true, [], {nome: "Thyago"}]

console.log(arr1)

arr1.push([1, 2, 3])

console.log(arr1)

//4 - parametros tipados

function soma(a: number, b: number) {
    console.log(a + b)
}

soma(4, 5)

//5 - retorno de função
function greeting(name: string): string {
    return `Olá, ${name}`
}

console.log(greeting("Thyago"))

//6 - função anônima
setTimeout(function() {
    const sallary: number = 1000
    //console.log(sallary)
}, 2000)

//7 - tipos de objeto
function passCordinates(coord: {x: number, y: number}) {
    console.log("X coordinate: " + coord.x)
    console.log("Y coordinate: " + coord.y)
}

const objCoord = {x: 329, y: 84.2}

passCordinates(objCoord)

const pessoaObj:{nome: string, sobrenome: string} = {nome: "Thyago", sobrenome: "Augusto"}

//8 - argumentos opcionais
function showNumber(a: number, b: number, c?: number) {
    console.log("A: " + a)
    console.log("B: " + b)

    if (c) {
        console.log("C: " + c)
    }
}

showNumber(1, 2, 3)
showNumber(4, 5)

//9 - validação de argumentos opcionais
function advancedGreeting(firstName: string, lastName?: string) {
    if (lastName !== undefined) {
        return `Olá, ${firstName} ${lastName}, tudo bem?`
    }

    return `Olá, ${firstName}, tudo bem?`
}

console.log(advancedGreeting("Thyago", "Augusto"))
console.log(advancedGreeting("Thyago"))

//10 - Union Type
function showBalance(balance: string | number) {
    console.log(`O saldo da conta é R$${balance}`)
} 

showBalance(100)
showBalance("500")

const arr2: Array <number | string | boolean> = [1, "teste", true]

//11 - avançando em union types
function showUserRole(role: boolean | string) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!"
    }

    return `A função do usuário é: ${role}`
}

console.log(showUserRole(false))
console.log(showUserRole("Admin"))

//12 - type alias
type ID = string | number

function showId(id: ID) {
    console.log(`O ID é: ${id}`)
}

showId(1)
showId("200")

//13 - interface
interface Point {
    x: number
    y: number
    z: number
}

function showCoords(obj: Point) {
    console.log(`x: ${obj.x}, y: ${obj.y}, z: ${obj.z}`)
}

const coordObj: Point = {
    x: 10, 
    y: 15,
    z: 20
}

showCoords(coordObj)

//14 - interface x type alias - interface permite modificação, type alias não
interface Person {
    name: string
}

interface Person {
    age: number
}

const somePerson: Person = {name: "Thyago", age: 29}

console.log(somePerson)

type personType = {
    name: string
}

//15 - literal types - define o tipo com base em um valor específico
let test: "testando"

test = "testando"

console.log(test)
 
function showDirection (direction: "right" | "center" | "left") {
    console.log(direction)
}

showDirection("right")

//16 - non null assertion operators
const p = document.getElementById("some-p")

console.log(p!.innerText)

//17 - bigint
let n: bigint

n = 1000n

console.log(n)

//18 - symbol
let symbolA = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

