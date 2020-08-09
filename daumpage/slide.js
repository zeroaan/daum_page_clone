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
  if (slideIndex == slides.length) {slideIndex = 0}
  for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[slideIndex].style.display = "block";  
  slideIndex++;
  setTimeout(autoSlides, 4500);
}

// 날씨 자동 슬라이드
let slideIndex2 = 0;
autoSlides2();
function autoSlides2() {
  let slides = document.getElementsByClassName("tem");
  if (slideIndex2 == slides.length) {slideIndex2 = 0}
  for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[slideIndex2].style.display = "block";  
  slideIndex2++;
  setTimeout(autoSlides2, 3100);
}

// 광고 자동 슬라이드
let slideIndex3 = 0;
autoSlides3();
function autoSlides3() {
  let slides = document.getElementsByClassName("adver");
  if (slideIndex3 == slides.length) {slideIndex3 = 0}
  for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[slideIndex3].style.display = "block";  
  slideIndex3++;
  setTimeout(autoSlides3, 6900);
}

// 사이드 광고 자동 슬라이드
let slideIndex4 = 0;
autoSlides4();
function autoSlides4() {
  let slides = document.getElementsByClassName("side_ad");
  if (slideIndex4 == slides.length) {slideIndex4 = 0}
  for (let i = 0; i < slides.length; i++) {
     slides[i].style.display = "none";  
  }
  slides[slideIndex4].style.display = "block";  
  slideIndex4++;
  setTimeout(autoSlides4, 10500);
}