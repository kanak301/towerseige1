const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var ground;
var box1,box2,box3,box4,box5,box6,shootingbox;
var chain;
var bgcolour;

var gameState = "Start";

var score = 0;

function preload() {
    getBackgroundImg();
}

function setup () {
    var canvas = createCanvas(1200,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,200,200,20);
    box1=new Box (600,170,40,40);
    box2=new Box (560,170,40,40);
    box3=new Box (640,170,40,40);
    box4=new Box (580,130,40,40);
    box5=new Box (620,130,40,40);
    box6 = new Box(600,90,40,40);

    shootingbox= new shootingBox (200,200,40,40);

    chain = new Sling(shootingbox.body,{x:100,y:100});
    

}
function draw () {

    if (bgcolour!=null){
        console.log(bgcolour);
        background(bgcolour);
    }

Engine.update(engine);

    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    shootingbox.display();
    chain.display();

    
   // console.log(shootingbox.speed);

   getBackgroundImg();

    text("score:"+score,750,40);
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(shootingbox.body, {x: mouseX , y: mouseY});
        shootingbox.display();
    }
}

function mouseReleased(){
    chain.fly();
    shootingvisible ();
    gameState = "launched";
    console.log(shootingbox.Visiblity);
}



async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    console.log(hour);
    if(hour>=06 && hour<=19){
       bgcolour="white";
    }
    else{
        bgcolour="black";
    }

}


