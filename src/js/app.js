class CurrentState {
  constructor(nav, content) {
    this.nav = nav;
    this.content = content;
    this.initializeDefaultState();
    console.log(this.nav);
    console.log(this.content);
  }

  setCurrent(navClicked) {
    document
      .querySelector(`.content__page[data-page='${navClicked}']`)
      .classList.remove('hidden');
  }
  removeLast() {
    // document.querySelector(`.link__item[data-link='${navClicked}']`).classList.remove('hidden')
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
      // console.log(this.nav.innerText);
      // console.log(this.content.innerText);
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

// console.log(currentState);
