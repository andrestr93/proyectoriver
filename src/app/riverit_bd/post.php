<?php
header("Access-Control-Allow-Origin: http://localhost:4200");
header("Access-Control-Allow-Headers: *");
$jsonPeticion = json_decode(file_get_contents("php://input"));

$bd = include_once "conexion.php";

var_dump($bd)

or die("se para aqui ");
echo($bd);



echo ($sentencia);

$sentencia = $bd->prepare("insert into peticiones values(?)");


$resultado = $sentencia->execute([$jsonPeticion->nombre]);


echo json_encode([
    "resultado" => $resultado,
]);
?>







