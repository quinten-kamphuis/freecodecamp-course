const results = document.getElementById('results-div');
const userInput = document.getElementById('user-input');
const phoneNumber = userInput.value;
const buttons = document.getElementById('buttons');
const clearButton = document.getElementById('clear-btn');
const checkButton = document.getElementById('check-btn');
const numberButtons = document.querySelectorAll('.numbers');
let resultGiven = false;

const updateResult = () => {
  const isValid = validateUserInput();
  if (isValid === false) {
    results.textContent = "Invalid US number: " + userInput.value;
    results.style.color = '#000000';
    setTimeout(() => {
      const words = results.textContent.split(' ');
      results.textContent = words[0];
      resultGiven = true;
      results.style.color = '#ff6666';
    }, 500);
  }
  if (isValid === true) {
    results.textContent = "Valid US number: " + userInput.value;
    results.style.color = '#000000';
    setTimeout(() => {
      const words = results.textContent.split(' ');
      results.textContent = words[0];
      resultGiven = true;
      results.style.color = '#90EE90';
    }, 500);
  }
}

const validateUserInput = () => {
  const phoneNumber = userInput.value;

  const validFormats = /^1?(\s?\(\d{3}\)\s?|\s?\d{3}\s?)-?\d{3}[\s-]?\d{4}$/;

  if (!phoneNumber.trim()) {
    alert("Please provide a phone number");
    return false;
  }

  const isValidNumber = validFormats.test(phoneNumber);

  if (isValidNumber) {
    return true;
  } else {
    return false;
  }
};

const clear = () => {
  results.textContent = '';
  userInput.value = '';
  resultGiven = false;
};

checkButton.addEventListener('click', () => {
  if (resultGiven){
    clear();
    updateResult();
  } else {
    updateResult();
  }
});
clearButton.addEventListener('click', clear);

numberButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonText = button.textContent;
    if (resultGiven) {
        clear();
        userInput.value += buttonText;
      } else {
        userInput.value += buttonText;
      }
  });
});
document.addEventListener('keypress', function (e) {
  if (!userInput.focus()) {
    userInput.focus();
  }
  if (resultGiven) {
    clear();
  }
});
document.addEventListener('keypress', function (e) {
    if (e.key == 'x') {
      clear();
    }  
});
document.addEventListener('keypress', function (e) {
    if (e.key == 'Enter') {
      updateResult();
    }  
});
userInput.addEventListener('input', (event) => {
  const enteredChar = event.data; 
  if (enteredChar && /[a-z]/i.test(enteredChar)) {
    event.target.value = event.target.value.slice(0, -1);
  }
});