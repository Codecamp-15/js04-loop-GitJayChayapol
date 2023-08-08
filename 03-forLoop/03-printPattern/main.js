console.log("```");
let a = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= i; j++) {
    if (j <= i) a += "*";
  }
  a += `\n`;
}
console.log(a);
console.log("```");
