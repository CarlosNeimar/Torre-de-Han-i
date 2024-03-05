<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Torre de hanoi</title>

    <!-- Icon -->
    <link href='https://unpkg.com/css.gg@2.0.0/icons/css/play-button.css' rel='stylesheet'>



    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalnia&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">



    <!-- Css -->
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <div class="telainicial" id="telainicial">
        <div class="grupoops">
            <div class="tituloprin">
                <h1 id="titel">
                    <?php
                    print "Torre de hanoi \u{1F5FC}";
                    ?>
                </h1>
            </div>
            <div class="menu">
                <div class="config">
                    <div class="cards">
                        <div class="container">
                            <div class="box">
                                <span class="title">Menu</span>
                                <div>
                                    <strong>Configurações</strong>
                                    <p>Escolha a quantidade de discos</p>
                                    <form action="jogo.php" method="post">
                                        <input type="number" name="discos" id="discos" min="2" max="10" value="10" required>
                                        <!-- <input type="submit" value="enviar"> -->
                                    </form>
                                </div>
                            </div>
                            <div class="box">
                                <button onclick="playGame()">
                                    <span class="title">Jogar</span>
                                    <?php
                                    print "\u{1F3AE}";
                                    ?>
                                </button>
                            </div>
                            <div class="box">
                                <span class="title">Feito por</span>
                                <div>
                                    <strong>Carlos Henrique Neimar Areas Ferreira</strong>
                                    <p>Torre de Ranoi</p>
                                    <span>Startup Iniciativa Materna</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div class="play">

                </div>
                <div class="credits">

                </div>
            </div>
        </div>
    </div>
    <div class="game" id="game">
        <div class="gamespace">
            <div class="contador">
                <p>Contador:</p>
            </div>
            <div class="gameboard">
                <div class="tower" >
                    <div class="hast">
                    </div>
                    <div class="base">
                    </div>
                    <div class="selectarea" id="tower1">
                    </div>
                </div>

                <div class="tower">
                    <div class="hast">
                    </div>
                    <div class="base">
                    </div>
                    <div class="selectarea"  id="tower2">
                    </div>
                </div>
                
                <div class="tower" >
                    <div class="hast">
                    </div>
                    <div class="base">
                    </div>
                    <div class="selectarea" id="tower3">
                    </div>
                </div>
            </div>
            <div class="gamecontrols">
                <div class="controls" id="controls">
                </div>
            </div>
        </div>
    </div>
</body>

<!-- Js -->
<script src="game.js"></script>

</html>