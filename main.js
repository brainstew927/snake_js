//posizione iniziale del blocco
var x = 100; 
var y = 100;
//array posizioni
var array_x = [];
var array_y = [];

array_x.push(x);
array_y.push(y);

//variabili per il movimento(se y_su = true il blocco va su, se x_de = true il blocco va a destra)
y_su = false;
x_de = true;
//canvas è l'oggetto canvas che viene preso dall'html e cont è il contesto 
var canv;
var cont;
//larghezza e altezza globali dei blocchi
larghezza = 60
altezza = 60;

var lunghezza_snake;

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
    
    if(array_y[0] >= canv.height - ogg.height){
        y_su = true;
    }
    if(array_y[0] <= 0){
        y_su = false;
    }   

    if(array_x[0] >= canv.width - ogg.width){
        x_de = false;
    }
    if(array_x[0] <= 0){
        x_de = true;
    }

    if(x_de){
        array_x[0]++;
    }
    if(!x_de){
        array_x[0]--;
    }
    if(y_su){
        array_y[0]--;
    }
    if(!y_su){
        array_y[0]++;
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

    cont.rect(array_x[0],array_y[0], ogg.width,ogg.width)
   // console.log("width:" + canv.width + "  height:"+ canv.height)
    cont.stroke();
    
    move()
    
    console.log("x:" + array_x[0]+ " y:" + array_y[0]);
}
setInterval(draw, 1);