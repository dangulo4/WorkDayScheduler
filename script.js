$(document).ready(function () {

  var events = [];

  function init() {
    //Parse the JSON string to an object
    var storeEvent = JSON.parse(localStorage.getItem('events'));
    //Update localStorage
    if (storeEvent !== null) {
      events = storeEvent;
    }

  }

  function storeEvent() {
    localStorage.setItem('events', JSON.stringify(events));
  }



  function saveEvent() {
    $('.saveBtn').on('click', function () {
      alert
      storeEvent();
    });
  }
  saveEvent();

  getTime0();


  //check for timeblock
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }






  function getTime0() {
    var d = new Date();
    var x = document.getElementById('zeroHour');
    var y = document.getElementById('eventText0');
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
 
    var checkTimes = document.getElementsByClassName('hour');
for (var i = 0; i > checkTimes.length ; i++){
  
    if (x.innerHTML = h + ":" + m + ":" + s > '09:00' && y.innerText !== null) {
      x.innerText = '23:00';
      y.style.addClass('hour');
    } else if (x.innerHTML = h + ":" + m + ":" + s < '09:00' && y.innerText === null) {
      y.style.background = 'red';
      x.innerText = '09:00';
    } else {
      x.innerText = ':00';
      y.style.background.addClass('green');
    }
    console.log(checkTimes[i].innerText);

  }
}


  


});

$('#currentDay').text(moment().format('dddd, MMMM Do'));

// $("#click-me").on("click", function() {
//   alert("I've been clicked!");
// });