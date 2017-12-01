window.onload = () => doResize();
window.onresize = () => doResize();

const doResize =() => {
    if (window.innerWidth > 750) {
        container[0].setPanhide(2);
    }
    if (window.innerWidth < 750) {
        container[0].setPanhide(3);
    }
    if (window.innerWidth < 500) {
        container[0].setPanhide(4); // How many items to hide based on Ress less than 750;
    }
}

class ScrollPan {
    constructor(container) {
        this.element = container;
        this.project = container.querySelectorAll('.section__projects__projectBlock');
        this.project = Array.from(this.project).map(project => new ScrollItem(project, this));
        this.activeProject = this.project[0]; // automatically set activeProject to the first project on list.
        this.panhide = 2; // Arbitrary number of items to be hidden from the view, should decrease with ressolution.
        this.activePanProjects;
        this.pushloc = this.project.length - this.panhide;
        this.shiftloc = 0;
        this.scrollButton = container.querySelectorAll('.sideScroll');
        this.scrollButton = Array.from(this.scrollButton).map(button => new ScrollButton(button, this));
        this.activatePanProjects(); // Load up the items to be shown in the pan onto an array
        this.init(); // Upon class creation initiate the first 3 tabs with init();
        this.updateActive(this.project[0]);
    }
    setPanhide(n) {
        this.panhide = n;
        this.activatePanProjects();
        this.hideAll();
        this.pushloc = this.project.length - this.panhide;

        this.init();
    }

    hideAll() {
        this.project.forEach((item)=>{
            item.hide();
        });
    }
    activatePanProjects() {
        this.activePanProjects = this.project.slice(0, this.project.length - this.panhide);
    }
    init() {
        // Initiate and render the objects passed on the activePanProjects array.
        this.activePanProjects.forEach((item)=>{
            item.show();
        })
    }
    updateActive(scrollItem) {
        this.activeProject.deselect();
        this.activeProject = scrollItem;
        this.activeProject.select();
    }
    getMatchingDesc(data) {
        return this.element.querySelectorAll(`.section__projects__description[data-tab='${data}']`);
    }
    updatePan(buttonClicked) {
        console.log(this.shiftloc)
        if (buttonClicked.dataset.tab === 'right' && this.pushloc === this.project.length) {
            // Implement Looping going Right
            this.hideAll();
            this.activePanProjects = this.project.slice(0, this.project.length - this.panhide);
            this.init();
            this.pushloc = this.project.length - this.panhide;
            this.shiftloc = 0;
        } else if (buttonClicked.dataset.tab === 'right' && this.pushloc < this.project.length) {
            this.activePanProjects.shift().hide();
            this.activePanProjects.push(this.project[this.pushloc]);
            if (window.innerWidth < 500) this.updateActive(this.project[this.pushloc]); //for Mobile Browsers Auto Show Description
            this.project[this.pushloc + 1]
            this.init();
            this.pushloc++;
            this.shiftloc++;
        } else if (buttonClicked.dataset.tab === 'left' && this.shiftloc > 0) {
            this.activePanProjects.pop().hide();
            this.activePanProjects.unshift(this.project[this.shiftloc - 1]);
            if (window.innerWidth < 500) this.updateActive(this.project[this.shiftloc - 1]); //for Mobile Browsers Auto Show Description
            this.pushloc--;
            this.shiftloc--;
            this.init();
        } else if (buttonClicked.dataset.tab === 'left' && this.shiftloc === 0) {
            // implement looping going left
            this.hideAll();
            this.activePanProjects = this.project.slice(this.panhide, this.project.length);
            this.pushloc = 0;
            this.shiftloc = this.panhide;
            this.init();
        } 
    }
}

class ScrollButton {
    constructor(button, parent) {
        this.element = button;
        this.pan = parent;
        this.element.addEventListener('click', () => {
            this.pan.updatePan(this.element);
        });
    }
}

class ScrollItem {
    constructor(projectBlock, parent) {
        this.element = projectBlock;
        this.pan = parent;
        this.matchingDesc = this.pan.getMatchingDesc(this.element.dataset.tab)[0];
        this.matchingDesc = new DescItem(this.matchingDesc);
        this.element.addEventListener('click', () => {
            this.pan.updateActive(this);
            this.select();
        });
    }
    select() {
        this.matchingDesc.show();
    }
    deselect() {
        this.matchingDesc.hide();
    }
    show() {
        // Show the Speciffic element when it comes into view on the pan
        this.element.classList.add('section__projects__projectBlock--show');
    }
    hide() {
        // Hide the Speciffic element when it goes out of view on the pan
        this.element.classList.remove('section__projects__projectBlock--show');
    }
}

class DescItem {
    constructor(element) {
        this.element = element;
        // console.log(this.element);
    }
    show() {
        this.element.classList.add('section__projects__description--show');
    }
    hide() {
        this.element.classList.remove('section__projects__description--show');
    }
}

let container = document.querySelectorAll('.section__projects__pan');
container = Array.from(container).map(container => new ScrollPan(container));