function hideResultsAndError() {
  document.getElementById("cat").setAttribute("class", "hidden");
  document.getElementById("elephant").setAttribute("class", "hidden");
  document.getElementById("monkey").setAttribute("class", "hidden");
  document.getElementById("owl").setAttribute("class", "hidden");
  document.getElementById("dog").setAttribute("class", "hidden");
  document.getElementById("dog").setAttribute("class", "hidden");
} 

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");
  let colorVal = parseInt(document.getElementById("color").value);
  let beverageVal = parseInt(document.getElementById("beverage").value);
  let locationVal = parseInt(document.getElementById("location").value);
  let hobbyVal = parseInt(document.getElementById("hobby")).value;
  hideResultsAndError();
});

  resetBtn.addEventListener("click", function() {
    document.getElementById("color").value = null;
    document.getElementById("beverage").value = null;
    document.getElementById("location").value = null;
    document.getElementById("hobby").value = null;
  });
  

  form.addEventListener("submit", function(event) {
    resetBtn.removeAttribute("class");
  });

  let ans= colorVal + beverageVal + locationVal + hobbyVal;
    if( ans >= 0){
      document.getElementById("cat").removeAttribute("class");
      document.getElementById("elephant").removeAttribute("class");
      document.getElementById("owl").removeAttribute("class");
      document.getElementById("monkey").removeAttribute("class");
      document.getElementById("dog").removeAttribute("class");
    };