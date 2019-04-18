//posizione iniziale del blocco
var x = 100; 
var y = 100;
//variabili per il movimento(se y_su = true il blocco va su, se x_de = true il blocco va a destra)
y_su = false;
x_de = true;
//canvas è l'oggetto canvas che viene preso dall'html e cont è il contesto 
var canv;
var cont;
//larghezza e altezza globali dei blocchi
larghezza = 60
altezza = 60;

class blocco{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};

function start(){
    console.log("started!");
    canv = document.getElementById("canv")
    cont = canv.getContext("2d")
    ogg = new blocco(altezza, larghezza);
}

function move(){
    
    if(y >= canv.height - ogg.height){
        y_su = true;
    }
    if(y <= 0){
        y_su = false;
    }   

    if(x >= canv.width - ogg.width){
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

function clear_rect(){
    console.log("chiamato "+ "\n" + "wg:"+ canv.width + "   hg:"+canv.height)
    cont.clearRect(0, 0, canv.width, canv.height);
}
//funzione che disegna il blocco 
function draw(){
    clear_rect();
    cont.beginPath();    

    cont.rect(x,y, ogg.width,ogg.width)
    console.log("width:" + canv.width + "  height:"+ canv.height)
    cont.stroke();
    
    move()
    
    console.log("x:" + x+ " y:" + y);
}
setInterval(draw, 2);