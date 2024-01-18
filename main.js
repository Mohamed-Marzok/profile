let checkboxes = document.querySelectorAll("input[type='checkbox']");
let body = document.querySelector("body");
let dark = document.querySelector(".dark");
[...checkboxes].forEach(function (box) {
  box.addEventListener("click", function (e) {
    let icon = box.closest("label").querySelector("ion-icon");
    icon.classList.toggle("active");
  });
});
dark.addEventListener("click", function () {
  if (dark.checked == true) {
    body.classList.add("dark-mode");
  } else {
    body.classList.remove("dark-mode");
  }
});
