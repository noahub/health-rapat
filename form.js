var current_fs, next_fs, previous_fs; //fieldsets
var left, opacity, scale; //fieldset properties which we will animate
var animating; //flag to prevent quick multi-click glitches

var first_name = $('#first_name');
var last_name = $('#last_name');
var email = $('#email');
var loc = $('#location');
var blankerror = $('#blank-error');

//blank checker
var checkForBlanks = function(){
  var blank = false;
  blankerror.addClass('hide');
  first_name.removeClass('isblank');
  last_name.removeClass('isblank');
  email.removeClass('isblank');
  loc.removeClass('isblank');
  //if name blank, set blank to true and show error
  if (first_name.val() === ""){
    blank = true;
    first_name.addClass("isblank");
  }
  if (last_name.val() === ""){
    blank = true;
    last_name.addClass("isblank");
  }
  //if email blank, set blank to true and show error
  if (email.val() === ""){
    blank = true;
    email.addClass("isblank");
  }
  if (loc.val() === ""){
    blank = true;
    loc.addClass("isblank");
  }
  if(blank){
    blankerror.removeClass("hide");
  }
  return blank;
};

$('#first_name, #last_name, #email, #location').on('keyup', function (e) {
   $(this).removeClass('isblank');
   blankerror.addClass('hide');
});

$(".next").click(function(){
  if(checkForBlanks()){
    //do nothing
    console.log("success");
  }else{
    if(animating) return false;
    animating = true;
    
    current_fs = $(this).parent();
    next_fs = $(this).parent().next();
    
    //activate next step on progressbar using the index of next_fs
    $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
    
    //show the next fieldset
    next_fs.show(); 
    //hide the current fieldset with style
    current_fs.animate({opacity: 0}, {
      step: function(now, mx) {
        //as the opacity of current_fs reduces to 0 - stored in "now"
        //1. scale current_fs down to 80%
        scale = 1 - (1 - now) * 0.2;
        //2. bring next_fs from the right(50%)
        left = (now * 50)+"%";
        //3. increase opacity of next_fs to 1 as it moves in
        opacity = 1 - now;
        current_fs.css({'transform': 'scale('+scale+')'});
        next_fs.css({'left': left, 'opacity': opacity});
      }, 
      duration: 800, 
      complete: function(){
        current_fs.hide();
        animating = false;
      }, 
      //this comes from the custom easing plugin
      easing: 'easeInOutBack'
    });
  }

});

$(".previous").click(function(){
  if(animating) return false;
  animating = true;
  
  current_fs = $(this).parent();
  previous_fs = $(this).parent().prev();
  
  //de-activate current step on progressbar
  $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
  
  //show the previous fieldset
  previous_fs.show(); 
  //hide the current fieldset with style
  current_fs.animate({opacity: 0}, {
    step: function(now, mx) {
      //as the opacity of current_fs reduces to 0 - stored in "now"
      //1. scale previous_fs from 80% to 100%
      scale = 0.8 + (1 - now) * 0.2;
      //2. take current_fs to the right(50%) - from 0%
      left = ((1-now) * 50)+"%";
      //3. increase opacity of previous_fs to 1 as it moves in
      opacity = 1 - now;
      current_fs.css({'left': left});
      previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
    }, 
    duration: 800, 
    complete: function(){
      current_fs.hide();
      animating = false;
    }, 
    //this comes from the custom easing plugin
    easing: 'easeInOutBack'
  });
});

$(".submit").click(function(){
  return false;
});