function setup() {
  createCanvas(800,400);
  createSprite(200, 200, 200, 200);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}

var particles = [];
var divisions = [];
var plinkos = [];
var divisionHeight=300;

for (var k = 0; k <=width; k = k + 80) {
  divisions.push(new Divisions(k, height-divisionsHeight/2, 10, divisionHeight));
}

for (var j = 40; j <width; j=j+50)
{
  plinkos.push(new Plinko(j,85));
}

for (var j = 15; j <width-10; j=j+50)
{
  plinkos.push(new Plinko(j,175));
} 

if(frameCount%60===0){
  particles.push(new Particle(random(width/2-10, width/2+10), 10,10));
  
}