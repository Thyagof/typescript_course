//1 - campos em classe
class User {
    name!: string
    age!: number
}

const thyago = new User()

console.log(thyago)

thyago.name = "Thyago"

console.log(thyago);

//2 - Constructor
class NewUser {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new NewUser("João", 22)

console.log(joao);

//3 - campo readonly

class Car {
    name
    readonly wheels = 4

    constructor(name: string) {
        this.name = name
    }
}


const fusca = new Car("Fusca")

console.log(fusca)
console.log(fusca.wheels);

// 4 - herança e super
class Machine {
    name 

    constructor(name: string) {
        this.name = name
    }
}

class KillerMachine extends Machine {
    guns

    constructor(name: string, guns: number) {
        super(name)
        this.guns = guns
    }
}

const trator = new Machine("Trator")

const destroyer = new KillerMachine("Destroyer", 4)

console.log(trator)
console.log(destroyer)

//5 - métodos
class Dwarf {
    name 

    constructor(name: string) {
        this.name = name
    }

    greeting() {
        console.log("Hey, stranger!");
    }
}

const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name)

jimmy.greeting()

//6 - this
class Truck {
    model
    hp

    constructor(model: string, hp: number) {
        this.model = model
        this.hp = hp
    }

    showDetails() {
        console.log(`Caminhão do modelo: ${this.model}, que tem ${this.hp} cavalos de potência`);
    }
}

const volvo = new Truck("Volvo", 400)

volvo.showDetails()

//7 - Getters
class Person {
    name 
    surname

    constructor(name: string, surname: string) {
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }
}

const thyagoAugusto = new Person("Thyago", "Augusto")

console.log(thyagoAugusto.fullName)

//8 - Setters
class Coords {
    x!: number
    y!: number

    set fillX(x: number) {
        if (x === 0) {
            return
        }

        this.x = x

        console.log("X inserido com sucesso");  
    }

    set fillY(y: number) {
        if (y === 0) {
            return
        }

        this.y = y

        console.log("Y inserido com sucesso");
    }

    get getCoords() {
        return `X: ${this.x} e Y: ${this.y}`
    }
}

const myCoords = new Coords()

myCoords.fillX = 12
myCoords.fillY = 10

console.log(myCoords.getCoords);

//9 - implements - interface
interface showTitle {
    itemTitle(): string
}

class blogPost implements showTitle {
    title 

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título do post é: ${this.title}`   
    }
}

const myPost = new blogPost("Hello world!")

console.log(myPost.itemTitle());

class TestInterface implements showTitle {
    title 

    constructor(title: string) {
        this.title = title
    }

    itemTitle() {
        return `O título é: ${this.title}`   
    }
}

const myTest = new TestInterface("Teste")

console.log(myTest.itemTitle());

//10 - Override de métodos

class Base {
    someMethod() {
        console.log("alguma coisa");
    }
}

class Nova extends Base {
    someMethod(): void {
        console.log("método diferente")
    }
}

const myObject = new Nova()

myObject.someMethod()

//11 - public
class C {
    public x = 10
}

class D extends C {

}

const cInstance = new C()

const dInstance = new D()

console.log(cInstance.x)
console.log(dInstance.x)

//12 - protected
class E {
    protected x = 20

    protected protectedMethod() {
        console.log("Este método é protegido")
    }
}

class F extends E {
    // Só é possível acessar o x herdado da classe E, através de um método
    showX() {
        console.log(`X: ${this.x}`);
    }

    showProtectedMethod() {
        this.protectedMethod()
    }
}

const fInstance = new F()

fInstance.showX()
fInstance.showProtectedMethod()

//13 - private
class PrivateClass {
    private name = "Private"

    showName() {
        return this.name
    }

    private privateMethod() {
        console.log("método privado")
    }

    showPrivateMethod() {
        return this.privateMethod()
    }
}

const pObj = new PrivateClass()

console.log(pObj.showName())

pObj.showPrivateMethod()

//Não permite chamada através de classes que herdam atributos

//14 - static members
class StaticMembers {
    static prop = "Teste Static"

    static staticMethod() {
        console.log("Este é um método static");
    }
}

console.log(StaticMembers.prop);

StaticMembers.staticMethod()

//15 - generic class
class Item<T, U> {
    first
    second
    
    constructor(first: T, second: U) {
        this.first = first
        this.second = second
    }

    get showFirst() {
        return `O first é ${this.first}`
    }
}

const newItem = new Item("caixa", "surpresa")

console.log(newItem)

console.log(newItem.showFirst)

console.log(typeof newItem.first)

const secondItem = new Item(12, true)

console.log(secondItem)
console.log(secondItem.showFirst);
console.log(typeof secondItem.first);

//16 - parameters properties
class ParameterProperties {
    constructor(
        public name: string, 
        private qty:number, 
        private price: number
    ) {
        this.name = name
        this.qty = qty
        this.price = price
    }

    get showQty() {
        return `Qtd total: ${this.qty}`
    }

    get showPrice() {
        return `Preço: ${this.price}`
    }
}

const newShirt = new ParameterProperties("Camisa", 5, 19.99)

console.log(newShirt.name)
console.log(newShirt.showPrice)
console.log(newShirt.showQty);

//17 - class expressions
const myClass = class<T> {
    name 

    constructor(name: T) {
        this.name = name
    }
}

const pessoa = new myClass("Jones")

console.log(pessoa.name);

//18 - abstract class - molde
abstract class AbstractClass {
    abstract showName(): void
}

class AbstractExample extends AbstractClass {
    name: string

    constructor(name: string) {
        super()
        this.name = name
    }
    showName() {
        console.log(`O nome é: ${this.name}`);
    }
}

const objAbstract = new AbstractExample("José")

objAbstract.showName()

//19 - relações entre classes
class Dog {
    name!: string
}

class Cat {
    name!: string
}

const doguinho: Dog = new Cat()

console.log(doguinho);
