const numberInput = document.getElementById('number');
const convertButton = document.getElementById('convert-btn');
const output = document.getElementById('output');

const checkInput = () => {
  output.classList.remove('small');
  const number = parseInt(numberInput.value);
  console.log("Your number: " + number);

  if (!number){
    output.classList.add('small');
    output.innerText = "Please enter a valid number";
  } else if (number < 1) {
    output.classList.add('small');
    output.innerText = "Please enter a number greater than or equal to 1";
  } else if (number > 3999) {
    output.classList.add('small');
    output.innerText = "Please enter a number less than or equal to 3999";
  } else {
    convertNumeral(number);
  }

  numberInput.value = "";
};

const convertNumeral = (num) => {
  const romanNumerals = [
        { value: 1000, numeral: 'M' },
        { value: 900, numeral: 'CM' },
        { value: 500, numeral: 'D' },
        { value: 400, numeral: 'CD' },
        { value: 100, numeral: 'C' },
        { value: 90, numeral: 'XC' },
        { value: 50, numeral: 'L' },
        { value: 40, numeral: 'XL' },
        { value: 10, numeral: 'X' },
        { value: 9, numeral: 'IX' },
        { value: 5, numeral: 'V' },
        { value: 4, numeral: 'IV' },
        { value: 1, numeral: 'I' }
    ];

    let result = '';

    for (const { value, numeral } of romanNumerals) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }
    console.log("The Roman Numeral: " + result);
    output.innerText = result;
};

convertButton.addEventListener('click', checkInput);
numberInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter'){
    checkInput();
  }
});