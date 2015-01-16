$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    var dancerMakerFunction = window[dancerMakerFunctionName];

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
    var bgClass = ['src/img/floor8.png', 'src/img/floor7.png', 'src/img/floor6.png', 'src/img/floor1.png', 'src/img/floor2.png', 'src/img/floor3.png', 'src/img/floor4.png', 'src/img/floor5.png', 'src/img/floor10.png', 'src/img/floor9.png' ];
    $('body').css('background-image','url(' + bgClass[bgClick%10] + ')');
  });



});

