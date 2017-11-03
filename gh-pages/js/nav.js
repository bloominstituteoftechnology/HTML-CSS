const mobileNav     = document.getElementsByClassName('mobile_nav')[0];
const siteNav       = document.getElementsByClassName('site_nav')[0];
const siteNavLinks  = siteNav.childNodes;
let scrollPosition  = siteNav.offsetTop;

const siteNavAdd    = (className) => { siteNav.classList.add(className) };
const siteNavRemove = (className) => { siteNav.classList.remove(className) };
const winSizeToggle = () => window.innerWidth > 450;

const fixedNav = () => {
  if (window.pageYOffset > scrollPosition 
  && winSizeToggle()) siteNavAdd('fixed-nav');
  else siteNavRemove('fixed-nav');
}
const resetNav = () => {
  if (!winSizeToggle()) siteNavRemove('fixed-nav');
}
const displayMenu = () => {
  siteNav.className.includes('showing')
    ? siteNavRemove('showing')
    : siteNavAdd('showing');
}
const hideMobile = () => {
  if (winSizeToggle()) siteNavRemove('showing');
  fixedNav();
}
siteNavLinks.forEach(a => {
  if (a.nodeName === 'A') {
    a.onclick = () => { siteNavRemove('showing') };
  }
});

mobileNav.onclick = displayMenu;
window.addEventListener('scroll', fixedNav, { passive: true });
window.addEventListener(
  'resize',
  () => { hideMobile(), resetNav() },
  { passive: true, }
);