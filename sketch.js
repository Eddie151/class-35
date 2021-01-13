var ball;
var database,position;

function setup(){
    createCanvas(500,500);
    database =firebase.database()
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

    var loc = database.ref("Ball/Position");
    loc.on("value",readOp,showerror);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    database.ref("Ball/Position").set({
    x : position.x + x, y : position.y + y   
    });
}

function readOp(data){
    position = data.val();
}

function showerror(){
    console.log("got the error");
}
