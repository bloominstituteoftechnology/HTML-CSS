class Tabs {
  constructor(element) {
    this.element = element;
    this.links = element.querySelectorAll('.project__tabLink');
    this.links = Array.from(this.links).map((link) => {
      return new TabLink(link, this);
    });
  }

  getTab(data) {
    return this.element.querySelector(`.project__tabLink[data-tab='${data}']`)
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabItem = this.tabs.getTab(this.element.dataset.tab);
    this.tabItem = new TabItem(this.tabItem);
    this.element.addEventListener('click', () => {
      this.select();
    });
  }

  select() {
    this.element.classList.remove('project__tabLink');
    this.tabItem.select();
  }

  deselect() {
    this.element.classList.add('project__tabLink');
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.remove('project__tabItem');
  }

  deselect() {
    this.element.classList.add('project__tabItem');
  }
}

let tabs = document.querySelectorAll('.projects--grid');
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
