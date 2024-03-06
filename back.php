<?php
function hanoi($discos, $origem, $auxiliar, $destino) {
    if ($discos == 1) {
        echo "Mova o disco 1 de $origem para $destino <br>";
    } else {
        hanoi($discos - 1, $origem, $destino, $auxiliar);
        echo "Mova o disco $discos de $origem para $destino <br>";
        hanoi($discos - 1, $auxiliar, $origem, $destino);
    }
}
$discos = 3;
hanoi($discos, 'A', 'B', 'C');
?>
