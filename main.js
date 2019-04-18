//posizione iniziale del blocco
var x = 0; 
var y = 0;
//array posizioni
var array_x = [];
var array_y = [];

array_x.push(x);
array_y.push(y);

//canvas è l'oggetto canvas che viene preso dall'html e cont è il contesto 
var canv;
var cont;
//larghezza e altezza globali dei blocchi
larghezza = 60
altezza = 60;

var lunghezza_snake = 2;


var html_altez
var html_lungh
//direzione del movimento
var direzione = -1

class blocco{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};

function main_handler(){
    draw();
}

function start(){
    console.log("started!");

    canv = document.getElementById("canv")
    cont = canv.getContext("2d")
    ogg = new blocco(altezza, larghezza);

    html_altez = document.getElementById("html_lh")
    html_lungh = document.getElementById("html_wh")    
}

function key_handler(event){
    console.log("pressed: key: " + event.key+ "")
    if(event.key == "a"){
        direzione = 3;
    }
    if(event.key == "s"){
        direzione = 2;
    }
    if(event.key == "d"){
        direzione = 1
    }
    if(event.key == "w"){
        direzione = 0;
    }
    console.log("direzione attuale: " + direzione)
}

function move(){   
    
    switch (direzione) {
        case 0:
                if(array_y[0]-ogg.height >= 0){
                    array_y[0] -= ogg.height;
                }
            break            
        case 1:
            if(array_x[0]+ogg.width <= canv.width-ogg.width){
                array_x[0] += ogg.height;
            }          
            break
        case 2:
            if(array_y[0]+ogg.height <= canv.height-ogg.width){
                array_y[0] += ogg.height;
            }    
            break
        case 3:
            if(array_x[0]-ogg.width >= 0){
                array_x[0] -= ogg.height;
            }               
            break;
        default:
            console.log("errore mistico nel movimento")
            break;
    }


}
//funzione per 
function clear_rect(){
    cont.clearRect(0, 0, canv.width, canv.height);
}
//funzione che disegna il blocco 
function draw(){
    clear_rect();
    cont.beginPath();    

    cont.rect(array_x[0],array_y[0], ogg.width,ogg.width)
  
    cont.stroke();
    
    move()
    html_altez.innerHTML = array_y[0]
    html_lungh.innerHTML = array_x[0]
    console.log("x:" + array_x[0]+ " y:" + array_y[0]);
}
setInterval(main_handler, 80);

