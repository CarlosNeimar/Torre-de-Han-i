<?php

require_once 'path/to/mysqli.php'; // Replace 'path/to/mysqli.php' with the actual path to the mysqli class file

$hostname = "localhost";
$bancodedados = "bancodedados";
$usuario = "root";
$senha = "Myroot";

$mysqli = new mysqli($hostname, $usuario, $senha, $bancodedados);
if ($mysqli->connect_errno) {
    echo "Falha ao conectar: (" . $mysqli->connect_errno . ") " . $mysqli->connect_error;
}
