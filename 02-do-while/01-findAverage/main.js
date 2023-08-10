let num = "";
let isEmpty;
let isNan;
let notZero;
sum = 0;
count = 0;
avg = 0;

do {
  num = prompt("Enter your Number") || "";
  isEmpty = num.trim() === "";
  isNan = isNaN(num);
  notZero = Number(num) < 1;
  if (!(isEmpty || isNan || notZero)) {
    sum = sum + Number(num);
    count += 1;
  }
  avg = +sum / +count;
} while (!(isEmpty || isNan || notZero));
alert(`sum is ${sum}`);
alert(`average is ${avg}`);
