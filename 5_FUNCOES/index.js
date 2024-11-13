var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//1 - void
function withourReturn() {
    console.log("Esta função não tem retorno");
}
withourReturn();
//2 - callback como argumento
function greeting(name) {
    return "Ol\u00E1, ".concat(name);
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    var greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Thyago");
//3 - Generic functions
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return __assign(__assign({}, obj1), obj2);
}
var newObject = mergeObjects({ name: "Thyago" }, { age: 30, job: "QA Analyst" });
console.log(newObject);
//4 - constraints
function biggestNumber(a, b) {
    var biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("15", "23"));
//para aceitar os dois tipos, teria que fazer dois tipos genéricos
//5 - especificar tipo de argumento na chamada da função
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], ["teste", "testando"]));
//6 - parâmetros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return "Ol\u00E1, ".concat(greet, " ").concat(name, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(name, ", tudo bem?");
}
console.log(modernGreeting("Thyago"));
console.log(modernGreeting("Thyago", "Dr."));
//7 - Parâmetro default
function somaDefault(n, m) {
    if (m === void 0) { m = 10; }
    return n + m;
}
console.log(somaDefault(15));
//8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("X é um número");
    }
}
doSomething([1, 2, 3]);
doSomething(1);
//9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
//showErrorMessage("Algum erro!")
//10 - Rest Operator
function sumAll() {
    var n = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        n[_i] = arguments[_i];
    }
    return n.reduce(function (number, sum) { return sum + number; });
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
console.log(sumAll(5454, 1234, 234));
//11 - Destructuring como parâmetro
function showProductDetails(_a) {
    var name = _a.name, price = _a.price;
    return "O nome do produto \u00E9 ".concat(name, " e ele custa R$").concat(price);
}
var shirt = { name: "camiseta", price: 20.54 };
console.log(showProductDetails(shirt));
