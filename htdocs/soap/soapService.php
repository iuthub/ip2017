<?php 
class Calculator {
	public function __constructor() {

	}

	public function sum($x, $y) {
		return $x + $y;
	}
}

$options = array(
				'uri' => 'http://localhost/soap/calc'
			);

$soapServer=new SoapServer(NULL, $options);

$soapServer->setClass('Calculator');

$soapServer->handle();
 ?>