class SlingShot{
    constructor(bodyA, PointB){
        var options = {
            bodyA: bodyA,
            pointB: PointB,
            stiffness: 0.01,
            length: 50
        }
        this.pointB = PointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
fly(){
    //  
this.sling.bodyA = null;

}
    display(){
        if(this.sling.bodyA !== null){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB
        //strokeWeight(4);
        //stroke("pink")
       // line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
    }
    
}