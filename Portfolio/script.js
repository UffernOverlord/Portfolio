var all = document.getElementById('all');
var app = document.getElementById('app');
var card = document.getElementById('card');
var web = document.getElementById('web');

var appfilt = document.querySelectorAll('.filter-app');
var cardfilt = document.querySelectorAll('.filter-card');
var webfilt = document.querySelectorAll('.filter-web');

all.addEventListener('click', () => {
    for (let i = 0; i < appfilt.length; i++) {
        appfilt[i].style.display = 'block'
    }
    for (let i = 0; i < cardfilt.length; i++) {
        cardfilt[i].style.display = 'block'
    }
    for (let i = 0; i < webfilt.length; i++) {
        webfilt[i].style.display = 'block'
    }
})
app.addEventListener('click', () => {
    for (let i = 0; i < appfilt.length; i++) {
        appfilt[i].style.display = 'block'
    }
    for (let i = 0; i < cardfilt.length; i++) {
        cardfilt[i].style.display = 'none'
    }
    for (let i = 0; i < webfilt.length; i++) {
        webfilt[i].style.display = 'none'
    }
})
card.addEventListener('click', () => {
    for (let i = 0; i < appfilt.length; i++) {
        appfilt[i].style.display = 'none'
    }
    for (let i = 0; i < cardfilt.length; i++) {
        cardfilt[i].style.display = 'block'
    }
    for (let i = 0; i < webfilt.length; i++) {
        webfilt[i].style.display = 'none'
    }
})
web.addEventListener('click', () => {
    for (let i = 0; i < appfilt.length; i++) {
        appfilt[i].style.display = 'none'
    }
    for (let i = 0; i < cardfilt.length; i++) {
        cardfilt[i].style.display = 'none'
    }
    for (let i = 0; i < webfilt.length; i++) {
        webfilt[i].style.display = 'block'
    }
})