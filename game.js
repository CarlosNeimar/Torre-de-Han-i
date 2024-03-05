var game
var menu
var controls;
var iniciarback = 0;
var parametros;

document.addEventListener("DOMContentLoaded", function () {
    menu = document.getElementById("telainicial");
    game = document.getElementById("game");
    controls = document.getElementById("controls");
});

async function playGame() {
    var discos = document.getElementById("discos").value;
    menu.className = "hidden";
    await new Promise(resolve => setTimeout(resolve, 500));
    menu.style.display = "none";
    createdisks();
    showGame();
    creategames(discos);
    logicback();
    console.log("Fim")
}

function createdisks(){
    var discodim;
    var discostotal = 10;
    for (let i = discostotal - 1; i >= 0; i--)
        controls.innerHTML += "<div class='cilindro' id='disco" + i + "'></div>";
    for (let i = 0; i < discostotal; i++) {
        discodim = document.getElementById("disco" + i);
        discodim.style.width = 100 + (i * 10) + "px";
        discodim.style.height = 40 + (i * 4) + "px";
        discodim.style.transform = "translateY(-" + (i * 15) + "px)";
    }
}

function showGame() {
    game.style.display = "flex";
    console.log("showGame");
}

function creategames(discos) {
    var discoselect;
    var diminuiraltura = 0;
    qntdiscos = parseInt(discos);
    for (let i = qntdiscos - 1; i >= 0; i--) {
        discoselect = document.getElementById("disco" + i);
        discoselect.style.display = "block";
        diminuiraltura ++;
    }
    
    diminuiraltura = (diminuiraltura - 2) * 14;
    controls.style.height = 470 + diminuiraltura + "px";


    if (qntdiscos!= 10) {
        controls.style.justifyContent = "flex-start";
    }
    
}


function logicback(){
    if (iniciarback == 0) {
        discos = document.getElementById("discos").value;
        iniciarback = 1;
        parametros = 'valor1=' + 0 + '&valor2=' + discos + '&valor3=' + 0;
        useback(parametros);
    }

}




function useback(parametros) {
    console.log(parametros);
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'back.php?' + parametros, true); 
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.responseText);
        }
    };
    xhr.send();
};

