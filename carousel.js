

class Carousel {
	constructor(element) {
		this.element = element;
		this.arrows = element.querySelectorAll(".Arrows");
		this.counter = 0;
		this.pages = new Pages(this.element);
		Array.from(this.arrows).forEach((arrow) => {
			arrow.addEventListener('click', () => {
				let previousCounter = this.counter;
				if (arrow.classList.contains("Arrow--left")) {
					console.log("left arrow clicked");
					this.counter--;
				} else if (arrow.classList.contains("Arrow--right")) {
					console.log("right arrow clicked");
					this.counter++;
				}
				if (this.counter === -1) {
					this.counter = 3;
				}
				if (this.counter === 4) {
					this.counter = 0;
				}					
			//	console.log(this.counter);
				this.pages.select(this.counter);
				this.pages.deselect(previousCounter);
			});
		});
	}
}

class Pages {
	constructor(element) {
		this.element = element;
		this.pages = element.querySelectorAll(".Pages__images");
		this.list = element.querySelectorAll(".List__item");
	}

	select(counter) {
		console.log(this.list);
		console.log('current counter '+ counter);
		Array.from(this.pages)[counter].classList.remove("Pages__images--deselected");
		Array.from(this.list)[counter].classList.add("List__item--selected");
	}

	deselect(previousCounter) {
		console.log('previous counter ' + previousCounter);
		Array.from(this.pages)[previousCounter].classList.add("Pages__images--deselected");
		Array.from(this.list)[previousCounter].classList.remove("List__item--selected");
	}
}





let carousel = document.querySelectorAll(".Carousel");
carousel = Array.from(carousel).map(carousel => new Carousel(carousel));



