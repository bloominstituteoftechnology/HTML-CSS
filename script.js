class CarouselImg {
	constructor (element) {
		this.element = element;
	}
	
	select () {
		this.element.classList.add("content__projectImg--selected");
	}
	
	deselect () {
		this.element.classList.remove("content__projectImg--selected");
	}
}

class CarouselButton {
	constructor (element, parent) {
		this.element = element;
		this.carousel = parent;
		this.imgs = parent.carouselImgs;
		this.carouselItems = this.carousel.carouselImgs;
		if(this.element.classList.contains("content__leftButton")){
			this.element.addEventListener("click", () => {
				this.moveLeft();
			});
		} else {
			this.element.addEventListener("click", () => {
				this.moveRight();
			});
		}
	}
	
	moveLeft () {
		this.carousel.getImgByIndex(this.carousel.activeIndex).deselect();
		this.carousel.activeIndex--;
		if(this.carousel.activeIndex < 0) this.carousel.activeIndex = 2;
		this.carousel.getImgByIndex(this.carousel.activeIndex).select();
	}
	
	moveRight () {
		this.carousel.getImgByIndex(this.carousel.activeIndex).deselect();
		this.carousel.activeIndex++;
		if(this.carousel.activeIndex > 2) this.carousel.activeIndex = 0;
		this.carousel.getImgByIndex(this.carousel.activeIndex).select();
	}
}

class Carousel {
	constructor (element) {
		this.element = element;
		this.carouselImgs = element.querySelectorAll(".content__projectImg");
		this.carouselImgs = Array.from(this.carouselImgs).map(carouselImg => new CarouselImg(carouselImg));
		this.leftButton = element.querySelector(".content__leftButton");
		this.leftButton = new CarouselButton(this.leftButton, this);
		this.rightButton = element.querySelector(".content__rightButton");
		this.rightButton = new CarouselButton(this.rightButton, this);
		this.activeIndex = 0;
	}
	
	getImgByIndex (index) {
		let returnimg;
		this.carouselImgs.forEach((imgs) => {
			if(imgs.element.dataset.imgnum == index) returnimg = imgs;
		});
		return returnimg;
	}
}

let carousel = document.querySelector(".content__projects");
carousel = new Carousel(carousel);