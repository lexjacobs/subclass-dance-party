var BlinkyDancer = function(top, left, timeBetweenSteps){

  Dancer.call(this, top, left, timeBetweenSteps);


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
MoonWalker.prototype.rotation = 0;
MoonWalker.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.rotation += 1;
  var directions = ['mirror1', 'mirror2'];
  this.setPosition(this.top, this.left+=10);
  this.$node.addClass(directions[this.rotation % 2]);
  this.$node.removeClass(directions[(this.rotation-1)%2]);
};

var Hungry = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('hungry');
};

Hungry.prototype = Object.create(BlinkyDancer.prototype);
Hungry.prototype.constructor = Hungry;
Hungry.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.setPosition(this.top, this.left+=10);
};

var Okeanos = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('okeanos');
};

Okeanos.prototype = Object.create(BlinkyDancer.prototype);
Okeanos.prototype.constructor = Okeanos;
Okeanos.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.setPosition(this.top, this.left+=10);
};


var Carlos = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('carlos');
};

Carlos.prototype = Object.create(BlinkyDancer.prototype);
Carlos.prototype.constructor = Carlos;
Carlos.prototype.rotation = 0;
Carlos.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.rotation += 1;
  var directions = ['flipSouth', 'flipWest', 'flipNorth', 'flipEast'];
  this.setPosition(this.top, this.left+=10);
  this.$node.addClass(directions[this.rotation % 4]);
  this.$node.removeClass(directions[(this.rotation-1)%4]);
};

var Lex = function(top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('lex');
};

Lex.prototype = Object.create(BlinkyDancer.prototype);
Lex.prototype.constructor = Lex;
Lex.prototype.rotation = 0;
Lex.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.rotation += 1;
  var directions = ['flipWest', 'flipFlat', 'flipEast', 'flipFlat'];
  this.setPosition(this.top, this.left+=10);
  this.$node.addClass(directions[this.rotation % 4]);
  this.$node.removeClass(directions[(this.rotation-1)%4]);
};
