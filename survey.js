var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

var first_name = $("#first_name");
var last_name = $("#last_name");
var email = $("#email");
var loc = $("#location");
var blankerror = $("#blank-error");

//blank checker
var checkForBlanks = () => {
  var blank = false;
  blankerror.addClass("hide");
  first_name.removeClass("isblank");
  last_name.removeClass("isblank");
  email.removeClass("isblank");
  loc.removeClass("isblank");
  //if name blank, set blank to true and show error
  if (first_name.val() === "") {
    blank = true;
    first_name.addClass("isblank");
  }
  if (last_name.val() === "") {
    blank = true;
    last_name.addClass("isblank");
  }
  //if email blank, set blank to true and show error
  if (email.val() === "") {
    blank = true;
    email.addClass("isblank");
  }
  if (loc.val() === "") {
    blank = true;
    loc.addClass("isblank");
  }
  if (blank) {
    blankerror.removeClass("hide");
  }
  return blank;
};

$("#first_name, #last_name, #email, #location").on("keyup", function () {
  $(this).removeClass("isblank");
  blankerror.addClass("hide");
});

$(".next").click(function () {
  if (checkForBlanks()) {
    //do nothing
    console.log("success");
  } else {
    if (animating) return false;
    animating = true;

    current_fs = $(this).parent();
    next_fs = $(this).parent().next();

    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");

    //show the next fieldset
    next_fs.show();
    //hide the current fieldset with style
    current_fs.animate(
      { opacity: 0 },
      {
        step: (now) => {
          //as the opacity of current_fs reduces to 0 - stored in "now"
          //1. scale current_fs down to 80%
          scale = 1 - (1 - now) * 0.2;
          //2. bring next_fs from the right(50%)
          left = now * 50 + "%";
          //3. increase opacity of next_fs to 1 as it moves in
          opacity = 1 - now;
          current_fs.css({ transform: "scale(" + scale + ")" });
          next_fs.css({ left: left, opacity: opacity });
        },
        duration: 800,
        complete: () => {
          current_fs.hide();
          animating = false;
        },
        //this comes from the custom easing plugin
        easing: "easeInOutBack",
      }
    );
  }
});

$(".previous").click(function () {
  if (animating) return false;
  animating = true;

  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();

  //de-activate current step on progressbar
  $("#progressbar li")
    .eq($("fieldset").index(current_fs))
    .removeClass("active");

  //show the previous fieldset
  previous_fs.show();
  //hide the current fieldset with style
  current_fs.animate(
    { opacity: 0 },
    {
      step: (now) => {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale previous_fs from 80% to 100%
        scale = 0.8 + (1 - now) * 0.2;
        //2. take current_fs to the right(50%) - from 0%
        left = (1 - now) * 50 + "%";
        //3. increase opacity of previous_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({ left: left });
        previous_fs.css({
          transform: "scale(" + scale + ")",
          opacity: opacity,
        });
      },
      duration: 800,
      complete: () => {
        current_fs.hide();
        animating = false;
      },
      //this comes from the custom easing plugin
      easing: "easeInOutBack",
    }
  );
});

// Helper to get Firestore instance from global
function getFirestoreDB() {
  if (window.firebase && window.firebase.db) {
    return window.firebase.db;
  } else {
    console.error(
      "Firestore not initialized. Make sure Firebase SDK is loaded and configured in your HTML."
    );
    return null;
  }
}

// Helper to safely access Firestore helpers
function getFirestoreHelpers() {
  if (
    window.firestoreHelpers &&
    window.firestoreHelpers.addDoc &&
    window.firestoreHelpers.collection
  ) {
    return window.firestoreHelpers;
  } else {
    console.error(
      "Firestore helpers not found. Make sure the Firebase <script type='module'> is loaded before this script."
    );
    return null;
  }
}

$("#msform").on("submit", (e) => {
  e.preventDefault();

  // Set submit button to 'Submitting...', disable, and set opacity
  var $submitBtn = $("input[type='submit'], input[type='Submit']", this);
  $submitBtn.val("Submitting...").prop("disabled", true).css("opacity", "0.5");

  // First store all values in variables
  const firstName = $("#first_name").val();
  const lastName = $("#last_name").val();
  const email = $("#email").val();
  const location = $("#location").val();
  const budget = $("input[name='budget']:checked").val();
  const process = $("input[name='process']:checked").val();
  const evaluate = $("input[name='evaluate']:checked").val();
  const question1 = $("input[name='question1']:checked").val();
  const question2 = $("input[name='question2']:checked").val();
  const question3 = $("input[name='question3']:checked").val();
  const question4 = $("input[name='question4']:checked").val();

  // Next, submit to Firestore using modular SDK
  const db = getFirestoreDB();
  const helpers = getFirestoreHelpers();

  if (db && helpers) {
    const { addDoc, collection } = helpers;
    addDoc(collection(db, "rapat_survey_submissions"), {
      first_name: firstName,
      last_name: lastName,
      email: email,
      location: location,
      budget: budget,
      process: process,
      evaluate: evaluate,
      question1: question1,
      question2: question2,
      question3: question3,
      question4: question4,
    })
      .then(() => {
        // Handle successful submission
        console.log("Successfully added document!");

        // Next save all relevant fields to sessionStorage
        sessionStorage.setItem("first_name", firstName);
        sessionStorage.setItem("last_name", lastName);
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("location", location);
        sessionStorage.setItem("budget", budget);
        sessionStorage.setItem("process", process);
        sessionStorage.setItem("evaluate", evaluate);
        sessionStorage.setItem("question1", question1);
        sessionStorage.setItem("question2", question2);
        sessionStorage.setItem("question3", question3);
        sessionStorage.setItem("question4", question4);

        // Finally redirect to results page
        window.location.href = "results.html";
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
        window.location.href = "error.html";
        return;
      });
  }
});

$(document).ready(() => {
  $("fieldset").each(function () {
    var $fieldset = $(this);
    var $nextBtn = $fieldset.find(".next.action-button");
    $nextBtn.prop("disabled", true);

    $fieldset.find('input[type="radio"]').on("change", () => {
      $nextBtn.prop("disabled", false);
    });
  });
});
