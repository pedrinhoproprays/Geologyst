const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var chao;
var martelo;
var borracha;
var pedra;
var ferro;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    chao= new Plane(600,height,1200,20);

    martelo = new Hammer(10,100);

    borracha = new Rubber(400,300,20);

    pedra = new Stone(800,300);

    ferro = new Iron(200,300);
}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    chao.display();
    martelo.display();
    borracha.display();
    pedra.display();
    ferro.display();

}
