var makeDancer = function(top, left, timeBetweenSteps) {
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  // this.$node = $('<span class="dancer"></span>');
  this.y = top;
  this.x = left;
  // console.log(this.y);
  // console.log(this.x);
  makeDancer.prototype.setPosition.call(this.$node, this.y, this.x);
 

};

makeDancer.prototype.step = function() {
  var top = ($("body").height())/2 * Math.random() + 100;
  var left =  $(".container").width() * Math.random();
  // var stepStyleOn = {
  //   top: '+=10px',
  //   left: '+=10px'
  // }
  var stepStyleOff = {
    top: top,
    left: left
  }
  $('.travolta').animate(stepStyleOff, 1000,makeDancer.prototype.step);
  // console.log('stepping to y= ' + y + ' x= ' + x + ' inteval = ' + interval);
  // makeDancer.prototype.setPosition.call(this.$node, y, x);
  // setTimeout(makeDancer.prototype.step.bind(this, y, x, interval), interval);
};

makeDancer.prototype.setPosition = function(top, left) {
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