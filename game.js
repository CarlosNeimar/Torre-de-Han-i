var game 
var menu

document.addEventListener("DOMContentLoaded", function() {
    menu = document.getElementById("telainicial");
    game = document.getElementById("game");
});

async function playGame() {
    var discos = document.getElementById("discos").value;
    menu.className = "hidden";
    await new Promise(resolve => setTimeout(resolve, 500));
    menu.style.display = "none";
    showGame();
    creategames(discos);
}

function showGame(){
    game.style.display = "flex";
    console.log("showGame");
}

function creategames(discos){
    // qntdiscos = parseInt(discos);
    // console.log("discos: " + qntdiscos);
}