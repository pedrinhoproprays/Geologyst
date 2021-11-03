class Rubber{
	constructor(x,y,r)
	{
	// assign options to the rubber ball
	 var options = {
	  'density':1,
      'friction': 5,
      'restitution':0.3
	 };
		this.x=x;
		this.y=y;
		this.r=r
	    this.body=Bodies.circle(x,y,r/2,options)
		World.add(world, this.body);

	}
	display()
	{
			var rubberpos=this.body.position;		
			push()
			translate(rubberpos.x, rubberpos.y);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipseMode(RADIUS);
			ellipse(0,0,this.r,this.r);
			pop()
	}

}
