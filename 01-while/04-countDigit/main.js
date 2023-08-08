let num = +prompt("Enter Number");
let count = 0;

if (num < 0) num = -num;

while (num >= 1) {
  count++;
  num = num / 10;
}
console.log(count);
