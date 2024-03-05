<?php
    if(isset($_GET['valor1']) && isset($_GET['valor2']) && isset($_GET['valor3'])){
        $valor1 = $_GET['valor1'];
        $valor2 = $_GET['valor2'];
        $valor3 = $_GET['valor3'];
        print("Protocolo" . $valor1);
        print("Discos" . $valor2);
        if($valor1 == 0){
        iniciando($valor2);
        }
    }

    function iniciando($valor){
        $haste1 = array();
        $haste2 = array();
        $haste3 = array();
        for($i = 0; $i < $valor; $i++){
            array_push($haste1, $i);
        }
        print_r($haste1);
    }
?>