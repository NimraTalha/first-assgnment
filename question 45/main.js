"use strict";
function createCar(manufacturer, model, ...options) {
    let car = Object.assign({ manufacturer: manufacturer, model: model }, options.reduce((acc, option) => (Object.assign(Object.assign({}, acc), option)), {}));
    return car;
}
let myCar = createCar("Toyota", "Camry", { color: "blue" }, { features: ["navigation", "sunroof"] });
console.log(myCar);
