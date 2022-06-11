/*jshint esversion: 6 */

const Alercik = document.getElementById('alert');
const button = document.getElementById('btn');
const exitButton = document.getElementById('exit__alert');
const resetButton = document.getElementById('reset__counter');
let click = 0;

button.addEventListener('click', () => {
    Alercik.classList.toggle('active');
    click += 1;
    localStorage.setItem("counter", click);
    document.getElementById('counter').innerHTML = click;
    if (click > 5) {
        resetButton.classList.toggle('active');
    } else {
        resetButton.classList.remove('active');
    }     
});

exitButton.addEventListener('click', () => {
    Alercik.classList.remove('active');
});

resetButton.addEventListener('click',() => {
    click = 0;
    localStorage.removeItem('counter');
    Alercik.classList.remove('active');
});