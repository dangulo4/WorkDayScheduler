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
  // getTime1();
  // getTime2();
  // getTime3();
  // getTime4();
  // getTime5();
  // getTime6();
  // getTime7();
  // getTime8();

  //check for timeblock
  function addZero(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }


var checkTimes = document.getElementsByClassName('hour');
for (var i = checkTimes.length - 1; i >= 0; i--)
{
  checkTimes[i].className = "hour";
  console.log(checkTimes[i].innerText);
}

  function getTime0() {
    var d = new Date();
    var x = document.getElementById('zeroHour');
    var y = document.getElementById('eventText0');
    var h = addZero(d.getHours());
    var m = addZero(d.getMinutes());
    var s = addZero(d.getSeconds());
 
    if (x.innerHTML = h + ":" + m + ":" + s > '09:00' && y.innerText !== null) {
      x.innerText = '09:00';
      y.style.backgroundColor = 'grey';
    } else if (x.innerHTML = h + ":" + m + ":" + s < '09:00' && y.innerText === null) {
      y.style.background = 'red';
      x.innerText = '09:00';
    } else {
      x.innerText = '09:00';
      y.style.background = 'green';
    }
  }



  // function getTime1() {
  //   var d = new Date();
  //   var x = document.getElementById('firsttHour');
  //   var y = document.getElementById('eventText1');
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (y.innerText === '') {
  //     y.style.background = 'green';
  //     checkTime();
  //   } else {
  //     return
  //   }
  //   function checkTime() {
  //   if (x.innerHTML = h + ":" + m + ":" + s > '10:00') {
  //     x.innerText = '10:00';
  //     y.style.backgroundColor = 'grey';
  //   } else if 
  //       (x.innerHTML = h + ":" + m + ":" + s < '10:00') {
  //       y.style.background = 'red';
  //       x.innerText = '10:00';
  //     }
  //   }
  // }

  // function getTime2() {
  //   var d = new Date();
  //   var x = document.getElementById("eventText2");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (x.innerHTML = h + ":" + m + ":" + s > '11:00') {
  //     x.style.backgroundColor = 'grey';
  //     x.innerHTML = '';
  //   };
  // }

  // function getTime3() {
  //   var d = new Date();
  //   var x = document.getElementById("eventText3");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (x.innerHTML = h + ":" + m + ":" + s > '12:00') {
  //     x.style.backgroundColor = 'grey';
  //     x.innerHTML = '';
  //   };
  // }

  // function getTime4() {
  //   var d = new Date();
  //   var x = document.getElementById("eventText4");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (x.innerHTML = h + ":" + m + ":" + s > '13:00') {
  //     x.style.backgroundColor = 'grey';
  //     x.innerHTML = '';
  //   };
  // }

  // function getTime5() {
  //   var d = new Date();
  //   var x = document.getElementById("eventText5");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (x.innerHTML = h + ":" + m + ":" + s > '14:00') {
  //     x.style.backgroundColor = 'grey';
  //     x.innerHTML = '';
  //   };
  // }

  // function getTime6() {
  //   var d = new Date();
  //   var x = document.getElementById("eventText6");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (x.innerHTML = h + ":" + m + ":" + s > '15:00') {
  //     x.style.backgroundColor = 'grey';
  //     x.innerHTML = '';
  //   };
  // }

  // function getTime7() {
  //   var d = new Date();
  //   var x = document.getElementById("eventText7");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (x.innerHTML = h + ":" + m + ":" + s > '16:00') {
  //     x.style.backgroundColor = 'grey';
  //     x.innerHTML = '';
  //   };
  // }

  // function getTime8() {
  //   var d = new Date();
  //   var x = document.getElementById("eventText8");
  //   var h = addZero(d.getHours());
  //   var m = addZero(d.getMinutes());
  //   var s = addZero(d.getSeconds());
  //   if (x.innerHTML = h + ":" + m + ":" + s > '17:00') {
  //     x.style.backgroundColor = 'grey';
  //     x.innerHTML = '';
  //   };
  // }




});

$('#currentDay').text(moment().format('dddd, MMMM Do'));

// $("#click-me").on("click", function() {
//   alert("I've been clicked!");
// });