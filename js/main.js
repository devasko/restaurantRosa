// Пользовательские скрипты страницы





// Функция выбора элемента
const selectElement = function ( el ) {
    return document.querySelector( el );
};

let body = selectElement( 'body' ),
    menuToggler = selectElement( '.menu-toggle' ),
    toTop = selectElement( '.to-top' );

menuToggler.addEventListener( 'click', function () {
    body.classList.toggle( 'open' );
});

toTop.addEventListener( 'click', function () {
    $('html, body').animate({ scrollTop: 0 }, 800);
    return false;});



// Кнопка прокрутки в начало




// Анимация прокрутки
window.sr = ScrollReveal();

sr.reveal( '.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '25rem',
    delay: 300
});

sr.reveal( '.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '25rem',
    delay: 400
});

sr.reveal( '.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '25rem',
    delay: 600
});

sr.reveal( '.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '25rem',
    delay: 600
});