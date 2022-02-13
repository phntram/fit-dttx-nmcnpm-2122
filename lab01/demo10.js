/**
 * Array trong ES
 */

'use strict'

console.clear();

//Khai báo mảng 1 chiều (array)
let a = [1, 2, 3, 4, 5]

console.log("Print array");
for(let i = 0; i < a.length; i++){
    console.log(a[i]);
}
console.log(a);

console.log("Print array with arrayObject method");
a.forEach(item => {
    console.log(item);
})

console.log("Revert array");
a.reverse();
console.log(a);
a.reverse();

console.log("Insert new item to array");
a.push(99);
console.log(a);

console.log("Remove item in array");
a.splice(2, 1)
console.log(a);