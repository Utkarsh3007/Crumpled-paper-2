class Paper {
    constructor(x, y,radius) {
        var option = {
        isStatic:false,
        density:17,
        resititution:0.8,
        friction:100
        }
        this.body = Matter.Bodies.circle(x, y,radius, option);
        this.body.radius=radius
        this.image=loadImage("paper.png")
        this.body.debug=true
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
    
        imageMode(CENTER)
        fill("purple")
        image(this.image,pos.x,pos.y,100,100)                           
    }
}