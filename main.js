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

var html_lungh_snake
var html_altez
var html_lungh
//direzione del movimento
var direzione = -1
//counter che conta tutte le volte che viene eseguito main_handler: se raggiunge un certo valore(counter_limit) aumenta di uno la lunghezza del serpente
var counter_all = 0;
var counter_limit = 30

class blocco{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};



function main_handler(){
    counter_all++;

    if(counter_all >= counter_limit){
        add()
        counter_all = 0;
    }
    
    html_lungh_snake.innerHTML = array_x.length
    draw();

}

function start(){
    console.log("started!");
    //prende il controllo dell'elemento canvas e dell'elemeno per disegnare sul canvas
    canv = document.getElementById("canv")
    cont = canv.getContext("2d")
    
  
    //crea un nuovo oggetto per gestire i blocchi del serpente
    ogg = new blocco(altezza, larghezza);
    //prende il controllo delle label di debug
    html_altez = document.getElementById("html_lh")
    html_lungh = document.getElementById("html_wh")  
    html_lungh_snake = document.getElementById("lungh")

    

}
//funzione che gestisce gli eventi keypress 
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
//funzione che aggiunge un blocco al serpente
function add(){
    array_x.push(array_x[-1]-60);
    array_y.push(array_y)
}
//funzione che muove tutti i blocchi presenti nel serpente
function move(){   
    for(i=array_x.length-1; i>0; i--){    
        array_x[i] = array_x[i-1]
        array_y[i] = array_y[i-1]
    }
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
//funzione per pulire il canvas
function clear_rect(){
    cont.clearRect(0, 0, canv.width, canv.height);
}
//funzione che disegna il blocco 
function draw(){
    clear_rect();
    
    cont.beginPath();

    move()

    
    for(x = 0; x < array_x.length; x++){   
        drawBorder(array_x[x], array_y[x], ogg.width, ogg.height);
        cont.fillStyle = "#21F94C"
    
        cont.fillRect(array_x[x],array_y[x], ogg.width,ogg.width)
    }
    
    cont.stroke();
    
    
    html_altez.innerHTML = array_y[0]
    html_lungh.innerHTML = array_x[0]
    console.log("x:" + array_x[0]+ " y:" + array_y[0]);
}
//funzione per disegnare bordi intorno ai blocchi
function drawBorder(xPos, yPos, width, height, thickness = 3)
{
  cont.fillStyle='#000   ';
  cont.fillRect(xPos - (thickness), yPos - (thickness), width + (thickness * 2), height + (thickness * 2));
}

setInterval(main_handler, 80);
