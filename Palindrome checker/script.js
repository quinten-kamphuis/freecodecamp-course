const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const input = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultText = document.getElementById('result');

// Cleaning input
function cleanInputString(str) {

  const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
  const whitespaceRegex = /\s/g;
  return str = str.replace(punctuationRegex, '').replace(whitespaceRegex, '').toLowerCase();

}


function clickCheckButton(){
  console.log("You clicked the button!")

  const inputValue = input.value;
  const cleanInput = cleanInputString(inputValue);

  if (cleanInput == ''){
    alert("Please input a value");
  } else {
    console.log("This is your input: " + inputValue)
    console.log("This is your input cleaned: " + cleanInput)
    checkPalindrome(cleanInput);
  } 
  
}
function checkPalindrome(cleanInput){
  const inputValue = input.value;
  const cleanInputReversed = cleanInput.split('').reverse().join('');
  console.log("This is your input reversed: " + cleanInputReversed)
  if (cleanInput === cleanInputReversed){
    console.log("This is a Palindrome!")
    resultText.innerText = inputValue + ' is a palindrome';
  } else {
    console.log("This is not a Palindrome :(")
    resultText.innerText = inputValue + ' is not a palindrome';
  }
}


checkButton.addEventListener('click', clickCheckButton);