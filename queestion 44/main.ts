function makeSandwich(...items: string[]) {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}


makeSandwich("Turkey", "Lettuce", "Tomato", "Mayonnaise");
console.log("------------------");
makeSandwich("Ham", "Cheese");
console.log("------------------");
makeSandwich("Peanut Butter", "Jelly");
