// 더보기 토글
/*
document.querySelector('.navbar-toggle.a').addEventListener('click', function() {
    document.querySelector('.navbar.hidden').classList.toggle('collapsed');
});*/

let black = document.querySelector(".navbar-toggle.a");
let blue = document.querySelector(".navbar-toggle.b");

black.style.display = 'block';
blue.style.display = 'none';

black.addEventListener("click", function() {
    document.querySelector('.navbar.hidden').classList.add('collapsed');
    black.style.display = 'none';
    blue.style.display = 'block';
});

blue.addEventListener("click", function() {
    document.querySelector('.navbar.hidden').classList.remove('collapsed');
    black.style.display = 'block';
    blue.style.display = 'none';
});


// 더보기 닫기 토글
document.querySelector('.nb_exit.b').addEventListener('click', function() {
    document.querySelector('.navbar.hidden').classList.toggle('collapsed');
});

// 날씨 토글
document.querySelector('#temp-toggle').addEventListener('click', function() {
    document.querySelector('.temp.hidden').classList.toggle('collapsed');
});
// 날씨 닫기 토글
document.querySelector('#X').addEventListener('click', function() {
    document.querySelector('.temp.hidden').classList.toggle('collapsed');
});

