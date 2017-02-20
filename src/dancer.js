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

makeDancer.prototype.step = function(dancer) {
  var stepStyleOff = {
    top: this.y,
    left: this.x
  };
  var newx = ($('body').height()) / 2 * Math.random() + 100;
  var newy = $('.container').width() * Math.random();
  // var neary = (this.y > newy - 300 && this.y < newy + 300);
  // var nearx = (this.x > nearx -300 && this.x < nearx + 300);

  // if (neary && nearx) {
  //   var stepStyleOff = {
  //     top: newy,
  //     left: newx
  //   };
  // }

  var stepStyleOff = {
      top: newy,
      left: newx
  };
  console.log(newy, newx);
  // var collisions = false
  // for (var i = 0; i < window.dancers.length; i++) {
  //   if (!(collisions)) {
  //     var othery = window.dancers[i].y;
  //     var otherx = window.dancers[i].x;
  //     var collisiony = (this.y > othery - 100 && this.y < othery + 100);
  //     var collisionx = (this.x > otherx -100 && this.x < otherx + 100);
  //     if (collisionx && collisiony) {
  //       collisions = true;
  //     }
  //   }
  // }

  // if (collisions) {
  //   dancer.$node.animate(stepStyleOff, 5000, function() {
  //     console.log('will spin');
  //     makeDancer.prototype.step(dancer);
  //   });
  // }

  dancer.$node.animate(stepStyleOff, 5000, function() {
    makeDancer.prototype.step(dancer);
  });
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
    makeDancer.prototype.strafeOn = !(makeDancer.prototype.strafeOn );
  } else if (makeDancer.prototype.strafeOn ) {
    $('.travolta').css(styleSettings3);
    $('img').css(styleSettings3);
    makeDancer.prototype.strafeOn = !(makeDancer.prototype.strafeOn );
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
    makeDancer.prototype.spinOn = !(makeDancer.prototype.spinOn );
  } else if (makeDancer.prototype.spinOn ) {
    $('#spin').css(styleSettings4);
    // $('img').css(styleSettings3);
    makeDancer.prototype.spinOn = !(makeDancer.prototype.spinOn );
  }

};