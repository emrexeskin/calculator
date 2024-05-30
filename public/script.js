function clearDisplay() {
  document.getElementById('display').value = '';
}

function appendToDisplay(value) {
  document.getElementById('display').value += value;
}


function deleteFromDisplay() {
  const display = document.getElementById('display');
  display.value = display.value.slice(0, -1);
}

async function calculate() {
  const display = document.getElementById('display');
  const expression = display.value;
  const [a, operator, b] = expression.split(/([+\-*/])/);
  const operationMap = {
    '+': 'add',
    '-': 'subtract',
    '*': 'multiply',
    '/': 'divide',
  };
  const operation = operationMap[operator];

  try {
    const response = await fetch(`/calculate?operation=${operation}&a=${a}&b=${b}`);
    const data = await response.json();
    display.value = data.result;
  } catch (error) {
    display.value = 'Error';
  }
}

async function square() {
  const display = document.getElementById('display');
  const value = display.value;

  try {
    const response = await fetch(`/calculate?operation=square&a=${value}`);
    const data = await response.json();
    display.value = data.result;
  } catch (error) {
    display.value = 'Error';
  }
}

async function factorial() {
  const display = document.getElementById('display');
  const value = display.value;

  try {
    const response = await fetch(`/calculate?operation=factorial&a=${value}`);
    const data = await response.json();
    display.value = data.result;
  } catch (error) {
    display.value = 'Error';
  }
}

async function sqrt() {
  const display = document.getElementById('display');
  const value = display.value;

  try {
    const response = await fetch(`/calculate?operation=sqrt&a=${value}`);
    const data = await response.json();
    display.value = data.result;
  } catch (error) {
    display.value = 'Error';
  }
}

async function power() {
  const display = document.getElementById('display');
  const values = display.value.split('^');
  const base = values[0];
  const exponent = values[1];

  try {
    const response = await fetch(`/calculate?operation=power&a=${base}&b=${exponent}`);
    const data = await response.json();
    display.value = data.result;
  } catch (error) {
    display.value = 'Error';
  }
}

module.exports = {
  clearDisplay,
  appendToDisplay,
  deleteFromDisplay,
  calculate,
  square,
  factorial,
  sqrt,
  power
};