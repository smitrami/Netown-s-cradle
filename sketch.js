const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Mouseconstraint = Matter.Mouseconstraint;
var engine, world;
var pendulm1;
var sling1;
var roof;
function setup() {
    var canvas = createCanvas(900, 400);
    engine = Engine.create();
    world = engine.world;
    roof = new Roof(165, 80, 450, 40);
    pendulm1 = new Pendulm(240, 100, "red");
    sling1 = new Sling(pendulm1.body, { x: 240, y: 100 });
    pendulm2 = new Pendulm(300, 100, "red");
    sling2 = new Sling(pendulm2.body, { x: 300, y: 100 });
    pendulm3 = new Pendulm(360, 100, "red");
    sling3 = new Sling(pendulm3.body, { x: 360, y: 100 });
    pendulm4 = new Pendulm(420, 100, "red");
    sling4 = new Sling(pendulm4.body, { x: 420, y: 100 });
    pendulm5 = new Pendulm(480, 100, "red");
    sling5 = new Sling(pendulm5.body, { x: 480, y: 100 });

}
function draw() {
    background("#002363");
    Engine.update(engine);
    roof.display();
    pendulm1.display();
    sling1.display();
    pendulm2.display();
    sling2.display();
    pendulm3.display();
    sling3.display();
    pendulm4.display();
    sling4.display();
    pendulm5.display();
    sling5.display();
}
function mouseDragged() {
    Matter.Body.setPosition(pendulm1.body, { x: mouseX, y: mouseY })
}