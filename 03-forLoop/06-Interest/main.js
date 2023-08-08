let m = 100000;
let n = 0.025;
for (let i = 1; i <= 10; i++) {
  m += m * n;
}
console.log(m);
