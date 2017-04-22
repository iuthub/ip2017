<?php
    $db=new PDO("mysql:dbname=imdb;host=localhost","root","");

    $db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $db->setAttribute(PDO::ATTR_EMULATE_PREPARES, FALSE);

    $rows=$db->prepare("SELECT * FROM actors LIMIT ?, ?");

    $pageNum=1;
    $pageSize=100;

    if ($_SERVER["REQUEST_METHOD"]=="POST") {
        $pageNum=$_POST["pageNumber"];
        $pageSize=$_POST["pageSize"];
    }

    $rows->execute(array(($pageNum-1)*$pageSize, $pageSize));
    $rows=$rows->fetchAll();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>List of Actors</title>
</head>
<body>
    <h2><?= $pageSize ?> Actors</h2>
    <form action="index.php" method="post">
        Page Number: <input type="text" name="pageNumber" value="<?= $pageNum ?>" id="">
        Page Size: <input type="text" name="pageSize" id="" value="<?= $pageSize ?>">
        <input type="submit" value="Go">
    </form>
    <table>
        <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
        </tr>
        <?php foreach ($rows as $row) { ?>
        <tr>
            <td><?= $row["first_name"] ?></td>
            <td><?= $row["last_name"] ?></td>
            <td><?= $row["gender"] ?></td>
        </tr>
        <?php } ?>
    </table>
</body>
</html>
