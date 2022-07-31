class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    circumference() {
        return Math.PI * this.radius * 2;
    }
    area() {
        return Math.PI * this.radius * this.radius;
    }
}

var mov = new Circle(8);


