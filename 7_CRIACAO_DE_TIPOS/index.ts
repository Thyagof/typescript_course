//1 - generics
function showData<T>(arg: T): string {
    return `O dado é: ${arg}`
}

console.log(showData(2));
console.log(showData("Testando generic"));
console.log(showData(true));

//2 - constraints em generics
function showProductName<T extends {name: string}>(obj: T) {
    return `O nome do produto é: ${obj.name}`
}
//O objeto precisa ter name para ser aceito na função

const myObj = {name: "copo", cor: "preto"}

console.log(showProductName(myObj));

 //3 - Generics com interfaces
 interface MyObject <T, U, Q> {
    name: string
    wheels: T
    engine: U
    color: Q
 }

 type Car = MyObject<number, number, string>
 type Pen = MyObject<boolean, boolean, string>

 const myCar: Car = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Branco"
 }

 const myPen: Pen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul"
 }

 console.log(myCar)
 console.log(myPen)

 //4 - type parameters
 function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`
 }

 const server = {
    hd: "2TB", 
    ram: "32GB"
 }

 console.log(getSomeKey(server, "ram"));

 //5 - keyof type operator
type Character = {name: string, age: number, hasDriverLicense: boolean}

type C = keyof Character

function showCharName(obj: Character, name: C): string {
    return `${obj[name]}`
}

const myChar: Character = {
    name: "Thyago",
    age: 29,
    hasDriverLicense: false
}
 
console.log(showCharName(myChar, "name"));

 //6 - typeof type operator
const userName: string = "Thyago"

const userName2: typeof userName = "João"

type X = typeof userName2

const userName3: X = "Lucas"

//7 - indexed access types - maior liberdade que o typeof
type Truck = {
    km: number, 
    kg: number,
    description: string
}

type Km = Truck["km"]

const newTruck: Truck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão pouca carga"
}
function showKm(km: Km) {
    console.log(`O veículo tem a km de: ${km}`)
}

showKm(newTruck.km)

const newCar = {
    km: 5000,
    kg: 1000
}

showKm(newCar.km)

//8 - conditional types
interface A {}

interface B extends A {}

interface Teste {
    showName(): string
}

type myType = B extends A ? number : string

const someVar: myType = 5

type myTypeB = Teste extends {showNumber(): string} ? string : boolean

//9 - template literals type
type testA = "text"

type customType = `some ${testA}`

type a1 = "Testando"
type a2 = "Union"

type a3 = `${a1}` | `${a2}`