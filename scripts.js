let initProjects = showNumProjects => {
  console.log('Initialized!');
  for (let i = 0; i < showNumProjects; i++) {
    allProjects[i].classList.remove('hide');
  }
};

let shiftRight = showNumProjects => {
  let projectCount = allProjects.length;        // Eliminate repeated length calculations
  
  if (projectCount <= showNumProjects) return;  // There are no more projects than what is shown, return
  for (let i = 0; i < projectCount; i++) {      // Adjust visible projects, starting from 0
    if (!allProjects[i].classList.contains('hide')) {  // If the current project is not hidden
      
      // found a visible project. Now I need to move that non-hide and the next sNP minus 1 to the right
      // assuming showNumProjects = 3 for now
      // for loop from i to < i + 3 (wrapped)
      // hide the left one
      // unhide the left + 3 one
      // loop
      if (projectCount - i <= showNumProjects) {       // if list end was showing
        let showMissing = 0;                           // Keep track of number shown to determint missing after
        for (let j = 0; j < projectCount - i; j++) {   // loop through showing
          allProjects[i + j].classList.add('hide');    // Hide project i + j
          allProjects[j].classList.remove('hide');     // Show project j
          showMissing++;                               // Increment number showing for missing calc later
        }
        for (let j = showMissing; j < showNumProjects; j++) {   // Loop over number missing in last display
          allProjects[j].classList.remove('hide');              // Display next hidden project
        }
      } else {                                             // Display did not include list end
        for (let j = i; j < i + showNumProjects; j++) {    // Start at i and loop over 3 displayed items
          allProjects[j].classList.add('hide');            // Hide j
          if (j + showNumProjects < projectCount) {        // If next to display is before list end
            allProjects[j + showNumProjects].classList.remove('hide');  // Show project j + sNP
          }
        }
        break;  // will this exit fully?
      }
    }
  }
};

const allProjects = document.querySelectorAll('.projects--each');
let numProjectsToShow = 3;

initProjects(numProjectsToShow); // 0, 1, 2
shiftRight(numProjectsToShow);   // 3, 4, 5
shiftRight(numProjectsToShow);   // 6
shiftRight(numProjectsToShow);   // should show 0,1,2
// shiftRight(numProjectsToShow);


// setTimeout(function() {
//   console.log(i);
// }, 2000);



// class Projects {
//   constructor(element) {
//     this.element = element;
//   }

//   init(numToShow) {
//     console.log('initialized!');
//     for (let i = 0; i < showNumProjects; i++) {
//       projects[i].classList.remove('hide');
//     }
//   }
// }

// let projects = document.querySelectorAll('.projects');
// let numProjectsToShow = 3;

// projects = Array.from(projects).map(projects => new Projects(projects));
// projects.init(numProjectsToShow);

// console.log(projects);