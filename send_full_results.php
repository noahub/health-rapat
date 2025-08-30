<?php
$servername = "mysql.localgov.rapat.org";
$username = "rapat";
$password = "Yomudda69";
$dbname = "rapat_results";
$statusmsg = "";

  $institution = test_input($_GET["inst"]);

  $pq1 = test_input($_POST["pq1"]);
  $pq2 = test_input($_POST["pq2"]);
  $pq3 = test_input($_POST["pq3"]);
  $pq4 = test_input($_POST["pq4"]);
  
  $p1 = test_input($_POST["p1"]);
  $p2 = $_POST["p2"];
  if(count($p2) > 0)
    {
     $p2_string = implode(",", $p2);
    }
  $p2 = test_input($p2_string);
  $p3 = test_input($_POST["p3"]);
  $p4 = test_input($_POST["p4"]);
  $p5 = test_input($_POST["p5"]);
  $p6a = test_input($_POST["p6a"]);
  $p6b = test_input($_POST["p6b"]);
  $p6c = test_input($_POST["p6c"]);
  $p7 = test_input($_POST["p7"]);
  $p8 = test_input($_POST["p8"]);
  
  $s1 = test_input($_POST["s1"]);
  $s2 = test_input($_POST["s2"]);
  $s3 = test_input($_POST["s3"]);
  $s4 = test_input($_POST["s4"]);
  $s5 = test_input($_POST["s5"]);

  $c1 = test_input($_POST["c1"]);
  $c2a = test_input($_POST["c2a"]);
  $c2b = test_input($_POST["c2b"]);
  $c3 = test_input($_POST["c3"]);
  $c4a = test_input($_POST["c4a"]);
  $c4b = test_input($_POST["c4b"]);
  $c4c = test_input($_POST["c4c"]);
  $c5 = $_POST["c5"];
  if(count($c5) > 0)
      {
       $c5_string = implode(",", $c5);
      }
    $c5 = test_input($c5_string);

  $o1 = test_input($_POST["o1"]);
  $o2 = test_input($_POST["o2"]);
  $o3a = test_input($_POST["o3a"]);
  $o3b = test_input($_POST["o3b"]);
  $o3c = test_input($_POST["o3c"]);
  $o4 = test_input($_POST["o4"]);
  $o5a = test_input($_POST["o5a"]);
  $o5b = test_input($_POST["o5b"]);
  
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 
//escape text area
$pq4 = mysqli_real_escape_string($conn, $pq4);

$sql = "INSERT INTO full_health_form_submission (institution, pq1, pq2, pq3, pq4, p1, p2, p3, p4, p5, p6a, p6b, p6c, p7, p8, s1, s2, s3, s4, s5, c1, c2a, c2b, c3, c4a, c4b, c4c, c5, o1, o2, o3a, o3b, o3c, o4, o5a, o5b)
VALUES ('$institution', '$pq1', '$pq2', '$pq3', '$pq4', '$p1', '$p2', '$p3', '$p4', '$p5', '$p6a', '$p6b', '$p6c', '$p7', '$p8', '$s1', '$s2', '$s3', '$s4', '$s5', '$c1', '$c2a','$c2b', '$c3', '$c4a', '$c4b', '$c4c', '$c5', '$o1', '$o2', '$o3a', '$o3b', '$o3c', '$o4', '$o5a', '$o5b')";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
    $statusmsg = "Success!";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
    $statusmsg = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>