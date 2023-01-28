const fs = require('fs')

links = new Array();

fs.readFile("ImagesLink.txt", "UTF-8", (err, data) =>
{
    if(err)
    {
        throw err;
    }
    else
    {
        links = data.split();
    }
})
    
    function choosePic() 
    {
        var randomNum = Math.floor(Math.random() * links.length);
        document.getElementById("myPicture").src = links[randomNum];
    }
    
    const newPicButton = document.querySelector('[data-random]');
    
    newPicButton.addEventListener('click', button => 
    {
        choosePic();
    })
