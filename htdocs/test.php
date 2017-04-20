<?php 
setcookie("user", "Harry Potter", time()+3600);
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>My Document</title>
</head>
<body>
	<pre>
		<?php 
			print "Hello World! \n";
			print "Hey jude, \n
			Don't make is bad!
			Take a sad song, and make it better! \n";

			$name="Sarvar";
			$fav_food="Pilaf";
			$age=11;

			print "{$name}'s favorite food is {$fav_food}\n";

			$name = "Stefanie Hatcher";
			$length = strlen($name);
			$cmp = strcmp($name, "Brian Le"); 
			$index = strpos($name, "e"); 
			$first = substr($name, 9, 5); 
			$name = strtoupper($name);
			
			print "My name is $name. Total length is $length. Today my {$age}th birthday.";

			
			for ($i=0;$i<10;$i++) {
				print "$i squared is " . $i**2 . "\n";
			}

			$a=range(1,5);
			$a[]="Wow!";
			print_r($a);

			$age = array("Peter"=>"35", "Ben"=>"37", "Joe"=>"43");

			foreach($age as $x => $x_value) {
			    echo "Key=" . $x . ", Value=" . $x_value;
			    echo "<br>";
			}

			$_SESSION['pwd']="heyjude";
		?>
	</pre>
</body>
</html>