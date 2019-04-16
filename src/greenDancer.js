var makeGreenDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  
}


makeGreenDancer.prototype = Object.create(makeDancer.prototype);
makeGreenDancer.prototype.constructor = makeGreenDancer;

makeGreenDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  this.$node.toggle();
  this.$node.addClass('greenDancer');
  this.$node.addClass('dancer');
}

makeGreenDancer.prototype.lineUp = function() {
  this.$node.animate({left: '1000px'});
}