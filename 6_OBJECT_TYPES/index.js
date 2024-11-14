function showProductDetails(product) {
    console.log("O nome do produto \u00E9 ".concat(product.name, " e o seu pre\u00E7o \u00E9 R$").concat(product.price));
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
}
var shirt = {
    name: "Camisa",
    price: 12.23,
    isAvailable: true
};
showProductDetails(shirt);
showProductDetails({ name: "Short", price: 23.43, isAvailable: false });
function showUserDetails(user) {
    console.log("O usu\u00E1rio tem o e-mail: ".concat(user.email));
    if (user.role) {
        console.log("A fun\u00E7\u00E3o do usu\u00E1rio \u00E9 ".concat(user.role));
    }
}
var u1 = {
    email: "thyago@gmail.com",
    role: "admin"
};
var u2 = {
    email: "augusto@gmail.com"
};
showUserDetails(u1);
showUserDetails(u2);
var fusca = {
    brand: "VW",
    wheels: 4
};
var coords = {
    x: 10
};
coords.y = 15;
console.log(coords);
var thyago = {
    name: "Thyago",
    age: 29
};
var goku = {
    name: "goku",
    age: 50,
    superpowers: ["superforça", "superagilidade", "kamehameha"]
};
console.log(thyago);
console.log(goku);
console.log(goku.superpowers[1]);
var arnold = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
//7 - readonly array
var myArray = ["maçã", "banana", "laranja"];
console.log(myArray);
myArray.forEach(function (item) {
    console.log("Fruta: " + item);
});
//modificações apenas através de métodos
myArray = myArray.map(function (item) {
    return "Fruta: ".concat(item);
});
console.log(myArray);
var myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
var anotherUser = ["Thyago", 30];
console.log(anotherUser);
//9 - Tuplas readonly
function showNumbers(numbers) {
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
