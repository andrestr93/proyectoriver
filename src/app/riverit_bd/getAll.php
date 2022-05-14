<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
$bd = include_once "conexion.php";

var_dump($bd);
$sentencia = $bd->query("select * from peticiones");
var_dump($sentencia);
 die("se para aqui ");
$peticiones = $sentencia->fetchAll(PDO::FETCH_OBJ);
echo json_encode($peticiones);

?>