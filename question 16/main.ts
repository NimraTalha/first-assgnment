let guests: string[] = ["Meerab", "Atika", "Ammara"];

// Informing people about the bigger dinner table
console.log("Good news! We found a bigger dinner table.");

// Add one new guest to the beginning of the array
guests.unshift("Haris");

// Add one new guest to the middle of the array
const middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Abuzar");
// Use append() to add one new guest to the end of the list
guests.push("Usama");

// Print invitation messages
guests.forEach(guest => {
    console.log(`Dear ${guest}, you are invited to dinner at my place.`);
});