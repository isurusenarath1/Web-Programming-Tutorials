<!DOCTYPE html>
<html>

<head>
    <title>Registration Form - Output</title>
    <style>
    body {
        font-family: Arial, sans-serif;
        margin: 20px;
    }

    .output-table {
        border-collapse: collapse;
        width: 300px;
    }

    .output-table th,
    .output-table td {
        border: 1px solid #ccc;
        padding: 8px;
    }
    </style>
</head>

<body>
    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $username = $_POST["username"];
        $password = $_POST["password"];
        $gender = $_POST["gender"];
        $academic_year = $_POST["academic_year"];
        $phone_no = $_POST["phone_no"];
    ?>
    <h2>Registration Form - Output</h2>
    <table class="output-table">
        <tr>
            <th>First Name</th>
            <td><?php echo $first_name; ?></td>
        </tr>
        <tr>
            <th>Last Name</th>
            <td><?php echo $last_name; ?></td>
        </tr>
        <tr>
            <th>Username</th>
            <td><?php echo $username; ?></td>
        </tr>
        <tr>
            <th>Password</th>
            <td><?php echo $password; ?></td>
        </tr>
        <tr>
            <th>Gender</th>
            <td><?php echo $gender; ?></td>
        </tr>
        <tr>
            <th>Academic Year</th>
            <td><?php echo $academic_year; ?></td>
        </tr>
        <tr>
            <th>Phone No</th>
            <td><?php echo $phone_no; ?></td>
        </tr>
    </table>
    <?php
    }
    ?>
</body>

</html>