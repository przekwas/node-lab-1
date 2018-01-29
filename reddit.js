const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

let articlePath = path.join(__dirname, "./popular-articles.json");

rp({uri: "https://reddit.com/r/popular.json", json: true}) 
    .then(body => {

        let articleArray = [];

        body.data.children.forEach(item => {

            let title = item.data.title;
            let url = item.data.url;
            let author = item.data.author;

            let obj = { title, url, author };

            articleArray.push(obj);

        })

        fs.appendFileSync(articlePath, JSON.stringify(articleArray));

    })
    .catch(error => {
        console.log(error);
    })

