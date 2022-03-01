/**
 * Define object literals with JSON object
 */

"use strict"
console.clear()

let a = 3
let obj_a = { a }
console.log("obj_a = ", a)

let b = 4
let obj_b = { b: b }
console.log("obj_b = ", b)

let student = {
  SID: 1,
  Name: "TramPHN",
}

console.log(student)

let arr = [
  { value: 1, name: "iPhone" },
  { value: 2, name: "iPad" },
  { value: 3, name: "macbook" },
]
console.log(arr)

//Define object look like class
let obj = {
  value: 100,
  double() {
    return this.value * 2
  },
  square: function () {
    return this.value * this.value
  },
  tripple: () => {
    return obj.value * 3 //cannot call this.value
  },
}
console.log("obj = ", obj)
console.log("get attribute value of object", obj.value)
console.log("Class double operator of object", obj.double())
console.log("Class square operator of object", obj.square())
console.log("Class tripple operator of object", obj.tripple())

// convert JSON object to String
console.log(arr)
let str_arr = JSON.stringify(arr)
console.log(str_arr)

let obj_str_arr = JSON.parse(str_arr)
console.log(obj_str_arr)

// Nested object
let list_products = [
  {
    id: 1,
    name: "iPhone",
    model: [
      {
        memory: 256,
        type: "Pro Max",
      },
      {
        memory: 512,
      },
    ],
  },
  {
    id: 2,
    name: "iPad",
  },
]

console.log(list_products)
console.log(list_products[0].model[0].type)
