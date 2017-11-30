class Tabs {
  constructor() {
    this.tabs = Array.from(document.querySelectorAll('.Tab'));
  }

  select(tab = 1) {
    const tab = this.tabs[tab-1];

  }

  getTab(tab = 1) {
    return this.tabs[tab - 1];
  }

  init() {
    this.select(1);
  }
}

class TabWindows {
  constructor() {
    this.tabWindows = Array.from(document.querySelectorAll('.Tab__window'));
  }

  select(tab = 1) {
    const tabWindow = this.getTabWindow(tab);
  }

  deselect(tab = 1) {

  }

  getTabWindow(tab = 1) {
    return this.tabWindows[tab - 1];
  }

  init() {
    this.select(1);
  }
}

const Tabs = new Tabs();
const TabWindows = new TabWindows();
Tabs.init();
TabWindows.init();