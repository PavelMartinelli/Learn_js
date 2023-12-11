function Radius_Vector(x, y){
    this.x = x
    this.y = y

    this.get_polar_coordinates = function get_polar_coordinates(){
        let r = this.v_length()
        let q = this.x / r
        console.log("Полярный радиус = ", r, "Полярный угол = ", q)
    }

    this.v_length = function v_length(){
        return Math.sqrt(this.x**2 +this.y**2)
    }

    this.get_perpendicular_vector = function get_perpendicular_vector(){
        let x1 = -this.x
        let y1 = -this.y
        console.log("Радиус векторы перепндикулярные данному имеют координаты: (", x1,";",this.y, ") и (", this.x,";",y1, ")")
    }
}

r1 = new Radius_Vector(3,4)
r2 = new Radius_Vector(15, 25)
console.log(r1.v_length())
r1.get_polar_coordinates()
r1.get_perpendicular_vector()
r1.x = 0
console.log(r1.v_length())
console.log(r2.v_length())
r2.get_polar_coordinates()
r2.get_perpendicular_vector()