$(document).ready(function () {
  // need to get element by ID
  var eventPlanner = document.querySelector("#eventtext");
  //var todoForm = document.querySelector("#todo-form");


  // Save appointment when button is clcked
  $('.saveBtn').on('click', function (events) {
    //alert('Your event has beed saved');
    for (var i = 1; i < 9; i++) {
      localStorage.setItem('events' + i, JSON.stringify(events));
      document.getElementById("#event").innerHTML = localStorage.getItem('');
    }
  });
  
  function getTimeAM() {
    var hours = 8;
    var checkTimes = document.querySelectorAll('.am');
    for (var i = 0; i < checkTimes.length; i++) {
      hours = hours + 1;
      time = parseInt(moment().format('LT'));
      
      if (hours > time) {
        $(checkTimes[i]).addClass('past');
        $(checkTimes[i]).attr("readonly", "readonly");

      } else if (hours = time) {
      $(checkTimes[i]).addClass('present');

      } else if (time < hours) {
        $(checkTimes[i]).addClass('future');
        
      }
      console.log(hours < time);
      console.log('Momentjs time is: ' + time);
      console.log('Hours is: ' + hours);
      
    }
  }

  function getTimePM() {
    var hoursPM = 0;
    var checkTimesPM = document.querySelectorAll('.pm');
    for (var i = 0; i < 5; i++) {
      hoursPM++;
      timePM = parseInt(moment().format('LT'));
      
        if (hoursPM > timePM) {
        $(checkTimesPM[i]).addClass('future');
        
      } else if (hoursPM == timePM) {
        $(checkTimesPM[i]).addClass('present');

      } else if (hoursPM < timePM) {
        $(checkTimesPM[i]).addClass('past');
        $(checkTimesPM[i]).attr("readonly", "readonly");
      }
      console.log('Hours PM is : ' + hoursPM < timePM);
      console.log('Momentjs time is: ' + timePM);
      console.log('Hours is: ' + hoursPM);
      
    }
  }

  // Check for hours only during working hours of 9 am thru 5pm
  function checkInitialTime() {
    if (moment().format('HHmm') > 1700 && (moment().format('HHmm') < 0900)) {
      $('#eventText').addClass('past');
      $('#eventText').attr("readonly", "readonly");
    }
  }

  checkInitialTime();
  getTimeAM();
  getTimePM();

});
$('#currentDay').text(moment().format('dddd, MMMM Do'));


    
 
