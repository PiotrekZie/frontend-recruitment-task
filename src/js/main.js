/*jshint esversion: 6 */

const ALERT = document.getElementById('alert');
const CONTENTALERT = document.getElementById('alert__bg');
const COUNTBUTTON = document.getElementById('btn');
const EXITBUTTON = document.getElementById('exit__alert');
const RESETBUTTON = document.getElementById('reset__counter');
let CLICK = localStorage.getItem('counter');

COUNTBUTTON.addEventListener('click', () => {
    ALERT.classList.toggle('active');
    CLICK++;
    localStorage.setItem('counter', CLICK);
    document.getElementById('counter').innerHTML = CLICK;
    console.log(CLICK);
    if (CLICK > 5) {
        RESETBUTTON.classList.add('active');
    } else {
        RESETBUTTON.classList.remove('active');
    }     
});

EXITBUTTON.addEventListener('click', () => {
    ALERT.classList.remove('active');
});

RESETBUTTON.addEventListener('click',() => {
    CLICK = 0;
    localStorage.removeItem('counter');
    ALERT.classList.remove('active');
});

ALERT.addEventListener('click', (e) => {
    // console.log(e.target)
    if (e.target === CONTENTALERT) {
        ALERT.classList.remove('active');
    }
    
});