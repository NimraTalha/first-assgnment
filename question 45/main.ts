function createCar(manufacturer: string, model: string, ...options: { [key: string]: any }[]) {
    let car = {
        manufacturer: manufacturer,
        model: model,
        ...options.reduce((acc, option) => ({ ...acc, ...option }), {})
    };
    return car;
}


let myCar = createCar("Toyota", "Camry", { color: "blue" }, { features: ["navigation", "sunroof"] });


console.log(myCar);
