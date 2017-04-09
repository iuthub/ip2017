<?php 
$db = new PDO("mysql:dbname=world;host=localhost", "root", "");
$rows=$db->query("SELECT * FROM countries WHERE population > 100000000;");
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Database Example</title>
</head>
<body>
<ul>
	<?php foreach($rows as $row) {?>
	<li><?= $row["name"] ?> - <?= $row["population"] ?></li>
	<?php } ?>
</ul>
</body>
</html>