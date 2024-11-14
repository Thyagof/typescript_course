//1 - generics
function showData(arg) {
    return "O dado \u00E9: ".concat(arg);
}
console.log(showData(2));
console.log(showData("Testando generic"));
console.log(showData(true));
//2 - constraints em generics
function showProductName(obj) {
    return "O nome do produto \u00E9: ".concat(obj.name);
}
//O objeto precisa ter name para ser aceito na função
var myObj = { name: "copo", cor: "preto" };
console.log(showProductName(myObj));
var myCar = {
    name: "Fusca",
    wheels: 4,
    engine: 1.0,
    color: "Branco"
};
var myPen = {
    name: "Caneta BIC",
    wheels: false,
    engine: false,
    color: "Azul"
};
console.log(myCar);
console.log(myPen);
//4 - type parameters
function getSomeKey(obj, key) {
    return "A chave ".concat(key.toString(), " est\u00E1 presente no objeto e tem o valor de ").concat(obj[key]);
}
var server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
function showCharName(obj, name) {
    return "".concat(obj[name]);
}
var myChar = {
    name: "Thyago",
    age: 29,
    hasDriverLicense: false
};
console.log(showCharName(myChar, "name"));
//6 - typeof type operator
var userName = "Thyago";
var userName2 = "João";
var userName3 = "Lucas";
var newTruck = {
    km: 10000,
    kg: 5000,
    description: "Caminhão pouca carga"
};
function showKm(km) {
    console.log("O ve\u00EDculo tem a km de: ".concat(km));
}
showKm(newTruck.km);
var newCar = {
    km: 5000,
    kg: 1000
};
showKm(newCar.km);
var someVar = 5;
