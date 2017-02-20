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
    dancer.$node.on('mouseover', function() {
      console.log('hovering');
    })
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
      makeDancer.prototype.step(window.dancers[i]);
    }
  });
  $('.lineup').on('click', function() {
    var left = -150;
    for (var i = 0; i < window.dancers.length; i++) {
      var top = 475;
      if (!window.dancers[i]["$node"][0].className) {
        top+=50;
        // console.log('found');
      }
      makeDancer.prototype.setPosition.call(window.dancers[i]["$node"], top, left);
      left+=200;
    }
  })
});

