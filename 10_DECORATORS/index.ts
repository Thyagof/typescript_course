//1 - exemplo de decorator
function myDecorator() {
    console.log("Iniciando decorator!")

    return function(
        target: any, 
        propertykey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertykey);
        console.log(descriptor);
    }
}

class myClass {
    @myDecorator()
    testing() {
        console.log("Terminando a execução do método");
    }
}

const myObj = new myClass();

myObj.testing()

//2 - múltiplos decorators
function a() {
    return function(
        target: any, 
        propertykey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("executou a.");
    }
}

function b() {
    return function(
        target: any, 
        propertykey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("executou b.");
    }
}

function c() {
    return function(
        target: any, 
        propertykey: string, 
        descriptor: PropertyDescriptor
    ) {
        console.log("executou c.");
    }
}

class MultipleDecorators {
    @c() //executa por último
    @a() 
    @b() //executa primeiro
    testing() {
        console.log("Terminando execução");
    }
}

const multiple = new MultipleDecorators()
multiple.testing()

//3 - class decorator
function classDec(constructor: Function) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando usuário!");
    }
}

@classDec
class User {
   name 
   
   constructor(name: string) {
    this.name = name
   }
}

const thyago = new User("Thyago")
console.log(thyago);

//4 - Method decorator
function enumerable(value: boolean) {
    return function(target: any, propertykey: string, descriptor: PropertyDescriptor) {
        descriptor.enumerable = value;
    }
}
class Machine {
    name

    constructor(name: string) {
        this.name = name
    }

    @enumerable(true)
    showName() {
        console.log(this);
        return `O nome da máquina é ${this.name}`
    }
}

const trator = new Machine("Trator")

trator.showName()

//5 - Acessor decorator - apenas para getters e setters
class Monster {
    name?
    age?

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }

    @enumerable(true)
    get showName() {
        return `Nome do monstro: ${this.name}`
    }

    get showAge() {
        return `Idade do monstro: ${this.age}`
    }
}

const charmander = new Monster("Charmander", 10)

console.log(charmander);

//6 - Property decorator
function formatNumber () {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            value = newVal.padStart(5, "0") //00001
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter
        })
    }
}

class ID {
    @formatNumber()
    id

    constructor(id: string) {
        this.id = id
    }
}

const newItem = new ID("1")

console.log(newItem);

//7 - Class Decorator - exemplo real
function createdDate(created: Function) {
    created.prototype.createdAt = new Date();
}

@createdDate
class Book {
    id
    createdAt?: Date;

    constructor(id: number) {
        this.id = id
    }
}

@createdDate
class Pen {
    id

    constructor(id: number) {
        this.id = id
    }
}

const newBook = new Book(12)

const newPen = new Pen(13)

console.log(newBook);
console.log(newPen);
console.log(newBook.createdAt);

//8 - Method Decorator - exemplo real
function checkIfUserPosted() {
    return (
        target: Object, 
        key: string | Symbol, 
        descriptor: PropertyDescriptor 
    ) => {
        const childFunction = descriptor.value
        console.log(childFunction);
        descriptor.value = function(...args: any[]) {
            if (args[1] === true) {
                console.log("Usuário já postou");
                return null
            } else {
                return childFunction.apply(this, args)
            }
        }

        return descriptor
    }
}
class Post {
    alreadyPosted = false

    @checkIfUserPosted()
    post(content: string, alreadyPosted: boolean){
        this.alreadyPosted = true
        console.log(`Post do usuário: ${content}`);
    }
}

const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted)
newPost.post("Meu segundo post!", newPost.alreadyPosted)

//9 - Property Decorator - exemplo real
function Max(limit: number) {
    return function(target: Object, propertyKey: string) {
        let value: string

        const getter = function() {
            return value
        }

        const setter = function(newVal: string) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo ${limit} dígitos.`);
                return
            } else {
                value = newVal
            }
        }
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        })
    }
}

class Admin {
    @Max(10)
    userName

    constructor(userName: string) {
        this.userName = userName
    }
}

const pedro = new Admin("pedroAdmin1231514")

const lee = new Admin("lee")

console.log(pedro);
console.log(lee);

