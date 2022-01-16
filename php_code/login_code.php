<?php session_start();
include 'db_connection.php';

$email = $_REQUEST['email'];
$password = $_REQUEST['password'];

$fetched_data = mysqli_query($con, "select * from user_registration where email = '$email' and password = '$password'");
$rows = mysqli_fetch_row($fetched_data);

if ($rows == 0) {
?>
    <script>
        alert("No account exists with these credentials");
    </script>
    <?php
} else {
    $date = date("Y-m-d");
    $time = date("H:i:s");
    $token = uniqid() . date("Y-m-d") . time();

    $_SESSION['email'] = $email;
    $_SESSION['token'] = $token;

    $query = "insert into token_details set email='$email', token='$token', date='$date', time='$time'";
    if (mysqli_query($con, $query)) {
        setcookie("token_name",$token,time()+864000, '/');
    ?>
        <script>
            alert("Login Successfully");
            window.location="../examples/dashboard.php";
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