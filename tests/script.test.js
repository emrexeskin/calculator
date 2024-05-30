const { JSDOM } = require('jsdom');
const dom = new JSDOM();
global.document = dom.window.document;

const script = require('../public/script'); // adjust the path to your script file
const fetch = require('node-fetch');
jest.mock('node-fetch');
const { Response } = jest.requireActual('node-fetch');

beforeEach(() => {
    const input = document.createElement('input');
    input.id = 'display';
    document.body.appendChild(input);
  });
  
test('clearDisplay', () => {
    document.getElementById('display').value = '123';
    script.clearDisplay();
    expect(document.getElementById('display').value).toBe('');
  });

  test('appendToDisplay', () => {
    script.appendToDisplay('123');
    expect(document.getElementById('display').value).toBe('123');
  });

  test('deleteFromDisplay', () => {
    document.getElementById('display').value = '123';
    script.deleteFromDisplay();
    expect(document.getElementById('display').value).toBe('12');
  });
