<?php

$first_name = $_POST["first_name"];
$last_name = $_POST["last_name"];
$email =  $_POST["email"];
$location = $_POST["location"];
$budget = $_POST["budget"];
$process = $_POST["process"];
$evaluate = $_POST["evaluate"];
$question1 = $_POST["question1"];
$question2 = $_POST["question2"];
$question3 = $_POST["question3"];
$question4 = $_POST["question4"];
$results = array($question1, $question2, $question3, $question4);
$result_text = array(
     array("While incremental line item budgeting has historically been the “go-to” given its simplicity and perceived fairness, this approach does not enable strategic allocation of resources. Without a good understanding of the programs and services (including their costs and outcomes) that are delivered to patients, you will not be able to use your resource allocation process to achieve your organization’s goals.","While incremental line item budgeting has historically been the “go-to” given its simplicity and perceived fairness, this approach does not enable strategic allocation of resources. Having a comprehensive inventory of your organization’s programs and services (including costs and outcomes) will give you the ability to re-allocate resources from areas of low priority to high priority – and will allow you to deliver the best possible care to your patient population.","Congratulations! Having a strong understanding of your organization’s programs and services will give you the platform to be able to make tough decisions with respect to resource allocation. To take things a step further, think about whether the performance data you are collecting for programs is in the form of outputs or outcomes e.g. output: number of addiction patients seen vs. outcomes: number of addiction patients who have returned to work. Another question to think about could be: how does each of the programs rank with respect to your organization’s strategic goals?"),
      array("Without a set of criteria agreed upon by the internal and external stakeholders that is connected to a healthcare organization’s strategic plan, making resource allocation decisions can be difficult at the best of times. Often it can come down to a CFO or CEO ‘waving a wand’ to decide where money is spent, a ‘squeaky wheel getting the grease’ approach, or political pressure. An explicit set of criteria can increase the rationality, transparency, and acceptability of decisions.","Historically, incremental approaches where increases or decreases in budgets have been implemented across the board e.g. “everyone gets a 2% lift” or “everyone has to cut 2%” have been the dominant approach for public institutions including healthcare organizations. By developing a set of criteria that is based on your strategic plan, every resource allocation decision that is made by your organization will improve the overall care delivered to your patient population.","Congratulations! Developing a set of criteria that is endorsed by internal and external stakeholders is vital to strategic resource allocation. To take things a step further, ask yourself the following questions: Are certain results or criteria more important than others (if yes – consider developing a weighted scale)? Have you scored each of your programs/services using those criteria? Do you score investment and disinvestment proposals using those criteria?"),
      array("Not re-allocating resources can mean one of two things. Either a) the distribution of resources across your programs is perfect the way it is, and not even one tweak could help bring your community closer to its vision OR b) the infrastructure is not in place to make the tough decisions that are needed to disinvest in one area, and invest in another. In a business, we must constantly be identifying and investing in our top performing products – if no new money is available, we must re-allocate resources from lowering performing products to higher performing products. Why shouldn’t we do the same in healthcare if this could mean better overall care for our patient population?","In times of resources abundance and revenue growth, making budgeting decisions is relatively easy. If we don’t have money for a project or new program, we can always wait till next year when there will be more resources available. However, in today’s fiscal climate doing something new can often necessitate stopping something else. To make these decisions often requires a robust priority setting and resource allocation process and strategy. If we could be providing better overall care to our patient population, why shouldn’t we be making these re-allocation decisions?","Congratulations! In today’s fiscal climate, doing something new or expanding existing services often requires stopping or disinvesting in something else that we are already doing. Do you feel these re-allocations enabled you to provide better overall care to your patient population? Were the decisions based on a good understanding of your organization’s programs/services and using explicit criteria?"),
      array("As an industry that is funded by and provides service directly to the public, many would argue that input and understanding of resource allocation among these external stakeholders is critical. Open communication and education for staff and clinicians is also vital to ensuring that budgeting decisions will be followed through, and that the process itself will be sustainable.","Without understanding and support of the public, staff, and clinicians for your organization’s process, implementing decisions and sustaining priority setting and resource allocation will prove difficult. Remember, if stakeholders are meaningfully involved in the development of a process – it becomes more difficult for them to challenge the outcomes. If something happens that they don’t like, you can always ask “what didn’t you like about the process that you helped develop which generated that particular outcome?","Congratulations! Having the support of the public, your staff, and clinicians is critical to sustaining a priority setting and resource allocation process. To take things a step further, ask yourself: are these groups empowered to develop proposals for investment or disinvestment? How could their understanding be enhanced and supported through capacity building or greater communication?")      
  );

$result_class = array("#f2dede", "#fcf8e3", "#dff0d8");
$result_title = array("Program Budgeting", "Criteria", "Reallocation of Resources", "Endorsement");

include dirname(__FILE__)."/send_results.php";

?> 

<!DOCTYPE HTML>
<html>
<head>
  <title>Results | RAPAT Tool</title>
  <meta property="og:title" content="RAPAT Tool" /> 
  <meta property="og:url" content="https://health.rapat.org/"/>
  <meta property="og:type" content="website" /> 
  <meta property="og:image" content="https://health.rapat.org/repat_logo.png" /> 
  <meta property="og:description" content="Create a healthcare organization that can contend with growing demands and shrinking resources" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="media.css">
<link rel="stylesheet" type="text/css" href="style.css">
<link rel="stylesheet" type="text/css" href="survey.css">
<link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
<meta name="viewport" content="width=device-width, initial-scale=1">

<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-51525250-10', 'auto');
  ga('send', 'pageview');

</script>

<script type="text/javascript">
  console.log("<?php echo $statusmsg ?>");
</script>
</head>
<body>

<header class="navbar">
<div class="container">
  <!-- <a href="#"><span class="glyphicon glyphicon-menu-left"></span> REPAT</a> -->
  <a href="index.html"><img src="repat_logo.png" height="60px"></a>
  <div></div>
  <div></div>
  <a class="btn btn-primary" href="contact.php" role="button">Get In Touch</a>
</div>
</header>

<section class="main">
  <div class="container">
    
    <h1>Here are your results, <?php echo $first_name; ?>!</h1>

    <div class="results">
 
      <?php 
      
      $i = 0;
      // var_dump($results);
      foreach ($results as $result) {
        
        if ($result == 4) {
          echo "<div class='result' style='background-color:".$result_class[2].";'><h2>".$result_title[$i]."</h2>"."<p style='font-weight:400;margin:10px 0px;text-shadow:0px 0px 1px grey;'>Strength</p>".$result_text[$i][2]."</div>";
        }
        elseif ($result == 0) {
          echo "<div class='result' style='background-color:".$result_class[0].";'><h2>".$result_title[$i]."</h2>"."<p style='font-weight:400;margin:10px 0px;text-shadow:0px 0px 1px grey;'>Weakness</p>".$result_text[$i][0]."</div>";
        }
        else {
          echo "<div class='result' style='background-color:".$result_class[1].";'><h2>".$result_title[$i]."</h2>"."<p style='font-weight:400;margin:10px 0px;text-shadow:0px 0px 1px grey;'>Area for Improvement</p>".$result_text[$i][1]."</div>";
        }
        
      $i++;

      }
        
      ?>

    </div>
      <a class="btn btn-primary btn-lg" href="contact.php" role="button">Get in Touch</a>
</div>
</section>



</body>
</html>