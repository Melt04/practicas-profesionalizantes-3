function addNumber(num) {
  document.getElementById('result').value += num
}

function addOperator(operator) {
  document.getElementById('result').value += operator
}

function clearDisplay() {
  document.getElementById('result').value = ''
}

function calculate() {
  const value = document.getElementById('result').value
  const result = eval(value)
  document.getElementById('result').value = result
}

function onApplicationBoostrap() {
  alert(2)
}

window.addEventListener('load', onApplicationBoostrap)