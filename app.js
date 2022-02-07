const { timeStamp } = require("console");

//0 1  2   3    4     5      6       7        8
const DIGITS_POWER = [
  1, 10, 100, 1000, 10000, 100000, 1000000, 10000000, 100000000,
];

const generateTOTP = (key, time, returnDigits, crypto = "HmacSHA1") => {
  
  returnDigits = parseInt(returnDigits);
  let result = null;

  while (time.length < 16) time = "0" + time;

  console.log(typeof returnDigits, time, result);
};

let T0 = 0;
let X = 30;

generateTOTP("dfa", "4226", "4");

function main(seed, time, T0 = 0, X = 30) {
  let steps = "0";
}
