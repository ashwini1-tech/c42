class Drop{
    constructor(x,y){
var options={
friction:0.1,
density:0.1

}
this.rain=Bodies.circle(x,y,5,options)
this.radius=5
World.add(this.rain,world)
    }
   update(){
       if(this.rain.position.y>height){
           Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
       }
   }
   display(){
       noStroke()
       fill(0,0,255)
       ellipseMode(RADIUS)
       ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius)
   }
}