var tab1 = document.querySelector("#tab-content-1");

var tab2 = document.querySelector("#tab-content-2");
tab2.style.display = "none";

var tab3 = document.querySelector("#tab-content-3");
tab3.style.display = "none";

var link1 = document.querySelector("#link-1");
var link2 = document.querySelector("#link-2");
var link3 = document.querySelector("#link-3");

link1.setAttribute("style", "background-color: green;");        


link1.addEventListener("click", function() {
  link1.setAttribute("style", "background-color: green;");
  link2.setAttribute("style", "background-color: purple;");
  link3.setAttribute("style", "background-color: purple;");
  tab1.style.display = "block";
  tab2.style.display = "none";
  tab3.style.display = "none";
  });
  

link2.addEventListener("click", function() {
  link2.setAttribute("style", "background-color: green;");
  link1.setAttribute("style", "background-color: purple;");
  link3.setAttribute("style", "background-color: purple;");
  tab2.style.display = "block";
  tab1.style.display = "none";
  tab3.style.display = "none";
  });

link3.addEventListener("click", function() {
  link3.setAttribute("style", "background-color: green;");
  link2.setAttribute("style", "background-color: purple;");
  link1.setAttribute("style", "background-color: purple;");
  tab3.style.display = "block";
  tab1.style.display = "none";
  tab2.style.display = "none";
  });
 
