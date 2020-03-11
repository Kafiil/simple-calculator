function reset() {
  document.calc.txt.value = "";
}

function calculate() {
  try {
    document.calc.txt.value = eval(document.calc.txt.value);
  } catch (error) {
    reset();
  }
}
Array.from(document.getElementsByClassName("num")).forEach(element => {
  element.addEventListener("click", () => {
    document.calc.txt.value += element.attributes.getNamedItem(
      "data-value"
    ).value;
  });
});
