class Tabs {
  constructor(element) {
    this.tabs = element;

    this.activeTab = null;

    this.tablinks = this.tabs.querySelectorAll(".Tabs__link-item");    
    Array.from(this.tablinks).forEach(tablink => {
      tablink.addEventListener("click", event => {
        this.updateActiveTab(event.target.dataset.tabsid);
      });
    });

    this.tablinks = Array.from(this.tablinks).reduce((object, item) => {
      object[item.dataset["tabsid"]] = item;
      return object;
    }, {});

    this.tabContents = this.tabs.querySelectorAll(".Tabs__content-item");
    this.tabContents = Array.from(this.tabContents).reduce((object, item) => {
      object[item.dataset["tabsid"]] = item;
      return object;
    }, {});

    this.setDefault();
    
  }

  setDefault() {

    let defaultTab = this.tabs.querySelector(".Tabs__link-item--default");
    if (defaultTab === undefined) {
      defaultTab = this.tabs.querySelector(".Tabs__link-item");
    }
    const tabId = defaultTab.dataset.tabsid; 
    this.updateActiveTab(tabId);

  }
  
  updateActiveTab(tabsId) {
    if (tabsId === undefined || tabsId === null) return;

    if (this.activeTab !== null) {
      this.tablinks[this.activeTab].classList.remove("Tabs__link-item--selected");
      this.tabContents[this.activeTab].classList.remove("Tabs__content-item--selected");
    }
    
    this.tablinks[tabsId].classList.add("Tabs__link-item--selected");
    this.tabContents[tabsId].classList.add("Tabs__content-item--selected");
    this.activeTab = tabsId;
      
  }

}

let allTabs = document.querySelectorAll(".Tabs");
allTabs = Array.from(allTabs).map(tabs => new Tabs(tabs));