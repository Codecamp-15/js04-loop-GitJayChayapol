// let num = prompt("Enter your magic number");
// let ansNumber = "";
// let isValid = ansNumber == null || ansNumber.trim() === "" || isNan(ansNumber);
// let outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
// let isInRange = Number(ansNumber) >= 1 && Number(ansNumber) <= 99;

// if (isValid) {
//   alert("Invalid Input");
// } else if (outOfRange) {
//   alert("Invalid Range");
// } else if (isInRange) {
//   alert("Try to guess number");
// }

//program I

let ansNumber = "";
let isEmpty;
let isNan;
let outOfRange;

do {
  ansNumber = prompt("Enter you magic Number");
  isEmpty = ansNumber.trim() === "";
  isNan = isNaN(ansNumber);
  outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
  if (isEmpty || isNan) {
    alert("Invalid Input. Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range. Try 1-99");
  }
} while (isEmpty || isNan);

//program 2
// - ทายซ้ำ
// - Hint OutOfRange
// = Hint Invalid Range
// = Hint Too High , Too Low
// = Alert You win
// - ทายได้ไม่เกิน 5 ครั้ง
let count = 0;
let guessNumber = "";
do {
  guessNumber = prompt("Enter you answer") || "";
  isEmpty = ansNumber.trim() === "";
  isNan = isNaN(ansNumber);
  outOfRange = Number(ansNumber) < 1 || Number(ansNumber) > 99;
  if (isEmpty || isNan) {
    alert("Invalid Input. Try 1-99");
  } else if (outOfRange) {
    alert("Invalid Range. Try 1-99");
  } else if (+guessNumber > +ansNumber) {
    alert("Too High");
  } else if (+guessNumber < +ansNumber) {
    alert("Too Low");
  } else if (+guessNumber == +ansNumber) {
    alert("You Win");
  } else if (countt > 5) coninue;
} while (+guessNumber != ansNumber);
