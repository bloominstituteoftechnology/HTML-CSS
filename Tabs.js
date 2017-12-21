class TabItem {
    constructor(element) {
      // attach dom element to object. Example in Tabs class
      this.element = element;
      // console.log("New TabItem created", this);
    }
  
    select() {
      // should use classList
      this.element.classList.add("Tabs__item-selected");
      console.log(select());
    }
  
    deselect() {
      // should use classList
      this.element.classList.remove("Tabs__item-selected");
    }
  }
  
  class TabLink {
    constructor(element) {
      this.element = element;// attach dom element to object
      this.element.addEventListener('click', (event) => {
        console.log("a click on the link occured", event);
        event.tabData = this.element.dataset.tab;
      });
      // console.log("New TabLink created", this);
    };
  
    select() {
      // select this link
      this.element.classList.add("Tabs__link-selected");
    }
  
    deselect() {
      // deselect this link
      this.element.classList.remove("Tabs__link-selected");
    }
  }
  
  class Tabs {
    constructor(element) {
      this.element = element;// attaches the dom node to the object as "this.element"
  
      this.links = element.querySelectorAll(".Tabs__link");
      this.links = Array.from(this.links).reduce((obj, link) => {
        obj[link.dataset.tab] = new TabLink(link);
        return obj;
      }, {});
  
      this.items = element.querySelectorAll(".Tabs__item");
      this.items = Array.from(this.items).reduce((obj, item) => {
        obj[item.dataset.tab] = new TabItem(item);
        return obj;
      }, {});
  
      this.element.addEventListener('click', (event) => {
        if(event.tabData) {
          this.updateActive(event.tabData);
          event.stopPropagation();
        }
      })
  
      this.init();
      // console.log("New Tabs component created", this);
    }
  
    init() {
      let defaultElement = this.element.querySelector(".Tabs__default");
      defaultElement = defaultElement ? defaultElement : this.element.querySelector(".Tabs__link");
      this.activeData = defaultElement.dataset.tab;
      this.updateActive(this.activeData);
    }
  
    updateActive(data) {
      // deselect the old active link and item
      this.links[this.activeData].deselect();
      this.items[this.activeData].deselect();
      // assign the new active data
      this.activeData = data;
      // select the new active link and item
      this.links[this.activeData].select();
      this.items[this.activeData].select();
    }
  }
  
  // console.log("Creating Tabs");
  let tabs = document.querySelectorAll(".Tabs");
  // console.log("Tabs grabbed", tabs);
  tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
  // console.log("Tabs are created", tabs);