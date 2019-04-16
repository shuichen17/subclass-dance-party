describe('blueDancer', function() {

  var blueDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blueDancer = new makeBlueDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(blueDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blueDancer.$node, 'toggle');
    blueDancer.step();
    expect(blueDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blueDancer, 'step');
      expect(blueDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blueDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blueDancer.step.callCount).to.be.equal(2);
    });
  });
});