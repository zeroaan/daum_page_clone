let slideIndex = 0;
showSlides(slideIndex);
autoSlides();

// 클릭 슬라이드
function moveSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let slides = document.getElementsByClassName("bottom_search");
  if (n + 1 > slides.length) {slideIndex = 0}    
  if (n < 0) {slideIndex = slides.length - 1}
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";
}

// 자동 슬라이드
function autoSlides() {
  let slides = document.getElementsByClassName("bottom_search");
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  setTimeout(autoSlides, 5000);
}