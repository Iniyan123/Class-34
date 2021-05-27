class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            length:250,
            stiffness:1.5
        }
        this.pointB = pointB;
        this.rope = Constraint.create(options);
        World.add(myWorld,this.rope);
    }
    display(){
        var A = this.rope.bodyA;
        var B = this.pointB;
        push();
       
        strokeWeight(7);
        fill("brown");
        line(A.x,A.y,B.x,B.y);
        pop();
    }
}