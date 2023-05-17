const form = document.getElementById("form");
const campos = document.querySelectorAll(".required");
const span = document.querySelectorAll(".span-required");

function setError(index) {
  campos[index].style.border = "2px solid #e63633";
  span[index].style.display = "block";
}

function setCorrect(index) {
  campos[index].style.border = "2px solid #3CCC87";
  span[index].style.display = "none";
}

function nameValidate() {
  if (campos[0].value.length == "") {
    setError(0);
  } else {
    setCorrect(0);
  }
}

function emailValidate() {
  if (campos[1].value.length == "") {
    setError(1);
  } else {
    setCorrect(1);
  }
}

function phoneValidate() {
  if (campos[2].value.length == "") {
    setError(2);
  } else {
    setCorrect(2);
  }
}

function textAreaValidate() {
  if (campos[3].value.length == "") {
    setError(3);
  } else {
    setCorrect(3);
  }
}
