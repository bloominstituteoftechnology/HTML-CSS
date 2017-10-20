let initProjects = showNumProjects => {
  console.log('Initialized!');
  for (let i = 0; i < showNumProjects; i++) {
    allProjects[i].classList.remove('hide');
  }
};

let shiftRight = showNumProjects => {
  let allProjects = document.getElementsByClassName('projects--each');
  // console.log(allProjects);
  for (let i = 0; i < showNumProjects; i++) {
    // remove each visible project as encountered
    if (!allProjects[i].classList.contains('hide')) allProjects[i].classList.add('hide');
    // find the corrected project number if it wraps past the right end
    let projectNum = i + showNumProjects >= allProjects.length ? (i + showNumProjects) - showNumProjects.length : i + showNumProjects;
    // console.log('sr1: ' + i, projectNum);
    // display each hidden element (limited by showNumProjects loop)
    allProjects[projectNum].classList.remove('hide');
  }
  // console.log(allProjects);
};

let shiftRight2 = showNumProjects => {
  let allProjects = document.getElementsByClassName('projects--each');
  // console.log(allProjects);
  for (let i = 0; i < showNumProjects; i++) {
    // remove each visible project as encountered
    if (!allProjects[i].classList.contains('hide')) allProjects[i].classList.add('hide');
    // find the corrected project number if it wraps past the right end
    let projectNum = i + showNumProjects >= allProjects.length ? (i + showNumProjects) - showNumProjects.length : i + showNumProjects;
    // console.log('sr2: ' + i, projectNum);
    // display each hidden element (limited by showNumProjects loop)
    allProjects[projectNum].classList.remove('hide');
  }
  // console.log(allProjects);
};

// let shiftLeft = showNumProjects => {
//   for (let i = 0; i < showNumProjects; i++) {
//     allProjects[i + showNumProjects].classList.add('hide');
//     allProjects[i].classList.remove('hide');
//   }
// };

let allProjects = document.getElementsByClassName('projects--each');
// console.log(allProjects);
let numProjectsToShow = 3;

initProjects(numProjectsToShow);
console.log(allProjects);
shiftRight(numProjectsToShow);
console.log(allProjects);

// shiftRight2(numProjectsToShow);
// shiftLeft(numProjectsToShow);

// let hiddenProjects = document.getElementsByClassName('hide');
