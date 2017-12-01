class TabItem {
	constructor(element) {
		// attach dom element to object. Example in Tabs class
		this.element = element;
	}

	select() {
		// should use classList
		this.element.classList.add('Tabs__item-selected');
	}

	deselect() {
		// should use classList
		this.element.classList.remove('Tabs__item-selected');
	}
}

class TabLink {
	constructor(element, parent) {
		this.element = element; // attach dom element to object
		this.tabs = parent; // attach parent to object
		this.tabItem = this.tabs.getTab(this.element.dataset); // assign this to the associated tab using the parent's "getTab" method by passing it the correct data
		this.tabItem = new TabItem(this.tabItem); // reassign this.tabItem to be a new instance of TabItem, passing it this.tabItem
		this.element.addEventListener('click', () => {
			this.tabs.updateActive(this);
			this.select();
		});
	};

	select() {
		// select this link
		this.element.classList.add('Tabs__link-selected');
		// select the associated tab
		this.tabItem.select();
	}

	deselect() {
		// deselect this link
		this.element.classList.remove('Tabs__link-selected');
		// deselect the associated tab
		this.tabItem.deselect();
	}
}

class Tabs {
	constructor(element) {
		this.element = element; // attaches the dom node to the object as "this.element"
		this.links = element.querySelectorAll(".Tabs__link");
		this.links = Array.from(this.links).map((link) => {
			return new TabLink(link, this);
		});
		this.activeLink = this.links[0];
		this.init();
	}

	updateActive(newActive) {
		// deselect the old active link
		this.activeLink.deselect();
		// assign the new active link
		this.activeLink = newActive;
	}

	getTab(data) {
		// use the tab item classname and the data attribute to select the proper tab
		return (document.querySelector(`.Tabs__item[data-tab="${data.tab}"]`));
	}
}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
