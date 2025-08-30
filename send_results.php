<?php
$servername = "mysql.localgov.rapat.org";
$username = "rapat";
$password = "Yomudda69";
$dbname = "rapat_results";
$statusmsg = "";

$one_values = array("Strongly Disagree", "Disagree", "Neutral", "Agree", "Strongly Agree");
$two_values = array("Never", "Rarely", "Sometimes", "", "Always");
$three_values = array("No", "", "", "To a Certain Extent", "Yes");
$four_values = array("Not Endorsed", "", "Neutral", "", "Widely Endorsed");

$first_name = test_input($_POST["first_name"]);
$last_name = test_input($_POST["last_name"]);
$email = test_input($_POST["email"]);
$location = test_input($_POST["location"]);
$budget = test_input($_POST["budget"]);
$process = test_input($_POST["process"]);
$evaluate = test_input($_POST["evaluate"]);
$question1 = test_input($_POST["question1"]);
$question1 = $one_values[$question1];
$question2 = test_input($_POST["question2"]);
$question2 = $two_values[$question2];
$question3 = test_input($_POST["question3"]);
$question3 = $three_values[$question3];
$question4 = test_input($_POST["question4"]);
$question4 = $four_values[$question4];

$EmailFrom = "info@rapat.org";
$EmailTo = "info@rapat.org";
$Subject = "New Submission - RAPAT Trial";
  
// validation
$validationOK=true;
if (!$validationOK) {
  print "<meta http-equiv=\"refresh\" content=\"0;URL=error.htm\">";
  exit;
}

// prepare email body text
$Body = "";
$Body = "A new RAPAT trial submission has been made from health.rapat.org. See form data below:";
$Body .= "\n";
$Body .= "\n";
$Body .= "First Name: ";
$Body .= $first_name;
$Body .= "\n";
$Body .= "Last Name: ";
$Body .= $last_name;
$Body .= "\n";
$Body .= "email: ";
$Body .= $email;
$Body .= "\n";
$Body .= "Location: ";
$Body .= $location;
$Body .= "\n";
$Body .= "Budget: ";
$Body .= $budget;
$Body .= "\n";
$Body .= "Process: ";
$Body .= $process;
$Body .= "\n";
$Body .= "Evaluate: ";
$Body .= $evaluate;
$Body .= "\n";
$Body .= "Question 1 - Program Budgeting: ";
$Body .= $question1;
$Body .= "\n";
$Body .= "Question 2 - Criteria: ";
$Body .= $question2;
$Body .= "\n";
$Body .= "Question 3 - Resources: ";
$Body .= $question3;
$Body .= "\n";
$Body .= "Question 4 - Priority: ";
$Body .= $question4;
$Body .= "\n";
// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");
  
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

$sql = "INSERT INTO health_trial_form_submission (first_name, last_name, email, location, budget, process, evaluate, 1_program_budgeting, 2_criteria, 3_resources, 4_priority)
VALUES ('$first_name', '$last_name', '$email', '$location', '$budget', '$process', '$evaluate', '$question1', '$question2', '$question3', '$question4')";

if ($conn->query($sql) === TRUE) {
    // echo "New record created successfully";
    $statusmsg = "Success!";
} else {
    // echo "Error: " . $sql . "<br>" . $conn->error;
    $statusmsg = "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>