const init = () => {
    
  class TabItem {
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
    constructor(element, parent) {
      this.element = element;
      this.tabs = parent;
      this.tabItem = this.tabs.getTab(this.element.dataset.tab);
      this.tabItem = new TabItem(this.tabItem);
      this.element.addEventListener('click', () => {
        this.tabs.updateActive(this);
        this.select();
      });
    };
  
    select() {
      this.tabItem.select();
      this.element.classList.add("Tabs__link-selected");
    }
  
    deselect() {
      this.tabItem.deselect();
      this.element.classList.remove("Tabs__link-selected");
    }
  }
  
  class Tabs {
    constructor(element) {
      this.element = element;
      this.links = element.querySelectorAll(".Tabs__link");
      this.links = Array.from(this.links).map((link) => {
        return new TabLink(link, this);
      });
      this.activeLink = this.links[0];
      this.init();
    }
  
    init() {
      this.activeLink.select();
    }
  
    updateActive(newActive) {
      this.activeLink.deselect();
      this.activeLink = newActive;
    }
  
    getTab(data) {
      return this.element.querySelector(`.Tabs__item[data-tab="${data}"]`);
    }
  
  }
  let tabs = document.querySelectorAll(".Tabs");
  tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
    
    
    // http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
  window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();
  
  // main function
  function scrollToY(scrollTargetY, speed, easing) {
      // scrollTargetY: the target scrollY property of the window
      // speed: time in pixels per second
      // easing: easing equation to use
  
      var scrollY = window.scrollY || document.documentElement.scrollTop,
          scrollTargetY = scrollTargetY || 0,
          speed = speed || 2000,
          easing = easing || 'easeOutSine',
          currentTime = 0;
  
      // min time .1, max time .8 seconds
      var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));
  
      // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
      var easingEquations = {
              easeOutSine: function (pos) {
                  return Math.sin(pos * (Math.PI / 2));
              },
              easeInOutSine: function (pos) {
                  return (-0.5 * (Math.cos(Math.PI * pos) - 1));
              },
              easeInOutQuint: function (pos) {
                  if ((pos /= 0.5) < 1) {
                      return 0.5 * Math.pow(pos, 5);
                  }
                  return 0.5 * (Math.pow((pos - 2), 5) + 2);
              }
          };
  
      // add animation loop
      function tick() {
          currentTime += 1 / 60;
  
          var p = currentTime / time;
          var t = easingEquations[easing](p);
  
          if (p < 1) {
              requestAnimFrame(tick);
              window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
          } else {
                window.scrollTo(0, scrollTargetY);
          }
      }
  
      // call it once to get started
      tick();
  }
    
    
    const homeBtn = document.getElementById("home-btn");
    const aboutBtn = document.getElementById("about-btn");
    const projectsBtn = document.getElementById("projects-btn");
    const contactBtn = document.getElementById("contact-btn");
    const sectionHome = document.getElementById("home");
    const sectionAbout = document.getElementById("about");
    const sectionProjects = document.getElementById("projects");
    const sectionContact = document.getElementById("contact");
    
    homeBtn.addEventListener('click', () => {
      scrollToY(0, 1500, 'easeInOutQuint');
    }, false);
    aboutBtn.addEventListener('click', () => {
      scrollToY(sectionHome.offsetHeight, 1500, 'easeInOutQuint');
    }, false);
    projectsBtn.addEventListener('click', () => {
      const posY = sectionHome.offsetHeight + sectionAbout.offsetHeight;
      scrollToY(posY, 1500, 'easeInOutQuint');
    }, false);
    contactBtn.addEventListener('click', () => {
      const posY = sectionHome.offsetHeight + sectionAbout.offsetHeight + sectionProjects.offsetHeight;
      scrollToY(posY, 1500, 'easeInOutQuint');
    }, false);
    
  }  // <-- init