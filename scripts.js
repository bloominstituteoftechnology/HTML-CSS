// let projects = document.querySelector('.projects');

// let all = document.getElementsByClassName('projects--each');
// let project5 = all[4];
// project5.classList.remove('hide');

let initProjects = showNumProjects => {
  for (let i = 0; i < showNumProjects; i++) {
    allProjects[i].classList.remove('hide');
  }
};

let shiftRight = showNumProjects => {
  // for (let i = 0; i < showNumProjects; i++) {
  //   allProjects[i].classList.add('hide');
  //   allProjects[i + 3].classList.remove('hide');
  // }
  // const visible = [];
  // for (let i = 0; i < allProjects.length; i++) {
  //   if (!allProjects[i].classList.contains('hide')) visible.push(i);
  //   if (visible.length === showNumProjects) break;
  // }
  // console.log(visible);
  for (let i = 0; i < showNumProjects; i++) {
    // allProjects[visible[i]].classList.add('hide');
    if (!allProjects[i].classList.contains('hide')) allProjects[i].classList.add('hide');
    let projectNum = i + showNumProjects >= allProjects.length ? (i + showNumProjects) - 1 : i + showNumProjects;
    allProjects[projectNum].classList.remove('hide');
  }
};

let shiftLeft = showNumProjects => {
  for (let i = 0; i < showNumProjects; i++) {
    allProjects[i + showNumProjects].classList.add('hide');
    allProjects[i].classList.remove('hide');
  }
};

let allProjects = document.getElementsByClassName('projects--each');
// console.log(allProjects);
let numProjectsToShow = 3;

initProjects(numProjectsToShow);
console.log(allProjects);
shiftRight(numProjectsToShow);
console.log(allProjects);
shiftRight(numProjectsToShow);
// shiftLeft(numProjectsToShow);

let hiddenProjects = document.getElementsByClassName('hide');
// console.log(hiddenProjects);

// let visibleProjects = document.querySelectorAll('.projects--each:not(.hide)');
// console.log(visibleProjects);

// console.log(allProjects.classList !== 'projects--each.hide');
