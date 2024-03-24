var userNames = ["admin", "user1", "user2", "user3", "user4"];
userNames.forEach(function (userNames) {
    if (userNames === "admin") {
        console.log("Hello admin,would you like tyo see a status report?");
    }
    else {
        console.log("Hello ".concat(userNames, ",thnk you for loging in again."));
    }
});
