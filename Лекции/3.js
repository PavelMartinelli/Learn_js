ar1 = new Array(1,2,3);
res = ar1.hasOwnProperty("join")
console.log(res)
str1 ="a b c"
str2 = new String("")
console.log(str1 instanceof String)
console.log(str2 instanceof String)
console.log(str2 instanceof Object)

console.log(Function instanceof Object)
console.log(Object instanceof Function)

let myArr = new Array()
let arr  = myArr.__proto__.constructor(1, 2 ,3)

console.log(arr)