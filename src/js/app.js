class SelectedContent {
  constructor(nav, content) {
    this.nav = nav;
    this.content = content;
    this.nav.addEventListener('mouseover', () => {
      console.log(this.nav.innerText);
    });
  }




}

let nav = document.querySelectorAll('.link__item');
let content = document.querySelectorAll('.content__page');
let selectedContent = Array.from(nav).map((cv, i) => {
  return new SelectedContent(nav[i], content[i]);
});

console.log(selectedContent);