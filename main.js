var x = 300; 
var y = 600;

y_su = false;
x_de = true;

var canv;
var cont;


function start(){
    console.log("started!");
    canv = document.getElementById("canv")
    cont = canv.getContext("2d")
}


function move(){
    
    if(y >= canv.height){
        y_su = true;
    }
    if(y <= 0){
        y_su = false;
    }   

    if(x >= canv.width){
        x_de = false;
    }
    if(x <= 0){
        x_de = true;
    }

    if(x_de){
        x++;
    }
    if(!x_de){
        x--;
    }
    if(y_su){
        y--;
    }
    if(!y_su){
        y++;
    }
    
}

function clear_rect(context, hg, wg){
   
    console.log("chiamato "+ "\n" + "wg:"+ wg + "   hg:"+hg)
}

function draw(){
    cont.clearRect(0, 0, canv.width, canv.height);
    cont.beginPath();    

    cont.rect(x,y,10,10)

    console.log("width:" + canv.width + "  height:"+ canv.height)
    cont.stroke();
    
    move()
    
    console.log("x:" + x+ " y:" + y);
    
}

setInterval(draw, 2);