class Sling {
    constructor(bodyA, pointB) {
        var options =
        {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1,
            angularstiffness: 1,
            length: 220
        }
        this.pointB = pointB;
        this.pointX = bodyA.x;
        this.pointY = bodyA.y - 250;
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }
    display() {
        if (this.body.bodyA) {
            var pointA = this.body.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(3.5);
            fill("white");
            stroke("white");
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }

    }
}