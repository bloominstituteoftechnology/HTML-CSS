// let initProjects = showNumProjects => {
//   console.log('Initialized!');
//   for (let i = 0; i < showNumProjects; i++) {
//     allProjects[i].classList.remove('hide');
//   }
// };

// let shiftRight = showNumProjects => {
//   for (let i = 0; i < showNumProjects; i++) {
//     if (!allProjects[i].classList.contains('hide')) allProjects[i].classList.add('hide');
//     let projectNum = i + showNumProjects >= allProjects.length ? (i + showNumProjects) - showNumProjects.length : i + showNumProjects;
//     allProjects[projectNum].classList.remove('hide');
//   }
// };

// let allProjects = document.querySelectorAll('.projects--each');
// let numProjectsToShow = 3;

// initProjects(numProjectsToShow);
// console.log(allProjects);
// shiftRight(numProjectsToShow);
// shiftRight(numProjectsToShow);
// // console.log(allProjects);

class Projects {
  constructor(element) {
    this.element = element;
  }
}

let projects = document.querySelectorAll('.projects');
projects = Array.from(projects).map(projects => new Projects(projects));

console.log(projects);