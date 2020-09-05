class Plinko {
    constructor(x,y) {
        var options = {
            isStatic: true
        }
    this.body = Bodies.circle(x, y, this.releaseEvents,options);
    this.color= color(random(0, 225), random(0, 225), random(0, 225));
    World.add(world, this.body);
}
}