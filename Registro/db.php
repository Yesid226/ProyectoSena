<?php
//configuracion necesaria para acceder a la data base.
function conn(){
$hostname= "localhost";
$usuariodb= "root";
$passworddb= "";
$dbname= "db";


    //geberar la conexion con el servidos 
    $conectar = mysqli_connct($hostname, $usuariodb,$passowrddb,$dbname);
    return $conectar;
}
?>