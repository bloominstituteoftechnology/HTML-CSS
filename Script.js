class Tab {
  constructor (tabs) {
    this.tabs = tabs;
    this.link = this.tabs.querySelectorAll('.container__header-font');
    this.link = Array.from(this.link).map((link) => {
      return new TabLink(link, this);
    });

    this.activeLink = this.link[0];
    this.init();
  }

  getTab(data) {
    return this.tabs.querySelector('.container-noshow[data-tab = "${data}"]');
  }
  updateActive(newActive) {
    this.activeLink.deselect();

    this.activeLink = newActive;
  }
  init() {
      this.activeLink.select();
  }
}

class TabLink {
    constructor (element, parent) {
        this.element = element; 
        this.tab = parent;
        this.tabItem = new TabItem(parent.getTab(this.element.getAttribute('data-tab')));
        this.element.addEventListener('click', () => {
            this.tab.updateActive(this);
            this.select();
        });
    }

    select() {
        this.element.classList.add("container-show");
        this.tabItem.select();
    }

    deselect() {
        this.element.classList.remove("container-show");
        this.tabItem.deselect();
    }
}


class TabItem {
    constructor(element) {
      // attach dom element to object. Example in Tabs class
      this.element = element;
    }
  
    select() {
      // should use classList
     //  this.element.classList.add("Tabs__item-selected");
     this.element.classList.add("container-show");
    }
  
    deselect() {
      // should use classList
      // This.element.classList.remove("Tabs__item-selected")
      this.element.classList.remove("container-show");
    }
  }
  
let tabs = document.querySelectorAll(".container");
tabs = Array.from(tabs).map(tabs => new Tab(tabs));