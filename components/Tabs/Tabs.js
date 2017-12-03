class Tabs {
  constructor(tabWindows) {
    this.tabs = Array.from(document.querySelectorAll('.Tab'));
    this.activeTab = this.tabs[0];
    this.tabWindows = tabWindows;
    this.tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        this.onClickTab(tab);
        this.tabWindows.select(tab.dataset.tab);
      });
    });
  }

  select(tabNum = 1) {
    const tab = this.getTab(tabNum);
    tab.classList.add('Tab--selected');
    this.deselect(this.activeTab);
    this.activeTab = tab;
  }

  deselect(tab) {
    tab.classList.remove('Tab--selected');
  }

  getTab(tab = 1) {
    return this.tabs[tab - 1];
  }

  getTabs() {
    return this.tabs;
  }

  onClickTab(tab) {
      if (tab === this.activeTab) return;
      this.select(tab.dataset.tab);
      this.activeTab = tab; 
  }
}

class TabWindows {
  constructor() {
    this.tabWindows = Array.from(document.querySelectorAll('.Tab__window'));
    this.activeTabWindow = this.tabWindows[0];
  }

  select(tabNum = 1) {
    const tabWindow = this.getTabWindow(tabNum);
    this.deselect(this.activeTabWindow);
    this.activeTabWindow = tabWindow;
    tabWindow.classList.add('Tab__window--selected');
  }

  deselect(tabWindow) {
    tabWindow.classList.remove('Tab__window--selected');
  }

  getTabWindow(tabNum = 1) {
    return this.tabWindows[tabNum - 1];
  }

  getTabWindows() {
    return this.tabWindows;
  }
}

const tabWindows = new TabWindows();
const tabs = new Tabs(tabWindows);