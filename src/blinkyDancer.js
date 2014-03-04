var BlinkyDancer = function(top, left, timeBetweenSteps){
  // var this = {top:.., left:..., tbs:..., $node};
  Dancer.call(this, top, left, timeBetweenSteps);
  console.log('top', top, 'left', left, 'time btw steps', timeBetweenSteps);

  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //
  // return this;
};

BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;

BlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    Dancer.prototype.step.call(this);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
  this.$node.toggle();
};


// BlinkyDancer.prototype = {
//    step: function(){}
//    __proto__: Dancer.prototype
// }
