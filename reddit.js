const path = require("path");
const fs = require("fs");
const rp = require("request-promise");

let articlePath = path.join(__dirname, "./popular-articles.json");

rp("https://reddit.com/r/popular.json")
    .then(body => {

        let articleArray = [];

        JSON.parse(body).data.children.forEach(item => {

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

