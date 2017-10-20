//Hard Code version/implementation with its limitations
function changePage() {
    tabs = document.querySelectorAll(".container-noshow");
    tabArray = Array.from(tabs);
    tabArray[0].classList.remove("container-noshow");
    tabArray[0].classList.add("container__header-font2show");
    // shortcut of what I did above 
    tabArray2 = Array.from(document.querySelectorAll(".container-noimage"));
    tabArray2[0].classList.remove("container-noimage");
    tabArray2[0].classList.add("container-image");

    tabArray3 = Array.from(document.querySelectorAll(".container__nopara"));
    tabArray3[0].classList.remove("container__nopara");
    tabArray3[0].classList.add("container__para");

    tabArray4 = Array.from(document.querySelectorAll(".container__header2"));
    tabArray4[0].classList.remove("conatiner__header2");
    tabArray4[0].classList.add("container__noheader2");

}

function changePage2() {

}

function changePage3() {

}
