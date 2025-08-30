<?php

$EmailFrom = "info@rapat.org";
$EmailTo = "info@rapat.org";
$Subject = "New lead from health.rapat.org!";

$first_name = test_input($_POST["first_name"]);
$last_name = test_input($_POST["last_name"]);
$email = test_input($_POST["email"]);
$organization = test_input($_POST["organization"]);
$message = test_input($_POST["message"]);
  
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}

// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body .= "First Name: ";
$Body .= $first_name;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $last_name;
$Body .= "\n";
$Body .= "email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Organization: ";
$Body .= $organization;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

$servername = "mysql.localgov.rapat.org";
$username = "rapat";
$password = "Yomudda69";
$dbname = "rapat_results";
$statusmsg = "";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

//escape text area
$message = mysqli_real_escape_string($conn, $message);

$sql = "INSERT INTO contact_form (first_name, last_name, email, organization, message)
VALUES ('$first_name', '$last_name', '$email', '$organization', '$message')";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
    $statusmsg = "Success!";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
    $statusmsg = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

// redirect to success page 
if ($success){
  print "<meta http-equiv=\"refresh\" content=\"0;URL=index.html\">";
}
else{
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
}
?>