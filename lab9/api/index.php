<?php
//error_reporting(E_ERROR);
require '../vendor/autoload.php';

$app = new \Slim\App();

$app->get('/tasks', function ($request, $response) {
    $taskFile="../tasks.json";

    $tasks=json_decode(file_get_contents($taskFile));

    return $response->withJson($tasks);
});

$app->post('/tasks', function ($request, $response) {
    $taskFile="../tasks.json";

    $tasks = $request->getParsedBody();

    file_put_contents($taskFile, json_encode($tasks));

    return $response->withJson(array("status"=>"saved"));
});

$app->run();

?>
