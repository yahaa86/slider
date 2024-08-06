const img = document.querySelector (".slider__image");

const dots = document.querySelectorAll (".slider__dot");

const imgArr = ["./img/html.png","./img/css.jpg","./img/js.png"];

let currentIndex = 0;

function changeIndex(ind) {
	currentIndex = ind;
	slide(currentIndex);
}

function nextIndex (direction) {
	currentIndex += direction;
    if (currentIndex >= imgArr.lenght) {
    	currentIndex = 0;
    } else if (currentIndex < 0) {
    	currentIndex = imgArr.lenght - 1;
    }
	slide(currentIndex);
}
function slide(index) {
	img.style.display = 'none';
	setTimeout(()=> {
		img.style.display = 'block';
	},//00)
	img.src = imgArr[index];
	updateDots(index);
}
function updateDots (index) {
	for (let dot of dots) {
		dot.classList.remove("active");
	}
	dots[index].classList.add("active");
}