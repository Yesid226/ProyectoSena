<?php
include_once('db.php');
//recibo todos los datos del formulario
$usuario=$_POST['usuario'];
$nombres=$_POST['nombres'];
$apellidos=$_POST['apellidos'];
$direccion=$_POST['direccion'];
$cedula=$_POST['cedula'];
$fecha=$_POST['fecha'];
$clave=$_POST['clave'];

echo "Los datos son los siguientes <br>";
echo "$usuario,$nombre,$apellido,$direccion,$cedula,$fecha,$clave";


        $conectar=conn();
        $sql="INSERT INTO usuarios (usuario, nombres, apellidos, direccion, cedula, fecha, clave)
        VALUES ('$usuario', '$nombres', '$nombres', '$apellidos', '$direccion', '$cedula', '$fecha', '$clave')";
        $resul = mysqli_query($conector , $sql)or trigger_error("Query Failed SQL- ERROR: ".mysqli_error($conectar). E_USER_ERROR);

        echo "$sql";
?>