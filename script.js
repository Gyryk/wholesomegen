links = new Array();

window.onload = readTextFile("ImagesLink.txt");

    function readTextFile(file)
    {
        var rawFile = new XMLHttpRequest();
        rawFile.open("GET", file, false);
        rawFile.onreadystatechange = function ()
        {
            if(rawFile.readyState === 4)
            {
                if(rawFile.status === 200 || rawFile.status == 0)
                {
                    var allText = rawFile.responseText;
                    links = allText.split("\n");
                    document.getElementById("testText").src = allText;
                }
            }
        }

        rawFile.send(null);
    }
    
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
