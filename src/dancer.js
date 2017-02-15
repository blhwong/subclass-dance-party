var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span class="dancer"></span>');
  makeDancer.prototype.step.call(this);
  makeDancer.prototype.setPosition.call(this.$node, top, left);

};

makeDancer.prototype.step = function() {
  setTimeout(this.step.bind(this), this.timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  console.log(top, left);
  var styleSettings = {
    top: top,
    left: left
  };
  this.css(styleSettings);
};
makeDancer.prototype.spinOn = false;
makeDancer.prototype.strafeOn = false;
makeDancer.prototype.strafe = function() {

  var styleSettings2 = {
    // 'position': 'absolute',
    // 'animation-name': 'example',
    // 'animation-d uration': '2s',
    'animation-iteration-count': 'infinite',
  };
  var styleSettings3 = {
    // 'position': '',
    // 'animation-name': '',
    // 'animation-duration': '',
    'animation-iteration-count': '1'
  };
  if (!(makeDancer.prototype.strafeOn )) {
    $('.travolta').css(styleSettings2);
    $('img').css(styleSettings2);
    makeDancer.prototype.strafeOn  = !(makeDancer.prototype.strafeOn );
  } else if (makeDancer.prototype.strafeOn ) {
    $('.travolta').css(styleSettings3);
    $('img').css(styleSettings3);
    makeDancer.prototype.strafeOn  = !(makeDancer.prototype.strafeOn );
  }

};
makeDancer.prototype.spin = function() {

  var styleSettings4 = {
    // 'position': 'absolute',
    // 'animation-name': 'example',
    // 'animation-d uration': '2s',
    '-webkit-animation': ''
  };
  var styleSettings3 = {
    // 'position': '',
    // 'animation-name': '',
    // 'animation-duration': '',
    '-webkit-animation': 'spin .5s infinite linear'
  };
  if (!(makeDancer.prototype.spinOn )) {
    $('#spin').css(styleSettings3);
    // $('img').css(styleSettings2);
    makeDancer.prototype.spinOn  = !(makeDancer.prototype.spinOn );
  } else if (makeDancer.prototype.spinOn ) {
    $('#spin').css(styleSettings4);
    // $('img').css(styleSettings3);
    makeDancer.prototype.spinOn  = !(makeDancer.prototype.spinOn );
  }

};