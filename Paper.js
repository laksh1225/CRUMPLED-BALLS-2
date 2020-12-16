class Paper {
constructor(x,y,r){
    var options = {
        'restitution' : 0.8,
        'friction' : 0.3,
        'density' : 1.2
    }
    this.body = Bodies.circle(this.x, this.y, this.r/2 , options);
    this.image = loadImage("sprites/2.png");
    World.add( world , this.body)
}

    display(){
    var paper_pos = this.body.position;
    image(this.image,this.body.position.x,this.body.position.y,50,50);

    push();
    translate(paper_pos.x, paper_pos.y);
    rectMode(CENTER);
    fill(255);
    ellipse(0, 0, this.r, this.r);
    pop();
    
}
}