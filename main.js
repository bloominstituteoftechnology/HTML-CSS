class TabItem {
    constructor(element) {
        this.element = element;
    }
    select() {
        this.element.classList.add("tabs__item-selected");
    }
    deselect() {
        this.element.classList.remove("tabs__item-selected")
    }
}

class TabLink {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event) => {
           event.tabData = this.element.dataset.tab;
        });
    }
    select() {
        this.element.classList.add("tabs__link-selected");
    }
    deselect() {
        this.element.classList.remove("tabs__link-selected")
    }
}

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = this.element.querySelectorAll(".tabs__link");
        this.links = Array.from(this.links).reduce((obj, link) => {
            obj[link.dataset.tab] = new TabLink(link);
            return obj;
        }, {});
        this.items = this.element.querySelectorAll(".tabs__item");
        this.items = Array.from(this.items).reduce((obj, item) => {
            obj[item.dataset.tab] = new TabItem(item);
            return obj;
        }, {});

        this.element.addEventListener('click', (event) => {
            if (event.tabData) {
                this.updateActive(event.tabData);
                event.stopPropagation();
            }
        });

        this.initiate();
    }
    initiate() {
        let defaultElement = this.element.querySelector(".tabs__default");
        defaultElement = defaultElement ? defaultElement : this.element.querySelector(".tabs__link");
        this.activeData = defaultElement.dataset.tab;
        this.updateActive(this.activeData);
    }
    updateActive(data) {
        this.links[this.activeData].deselect();
        this.items[this.activeData].deselect();

        this.links[data].select();
        this.items[data].select();
        this.activeData = data;
    }
}


let tabs = document.querySelectorAll(".tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));