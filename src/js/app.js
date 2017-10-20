class CurrentState {
  constructor(nav, content) {
    this.last = 'about';
    this.nav = nav;
    this.content = content;
    this.initializeDefaultState();
  }

  setCurrent(navClicked) {
    console.log(navClicked);
    document
      .querySelector(`.content__page[data-page='${navClicked}']`)
      .classList.remove('hidden');
    this.setLast(navClicked);
  }

  setLast(last) {
    this.removeLast(this.last);
    this.last = last;
  }

  removeLast(last) {
    document
      .querySelector(`.content__page[data-page='${last}']`)
      .classList.add('hidden');
  }
  initializeDefaultState() {
    for (let i = 1; i < this.nav.length; i++) {
      content[i].classList.add('hidden');
    }
  }
}

class SelectedContent {
  constructor(nav, content) {
    this.nav = nav;
    this.content = content;
    this.nav.addEventListener('click', () => {
      currentState.setCurrent(this.nav.dataset.link);
    });
  }
}

let nav = document.querySelectorAll('.link__item');
let content = document.querySelectorAll('.content__page');
let currentState = new CurrentState(nav, content);
let selectedContent = Array.from(nav).map((cv, i) => {
  return new SelectedContent(nav[i], content[i]);
});
