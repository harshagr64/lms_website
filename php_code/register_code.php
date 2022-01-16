<?php
include 'db_connection.php';

$date = date('Y-m-d');
$time = date('H:i:s');
$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$password = $_REQUEST['password'];
// print($con);

$get_query = mysqli_query($con, "select * from user_registration where email = '$email'");
$rows = mysqli_num_rows($get_query);

if ($rows > 0) {
?>
    <script>
        alert("User already exists, please Login to conitnue");
    </script>
    <?php
} else {
    $query = "insert into user_registration set name = '$name', email = '$email', password='$password', date='$date', time='$time'";
    // print($query);

    if (mysqli_query($con, $query)) {
    ?>
        <script>
            alert("User has been created successfully");
            window.location = '../examples/login.php';
        </script>
    <?php
    } else {
    ?>
        <script>
            alert("Something went wrong");
        </script>
<?php
    }
}

?>