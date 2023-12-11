let a = 1
let b = 5
let c = 10

let D = (b*b -4 * a * c)
let t, x1, x2

if(D >= 0 ){
    t = true
    x1 = (-b + Math.sqrt(D)) / (2 * a)
    x2 = (-b - Math.sqrt(D)) / (2 * a)
    console.log("Уравнение имеет решения:", x1,x2)
}
else{
    t = false
    console.log("Уравнение не имеет решений")
}