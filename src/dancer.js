var makeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  
  this.timeBetweenSteps = timeBetweenSteps

  this.step();
  this.setPosition(top, left);
}

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
  
}

makeDancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left,
  };
  this.$node.css(styleSettings);
  
                             
  this.$node.mouseover(function() {       // mouseover characteristic provided by Dancer function to every dancer instance
   
    $('.rotated').css('transform', 'rotate(33deg)')  // using mouseover function will rotate
   this.$node.mouseout(function() {          // mouseout is animation after the mouse left
    $('.rotated').css('transform', 'rotate(66deg)')
  })
};

