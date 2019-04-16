var makeRedDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
}


makeRedDancer.prototype = Object.create(makeDancer.prototype);
makeRedDancer.prototype.constructor = makeRedDancer;

makeRedDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  this.$node.toggle();
}