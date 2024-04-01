let magicians: string[] = ["Alice", "David", "Chris"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

function make_great(magicians: string[]): string[] {
    
    let modifiedMagicians: string[] = [];

    for (let i = 0; i < magicians.length; i++) {
        
        modifiedMagicians.push("the Great " + magicians[i]);
    }

    
    return modifiedMagicians;
}
let greatMagicians = make_great([...magicians]);


show_magicians(magicians);

console.log("------------------");

show_magicians(greatMagicians);
