var username = ["admin", " username1", "username2", "username3"];
username.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin,would you like to see  a status report");
    }
    else {
        console.log("Hello ".concat(username, " ,thank you for logging in again."));
    }
});
