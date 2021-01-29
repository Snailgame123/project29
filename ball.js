class Ball{
    constructor(x,y){
        var options={
            density:1
        }
        this.body = Bodies.circle(x,y,10,options);
        this.radius = 10;
        this.image=loadImage("hexagon.png")
        World.add(world, this.body);

    }
    display(){
        var pos =this.body.position;
        var angle=this.body.angle;
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER);
        fill("red");
        strokeWeight(4);
        image(this.image,0, 0, 30, 30);
        pop()
    }
    
}