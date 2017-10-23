function openNav() {
    document.querySelector('.side-nav').style.width = '250px';
    document.querySelector('body').style.marginLeft = '250px';
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}
function closeNav() {
    document.querySelector('.side-nav').style.width = '0';
    document.querySelector('body').style.marginLeft= '0';
    document.body.style.backgroundColor = 'white';
}

function openProject(evt, projectName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }
    evt.currentTarget.className += ' active';
}
document.querySelector(".defaultOpen").click();
