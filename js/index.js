$(document).ready(function(){
  $(".question-page").hide();
  $(".result-page").hide();

  $( "#take-quiz" ).click(function() {
    $("#main-page").fadeOut('slow');
    $("#Q1").fadeIn('slow');
    $("#Q2").hide();
    $("#Q3").hide();
    $("#Q4").hide();
    $("#Q5").hide();
    $("#Q6").hide();
    $("#Q7").hide();
    $("#Q8").hide();
    $("#Q9").hide();
});

$( "#Q1-A" ).click(function() {
  $("#Q1").slideUp('slow');
  $("#Q2").slideDown('slow');
});

$( "#Q1-B" ).click(function() {
  $("#Q1").slideUp('slow');
  $("#Q4").slideDown('slow');
});

$( "#Q1-C" ).click(function() {
  $("#Q1").slideUp('slow');
  $("#Q3").slideDown('slow');
});

$( "#Q2-A" ).click(function() {
  $("#Q2").slideUp('slow');
  $("#Q5").slideDown('slow');
});

$( "#Q2-B" ).click(function() {
  $("#Q2").slideUp('slow');
  $("#Q4").slideDown('slow');
});

$( "#Q3-A" ).click(function() {
  $("#Q3").slideUp('slow');
  $("#Q4").slideDown('slow');
});

$( "#Q3-B" ).click(function() {
  $("#Q3").slideUp('slow');
  $("#Q6").slideDown('slow');
});

$( "#Q4-A" ).click(function() {
  $("#Q4").slideUp('slow');
  $("#Q5").slideDown('slow');
});

$( "#Q4-B" ).click(function() {
  $("#Q4").slideUp('slow');
  $("#Q7").slideDown('slow');
});

$( "#Q4-C" ).click(function() {
  $("#Q4").slideUp('slow');
  $("#Q6").slideDown('slow');
});

$( "#Q5-A" ).click(function() {
  $("#Q5").slideUp('slow');
  $("#Q8").slideDown('slow');
});

$( "#Q5-B" ).click(function() {
  $("#Q5").slideUp('slow');
  $("#Q7").slideDown('slow');
});

$( "#Q6-A" ).click(function() {
  $("#Q6").slideUp('slow');
  $("#Q7").slideDown('slow');
});

$( "#Q6-B" ).click(function() {
  $("#Q6").slideUp('slow');
  $("#Q9").slideDown('slow');
});

$( "#Q7-A" ).click(function() {
  $("#Q7").slideUp('slow');
  $("#Q8").slideDown('slow');
});

$( "#Q7-B" ).click(function() {
  $("#Q7").slideUp('slow');
  $("#R2").slideDown('slow');
  // $("#Q8").slideUp();

});

$( "#Q7-C" ).click(function() {
  $("#Q7").slideUp('slow');
  $("#Q9").slideDown('slow');
});

$( "#Q8-A" ).click(function() {
  $("#Q8").slideUp('slow');
  $("#R1").slideDown('slow');
  $(".question-page").hide();
});

$( "#Q8-B" ).click(function() {
  $("#Q8").slideUp('slow');
  $("#R2").slideDown('slow');
  $(".question-page").hide();
});

$( "#Q9-A" ).click(function() {
  $("#Q9").slideUp('slow');
  $("#R2").slideDown('slow');
  $(".question-page").hide();
});

$( "#Q9-B" ).click(function() {
  $("#Q9").slideUp('slow');
  $("#R3").slideDown('slow');
  $(".question-page").hide();
});

$( ".take-quiz-again" ).click(function() {
  $("#result-page").fadeOut('slow');
  $("#main-page").fadeIn('slow');
  $(".question-page").hide();
  $("#R1").hide();
  $("#R2").hide();
  $("#R3").hide();
});

});
