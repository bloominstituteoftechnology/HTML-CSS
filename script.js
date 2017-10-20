function openNav() {
    document.querySelector(".side-nav").style.width = "250px";
    document.querySelector("body").style.marginLeft = "250px";
    document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
    document.querySelector(".side-nav").style.width = "0";
    document.querySelector("body").style.marginLeft= "0";
    document.body.style.backgroundColor = "white";
}
