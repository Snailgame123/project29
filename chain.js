class Chain{
    constructor(body1,point2){
        var options={
            bodyA:body1,
            pointB:point2,
            stiffness:0.04,
            length:1
        }
        this.pointB=point2
        this.chain=Constraint.create(options);
        World.add(world,this.chain)

    }
    display(){
       if(this.chain.bodyA) {
        var pointA=this.chain.bodyA.position
        strokeWeight(4);
        stroke("black")
        line(pointA.x,pointA.y,this.pointB.x,this.pointB.y)
       }

    }

    fly(){
        this.chain.bodyA=null
    }

}