class Pendulm {
    constructor(x, y, color) {
        var options =
        {
            restitution: 1,
            friction: 0,
            frictionAir: 0.0
        }
        this.body = Bodies.rectangle(x, y, 40, 40, options);
        this.x = x;
        this.y = y;
        this.color = color;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        stroke("black");
        strokeWeight(2);
        fill("#FFB40F");
        ellipse(0, 0, 60, 60);
        pop();
    }
}