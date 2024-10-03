// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * oneEuroIs.USD;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a Yen
    let valueInYen = (valueInDollar/oneEuroIs.USD)*(oneEuroIs.JPY);
    // Retornamos el valor en Yen
    return valueInYen;
}

const fromYenToPound = function(valueInYen) {
    //Convertimos el valor en libras 
    let valueInPound = (valueInYen/oneEuroIs.JPY)*(oneEuroIs.GBP);
    //Retornamos el valor en Libras
    return valueInPound;
}

// Esta es mi función que suma dos números
const sum = (a,b) => {
    return a + b
}

// Solo un registro en consola para nosotros
console.log(sum(7,3))

// Exporta la función para usarla en otros archivos 
// (similar a la palabra clave "export" cuando se usa webpack)
// Tenemos que incluir la función en el exports para que sea exportada a otros archivos como test.js
module.exports = { sum, fromEuroToDollar }