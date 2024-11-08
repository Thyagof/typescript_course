//1 - type guard
function sum (a: number | string, b: number | string) {
    if(typeof a === "string" && typeof b === "string"){
        console.log(parseFloat(a) + parseFloat(b))
    } else if(typeof a === "number" && typeof b === "number") {
        console.log(a + b)
    } else {
        console.log("Impossível realizar a soma!")
    }
}

sum("12", "8.5")
sum(5, 15)

//2 - checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
    if (operation) {
        if (operation === "sum") {
            const sum = arr.reduce((i, total) => i + total)
            console.log(sum)
        } else if (operation === "multiply") {
            const multiply = arr.reduce((i, total) => i * total)
            console.log(multiply)
        }
    } else {
        console.log("Por favor, defina uma operação")
    }
}

operations([1, 2, 3])
operations([1, 2, 3], "sum")
operations([2, 4, 8], "multiply")

//3 - instance of
class User {
    name

    constructor(name:string) {
        this.name = name
    }
}

class SuperUser extends User {
    constructor(name: string) {
        super(name)
    }
}

const john = new User("John")
const paul = new SuperUser("Paul")

console.log(john)
console.log(paul)

function userGreeting(user: object) {
    if (user instanceof SuperUser) {
        console.log(`Olá, ${user.name}, deseja ver os dados do sistema?`)
    } else if (user instanceof User) {
        console.log(`Olá, ${user.name}`)
    }
}

userGreeting(john)
userGreeting(paul)

//4 - operator in
class Dog {
    name
    breed

    constructor(name: string, breed?: string) {
        this.name = name
        if(breed) {
            this.breed = breed
        }
    }
}

const tobby = new Dog("Tobby")
const bob = new Dog("Bob", "Pastor Alemão")

function showDogDetails(dog: Dog) {
    if("breed" in dog) {
        console.log(`O cachorro é da raça ${dog.breed}`)
    } else {
        console.log("O cachorro é um SRD")
    }
}

showDogDetails(tobby)
showDogDetails(bob)

// desafio
type Review = number | boolean

function showUserReview(review: Review) {
    if (!review) {
        console.log("Você não avaliou o filme")
        return
    }
    if(review === 1) {
        console.log(`Filme ruim que dói, nota ${review}`)
    } else if (review === 2) {
        console.log(`Filme meio ruinzinho, nota ${review}`)
    } else if (review === 3) {
        console.log(`Filme mediano, nota ${review}`)
    } else if (review === 4) {
        console.log(`Filme bom, nota ${review}`)
    } else if (review === 5) {
        console.log(`Filme perfeito, nota ${review}`)
    }
}

showUserReview(false)
showUserReview(1)
showUserReview(5)