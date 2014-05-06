// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){

  this.top = top;
  this.left = left;
  this._timeBetweenSteps = timeBetweenSteps;

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
  this.step();

};

Dancer.prototype.step = function(){

  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var that = this;
  setTimeout(function(){
      that.step();
    }, this._timeBetweenSteps);
};

Dancer.prototype.setPosition = function(top, left){
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(){

  // find the global 'dancers' array.
  var danceParty = window.dancers;
  for (var i=0; i<danceParty.length; i++){
    danceParty[i].left = 100;

    danceParty[i].top =(($("body").height())/danceParty.length)*i;
  }

  // loop through the array, assigning each one a place
  // on the left side of the dance floor evenly spaced apart.
};
;
