const cvs = document.getElementById("batterie");
const ctx = cvs.getContext("2d");

// create the unit
const box = 32;

// load images
const bat = new Image();//image de la baterie
const explosion = new Image();
bat.src = "img/bat.jpg";
explosion.src = "img/explosion.gif";


//on creer les variable qui vont contenir les sons
let grosseCaisse = new Audio()
let caisseClaire = new Audio()
let tomBasse = new Audio()
let tomAlto = new Audio()
let tomMedium = new Audio()
let cymbaleCharleston = new Audio()
let cymbaleCrash = new Audio()
let cymbaleRide = new Audio()

grosseCaisse.src = "audio/grosseCaisse.mp3"
caisseClaire.src = "audio/caisseClaire.mp3"
tomBasse.src = "audio/tomBasse.mp3"
tomAlto.src = "audio/tomAlto.mp3"
tomMedium.src = "audio/tomMedium.mp3"
cymbaleCharleston.src = "audio/cymbaleCharlHitHat.wav"
cymbaleCrash.src = "audio/cymbalCrash.wav"
cymbaleRide.src = "audio/cymbaleRide.wav"

//fonction pour lier une touche a un son
function getSon (key){
	if (key == 32)
		grosseCaisse.play()
	else if (key == 113)
		caisseClaire.play()
	else if (key == 109)
		tomBasse.play()
	else if (key == 114)
		tomAlto.play()
	else if (key == 117)
		tomMedium.play()
	else if (key == 97)
		cymbaleCharleston.play()
	else if (key == 101)
		cymbaleCrash.play()
	else if (key == 112)
		cymbaleRide.play()
}

document.addEventListener('keypress', function(e){
	let key = e.keyCode
	getSon(key)
	//console.log(key);
})

// draw everything to the canvas
function draw(){
	ctx.drawImage(bat,70,180);//image de la batterie
	ctx.font = '15px serif';
	ctx.fillStyle = '#5DCCE7';
	let espace = ctx.fillText('Espace', 292, 455);
	let Q = ctx.fillText('Q', 235, 395);
	let M = ctx.fillText('M', 420, 385);
	let R = ctx.fillText('R', 270, 330);
	let U = ctx.fillText('U', 345, 330);
	let A = ctx.fillText('A', 170, 327);
	let A_ = ctx.fillText('A', 470, 345);
	let E = ctx.fillText('E', 235, 260);
	let P = ctx.fillText('P', 385, 270);
}
//play
let game = setInterval(draw,100);