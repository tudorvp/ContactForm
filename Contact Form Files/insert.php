<?php
$conn = new mysqli('localhost', 'root', '', 'insert');
$nume=$_POST['nume'];

$sql="INSERT INTO `data` (`id`, `nume`,) VALUES (NULL, '$nume',)";
if ($conn->query($sql) === TRUE) {
    echo "data inserted";
}
else 
{
    echo "failed";
}
?>