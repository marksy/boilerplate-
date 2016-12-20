(function() {
'use strict';
var moment = require('moment');
var runTimestamp = Math.round(Date.now());
var intervalCount = 1000;

function beerOclock(beerDay) {

  var dayOfWeek = beerDay || 5;//friday
  var date = new Date(runTimestamp);
  var msg;
  var diff = date.getDay() - dayOfWeek;
  if (diff > 0) {
      date.setDate(date.getDate() + 6);
  }
  else if (diff < 0) {
      date.setDate(date.getDate() + ((-1) * diff));
  }
  date.setHours(17);
  date.setMinutes(0);
  date.setSeconds(0);

  msg = "Beer o'clock " + moment(date).fromNow();
  console.log(msg);

  var beer = document.getElementById("beer");
  beer.innerHTML = msg;
}

  beerOclock();

  setInterval(function() {
    beerOclock();
  }, intervalCount);

})();
