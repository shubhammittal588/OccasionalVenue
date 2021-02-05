
function openPage(){
  let x = document.getElementById('search').value;

  if (x === "bangalore"){
    window.open("banglore.html");
  }
  if (x === "delhi"){
    window.open("delhi.html");
  }
  if (x === "pune"){
    window.open("pune.html");
  }
  if (x === "hyderabad"){
    window.open("hyderabad.html");
  }
  if (x === "mumbai"){
    window.open("mumbai.html");
  }
  else {
    let s4 = "No such place found";
    document.getElementById("search").value = s4;
  }
}
// Script to open and close sidebar
function w3_open() {
document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
document.getElementById("mySidebar").style.display = "none";
}