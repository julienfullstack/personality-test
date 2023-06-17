function hideResultsAndError() {
  document.getElementById("cat").setAttribute("class", "hidden");
  document.getElementById("elephant").setAttribute("class", "hidden");
  document.getElementById("monkey").setAttribute("class", "hidden");
  document.getElementById("owl").setAttribute("class", "hidden");
  document.getElementById("dog").setAttribute("class", "hidden");
} 



window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  hideResultsAndError();

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const colorVal = parseInt(document.getElementById("color").value);
    const beverageVal = parseInt(document.getElementById("beverage").value);
    const locationVal = parseInt(document.getElementById("location").value);
    const hobbyVal = parseInt(document.getElementById("hobby")).value;
    ans= colorVal + beverageVal + locationVal + hobbyVal;

    if( ans >= 0){
      document.getElementById("cat").removeAttribute("class");
      document.getElementById("elephant").removeAttribute("class");
      document.getElementById("owl").removeAttribute("class");
      document.getElementById("monkey").removeAttribute("class");
      document.getElementById("dog").removeAttribute("class");
  )}