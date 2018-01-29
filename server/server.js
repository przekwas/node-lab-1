const path = require("path");
const fs = require("fs");

let chirpPath = path.join(__dirname, "../chirps.json");

let chirpArray = [
    {
        author: "Rick",
        chirp: "We're no strangers to love",
    },
    {
        author: "Ric",
        chirp: "You know the rules and so do I",
    },
    {
        author: "Ricc",
        chirp: "A full commitment's what I'm thinking of",
    },
    {
        author: "Rik",
        chirp: "You wouldn't get this from any other guy",
    },
    {
        author: "Rycc",
        chirp: "I just wanna tell you how I'm feeling",
    },
    {
        author: "Ryck",
        chirp: "Gotta make you understand",
    },
    {
        author: "Roll",
        chirp: "Never gonna give you up",
    },
    {
        author: "Role",
        chirp: "Never gonna let you down",
    }
];


fs.writeFile(chirpPath, JSON.stringify(chirpArray), (error) => {
    if(error) console.log(error);
});

fs.readFile(chirpPath, (error, data) => {
    if(error) console.log(error);
    let content = JSON.parse(data);
    content.forEach(element => { 
        console.log(`${element.author} Chirpped:  ${element.chirp}`);
    });
});




