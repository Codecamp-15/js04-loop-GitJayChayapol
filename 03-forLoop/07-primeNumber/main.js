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
