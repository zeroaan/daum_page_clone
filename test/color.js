let black = document.querySelector(".navbar.a");
let blue = document.querySelector(".navbar.b")

black.style.display = 'block';
blue.style.display = 'none';

black.addEventListener("click", function() {
    black.style.display = 'none';
    blue.style.display = 'block';
});

blue.addEventListener("click", function() {
    black.style.display = 'block';
    blue.style.display = 'none';
});

