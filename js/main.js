// ============nav========
var navList = document.getElementById('nav-list');
var isHidden = true;
function toggleDropdownMenu(){
  if (isHidden) {
    // show the list
    navList.style.display = "block";
    isHidden = false;
  }else {
    //hide the list
    navList.style.display = "none";
    isHidden = true;
  }
}
// ========sticky nav=========


// carousel
var i = 0;
var images =
[
  'autumn-clouds-conifers',
  'beautiful-country-countryside',
  'daylight-environment-forest'
];
var carousel = document.getElementById('carousel');

function slideshow(){

  if (i >=images.length) {
    //reset i to 0
    i = 0;
    carousel.style.backgroundImage = "url(img/carousel/" + images[i] + ".jpg)";
  } else if (i < 0) {
    i = images.length -1;
    carousel.style.backgroundImage = "url(img/carousel/" + images[i] + ".jpg)";

  }else {
    carousel.style.backgroundImage = "url(img/carousel/" + images[i] + ".jpg)";
  }

}
function nextImage(){
  i++;
  slideshow();
}

function previousImage(){
  i--;
  slideshow();

}
slideshow();

// ===========Countdown Clock========
function cdtd() {
  var date = new Date('May 15, 2018 00:00:01');
  var now = new Date();
  var timeDiff = date.getTime() - now.getTime();
  if (timeDiff <= 0){
    clearTimeout(timer);
    document.write('Today is the Event!');
  }
  var seconds = Math.floor(timeDiff / 1000);
  var minutes = Math.floor(seconds / 60);
  var hours = Math.floor(minutes / 60);
  var days = Math.floor(hours / 24);
  var weeks = Math.floor(days / 7);
  var months = Math.floor(weeks/ 4);
  var years = Math.floor(weeks/ 12);
  years %= 12;
  weeks %= 7;
  days %= 31;
  hours %= 24;
  minutes %= 60;
  seconds %= 60;
  document.getElementById('yearsBox').innerHTML = years;
  document.getElementById('monthsBox').innerHTML = months;
  document.getElementById('daysBox').innerHTML = days;
  document.getElementById('hoursBox').innerHTML = hours;
  document.getElementById('minutesBox').innerHTML = minutes;
  document.getElementById('secondsBox').innerHTML = seconds;
}
cdtd();
setInterval(cdtd,1000);
