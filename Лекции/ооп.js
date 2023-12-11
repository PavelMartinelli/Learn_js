function Car(color, price){
    this.color = color
    if (price > 100)
        this.price = price
    else
        this.price = 100
}
Car.prototype.run = function (speed){
    console.log("The", this.color, "car speed =", speed)
}
Car.prototype.get_info = function (){
    console.log("Color =", this.color, "Price =", this.price)
}

function Lorry(color, price, weight){
    this.weight = weight
    Car.call(this)
}

Lorry.prototype.pick_up = function (weight) {
    if (weight > this.weight)
        console.log("Невозможно груз слишком тяжелый")
    else
        console.log("Перевезено", weight, "килограм")
}

let MyCar = new Car("red", 20)
let MyLorry = new  Lorry("blue", 10, 200)

MyCar.run(50)
MyCar.get_info()

MyLorry.pick_up(200)

var foo = {
    bar: function() { return this.baz; },
    baz: 1
};
(function(){
    return typeof arguments[0]();
})(foo.bar);
/* this определяется в момент вызова а не в момент декларации функции*/