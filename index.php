<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Torre de hanoi</title>

    <!-- Css -->
    <link rel="stylesheet" href="style.css">

    <!-- Font -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Kalnia&family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

</head>

<body>
    <div class="telainicial">
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
                        <!-- <div class="card">
                        <div class="card-content">
                            <h2></h2>
                            <p></p>

                        </div> -->
                        <div class="container">
                            <div class="box">
                                <span class="title">Menu</span>
                                <div>
                                    <strong>Configurações</strong>
                                    <p>Escolha a quantidade de discos</p>
                                    <form action="jogo.php" method="post">
                                        <input type="number" name="discos" id="discos" min="2" max="10" value="5" required>
                                    </form>
                                </div>
                            </div>
                            <div class="box">
                                <span class="title">Jogar</span>
                                <div>
                                    <button>
                                        <?php
                                        print "Jogar \u{1F579}";
                                        ?>
                                    </button>
                                </div>
                            </div>
                            <div class="box">
                                <span class="title">GLASS EFFECT</span>
                                <div>
                                    <strong>JOE WATSON SBF</strong>
                                    <p>0000 000 000 0000</p>
                                    <span>VALID</span> <span>01/28</span>
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
    </div>
</body>

</html>