var game
var menu
var controls;
var iniciarback = 0;
var parametros;
var resposta;
var estado = 0;
var discolevante;

let haste1 = [];
let haste2 = [];
let haste3 = [];


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
}

var qntdiscos; // Declare the variable qntdiscos

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

// Iniciar back
function logicback() {
    //inicializando as hastes
    if (iniciarback == 0) {
    for (let i = 0; i < qntdiscos; i++) {
        haste1.push(i);
    }
    iniciarback = 1;
}
}

//Select
document.getElementById("tower1").addEventListener("click", function() {
    var idselect;
    if (estado == 0){
    idselect = seleciona(1);
    console.log(idselect);
    } else {
    console.log(idselect);
    selecthaste(1, idselect);
    estado = 0;
    }
});

document.getElementById("tower2").addEventListener("click", function() {
    var idselect;
    if (estado == 0){
    idselect = seleciona(2);
    } else {
    selecthaste(2, idselect);
    }
});

document.getElementById("tower3").addEventListener("click", function() {
    seleciona(3);
});


function seleciona(nhaste) {
    var discoid;
    if (nhaste == 1) {
        if (haste1.length != 0) {
            discoid = haste1[0];
            levantamento(discoid);
            estado = 1;
            return discoid;
        } else {
            console.log("vazio");
        }
    }
    if (nhaste == 2) {
        if (haste2.length != 0) {
            discoid = haste2[0]; // Corrigido para haste2
            levantamento(discoid);
            estado = 1;
            return discoid;
        } else {
            console.log("vazio");
        }
    }
    if (nhaste == 3) {
        if (haste3.length > 0) { // Updated condition to check if haste3 array is not empty
            discoid = haste3[0];
            levantamento(discoid);
            estado = 1;
            return discoid;
        } else {
            console.log("vazio");
        }
    }
}

function levantamento(id){
    discolevante = document.getElementById("disco" + id);
    if(id == 0) {
        discolevante.style.transform = "translateY(-" + (id +100) + "px)";
    } else
    discolevante.style.transform = "translateY(-" + (id * 80) + "px)";
    selecthaste(id);
}

function selecthaste(hasteselec ,id){
    console.log(id);
    discolevante = document.getElementById("disco" + id);
    if(hasteselec == 1){
        hasteselec = haste1;
    }
    if(hasteselec == 2){
        hasteselec = haste2;
    }
    if(hasteselec == 3){
        hasteselec = haste3;
    }
    if(id > hasteselec[0]){
        console.log("movimento invalido")
    } else {
        discolevante.style.transform = "translateX(-" + (id * 80) + "px)";
    }
}







function useback(parametros, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'back.php?' + parametros, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var resultado = xhr.responseText;
            console.log("O resultado retornado do PHP é: " + resultado);
            callback(resultado);
        }
    };
    xhr.send();
}


document.getElementById("resolve").addEventListener("click", function() { 
    const numeroDiscos = document.getElementById("discos").value;
    const torreOrigem = 1;
    const torreDestino = 3;
    const torreAuxiliar =  2;

console.log(`Para resolver a Torre de Hanoi com ${numeroDiscos} discos:`);
torreDeHanoi(numeroDiscos, torreOrigem, torreDestino, torreAuxiliar);
});

function torreDeHanoi(numeroDiscos, torreOrigem, torreDestino, torreAuxiliar) {
    if (numeroDiscos === 1) {
        console.log(`Mova o disco de ${torreOrigem} para ${torreDestino}`);
    } else {
        torreDeHanoi(numeroDiscos - 1, torreOrigem, torreAuxiliar, torreDestino);
        console.log(`Mova o disco de ${torreOrigem} para ${torreDestino}`);
        torreDeHanoi(numeroDiscos - 1, torreAuxiliar, torreDestino, torreOrigem);
    }
}

function movendoDisco(torreOrigem, torreDestino) {
    var discousado;
    var discoanim;
    if (torreOrigem == 1 && torreDestino == 2) {
    discousado = haste1[0];
    adicionarPrimeiroItemEAjustar(haste2, discousado);
    removerPrimeiroItemEAjustar(haste1)
    discoanim = document.getElementById("disco" + discousado);
    discoanim.style.transform = translateY("-90px");
    discoanim.style.transform = translateX("+90px");
    discoanim.style.transform = translateY("+90px");
    } else if (torreOrigem == 1 && torreDestino == 3) {
        // Code for moving the disk from tower 1 to tower 3
    } else if (torreOrigem == 2 && torreDestino == 1) {
        // Code for moving the disk from tower 2 to tower 1
    } else if (torreOrigem == 2 && torreDestino == 3) {
        // Code for moving the disk from tower 2 to tower 3
    } else if (torreOrigem == 3 && torreDestino == 1) {
        // Code for moving the disk from tower 3 to tower 1
    } else if (torreOrigem == 3 && torreDestino == 2) {
        // Code for moving the disk from tower 3 to tower 2
    }

}

function removerPrimeiroItemEAjustar(array) {
    for (let i = 0; i < array.length - 1; i++) {
        array[i] = array[i + 1];
    }
    array.pop();
}

function adicionarPrimeiroItemEAjustar(array, novoItem) {
    array.push(null);  // Adiciona um espaço extra no final
    for (let i = array.length - 1; i > 0; i--) {
        array[i] = array[i - 1];  // Move cada elemento para cima
    }
    array[0] = novoItem;  // Adiciona o novo elemento na primeira posição
}