$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random() * 0.9,
      $("body").width() * Math.random() * 0.9,
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

  $(".lineUpButton").on("click", function(event){
    window.dancers[0].lineUp();
  });

  var bgClick = 0;
  $('.changeButton').on('click', function(event){
    bgClick++;
    var bgClass = ['src/img/danceFloor.png', 'src/img/tron.jpg', 'src/img/fez.jpg', 'src/img/kong.gif'];
    $('body').css('background-image','url(' + bgClass[bgClick%4] + ')');
  });



});

