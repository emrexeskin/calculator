const express = require('express');
const path = require('path');
const calculator = require('./src/calculator');

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint for calculation
app.get('/calculate', (req, res) => {
  const { operation, a, b } = req.query;
  let result;

  switch (operation) {
    case 'add':
      result = calculator.add(Number(a), Number(b));
      break;
    case 'subtract':
      result = calculator.subtract(Number(a), Number(b));
      break;
    case 'multiply':
      result = calculator.multiply(Number(a), Number(b));
      break;
    case 'divide':
      result = calculator.divide(Number(a), Number(b));
      break;
    case 'square':
      result = calculator.square(Number(a));
      break;
    case 'power':
      result = calculator.power(Number(a), Number(b));
      break;
    case 'factorial':
      result = calculator.factorial(Number(a));
      break;
    case 'sqrt':
      result = calculator.sqrt(Number(a));
      break;
    default:
      result = 'Invalid operation';
  }

  res.send({ result });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
