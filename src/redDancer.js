var makeRedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
}


makeRedDancer.prototype = Object.create(makeDancer.prototype);
makeRedDancer.prototype.constructor = makeRedDancer;

makeRedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.toggle();    // blinky animation
  this.$node.addClass('redDancer');  // add the redDancer class alongside Dancer class tag
}

makeRedDancer.prototype.lineUp = function() {
  this.$node.animate({left: '100px'});
}

