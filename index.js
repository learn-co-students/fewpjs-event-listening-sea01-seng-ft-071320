document.addEventListener("DOMContentLoaded", function () {
  addingEventListener();
});

function addingEventListener() {
  const input = document.getElementById("input");
  input.addEventListener("click", function (event) {
    console.log("hii");
    alert("I was clicked!");
  });
}
