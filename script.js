const carousel = document.querySelector(".carousel");
const firstImg = carousel.querySelectorAll("img")[0];
const arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstImg.clientWidth + 15; //getting first image width and adding 14 margin value 

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        //if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    })
})

const dragStart = (e) => {
    //updating global variable value on mouse down
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to the mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    carousel.scrollLeft = e.pageX;
    carousel.classList.add("dragging");
    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
} 

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
}

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("mouseup", dragStop);

function loading(event){
    console.log(event.target.id);
}

window.onload = () => {
    const link = document.getElementById('C-link');
    if(window.screen.width < 600){
        link.innerHTML = 'link';
    }else{
        link.innerHTML = 'https://github.com/bibekbee/C_passManager';
    }
}