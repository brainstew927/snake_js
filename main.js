//posizione iniziale del blocco
var x = 0; 
var y = 0;
//array posizioni
var array_x = [];
var array_y = [];
//aggiunge il primo blocco nella posizione selezionata
array_x.push(x);
array_y.push(y);
//posizione della mela
var mela_x;
var mela_y;
//canvas è l'oggetto canvas che viene preso dall'html e cont è il contesto 
var canv;
var cont;
//larghezza e altezza globali dei blocchi
larghezza = 60
altezza = 60;
//variabili per il controllo degli elementi html
var html_lungh_snake
var html_altez
var html_lungh
var html_mela
//direzione del movimento
var direzione = -1
//counter che conta tutte le volte che viene eseguito main_handler: se raggiunge un certo valore(counter_limit) aumenta di uno la lunghezza del serpente
var counter_all = 0;
var counter_limit = 30
//classe per le mele
class mela{
    constructor(height, width){
        this.height = height;
        this.width = width;
        this.x = 300;
        this.y = 600;
    }

    generate(){
        do{
            var generato_x = random_gen(0, canv.width-60);
            var generato_y = random_gen(0, canv.height-60);
            console.log("generata la posizione x: "+generato_x+" y: "+generato_y)
            //continua il ciclo fino a che:
            ////il numero di x generato è incluso nell'array_x      (array_x.indexOf(generato_x) != -1)
            ////il numero di y generato è incluso nell'array_y      (array_y.indexOf(generato_y) != -1) 
            ////il numero    x non sia multiplo di 60               ((generato_x % ogg.width) != 0) 
            ////il numero    y non sia multiplo di 60               ((generato_y % ogg.width) != 0)
        
        }while((((array_x.indexOf(generato_x) != -1) || ((generato_x % ogg.width) != 0)) || ((array_y.indexOf(generato_y) != -1) || ((generato_y % ogg.height) != 0))));
        console.log("generato!!")
        this.x = generato_x
        this.y = generato_y
        console.log("(generati)x: "+ this.x +" y: "+ this.y)
        html_mela.innerHTML = "mela x: " + this.x + " y: " + this.y
    }
}
//classe per i blocchi del serpente
class blocco{
    constructor(height, width){
        this.height = height;
        this.width = width;
    }
};

//handler che viene eseguito sempre
function main_handler(){
    
    html_lungh_snake.innerHTML = array_x.length
    //se la testa tocca la mela riposiziona la mela e aggiungi un blocco al serpente
    if(array_x[0] == mela_nuova.x && array_y[0] == mela_nuova.y){
        mela_nuova.generate()
        add()
    }

    draw();
}
//funzione che viene chiamata quando <body> viene caricato, inserire qui i document.getelementbyid("id");
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
    html_mela = document.getElementById("xymela")

    mela_nuova = new mela(60,60);
    mela_nuova.generate()
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
        drawBorder(array_x[x], array_y[x]);
        cont.fillStyle = "#21F94C"
    
        cont.fillRect(array_x[x],array_y[x], ogg.width,ogg.width)
    }
    cont.fillStyle = "Red";
    cont.fillRect(mela_nuova.x, mela_nuova.y, mela_nuova.width,mela_nuova.height)
    cont.stroke();
    
    html_altez.innerHTML = array_y[0]
    html_lungh.innerHTML = array_x[0]
   //console.log("x:" + array_x[0]+ " y:" + array_y[0]);
}

//funzione per disegnare bordi intorno ai blocchi
function drawBorder(xPos, yPos, thickness = 3)
{
  cont.fillStyle='#000   ';
  cont.fillRect(xPos - (thickness/2), yPos - (thickness/2), ogg.width + (thickness ), ogg.height + (thickness  ));
}
//funzione che genera e restituisce un numero intero tra min e massimo
function random_gen(min, max){
    var random =Math.floor(Math.random() * (+max - +min)) + +min; 
    return random
}

setInterval(main_handler, 100);
