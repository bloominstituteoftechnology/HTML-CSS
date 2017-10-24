class Nav {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll(".nav__li");
        this.links = Array.from(this.links).map((link) => new NavLink(link, this));
        this.selected = this.links[0];
        this.init(this.selected);
    }

    init(navLink) {
        navLink.select();
    }

    update(navLink) {
        this.selected.deselect();
        this.selected = navLink;
    }
}

class NavLink {
    constructor(link, parent) {
        this.link = link;
        this.parent = parent;
        this.view = new View(this.parent.element.querySelector(`.${this.link.dataset.tab}`));
        this.link.addEventListener('click', () => {
            this.parent.update(this);
            this.select();
        })
    }

    select() {
        this.link.classList.add("nav__li-selected");
        this.view.select();
    }

    deselect() {
        this.link.classList.remove("nav__li-selected");
        this.view.deselect();
    }
}

class View {
    constructor(view) {
        this.view = view;
    }

    select() {
        this.view.classList.remove("hide");
    }

    deselect() {
        this.view.classList.add("hide");
    }
}

let nav = document.querySelectorAll(".main");
nav = Array.from(nav).map(n => new Nav(n));