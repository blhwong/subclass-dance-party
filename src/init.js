$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
     // debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(

      // $(".container").height() * Math.random(),
      ($('body').height()) / 2 * Math.random() + 100,
      $('.container').width() * Math.random(),
      20
    );
    dancer.spin = false;
    dancer.$node.on('mouseover', function(event) {
      makeDancer.prototype.spin();
    });
    dancer.$node.on('mouseleave', function(event) {
      makeDancer.prototype.spin();
    });
    dancer.stepping = false;
    dancer.toggleOff = false;
    window.dancers.push(dancer);
    console.log(window.dancers);
    $('.container').append(dancer.$node);
  });
  $('.strafe').on('click', function(event) {
    makeDancer.prototype.strafe();
  });
  $('.spinbutton').on('click', function(event) {
    makeDancer.prototype.spin();
  });
  $('#roam').click( function(event) {
    for (var i=0; i < window.dancers.length; i++) {
      if (window.dancers[i].stepping === false) {
        window.dancers[i].stepping = true;
        window.dancers[i].toggleOff = false;
        makeDancer.prototype.step(window.dancers[i]);
      } else if (window.dancers[i].stepping === true) {
        window.dancers[i].toggleOff = true;
        window.dancers[i].stepping = false;
      }
    }
  });
  $('.lineup').on('click', function() {



    for(var i = 0; i < window.dancers.length; i++) {
      if (window.dancers[i].stepping === true) {
        window.dancers[i].toggleOff = true;
        window.dancers[i].stepping = false;
      }
    }
    window.setTimeout(function() {
      var left = -150;
      for (var i = 0; i < window.dancers.length; i++) {
        var top = 475
        if (!window.dancers[i]["$node"][0].className) {
          top+=50;
          // console.log('found');
        }
        if (window.dancers[i].stepping === true) {
          window.dancers[i].toggleOff = true;
          window.dancers[i].stepping = false;
        }
        makeDancer.prototype.setPosition.call(window.dancers[i]["$node"], top, left);
        left+=200;
      }
    }, 2000);


  })
  window.setInterval(function() {
    // console.log('hi');
    for (var i = 0; i < window.dancers.length - 1; i++) {
      var x = window.dancers[i].x - window.dancers[i+1].x;
      //console.log(x);
      x = Math.abs(x);
      // console.log('x', x);
      x = Math.pow(x, 2);
      var y = window.dancers[i].y - window.dancers[i+1].y;
      y = Math.abs(y);
      // console.log('y', y);
      y = Math.pow(y, 2);
      var dist = Math.sqrt(x + y);
      console.log('dist', dist);
      if (dist < 50) {
        console.log('interact');
      }
    }
  }, 5000);
});

