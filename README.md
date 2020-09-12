# daum_page_clone

- 기간 : 200805 ~ 200808
  <br>

#### - 실행 화면

![screen](./img/screen.gif)
<br>

#### 더보기 관련 JavaScript

```javascript
// 더보기 토글
let black = document.querySelector(".navbar-toggle.a");
let blue = document.querySelector(".navbar-toggle.b");

black.style.display = "block";
blue.style.display = "none";

black.addEventListener("click", function () {
  document.querySelector(".navbar.hidden").classList.add("collapsed");
  black.style.display = "none";
  blue.style.display = "block";
});

blue.addEventListener("click", function () {
  document.querySelector(".navbar.hidden").classList.remove("collapsed");
  black.style.display = "block";
  blue.style.display = "none";
});
```

#### add, remove가 아닌 toggle로 이용하여 해보았다.

```javascript
// 더보기 닫기 토글
document.querySelector(".nb_exit.b").addEventListener("click", function () {
  document.querySelector(".navbar.hidden").classList.toggle("collapsed");
});
```

<br>

#### 슬라이드 관련 JavaScript

```javascript
let slideIndex = 0;
showSlides(slideIndex);
autoSlides();

// 클릭 슬라이드
function moveSlides(n) {
  showSlides((slideIndex += n));
}
function showSlides(n) {
  let slides = document.getElementsByClassName("bottom_search");
  if (n + 1 > slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

// 자동 슬라이드
function autoSlides() {
  let slides = document.getElementsByClassName("bottom_search");
  if (slideIndex == slides.length) {
    slideIndex = 0;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;
  setTimeout(autoSlides, 4500);
}
```
