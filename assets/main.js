var time = 120;
var clock = document.getElementById('clock').innerHTML;
var bg = document.getElementById('container');
var timer;
var i = 0;

clock = time;

function timeOut() {
    if (i == 0) {
        bg.style.backgroundColor = 'red';
        i++;
    } else {
        bg.style.backgroundColor = 'orange';
        i--;
    }

    setTimeout(timeOut, 500);
}

function countDown() {
    console.log(time);
    time--;
    document.getElementById('clock').innerHTML = time;
    bg.style.width = time + '%';

    if (time < 50) {
        bg.style.backgroundColor = 'yellow';
    }

    if (time < 25) {
        bg.style.backgroundColor = 'orange';
    }

    if (time < 10) {
        bg.style.backgroundColor = 'red';
    }

    if (time == 0) {
        clearInterval(timer);
        bg.style.width = '100%';
        timeOut();
    }
}

function main() {
    timer = setInterval(countDown, 1000);
    console.log('starting')
}

main();

