
// Contenido de app.js
console.log("hello World");

const sum = (a, b) => {
    return a + b
}


//3.exportamos la función
module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
}


let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


function fromDollarToYen(totalDollar) {
    // Convertir dólares a euros y luego a yenes
    let totalEuro = totalDollar / oneEuroIs["USD"];
    let totalYen = totalEuro * oneEuroIs["JPY"];
    return totalYen;
}
console.log(fromDollarToYen(10))


function fromEuroToDollar(totalEuro) {
    let totalDolar = totalEuro * oneEuroIs["USD"]
    return totalDolar
}
console.log(fromEuroToDollar)

function fromYenToPound(yen) {
    let totalEuro = yen / oneEuroIs["JPY"]
    let totalPounds = totalEuro / oneEuroIs["GBP"]
    return totalPounds
}
console.log(fromYenToPound)

