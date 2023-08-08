let num = +prompt("Enter Number");
let count = 0;
let sum = 0;
if (num < 0) num = -num;
while (num) {
  let remaider = num % 10;
  num = (num - remaider) / 10;
  sum += remaider;
  count++;
}
console.log(sum);
