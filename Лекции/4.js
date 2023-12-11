/*res = (function(){
    console.log(arguments)
    return typeof arguments;
}) (1, 2, 3)

console.log(typeof res)
//------------------------------
let f = function g(){ return 23;};

console.log(typeof f)
//---------------------------------
res1 = (function (x){
    delete x;
    return x;
})(1);

console.log(res1)
//--------------------------------
var y = 1, x = y = typeof x;

console.log(x)
//--------------------------------
res2 =(function f(f){
    return typeof f();
})(function (){ return 1; })

console.log(res2)

var foo = {
    bar: function (){return this.baz;},
    baz: 1
};

res3 = (function (){
    return typeof  arguments[0];
})(foo.bar())

console.log(res3)

var f = (function f(){ return "1"}, function g(){return 2;})();
console.log(typeof f)

var x =1
if (function f(){}){
    x += typeof f;
}
console.log(x)*/

res4 = (function f(){
    function f(){return 1;}
    return f()
    function f(){return 2;}
})

console.log(res4)