let n = 10, res= 1

for(let i = 1; i<=n ; i++){
    res = i * res
}
console.log(res)


res = 1
let j = 1
while(j <= n){
    res = j * res
    j++
}
console.log(res)


res = 1
let k = 1
do {
    res = k * res
    k++
} while (k <= n)
console.log(res)