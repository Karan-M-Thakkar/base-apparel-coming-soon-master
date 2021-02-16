let emailInputEl = document.getElementById("email");
let submitBtnEl = document.getElementById("submitBtn");
let errorEl = document.getElementById("error");

submitBtnEl.onclick = function () {
  let emailVal = emailInputEl.value;
  let emailValArray = emailVal.split("");
  let count = 0;
  for (let char of emailValArray) {
    if (char === "@") {
      count++;
    }
  }
  if (count !== 1) {
    emailInputEl.style.border = "1px solid red";
    errorEl.classList.remove("error-display");
  } else {
    emailInputEl.style.border = "0.5px solid hsl(0, 36%, 70%)";
    errorEl.classList.add("error-display");
  }
};
