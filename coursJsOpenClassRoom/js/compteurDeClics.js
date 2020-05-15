//on ecrit une fonction qui vas compter les clics:
function clic(){
	//on incremente à chaque clic
	compteurClics++;
	//on affecte a chaque clik
	document.getElementById('compteurClics').textContent = compteurClics;
}

var compteurClics = 0;
//on ajoute le clic
document.getElementById('clic').addEventListener('click', clic);

//on retire le click

document.getElementById('desactiver').addEventListener('click', function (){
	document.getElementById('clic').removeEventListener('click', clic);
});



