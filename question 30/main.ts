let username : string[] = ["admin", " username1","username2","username3"]
username.forEach(username => {
    if (username === "admin") {
console.log("Hello admin,would you like to see  a status report")
    } else  {
        console.log( `Hello ${username} ,thank you for logging in again.`)
    }
})