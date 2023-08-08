console.log("learn counting loop");

console.log("Start...");

//() = parenthesis = วงเล็บ
//{} = bracket = ปีกกา
//[] = square bracket = ก้ามปู

// for (let i = 0; i <= 20; i = i + 2) {
//   //   if (i % 2 == 0) console.log(i);
//   console.log(i);
// }

// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else if (i % 3 === 0) console.log("Fizz");
//   else console.log(i);
// }

// Skip Fizz
// for (let i = 1; i <= 20; i++) {
//   if (i % 3 === 0 && i % 5 === 0) console.log("FizzBuzz");
//   else if (i % 5 == 0) console.log("Buzz");
//   else if (i % 3 == 0) continue;
//   else console.log(i);
// }

// EX3B
// for (let i = 1; i <= 20; i++) {
//   if (i % 2 == 0) console.log(i);
//   else continue; //update ค่าและเริ่ม run loop รอบถัดไป
//   console.log("even");
// }

// let str = "";

// for (let i = 1; i <= 10; i++) {
//   if (i % 3 == 0) continue;
//   str += i;
// }
// console.log(str);

//EX5 : romove vowel (a,e,i,o,u)
let src = "codecamp";
let res = "";

//src.length ==> 8
// src[0] ==> c
// src[1] ==> o

// for (let i = 0; i < src.length; i++) {
//   //console.log(i,src[i])
//   let c = src[i];
//   let isVowel = c == "a" || c == "i" || c == "o" || c == "e" || c == "u";
//   if (isVowel) continue;
//   res = res + src[i];
//   //'' + src[0] == '' + 'c' ==> 'c'
//   //'c'+src[i] == '' + 'o' ==> 'co'
// }
// console.log(res);

//ADVANCE : Nested Loop;
//Multiplication Table

for (let i = 2; i <= 12; i++) {
  //   console.log(`${i} * 1 = ${i * 1}`);
  //   console.log(`${i} * 2 = ${i * 2}`);
  console.log(`เริ่มท่องสูตรคูณแม่ ${i}`);
  for (let j = 1; j <= 12; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
  console.log(`\n`);
}

console.log("End...");
