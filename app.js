const parallax_el = document.querySelectorAll(".parallax");

let xValue = 0, 
    yValue = 0;

window.addEventListener("mousemove", (e) => {
 xValue = e.clientX - window.innerWidth / 2;
 yValue = e.clientY - window.innerHeight / 2;
 
 parallax_el.forEach((el) => {
 let speedx = el.dataset.speedx;
 let speedy = el.dataset.speedy;
 let speedz = el.dataset.speedz;

let zValue = (e.clientX - parseFloat(getComputedStyle(el).left))* 1;


 let isInLeft = parseFloat(getComputedStyle(el).left) < window.innerWidth / 2 ? 1 : -1;
 
	el.style.transform = `translateX(calc( ${-xValue * speedx}px)) translateY(calc( ${yValue * speedy}px))`;

	});
});



