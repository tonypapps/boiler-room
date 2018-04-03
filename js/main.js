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
