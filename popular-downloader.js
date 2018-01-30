const path = require("path");
const fs = require("fs");
const rp = require("request-promise");
const https = require("https");
const url = require("url")

let downloadPath = path.join(__dirname, "./downloads");

rp({ uri: "https://reddit.com/r/popular.json", json: true })
    .then(body => {

        body.data.children.forEach(item => {
            if (item.data.is_reddit_media_domain == true && item.data.is_video == false) {

                srcUrl = item.data.url;

                const options = {
                    url: item.data.url,
                    encoding: null
                };

                let fileExt = url.parse(srcUrl).pathname.split('.').pop();


                rp.get(options)
                    .then(function (res) {
                        const buffer = Buffer.from(res, 'utf8');
                        fs.writeFileSync(`./downloads/${item.data.id}.${fileExt}`, buffer);
                    });
            }
        })
    })



