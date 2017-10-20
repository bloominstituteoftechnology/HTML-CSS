class TabItem {
    constructor(element) {
      // attach dom element to object. Example in Tabs class
      this.element = element;
    }
  
    select() {
      this.element.classList.add('Tabs__item-selected')
    }
  
    deselect() {
      this.element.classList.remove('Tabs__item-selected')
    }
  }
  
  class TabLink {
    constructor(element, parent) {
      // attach dom element to object
      this.element = element;
      // attach parent to object
      this.tabs = parent;
      // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
      // reassign this.tabItem to be a new instance of TabItem, passing it this.tabItem
      this.tabItem = new TabItem(this.tabs.getTab(this.element.innerText));
      this.element.addEventListener('click', () => {
        this.tabs.updateActive(this);
      });
    };
  
    select() {
      this.element.classList.add('Tabs__link-selected');
      this.tabItem.select();
    }
  
    deselect() {
      this.element.classList.remove('Tabs__link-selected');
      this.tabItem.deselect();
    }
  }
  
  class Tabs {
    constructor(element) {
      this.element = element;// attaches the dom node to the object as "this.element"
      this.links = element.querySelectorAll(".Tabs__link");
      this.links = Array.from(this.links).map((link) => {
        return new TabLink(link, this);
      });
      this.activeLink = this.links[0];
      this.selectActive();
    }
  
    selectActive() {
      this.activeLink.select();
    }
  
    updateActive(newActive) {
      // deselect the old active link
      // assign the new active link
      this.activeLink.deselect();
      this.activeLink = newActive;
      this.selectActive();
    }
  
    getTab(data) {
      // use the tab item classname and the data attribute to select the proper tab
      return this.element.querySelector(`.Tabs__item[data-tab='${data}']`);
    }
  
  }
  
  const tabs = new Tabs(document.querySelector(".Tabs"));
