// 1 - arrays
var numbers = [1, 2, 3];
numbers.push(5);
console.log(numbers[2]);
var nome = ["Thyago", "Augusto"];
// 2 - outra sintaxe array - Num é muito comum hoje em dia
var nums = [100, 200];
nums.push(300);
console.log(nums[0]);
// 3 - any - EVITAR O USO PQ VAI CONTRA O PRINCÍPIO DO TYPESCRIPT
var arr1 = [1, "Teste", true, [], { nome: "Thyago" }];
console.log(arr1);
arr1.push([1, 2, 3]);
console.log(arr1);
//4 - parametros tipados
function soma(a, b) {
    console.log(a + b);
}
soma(4, 5);
//5 - retorno de função
function greeting(name) {
    return "Ol\u00E1, ".concat(name);
}
console.log(greeting("Thyago"));
//6 - função anônima
setTimeout(function () {
    var sallary = 1000;
    //console.log(sallary)
}, 2000);
//7 - tipos de objeto
function passCordinates(coord) {
    console.log("X coordinate: " + coord.x);
    console.log("Y coordinate: " + coord.y);
}
var objCoord = { x: 329, y: 84.2 };
passCordinates(objCoord);
var pessoaObj = { nome: "Thyago", sobrenome: "Augusto" };
//8 - argumentos opcionais
function showNumber(a, b, c) {
    console.log("A: " + a);
    console.log("B: " + b);
    if (c) {
        console.log("C: " + c);
    }
}
showNumber(1, 2, 3);
showNumber(4, 5);
//9 - validação de argumentos opcionais
function advancedGreeting(firstName, lastName) {
    if (lastName !== undefined) {
        return "Ol\u00E1, ".concat(firstName, " ").concat(lastName, ", tudo bem?");
    }
    return "Ol\u00E1, ".concat(firstName, ", tudo bem?");
}
console.log(advancedGreeting("Thyago", "Augusto"));
console.log(advancedGreeting("Thyago"));
//10 - Union Type
function showBalance(balance) {
    console.log("O saldo da conta \u00E9 R$".concat(balance));
}
showBalance(100);
showBalance("500");
var arr2 = [1, "teste", true];
//11 - avançando em union types
function showUserRole(role) {
    if (typeof role === "boolean") {
        return "Usuário não aprovado!";
    }
    return "A fun\u00E7\u00E3o do usu\u00E1rio \u00E9: ".concat(role);
}
console.log(showUserRole(false));
console.log(showUserRole("Admin"));
function showId(id) {
    console.log("O ID \u00E9: ".concat(id));
}
showId(1);
showId("200");
function showCoords(obj) {
    console.log("x: ".concat(obj.x, ", y: ").concat(obj.y, ", z: ").concat(obj.z));
}
var coordObj = {
    x: 10,
    y: 15,
    z: 20
};
showCoords(coordObj);
var somePerson = { name: "Thyago", age: 29 };
console.log(somePerson);
//15 - literal types - define o tipo com base em um valor específico
var test;
test = "testando";
console.log(test);
function showDirection(direction) {
    console.log(direction);
}
showDirection("right");
//16 - non null assertion operators
var p = document.getElementById("some-p");
console.log(p.innerText);
//17 - bigint
var n;
n = 1000n;
console.log(n);
//18 - symbol
var symbolA = Symbol("a");
var symbolB = Symbol("a");
console.log(symbolA == symbolB);
console.log(symbolA === symbolB);
