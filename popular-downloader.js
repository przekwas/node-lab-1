const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
const https = require("https");

let downloadPath = path.join(__dirname, "./downloads");

rp({ uri: "https://reddit.com/r/popular.json", json: true })
    .then(body => {

        body.data.children.forEach(item => {
            if (item.data.post_hint === "image" || item.data.post_hint === "rich:video") {

                const options = {
                    url: item.data.url,
                    encoding: null,
                    resolveWithFullResponse: true
                };

                https.get(options.url, (res) => {
                    console.log(res.headers['content-type'])
                        res.pipe(
                            fs.createWriteStream(`./downloads/${item.data.id}.${res.headers['content-type'].slice(6)}`)
                            
                        )
                    }
                )
            }
        })
    })
    .catch(error => {
        console.log(error);
    })

