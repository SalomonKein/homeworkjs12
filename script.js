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



// function active(li) {
//     let active = ul.querySelectorAll('.active');
//     for (let elem of active) {
//         elem.classList.remove('active');
//         document.getElementById(`${elem.classList[1]}`).hidden = true
//     }
//     li.classList.add('active');
//     removeHide(li.classList[1])

// }
let timer;

function showTimer() {
    let timer = document.createElement('div');
    timer.className = "timer";
    timer.innerHTML = 'next picture through:' + i--;
    document.body.append(timer);
    setTimeout(() => timer.remove(), 1000);

}

function showSlide() {
    let image = document.querySelector(".active");
    let nextImage = image.nextElementSibling;
    console.log(nextImage);
    if (nextImage == null) {
        document.querySelector(".image-to-show").classList.add('active');
        nextImage = document.querySelector(".active");
        i = 10;
        image.hidden = true;
        nextImage.removeAttribute('hidden');
        image.classList.remove('active');
        nextImage.classList.add('active');
        let timerId = setInterval(() => {
            showTimer();
        }, 1000);
        setTimeout(() => clearInterval(timerId), 12000);
    } else {
        i = 10;
        image.hidden = true;
        nextImage.removeAttribute('hidden');
        image.classList.remove('active');
        nextImage.classList.add('active');
        let timerId = setInterval(() => {
            showTimer();
        }, 1000);
        setTimeout(() => clearInterval(timerId), 12000);
    }
}
let timerId;
let slide;

let i = 10;
startButton.addEventListener("click", () => {

    timerId = setInterval(() => {
        showTimer();
    }, 1000)
    slide = setInterval(() => {
        showSlide()
    }, 12000)
    setTimeout(() => clearInterval(timerId), 12000);



});
stopButton.addEventListener("click", () => {
    clearInterval(slide);
    clearInterval(timerId);
    let timer = document.querySelector('.timer');
    timer.remove();
    i = 10;
});