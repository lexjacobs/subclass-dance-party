var BlinkyDancer = function(top, left, timeBetweenSteps){

  // var this = {top:.., left:..., tbs:..., $node};
  Dancer.call(this, top, left, timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
BlinkyDancer.prototype.step = function(){

  // call the old version of step at the beginning of any call to this new version of step
  Dancer.prototype.step.call(this);
  this.setPosition(this.top, this.left+=5);
};

var TinyDancer = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('tinyDancer');
};

TinyDancer.prototype = Object.create(BlinkyDancer.prototype);
TinyDancer.prototype.constructor = TinyDancer;
TinyDancer.prototype.rotation = 0;
TinyDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.rotation += 1;
  var directions = ['south', 'west', 'north', 'east'];
  this.setPosition(this.top, this.left+=10);
  this.$node.addClass(directions[this.rotation % 4]);
  this.$node.removeClass(directions[(this.rotation-1)%4]);
};

var MoonWalker = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('moonWalker');
};

MoonWalker.prototype = Object.create(BlinkyDancer.prototype);
MoonWalker.prototype.constructor = MoonWalker;
MoonWalker.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.setPosition(this.top, this.left+=10);
};

