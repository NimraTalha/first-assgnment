let guests  = ["Hadiya","Ammara","Atika"];
let unableguest = "Hadiya";
console.log(`${unableguest} will not be coming to the dinner`);
let newguest = "Meerab";
guests[guests.indexOf(unableguest)] = newguest;
guests.forEach(guest=> {
    console.log(`Dear ${guest} you are invited for dinner at my place.`);

});