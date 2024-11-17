//1 - importação de arquivos
import importGreet from "./greet.js"

importGreet()

//2 - importação de variáveis
import { x } from "./variable.js"

console.log(x);

//3 - múltiplas importações
import {a, b, myFunction} from "./multiple.js"

console.log(a);
console.log(b);

myFunction();

//4 - alias
import { someName as name } from "./changename.js";

console.log(name);

//5 -import all
import * as myNumbers from "./numbers.js"

console.log(myNumbers);

//6 - importando tipos/interfaces
import { Human } from "./types.js";

class User implements Human {
    name
    age

    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const joao = new User("João", 25)

console.log(joao);
