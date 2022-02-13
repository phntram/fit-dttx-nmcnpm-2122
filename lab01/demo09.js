/**
 * Arrow function
 */

//Hàm truyền thống
function SayHello() {
  console.log("Hello World!");
}

SayHello();

//Cải tiến hàm truyền thống -> Gán hàm cho một đối tượng (Con trỏ hàm)
const SayHi = function () {
  console.log("Hi everybody!");
};

SayHi();

//Định nghĩa hàm mũi tên (Arrow function)
const SayWelcome = () => {
    console.log("Welcome to Introduce Software Engineering");
}

SayWelcome();

console.log("--------------------");

const Sum = (a, b) => a + b;
console.log(Sum(4, 5));

const Double = a => a * 2;
console.log(Double(4));