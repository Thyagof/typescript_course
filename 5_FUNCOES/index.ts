//1 - void
function withourReturn():void {
    console.log("Esta função não tem retorno");
}

withourReturn()

//2 - callback como argumento
function greeting(name: string) {
    return `Olá, ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
    console.log("Preparando a função");
    const greet = f(userName)
    console.log(greet);
}

preGreeting(greeting, "Thyago")

//3 - Generic functions
function firstElement<T>(arr: T[]): T {
    return arr[0]
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
    return {
        ...obj1,
        ...obj2
    }
}

const newObject = mergeObjects({name: "Thyago"}, {age: 30, job:"QA Analyst"})

console.log(newObject);

//4 - constraints
function biggestNumber<T extends number | string>(a: T, b: T){
    let biggest: T

    if (+a > +b) {
        biggest = a
    } else {
        biggest = b
    }

    return biggest
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("15", "23"));
//para aceitar os dois tipos, teria que fazer dois tipos genéricos

//5 - especificar tipo de argumento na chamada da função
function mergeArrays<T>(arr1: T[], arr2: T[]) {
    return arr1.concat(arr2)
}

console.log(mergeArrays<number | string>([1, 2, 3], ["teste", "testando"]));

//6 - parâmetros opcionais
function modernGreeting(name: string, greet?: string) {
    if (greet){
        return `Olá, ${greet} ${name}, tudo bem?`
    }  
    return `Olá, ${name}, tudo bem?`
}

console.log(modernGreeting("Thyago"));
console.log(modernGreeting("Thyago", "Dr."));

//7 - Parâmetro default
function somaDefault(n: number, m = 10): number{
    return n + m
}

console.log(somaDefault(15));

//8 - unknown
function doSomething(x: unknown) {
    if(Array.isArray(x)) {
        console.log(x[0])
    } else if (typeof x === "number"){
        console.log("X é um número")
    }
}

doSomething([1, 2, 3])
doSomething(1)

//9 - never
function showErrorMessage(msg: string): never {
    throw new Error(msg)
}

//showErrorMessage("Algum erro!")

//10 - Rest Operator
function sumAll(...n: number[]) {
    return n.reduce((number, sum) => sum + number)
}

console.log(sumAll(1,2,3,4,5,6,7,8,9,10));
console.log(sumAll(5454,1234,234));

//11 - Destructuring como parâmetro
function showProductDetails({name, price}: {name: string, price: number}): string {
    return `O nome do produto é ${name} e ele custa R$${price}`
}

const shirt = {name: "camiseta", price: 20.54}
console.log(showProductDetails(shirt));

