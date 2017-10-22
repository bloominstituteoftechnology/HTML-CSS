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

let shiftRight = (projects, numProjects, numToShow) => {                      // Shift project display right sNP projects!
  const visibleProjectsList = getIndexesOfVisibleProjects(projects, numProjects, numToShow);
  const numVisibleProjects = visibleProjectsList.length;

  if (numProjects <= numToShow) return;             // If all projects are displayed, exit

  for (let i = 0; i < numVisibleProjects; i++) {
    projects[visibleProjectsList[i]].classList.add('hide');
    if (visibleProjectsList[i] + numToShow <= numProjects) {
      if (visibleProjectsList[i] + numToShow >= numProjects) break;
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

let shiftLeft = (projects, numProjects, numToShow) => {                      // Shift project display right sNP projects!
  const visibleProjectsList = getIndexesOfVisibleProjects(projects, numProjects, numToShow);
  const numVisibleProjects = visibleProjectsList.length;

  if (numProjects <= numToShow) return;             // If all projects are displayed, exit

  for (let i = 0; i < numVisibleProjects; i++) {
    projects[visibleProjectsList[i]].classList.add('hide');
    if (visibleProjectsList[i] - numToShow >= 0) {                               //  -  =  0
      // projects[numProjects - (numToShow - i)].classList.remove('hide');     //  -
      projects[visibleProjectsList[i] - numToShow].classList.remove('hide');
    } else if (i === 0 && visibleProjectsList[i] === numToShow - 1) {
      // if (visibleProjectsList[i] - numToShow < 0) break;
      console.log('else if');
    } else {
      // projects[visibleProjectsList[i] - numToShow].classList.remove('hide');
      projects[numProjects - (numToShow - i)].classList.remove('hide');
    }
  }
  if (numVisibleProjects < numToShow) {
    // console.log('need extra');
    for (let i = numVisibleProjects; i < numToShow; i++) {
      // console.log(i, projects[numProjects - i - 1].classList.contains('hide'));
      // if (i === 2 /* && projects[numProjects - i - 1] !== 7 */) {          // not working right on rrl or lr
        // console.log('hit it');
        // projects[numProjects - 1].classList.remove('hide');
        // break;
      // } else {
        projects[numProjects - i - 1].classList.remove('hide');
        console.log('missed it');
      // }
    }  
  }
};

  // for (let i = 0; i < projectCount; i++) {                 // Loop to adjust visible projects
  //   if (!allProjects[i].classList.contains('hide')) {      // If the current project is not hidden (it's visible)
  //     if (projectCount - i > showNumProjects) {            // If displayed projects do not include last project in list
  //       for (let j = i; j < i + showNumProjects; j++) {    // Start at i and loop over sNP displayed items
  //         allProjects[j].classList.add('hide');            // Hide project j
  //         if (j + showNumProjects < projectCount) {        // If next to display is before list end
  //           allProjects[j + showNumProjects].classList.remove('hide');  // Show project j + sNP
  //         }
  //       }
  //       break;                                             // All done, exit
  //     } else {                                             // Display includes last project in list
  //       let showMissing = 0;                               // Track # shown to determine # missing from last display
  //       for (let j = 0; j < projectCount - i; j++) {       // loop through visible projects
  //         allProjects[i + j].classList.add('hide');        // Hide project i + j
  //         allProjects[j].classList.remove('hide');         // Show project j
  //         showMissing++;                                   // Increment number of projects showing for calculation later
  //       }
  //       for (let j = showMissing; j < showNumProjects; j++) {   // Loop over # of projects missing from last display
  //         allProjects[j].classList.remove('hide');              // Display next hidden project
  //       }
  //     }
  //   }
  // }
// };

// let shiftLeft = showNumProjects => {                       // Shift project display left sNP projects!
//   let projectCount = allProjects.length;                   // Replace duplicate length calculations
  
//   if (projectCount <= showNumProjects) return;             // If all projects are displayed, exit

//   for (let i = 0; i < projectCount; i++) {                 // Loop to adjust visible projects
//     if (!allProjects[i].classList.contains('hide')) {      // If the current project is not hidden (it's visible)
//       if (i < showNumProjects) {                       //***       // If displayed projects includes first project in list
//         let hideExtra = 0;               //counter for later
//         for (let j = i; j < i + showNumProjects; j++) {    // Start at i and loop over sNP displayed items
//           allProjects[j].classList.add('hide');            // Hide project j
//           if (showNumProjects - j >= 0) {          //***         // If next to display is at or after list start
//             allProjects[projectCount - (3 - j)].classList.remove('hide'); //*** // Show project j + sNP
//           }
//         }
//         break;                                             // All done, exit
//       } else {                                             // Display did not include last project in list
//         let showMissing = 0;                               // Track # shown to determine # missing from last display
//         for (let j = i; j < i + showNumProjects; j++) {       // loop through visible projects
//           allProjects[j].classList.add('hide');        // Hide project i + j
//           allProjects[j - showNumProjects].classList.remove('hide');         // Show project j
//           showMissing++;                                   // Increment number of projects showing for calculation later
//         }
//         if (showMissing === showNumProjects) break;        // All done, exit
//         for (let j = showMissing; j < showNumProjects; j++) {   // Loop over # of projects missing from last display
//           allProjects[projectCount - j + 1].classList.remove('hide');              // Display next hidden project
//         }
//       }
//     }
//   }
// };

// Needed: code shift left/right buttons to only display if # of projects > numProjectsToShow

const allProjects = document.querySelectorAll('.projects--each');
const projectCount = allProjects.length;
let numProjectsToShow = 3;

initProjects(allProjects, numProjectsToShow);
