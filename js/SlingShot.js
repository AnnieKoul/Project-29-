class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.rock=loadImage(sprites/rock.png)
        this.sling = Constraint.create(options);
        this.pointB=pointB;
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA =null;
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            
            strokeWeight(4);
           // write stroke() to set the color to red
        stroke("yellow")
           // Write line() to draw a line from pointA to pointB
           line(bodyA.x-25,pointA.y,pointB.x,pointB.y)
        }
    }
    
}