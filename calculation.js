function Celsius() {
  let celsius = document.getElementById("celsius").value;
  let fat = (celsius * 9) / 5 + 32;
  document.getElementById("fahrenheit").value = fat;
}
function Fahrenheit() {
  let fahrenheit = document.getElementById("fahrenheit").value;
  let celsius = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("celsius").value = celsius;
}
