for (let i = 2; i <= 100; i++) {
  let count = 0;
  for (let j = 2; j <= 100; j++) {
    if (i % j == 0) {
      count = count + 1;
    }
  }
  if (count > 1) continue;
  else {
    console.log(i);
  }
}

//###############flag###################//
// for (let n = 2; n <= 100; n++) {
//   let isPrime = true;
//   for (let divider = 2; divider < n; divider++) {
//     if (n % divider == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) console.log(n);
// }
//#########################################
