<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Form Validation</title>
    <script src="validation.js"></script>
    <style>
        .error {
            color: red;
        }
    </style>
</head>
<body>
    <form action="form_submit.php" id="frmApplication" method="post">
        <dl>
            <dt>Name</dt>
            <dd><input type="text" name="Name" id="name"></dd>
            <dt>Age</dt>
            <dd><input type="text" name="Age" id="age"></dd>
            <dt>Gender</dt>
            <dd><input type="checkbox" name="Gender" checked id=""></dd>
            <dt></dt>
            <dd><input type="submit" value="Submit"></dd>
            <dt></dt>
            <dd><span class="error" id="lblError"></span></dd>
        </dl>

    </form>
</body>
</html>
