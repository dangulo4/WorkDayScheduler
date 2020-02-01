$(document).ready(function () {

$('.saveBtn').on('click', function (event){
  alert('Your event has beed saved');
  
  for (var i = 1; i < 8; i++) {
    var saveEvents = localStorage.getItem('event' + i)
    $('#event' + i).val(saveEvents);
   // localStorage.setItem('events'+i, JSON.stringify(events));
    //document.getElementById("#event").innerHTML = localStorage.getItem('');
  }
});
function getTime() {
  var hours = 9;
  var checkTimes = document.querySelectorAll('#eventText');
  
  for (var i = 0; i < checkTimes.length; i++){
    time = parseInt(moment().format('LT'));
          
    parseInt(hours);
    
    if (moment().format('HHmm' > 1700 )) {
      
      
      $(checkTimes[i]).addClass('past');
      $(checkTimes[i]).attr("readonly", "readonly");
      
     // break;

    } else if (hours > time) {
      $(checkTimes[i]).addClass('past');
      $(checkTimes[i]).attr("readonly", "readonly");
    } 
    else if (hours = time) {
      $(checkTimes[i]).addClass('present');
    } else if (hours < time) {
      $(checkTimes[i]).addClass('future');
      
    }
    console.log(hours > time);
    //hr = hr +01;
    console.log('Momentjs time is: ' + time);
    console.log('Time is: ' + hours);      
    console.log(hours > time);
    hours = hours + 1;
  }
  
}


getTime();


});
$('#currentDay').text(moment().format('dddd, MMMM Do')); 