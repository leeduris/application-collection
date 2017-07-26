function fiveLinkGame()
{
    var fiveLinkGame  = "<!-- canvas element to contain the game -->";
        fiveLinkGame += "<div>";
        fiveLinkGame += "<h1>Link Five Game</h1>";
        fiveLinkGame += "<canvas id='canvasGame' width='580' height='580'></canvas>";
        fiveLinkGame += "</div>"
        fiveLinkGame += "<!-- import a javascript function to Five Link Game -->";
        fiveLinkGame += "<script src='scripts/fivelinkgame.js' type = 'text/javascript'></script>";

        document.body.innerHTML = fiveLinkGame;
}
