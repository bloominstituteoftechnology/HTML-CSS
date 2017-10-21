let initProjects = showNumProjects => {
  for (let i = 0; i < showNumProjects; i++) {
    allProjects[i].classList.remove('hide');
  }
};

let shiftRight = showNumProjects => {                      // Shift project display right!
  let projectCount = allProjects.length;                   // Replace duplicate length calculations
  
  if (projectCount <= showNumProjects) return;             // If all projects are displayed, exit

  for (let i = 0; i < projectCount; i++) {                 // Loop to adjust visible projects
    if (!allProjects[i].classList.contains('hide')) {      // If the current project is not hidden
      if (projectCount - i > showNumProjects) {            // If displayed projects includes last project in list
        for (let j = i; j < i + showNumProjects; j++) {    // Start at i and loop over sNP displayed items
          allProjects[j].classList.add('hide');            // Hide project j
          if (j + showNumProjects < projectCount) {        // If next to display is before list end
            allProjects[j + showNumProjects].classList.remove('hide');  // Show project j + sNP
          }
        }
        break;                                             // All done, exit
      } else {                                             // Display did not include last project in list
        let showMissing = 0;                               // Track # shown to determine # missing from last display
        for (let j = 0; j < projectCount - i; j++) {       // loop through visible projects
          allProjects[i + j].classList.add('hide');        // Hide project i + j
          allProjects[j].classList.remove('hide');         // Show project j
          showMissing++;                                   // Increment number of projects showing for calculation later
        }
        for (let j = showMissing; j < showNumProjects; j++) {   // Loop over # of projects missing from last display
          allProjects[j].classList.remove('hide');              // Display next hidden project
        }
      }
    }
  }
};

let shiftLeft = showNumProjects => {                       // Shift project display left!
  let projectCount = allProjects.length;                   // Replace duplicate length calculations
  
  if (projectCount <= showNumProjects) return;             // If all projects are displayed, exit

  for (let i = 0; i < projectCount; i++) {                 // Loop to adjust visible projects
    if (!allProjects[i].classList.contains('hide')) {      // If the current project is not hidden
      if (projectCount - i > showNumProjects) {            // If displayed projects includes last project in list
        for (let j = i; j < i + showNumProjects; j++) {    // Start at i and loop over sNP displayed items
          allProjects[j].classList.add('hide');            // Hide project j
          if (j + showNumProjects < projectCount) {        // If next to display is before list end
            allProjects[j + showNumProjects].classList.remove('hide');  // Show project j + sNP
          }
        }
        break;                                             // All done, exit
      } else {                                             // Display did not include last project in list
        let showMissing = 0;                               // Track # shown to determine # missing from last display
        for (let j = 0; j < projectCount - i; j++) {       // loop through visible projects
          allProjects[i + j].classList.add('hide');        // Hide project i + j
          allProjects[j].classList.remove('hide');         // Show project j
          showMissing++;                                   // Increment number of projects showing for calculation later
        }
        for (let j = showMissing; j < showNumProjects; j++) {   // Loop over # of projects missing from last display
          allProjects[j].classList.remove('hide');              // Display next hidden project
        }
      }
    }
  }
};

const allProjects = document.querySelectorAll('.projects--each');
let numProjectsToShow = 3;

initProjects(numProjectsToShow);
