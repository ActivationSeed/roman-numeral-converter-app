const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputNumber = document.getElementById("output");


const checkInput = (cleaned) => {
  if(cleaned === ""){
    outputNumber.innerText = "Please enter a valid number";
    return false;
  }
  const number = parseInt(cleaned);

  if (isNaN(number)) {
    outputNumber.innerText = "Please enter a valid number";
    return false;
  }
  else if(number < 1){
    outputNumber.innerText = "Please enter a number greater than or equal to 1";
    return false;
  }
  else if(number >3999){
    outputNumber.innerText = "Please enter a number less than or equal to 3999";
    return false;
  }
  return true;
};

const romanMap = [
  { value: 1000, numeral: "M" },
  { value: 900, numeral: "CM" },
  { value: 500, numeral: "D" },
  { value: 400, numeral: "CD" },
  { value: 100, numeral: "C" },
  { value: 90, numeral: "XC" },
  { value: 50, numeral: "L" },
  { value: 40, numeral: "XL" },
  { value: 10, numeral: "X" },
  { value: 9, numeral: "IX" },
  { value: 5, numeral: "V" },
  { value: 4, numeral: "IV" },
  { value: 1, numeral: "I" }
];


const convertToRoman = (num, result = "") => {
  if (num === 0) return result;
  for (let { value, numeral } of romanMap) {
    if (num >= value) {
      return convertToRoman(num - value, result + numeral);
    }
  }
};

convertBtn.addEventListener("click", () => {
  const cleanInput = inputNumber.value.replace(/[^0-9-]/g, "");
  console.log("Clean input is: ", cleanInput);
  const isValid = checkInput(cleanInput);
  if(!isValid) return;
  const number = parseInt(cleanInput);
  const romanNumeral = convertToRoman(number);
  outputNumber.innerText = romanNumeral;
  });




