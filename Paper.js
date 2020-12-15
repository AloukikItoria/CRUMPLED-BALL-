class Paper{

    constructor(x,y,radius){
    
    var option = {
    
    restitution:0.8,
    friction:0.7,
    density:1
    
    }
    
    this.body = Bodies.circle(x,y,radius,option);
    this.radius = radius;
    this.image = loadImage("paper.png");
    World.add(world,this.body)
    
  
    
    
    }
    
    
    display(){
    push();
    ellipseMode(RADIUS)
    imageMode(CENTER)
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    image(this.image,0,0,this.radius*3,this.radius*3)
    //ellipse(0,0,this.radius,this.radius)
    pop();
    
    }
    
    
    
    
    
    
    
    
    
    
    
    }