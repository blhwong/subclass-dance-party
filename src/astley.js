var makeAstley = function(top, left, timeBetweenSteps) {
  this.$node = $("<img src=\"astley.gif\">");
  makeDancer.call(this, top, left, timeBetweenSteps);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

};

makeAstley.prototype = Object.create(makeDancer.prototype);
makeAstley.prototype.constructor = makeAstley;
makeAstley.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  //this.$node.toggle();
};