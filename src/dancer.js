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
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/

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
    danceParty[i].setPosition(danceParty[i].top, danceParty[i].left);
  }

  // loop through the array, assigning each one a place


  // on the left side of the dance floor evenly spaced apart.


};

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //var makeDancer = new Dancer;


// Make a button that, when clicked, tells all the dancers to line up against one side of the dance floor. Remember you've got a global array of all created dancers (it's defined in index.html) so you can loop through that array and tell each object to lineUp. You'll need to add a lineUp method to each of your dancer types - they don't all have to do exactly the same thing.
