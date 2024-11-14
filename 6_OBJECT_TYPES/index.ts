//1 - interface como parâmetro
interface Product {
    name: string
    price: number
    isAvailable: boolean
}

function showProductDetails(product: Product) {
    console.log(`O nome do produto é ${product.name} e o seu preço é R$${product.price}`)
    if(product.isAvailable) {
        console.log("O produto está disponível")
    }
}

const shirt: Product = {
    name: "Camisa",
    price: 12.23,
    isAvailable: true
}

showProductDetails(shirt)
showProductDetails({name: "Short", price: 23.43, isAvailable: false})

//2 - propriedade opcional em interfaces
interface User {
    email: string
    role?: string
}

function showUserDetails (user: User) {
    console.log(`O usuário tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A função do usuário é ${user.role}`);
    }
}

const u1:User = {
    email: "thyago@gmail.com",
    role: "admin"
}

const u2:User = {
    email: "augusto@gmail.com"
}

showUserDetails(u1)
showUserDetails(u2)

//3 - Propriedades readonly
interface Car {
    brand: string
    readonly wheels: number
}

const fusca:Car = {
    brand: "VW",
    wheels: 4
}

//não é permitido -> fusca.wheels = 5

//4 - index signature
interface CoordObject {
    [index:string]: number
}

let coords: CoordObject = {
    x: 10
}

coords.y = 15

console.log(coords)

//5 - extending interfaces
interface Human {
    name: string
    age: number
}

interface SuperHuman extends Human {
    superpowers: string[]
}

const thyago: Human = {
    name: "Thyago",
    age: 29
}

const goku: SuperHuman = {
    name: "goku",
    age: 50,
    superpowers: ["superforça", "superagilidade", "kamehameha"]
}

console.log(thyago);
console.log(goku);
console.log(goku.superpowers[1])

//6 - intersection types
interface Character {
    name: string
}

interface Gun {
    type: string
    caliber: number
}

type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
}

console.log(arnold);

//7 - readonly array
let myArray: ReadonlyArray<string> = ["maçã", "banana", "laranja"]

console.log(myArray)

myArray.forEach((item) => {
    console.log("Fruta: " + item);
})

//modificações apenas através de métodos
myArray = myArray.map((item) => {
    return `Fruta: ${item}`
})

console.log(myArray)

//8 - Tuplas
type fiveNumbers = [number, number, number, number, number]

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5]

console.log(myNumberArray);

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Thyago", 30]

console.log(anotherUser);

//9 - Tuplas readonly
function showNumbers(numbers: readonly [number, number]) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}

showNumbers([1, 2])