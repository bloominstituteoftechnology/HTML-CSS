const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", showMenu, true);

const flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, true);

const mouse = document.querySelector('.Mouse');
function showMenu(e) {
    menuBtn.classList.toggle("change")
    flyoutMenu.classList.add("show");
    mouse.hidden = true;
    document.body.style.overflow = "hidden";
}

function hideMenu(e) {
    menuBtn.classList.remove("change")
    flyoutMenu.classList.remove("show");
    mouse.hidden = false;
    e.stopPropagation()
    document.body.style.overflow = "auto";
}
window.addEventListener(
    'load',
    function load()
    {
        window.removeEventListener('load', load, false);
        document.body.classList.remove('fade-out');
    },
    false);