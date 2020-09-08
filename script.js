let startButton = document.createElement(`button`);
let body = document.querySelector("body");
body.append(startButton);
startButton.classList.add('start');
startButton.innerHTML = "Start";
document.querySelector(".image-to-show").classList.add('active');
let stopButton = document.createElement(`button`);
body.append(stopButton);
stopButton.classList.add('stop');
stopButton.innerHTML = "Stop";
let timerId;
let slide;


function showTimer() {
    let timer = document.createElement('div');
    timer.className = "timer";
    timer.innerHTML = 'next picture through:' + i--;
    document.body.append(timer);
    setTimeout(() => timer.remove(), 1000);

}


// $('#test').fadeIn(1000);  
// $('#test').fadeOut(1000);

function showSlide() {
    i = 10;
    let image = document.querySelector(".active");
    let nextImage = image.nextElementSibling;
    console.log(nextImage);
    if (nextImage == null) {
        document.querySelector(".image-to-show").classList.add('active');
        nextImage = document.querySelector(".active");
        // image.hidden = true;
        image.fadeIn(500);
        // nextImage.removeAttribute('hidden');
        nextImage.fadeOut(500);
        image.classList.remove('active');
        nextImage.classList.add('active');
        timerId = setInterval(() => {
            showTimer();
            console.log("2")
        }, 1000);
        setTimeout(() => clearInterval(timerId), 11000);
    } else {

        // image.hidden = true;
        image.fadeIn(500);
        // nextImage.removeAttribute('hidden');
        nextImage.fadeOut(500);
        image.classList.remove('active');
        nextImage.classList.add('active');
        timerId = setInterval(() => {
            showTimer();
            console.log("3")
        }, 1000);
        setTimeout(() => clearInterval(timerId), 11000);
    }
}


let i = 10;

startButton.addEventListener("click", () => {
    i = 10;
    if (startButton.getAttribute('status') == 'active') {
        return;
    }
    startButton.setAttribute("status", "active");
    timerId = setInterval(() => {
        showTimer(), console.log("1")
    }, 1000);
    setTimeout(() => clearInterval(timerId), 11000);
    slide = setInterval(() => {
        showSlide()
    }, 11000);
});


stopButton.addEventListener("click", () => {
    clearInterval(slide);
    clearInterval(timerId);
    let timer = document.querySelector('.timer');
    timer.remove();
    startButton.removeAttribute("status");
});