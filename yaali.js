var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}


function adjustLayout() {
    const calendarContainers = document.querySelectorAll('.calender1, .calender2');
    const calendarWidth = Math.floor(window.innerWidth / 2) - 20; // 20px margin between calendars
  
    calendarContainers.forEach(container => {
      container.style.width = `${calendarWidth}px`;
    });
  }
  
  window.addEventListener('resize', adjustLayout);
  
  adjustLayout();