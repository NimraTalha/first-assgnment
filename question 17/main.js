var guests = ["Haris", "Meerab", "Atika", "Ammara", "Abuzar", "Usama"];
// Informing people about the limited space
console.log("Bad news! The new dinner table won't arrive in time, so we can only invite two people for dinner.");
// Remove guests until only two names remain in the list
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print messages to the two people still on the list
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
// Remove the last two names from the list
guests.pop();
guests.pop();
// Print the empty list
console.log("Final guest list:", { guests: guests });
