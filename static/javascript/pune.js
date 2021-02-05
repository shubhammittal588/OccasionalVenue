myFunction()
function myFunction(arr) {
  var out = "";
  var i;
  for (i=0; i<arr.length; i++){
    out += '<a href="' + arr[i].url + '">' + arr[i].name + '</a><br>' ;
    out += '<a href="' + arr[i].url + '">' + arr[i].price + '</a><br>' ;
    out += '<a href="' + arr[i].url + '">' + arr[i].type + '</a><br>' ;

}

  document.getElementById("demo").innerHTML = out;
// Script to open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}
function select_city_open() {
  document.getElementById("city").style.display = "block";
}