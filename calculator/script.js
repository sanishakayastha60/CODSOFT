function display(val) {
  document.getElementById('display').innerText += val;
}
function solve() {
  let x = document.getElementById('display').innerText;
  let y = eval(x);
  document.getElementById('display').innerText = y;
}
function clr()
{
  document.getElementById('display').innerText=''
}
function backspace() {
  var value = document.getElementById('display').innerText;
  document.getElementById('display').innerText = value.substr(
    0,
    value.length - 1
  );
}
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".dark");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};
