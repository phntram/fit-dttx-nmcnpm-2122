/**
 * Vòng lặp trong ES
 */

console.log("---------- FOR loop ----------");
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("---------- WHILE loop ----------");
let i = 0;
while (i < 10) {
  console.log(i);
  i += 2; // i = i + 2;
}

console.log("---------- DO..WHILE ----------");
let j = 9;
do {
  console.log(j);
  j -= 2; // j = j - 2;
} while (j > 0);
