<?php
//phpinfo();

$options=array(
		'uri' => 'http://localhost/soap/calc',
		'location' => 'http://localhost/soap/soapService.php',
		'trace' => 1
	);

$soapClient = new SoapClient(null, $options);

echo "RESULT: \n" . $soapClient->sum(25,12). "\n";

echo "REQUEST: \n" . $soapClient->__getLastRequest() . "\n";

echo "RESPONSE: \n" . $soapClient->__getLastResponse() . "\n";
 ?>
