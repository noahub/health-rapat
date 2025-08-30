<!DOCTYPE html>
<html>
<head>
  <title>RAPAT Tool</title>
  <meta property="og:title" content="Get in Touch | RAPAT Tool" /> 
  <meta property="og:url" content="https://health.rapat.org/"/>
  <meta property="og:type" content="website" /> 
  <meta property="og:image" content="https://health.rapat.org/repat_logo.png" /> 
  <meta property="og:description" content="Get in touch now. Discover your budgeting strengths and weaknesses, and how you can improve your process now!" />

<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css" integrity="sha512-dTfge/zgoMYpP7QbHy4gWMEGsbsdZeCXz7irItjcC3sPUFtf0kuFbDz/ixG7ArTxmDjLXDmezHubeNikyKGVyQ==" crossorigin="anonymous">
<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap-theme.min.css" integrity="sha384-fLW2N01lMqjakBkx3l/M9EahuwpSfeNvV63J5ezn3uZzapT0u7EYsXMjQV+0En5r" crossorigin="anonymous">
<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js" integrity="sha512-K1qjQ+NcF2TYO/eI3M6v8EiNYZfA95pQumfvcVrTHtwQVDG+aHRqLi/ETn2uB+1JqwYqVG3LIvdm9lj6imS/pQ==" crossorigin="anonymous"></script>

<link rel="stylesheet" type="text/css" href="media.css">
<link rel="stylesheet" type="text/css" href="style.css">

<link href='https://fonts.googleapis.com/css?family=Muli:400,300' rel='stylesheet' type='text/css'>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<header class="navbar">
<div class="container">
  <!-- <a href="#"><span class="glyphicon glyphicon-menu-left"></span> RAPAT</a> -->
  <a href="index.html"><img src="repat_logo.png" height="60px"></a>
  <div></div>
  <div></div>
  <a class="btn btn-primary" href="#" role="button">Get in Touch</a>
</div>
</header>

<div class="main">
<section>
  <div class="container">
    <h1>Want to learn more? We would love to hear from you!</h1>
    <p>Send us a message below and we will get back to you with more information and resources.</p>
    <form action="contactengine.php" method="POST" id="contact" class="formcard">
    <fieldset>
    <label for="first_name">First Name</label>
    <input type="text" name="first_name" placeholder="First Name" class="form-control" required>

    <label for="last_name">Last Name</label>
    <input type="text" name="last_name" placeholder="Last Name" class="form-control" required>

    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Email" class="form-control" required>

    <label for="organization">Organization Name</label>
    <input type="text" name="organization" placeholder="Organization Name" class="form-control" required>
    
    <label for="message">Message</label>
    <textarea name="message" placeholder="Leave a Message" class="form-control" form="contact"></textarea>

    </fieldset>
    <input class="btn btn-success btn-lg action-button" type="Submit" value="Get in Touch">
    </form>
  </div>  
</section>
</div>

</body>
</html>