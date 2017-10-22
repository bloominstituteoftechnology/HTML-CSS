function openContent(event, content) {
  navcontent = document.getElementsByClassName("content-active");
  for (let i = 0; i < navcontent.length; i++) {
    navcontent[i].className = navcontent[i].className.replace("-active", "-hidden");
  }
  navlinks = document.getElementsByClassName("navbutton-active");
  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].className = navlinks[i].className.replace("-active","");
  }
  document.getElementById(content).className = "content-active";
  event.currentTarget.className = "navbutton-active";
}