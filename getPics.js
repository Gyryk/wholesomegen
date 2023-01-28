const cherio = require('cherio');
const request = require('request');
const fs = require("fs");

// Create Write Stream
var WriteStream = fs.createWriteStream("ImagesLink.txt", "UTF-8");

// Send Request
request("https://paradepets.com/pet-news/cute-animals", (err, resp, html)=>
{
    if(!err && resp.statusCode == 200)
    {
        console.log("Request successful");

        const $ =cherio.load(html);

        $("img").each((index, image)=>{
            var img = $(image).attr('src');
            var baseUrl = "https://www.paradepets.com";
            var Links = img;

            WriteStream.write(Links);
            WriteStream.write("\n");
        })

    }
    else
    {
        console.log("Request failed");
    }
})