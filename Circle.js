class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    getRadius(){
        console.log(`Radius = ${this.radius}`);
        return this.radius;
    }
    setRadius(r){
        this.radius=r;
    }
    getColor(){
        console.log(`Color = ${this.color}`);
        return this.color;
    }
    setColor(c){
        this.color=c;
    }
    toString(){
        var a = `Circle[radius=${this.radius},color=${this.color}]`;
        console.log(a);
        return a;
    }
    getArea(){
        var area=(22/7)*this.radius*this.radius;
        console.log(`Area = ${area}`);
        return area;
    }
    getCircumference(){
        var circumference=2*(22/7)*this.radius;
        console.log(`Circumference = ${circumference}`);
        return circumference;
    }
}

var circle1 = new Circle(1,"red");
circle1.getRadius();
circle1.setRadius(3);
circle1.getColor();
circle1.setColor("blue");
circle1.toString();
circle1.getArea();
circle1.getCircumference();

