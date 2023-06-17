window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");

  form.addEventListener("submit", function(event) {
    const color = document.getElementById("color").value;
    const beverage = document.getElementById("beverage").value;
    const location = document.getElementById("location").value;
    const hobby = document.getElementById("exclamationInput").value;
    
    ans= colorVal + beverageVal + introExtroVal + coffeeTeaVal + emoLogVal;

    if( ans >= 0){
    if(ans<=8){