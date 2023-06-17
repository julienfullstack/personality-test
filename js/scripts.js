window.addEventListener("load", function() {
  let form = document.getElementById("form");
  let submit = document.querySelector("#form button[type='submit']");
  let resetBtn = document.getElementById("reset");

  submit.addEventListener("click", function(event) {
    event.preventDefault();
    hideResultsAndError();

    let colorVal = parseInt(document.getElementById("color").value, 10);
    let beverageVal = parseInt(document.getElementById("beverage").value, 10);
    let locationVal = parseInt(document.getElementById("location").value, 10);
    let hobbyVal = parseInt(document.getElementById("hobby").value, 10);

    document.getElementById("reset").removeAttribute("class");

    let ans = colorVal + beverageVal + locationVal + hobbyVal;
    if (ans >= 0) {
      displayAnimalType(ans);
    }
  });

  resetBtn.addEventListener("click", function() {
    document.getElementById("color").value = "";
    document.getElementById("beverage").value = "";
    document.getElementById("location").value = "";
    document.getElementById("hobby").value = "";
  });

  function hideResultsAndError() {
    document.getElementById("cat").classList.add("hidden");
    document.getElementById("elephant").classList.add("hidden");
    document.getElementById("monkey").classList.add("hidden");
    document.getElementById("owl").classList.add("hidden");
    document.getElementById("dog").classList.add("hidden");
  }

  function displayAnimalType(ans) {
    switch (ans) {
      case 1:
        document.getElementById("cat").classList.remove("hidden");
        break;
      case 2:
        document.getElementById("elephant").classList.remove("hidden");
        break;
      case 3:
        document.getElementById("monkey").classList.remove("hidden");
        break;
      case 4:
        document.getElementById("dog").classList.remove("hidden");
        break;
      case 5:
        document.getElementById("owl").classList.remove("hidden");
        break;
      default:
        break;
    }
  }
});