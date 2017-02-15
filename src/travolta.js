var makeTravolta = function(top, left, timeBetweenSteps) {
  this.$node = $("<img  class=\"travolta\" id=\"spin\" src=\"travolta.gif\">");
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeTravolta.prototype = Object.create(makeDancer.prototype);
makeTravolta.prototype.constructor = makeTravolta;
makeTravolta.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  // this.$node.toggle();
};
// makeTravolta.prototype.strafe = makeDancer.prototype.strafe.bind(this);