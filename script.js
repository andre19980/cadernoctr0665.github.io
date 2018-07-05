var myComponents = [];
var num = 0;

function startGame() {
    myGameArea.start();
    var i;
    for (i = 0; i < 360; i++) {
        var w = Math.floor(Math.random()*251);
        var h = Math.floor(Math.random()*200);
        var x = Math.floor(Math.random()*1201);
        var y = Math.floor(Math.random()*601);
        var r = Math.floor(Math.random()*51);
        myComponents.push(new componentRect(w, h,  '#'+(Math.random()*0xFFFFFF<<0).toString(16), x, y, false));
    }
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 1200;
        this.canvas.height = 600;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 80);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function componentRect(width, height, color, x, y, b) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.b = b
    ctx = myGameArea.context;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function(){
        ctx = myGameArea.context;
        if (num < 180) {
            ctx.fillStyle = color;
        }
        else {
            ctx.fillStyle = this.color;
        }
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

function updateGameArea() {
    if (num < 360) {
        myGameArea.clear();
        var i;
        for (i = 0; i < num; i++) {
            if (Math.random()>0.5) {
                //myComponents[i].x = (myComponents[i].x + Math.floor(Math.random()*11))%1201;
               //myComponents[i].y = (myComponents[i].y + Math.floor(Math.random()*11))%601;
                myComponents[i].x = (myComponents[i].x + 1)%1201;
                myComponents[i].y = (myComponents[i].y - 1)%601;
                myComponents[i].color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                myComponents[i].update();
            }
            else {
                //myComponents[i].x = (myComponents[i].x + Math.floor(Math.random()*11))%1201;
                //myComponents[i].y = (myComponents[i].y + Math.floor(Math.random()*11))%601;
                myComponents[i].x = (myComponents[i].x - 1)%1201;
                myComponents[i].y = (myComponents[i].y + 1)%601;
                myComponents[i].color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                myComponents[i].update();
            }
        }
    }
    if (num >= 360) {
        for (i = 0; i < 100; i++) {
            if (i%2 == 0) {
                //myComponents[i].x = (myComponents[i].x + Math.floor(Math.random()*11))%1201;
               //myComponents[i].y = (myComponents[i].y + Math.floor(Math.random()*11))%601;
                myComponents[i].x = (myComponents[i].x + 1)%1201;
                myComponents[i].y = (myComponents[i].y + 1)%601;
                if (num > 580) {
                    myComponents[i].color = "black"
                }
                else {
                    myComponents[i].color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                }
                myComponents[i].update();
            }
            else {
                //myComponents[i].x = (myComponents[i].x + Math.floor(Math.random()*11))%1201;
                //myComponents[i].y = (myComponents[i].y + Math.floor(Math.random()*11))%601;
                myComponents[i].x = (myComponents[i].x - 1)%1201;
                myComponents[i].y = (myComponents[i].y - 1)%601;
                if (num > 480) {
                    myComponents[i].color = "black"
                }
                else {
                    myComponents[i].color = '#'+(Math.random()*0xFFFFFF<<0).toString(16)
                }
                myComponents[i].update();
            }
        }
    }
    num += 1
}