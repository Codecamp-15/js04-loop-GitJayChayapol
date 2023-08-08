console.log("learn while loop");

//ประเภทของ Loop
// - Condition loop ตัดสินใจว่าจะรันต่อไหม จาก Boolean
// - Counting loop ตันสินใจว่าจะรันต่อไหม จาก ตัวเลข
// - list loop ตันสินใจว่าจะรันต่อไหม จาก จำนวนของในรายการ เช่น เช็ตสต๊อกสินค้า

console.log("Starting...");

// let i = 1;

// while (i <= 20) {
//   //loop block
//   //   if (i % 3 == 0) {
//   //     console.log(i);
//   //   } else if (i % 5 == 0) {
//   //     console.log(`${i} : High Five`);
//   //   }

//   if (i % 5 == 0) {
//     console.log(`${i} : High Five`);
//   } else if (i % 3 == 0) {
//     console.log(i);
//   }

//   //   if (i % 3 != 0) {
//   //     console.log(i);
//   //   }
//   i++;
// }

//FizzBuzz >> เป็นหาร Print ต่าสตริงมา
//Range : 1-20;
//divided by 3 : PRINT Fizz
//divided by 5 : PRINT Buzz
//divided by 3 and 5 : PRINT FizzBuzz
//other : PRINT number

let i = 1;
while (i <= 20) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("Fizz");
  } else if (i % 5 == 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }

  i++;
}

console.log("End...");
