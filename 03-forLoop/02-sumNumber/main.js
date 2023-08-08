let sum = 0;

for (let i = 1; i <= 100; i++) {
  sum = sum + i;
}
console.log(`ผลรวมเลข 1 - 100 = ${sum}`);

let sum1 = 0;
for (let n = 1; n <= 100; n++) {
  if (n % 2 == 0) sum1 = sum1 + n;
}
console.log(`ผลรวมเลขที่หารเฉพาะเลขคู่ = ${sum1}`);

let sum2 = 0;
for (let a = 1; a <= 100; a++) {
  if (a % 2 != 0) sum2 = sum2 + a;
}
console.log(`ผลรวมเลขที่หารเฉพาะเลขคี่ = ${sum2}`);

let sum3 = 0;
let sum4 = 0;
for (let b = 1; b <= 100; b++) {
  for (let c = 2; c <= 2; c++) {
    if (b % 2 == 0) sum3 = sum3 + b ** c;
    if (b % 3 == 0) sum4 = sum4 + b ** c;
  }
}
console.log(`ผลรวม = ${sum3 - sum4}`);
