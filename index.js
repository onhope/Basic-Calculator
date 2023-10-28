const buttonsEl = document.querySelectorAll("button");

const inputFieldEl  =document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if(buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appeedValue(buttonValue);
    }
  });
}

function clearResult() {
  inputFieldEl.value = "";
}


function calculateResult() {
  inputFieldEl.value = eval(inputFieldEl.value);
}

function appeedValue(buttonValue) {
  inputFieldEl.value += inputFieldEl.value += buttonValue;
}