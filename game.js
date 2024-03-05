var game 
var menu
var controls;

document.addEventListener("DOMContentLoaded", function() {
    menu = document.getElementById("telainicial");
    game = document.getElementById("game");
    controls = document.getElementById("controls");
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
    var discodim; 
    qntdiscos = parseInt(discos);
    console.log("discos: " + qntdiscos);
    for(let i = qntdiscos - 1; i >= 0; i--)
    controls.innerHTML += "<div class='cilindro' id='disco"+i+"'></div>";
    for(let i = 0; i < qntdiscos; i++){
        discodim = document.getElementById("disco"+i);
        discodim.style.width = 100 + (i*10) + "px";
        discodim.style.height = 25 + (i*4) + "px";
        discodim.style.transform = "translateY(-" + (i*15) + "px)";
    }
}