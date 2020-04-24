// Slider index, public variable
var sliderIndex = 1;

// Hide all the slider images
function hideAllImgs() {
  var sliders = document.getElementsByClassName('slider');
  for(var i=0; i<sliders.length; i++) {
    sliders[i].style.display = 'none';
  }
}

// Change the focus status of the active dot
function changeIndexActive(n){
  var dots = document.getElementsByClassName('dots');
  for(var i=0; i<dots.length; i++) {
    dots[i].className = dots[i].className.replace('active', '');
  }

  dots[n-1].className = dots[n-1].className + ' active';
}

// Change slider page
function change(n) {
  var sliders = document.getElementsByClassName('slider');
  hideAllImgs();
  sliders[n-1].style.display = 'block';

  // change the slider index
  changeIndexActive(n);

  // Set the image index value to the image number
  sliderIndex = n;
}


// when click on the change page buttons - prev/next
function changePage(n) {
  //prev page
  if(n==-1)
  {
    // set the index to the previous numuber value
    sliderIndex = sliderIndex - 1;

    // loop the index to the last page when reaching the first page
    if(sliderIndex < 1)
    {
      sliderIndex = 3;
    }
  } else { // next page
    // set the index to the next numuber value
    sliderIndex = sliderIndex + 1;

    // loop the index to the first page when reaching the last page
    if(sliderIndex > 3)
    {
      sliderIndex = 1;
    }
  }

  // change the slide
  change(sliderIndex);
}
