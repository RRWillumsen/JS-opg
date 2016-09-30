var React = require('react');

var lastLoop = new Date;
function gameLoop() { 
    var thisLoop = new Date;
    var fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;
    ...
}
function myFunctionS() {
    location.reload();
	}

function myFunctionS() {
    var x = document.getElementById("myBtn");
    x.disabled = true;
}

$(element)
    .data('counter', 0) // begin counter at zero
    .click(function() {
        var counter = $(this).data('counter'); // get
        $(this).data('counter', counter + 1); // set
        // do something else...
    });

module.exports = andet;