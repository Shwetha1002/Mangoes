class Stone{
    constructor(x, y, radius ) {
        var options = {
           'isStatic' : false,
            'restitution':0.8,
            'friction':0.5,
            'density':1
  
        }
                this.radius = radius;
  
        this.body = Bodies.circle(x, y, radius,options);
        this.image = loadImage("stone.png")
        
        World.add(world, this.body);
      }
      display(){
        
        
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x,pos.y, 100,50);
      }
  }


  
      