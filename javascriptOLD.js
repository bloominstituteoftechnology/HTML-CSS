
class Content {
  constructor(element) {
    this.element = element;
  }

  select() {
    this.element.classList.add("content--selected");
  }

  deselect() {
    this.element.classList.remove("content--selected");
  }
}

class ButtonLink {
  constructor(element) {
    this.element = element;
    this.element.addEventListener('click', (event) => {
      event.content = this.element.dataset.nav;
    });
  };

  select() {
    this.element.classList.add("button--selected");
  }

  deselect() {
    this.element.classList.remove("button--selected");
  }
}

class NavButton {
  constructor(element) {
    this.element = element;

    // Attaches links with data-tab value as property
    this.links = element.querySelectorAll(".button");
    this.links = Array.from(this.links).reduce((obj, link) => {
      obj[link.dataset.nav] = new ButtonLink(link);
      return obj;
    }, {});

    // Attaches items with data-tab value as property
    this.items = element.querySelectorAll(".content");
    this.items = Array.from(this.items).reduce((obj, item) => {
      obj[item.dataset.nav] = new Content(item);
      return obj;
    }, {});

    // Listens for a click event in its children or self
    this.element.addEventListener('click', (event) => {
      if (event.navData) {
        this.updateActive(event.navData);
        event.stopPropagation();
      }
    })

    this.activeData = element.querySelector(".nav--default");
    this.activeData = this.activeData ? this.activeData.dataset.nav : null;
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

let buttons = document.querySelectorAll(".nav");
buttons = Array.from(buttons).map(buttons => new NavButton(buttons));