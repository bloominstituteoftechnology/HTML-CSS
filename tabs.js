/*class TabItem {
    constructor(element) {
        this.element = element;
    }


select() {
    this.element.classList.add("Tabs__item-selected");
  }

deselect() {
    this.element.classList.remove("Tabs__item-selected");
  }
}

class TabLink {
    constructor(element) {
        this.element = element;
        this.element.addEventListener('click', (event)=> {
            event.tabData = this.element.dataset.tab;
        });
    };

select() {
    this.element.classList.add("Tabs__link-selected");
  }

deselect() {
    this.element.classList.remove("Tabs__link-selected");
  }
}

class Tabs {
    constructor(element) {
        this.element = element;
        this.links = element.querySelectorAll(".Tabs__link");
        this.links = Array.from(this.links).reduce((obj, link) => {
            obj[link.dataset.tab] = new TabLink(link);
            return obj;
        }, {});
        this.items = element.querySelectorAll(".Tabs__item");
        this.items = Array.from(this.items).reduce((obj, item) => {
            obj[item.dataset.tab] = new TabItem(item);
        }, {});
        this.element.addEventListener('click', (event) => {
            if (event.tabData) {
                this.updateActive(event.tabData);
                event.stopPropagation();
            }
        })
        this.activeData = element.querySelector(".Tabs__default");
        this.activeData = this.activeData ? this.activeData.dataset.tab : null;
        this.updateActive(this.activeData);
    }

  updateActive(data) {
      if (data === null) return;
      if (this.activeData) {
          this.links[this.activeData].deselect();
          this.items[this.activeData].deselect();
      }
      this.links[data].select();
      this.items[data].select();
      this.activeData = data;
    }
}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));*/

class TabItem {
    constructor(element) {
      // attach dom element to object. Example in Tabs class
      this.element = element;
    }
  
    select() {
      this.element.classList.add('Tabs__item-selected'); // should use classList
    }
  
    deselect() {
      this.element.classList.remove('Tabs__item-selected'); // should use classList
    }
  }
  
  class TabLink {
    constructor(element, parent) {
      this.element = element; // attach dom element to object
      this.tabs = parent; // attach parent to object
      this.tabItem = this.tabs.getTab(this.element.dataset.tab); // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
      this.tabItem = new TabItem(this.tabItem); // reassign this.tabItem to be a new instance of TabItem, passing it this.tabItem
      this.element.addEventListener('click', () => {
        this.tabs.updateActive(this);
        this.select();
      });
    };
  
    select() {
      this.element.classList.add('Tabs__link-selected') // select this link
      this.tabItem.select(); // select the associated tab
    }
  
    deselect() {
      this.element.classList.remove('Tabs__link-selected')  // deselect this link
      this.tabItem.deselect(); // deselect the associated tab
    }
  }
  
  class Tabs {
    constructor(element) {
      this.element = element; // attaches the dom node to the object as "this.element"
      this.links = element.querySelectorAll('.Tabs__link');
      this.links = Array.from(this.links).map((link) => {
        return new TabLink(link, this);
      });
      this.activeLink = this.links[0];
      this.init();
    }
  
    init() {
      this.activeLink.select(); // select the first link and tab upon ititialization
    }
  
    updateActive(newActive) {
      this.activeLink.deselect();  // deselect the old active link
      this.activeLink = newActive; // assign the new active link
    }
  
    getTab(data) {
      return this.element.querySelector(`.Tabs__item[data-tab = '${data}']`);  // use the tab item classname and the data attribute to select the proper tab
    }
  
  }
  
  let tabs = document.querySelectorAll(".Tabs");
  tabs = Array.from(tabs).map(tabs => new Tabs(tabs)); 