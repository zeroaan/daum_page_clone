// 더보기 토글
document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar.hidden').classList.toggle('collapsed');
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