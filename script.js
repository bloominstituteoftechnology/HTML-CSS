const menuBtn = document.querySelector("#menu-btn");
menuBtn.addEventListener("click", showMenu, false);

const flyoutMenu = document.querySelector("#flyoutMenu");
flyoutMenu.addEventListener("click", hideMenu, false);

function showMenu(e) {
    flyoutMenu.classList.add("show");
    document.body.style.overflow = "hidden";
}

function hideMenu(e) {
    flyoutMenu.classList.remove("show");
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