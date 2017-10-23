let initProjects = (projects, showNumProjects) => {                    // Display first sNP projects (site loads with all projects hidden)
  for (let i = 0; i < showNumProjects; i++) {              // Loop sNP times
    projects[i].classList.remove('hide');               // Display project i
  }
};

// let compileProjectArray = (numProjects) => {
//   let projectCount = allProjects.length;                   // Used to replace duplicate length calculations below
//   let arrayOfProjects = [];

//   for (let i = 0; i < numProjects; i++) {                 // Loop through all projects
//     if (allProjects[i].classList.contains('hide')) {         // If project is hidden
//       arrayOfProjects[i] = 'hidden';                               // Reflect in array that project[i] is hidden
//     } else {
//       arrayOfProjects[i] = 'visible';                                // Reflect in array that project[i] is visible
//     }
//   }
//   return arrayOfProjects;
// };

let getIndexesOfVisibleProjects = (projects, numProjects, numToShow) => {
  const visibleProjects =[];

  for (let i = 0; i < numProjects; i++) {
    if (!projects[i].classList.contains('hide')) {
      visibleProjects.push(i);
      if (visibleProjects.length === numToShow) break;
    }
  }
  return visibleProjects;
};

let shiftRight = (projects, numProjects, numToShow) => {             // Shift project display right nTS projects!
  const visibleProjectsList = getIndexesOfVisibleProjects(projects, numProjects, numToShow);
  const numVisibleProjects = visibleProjectsList.length;

  if (numProjects <= numToShow) return;                              // If all projects are displayed, exit

  for (let i = 0; i < numVisibleProjects; i++) {
    projects[visibleProjectsList[i]].classList.add('hide');// ERROR: in case i === 0 & vPL[i] === 5, hides 5 (correct)
    if (visibleProjectsList[i] + numToShow <= numProjects) {   // ERROR continued: then passes this
      if (visibleProjectsList[i] + numToShow >= numProjects) break;// ERROR continued: then passes this and breaks loop
               // ERROR continued: incorrect display result: 5 was hidden, none displayed, so 6, 7 remain visible
      projects[visibleProjectsList[i] + numToShow].classList.remove('hide');
    } else {
      projects[i].classList.remove('hide');
    }
  }
  if (numVisibleProjects < numToShow) {
    for (let i = numVisibleProjects; i < numToShow; i++) {
      projects[i].classList.remove('hide');
    }
  }
};

let shiftLeft = (projects, numProjects, numToShow) => {              // Shift project display left nTS projects!
  const visibleProjectsList = getIndexesOfVisibleProjects(projects, numProjects, numToShow);
  const numVisibleProjects = visibleProjectsList.length;

  if (numProjects <= numToShow) return;                              // If all projects are displayed, exit

  for (let i = 0; i < numVisibleProjects; i++) {
    projects[visibleProjectsList[i]].classList.add('hide');
    if (visibleProjectsList[i] - numToShow >= 0) {
      projects[visibleProjectsList[i] - numToShow].classList.remove('hide');
    } else if (i === 0 && visibleProjectsList[i] === numToShow - 1) {
      // do nothing, allows for less than numToShow to display without filling gap
    } else {
      projects[numProjects - (numToShow - i)].classList.remove('hide');
    }
  }
  if (numVisibleProjects < numToShow) {
    console.log('need extra');
    for (let i = numVisibleProjects; i < numToShow; i++) {
      console.log('i:', i, '/ hidden?', projects[numProjects - i - 1].classList.contains('hide'));
      if (i === 2 /* && projects[numProjects - i - 1] !== 7 */) {          // not working right on rrl or lr
        console.log('hit it');
        projects[numProjects - 1].classList.remove('hide');
        break;
      } else {
        projects[numProjects - i - 1].classList.remove('hide');
        console.log('missed it');
      }
    }  
  }
};

// Needed: code shift left/right buttons to only display if projectCount > numProjectsToShow

const allProjects = document.querySelectorAll('.projects--each');
const projectCount = allProjects.length;
let numProjectsToShow = 3;

initProjects(allProjects, numProjectsToShow);
