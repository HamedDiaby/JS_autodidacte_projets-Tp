//gestionaire d'evenement
function clic(){
	console.log('Clic !');
}

var boutonElt = document.getElementById('bouton');
boutonElt.addEventListener('click', clic);

/*autre facon d'ecrire 
//var boutonElt = document.getElementById('bouton');
//	console.log('clic');
});*/

//suppression du gestionaire d'evenement click
//boutonElt.removeEventListener("click", clic);


//Ajout d'un evenement d'un gestionnaire qui affiche le type et la cible de l'evenement
document.getElementById('bouton').addEventListener('click', function(e) {
	console.log('Evenement : '+ e.type + ', texte de la cible : ' + e.target.textContent);
});

//evenement a l'apuis d'une touche du clavier
document.addEventListener('keypress', function(e) {
	console.log('Vous avez appuyé sur la touche : ' + String.fromCharCode(e.charCode));
});

//affiche les informations sur un evenemets clavier:
function infosClavier(e) {
	console.log('Evenement clavier : ' + e.type + ', touche : '+ e.keyCode);
}

//gestion de l'appuis et du relachement d'une touche clavier
document.addEventListener('keydown', infosClavier);
document.addEventListener('keyup', infosClavier);

//renvoie le nom du bouton souris en fonction de son code
function getBoutonSouris(code) {
	var bouton = "inconnu";
	switch (code) {
		case 0: //0 est le code du bouton gauche
			bouton = 'gauche';
			break;

		case 1: //1 est le code du bouton du milieu
			bouton = 'milieu';
			break;

		case 2: //2 est le code du bouton de droite
			bouton = 'droit';
			break;
	}
	return bouton;
}

//affiche les information d'un evenement souris
function infosSouris(e) {
	console.log('Evenement souris : ' + e.type + ', bouton ' + 
		getBoutonSouris(e.button) + ', X : ' + e.clientX + ', Y : ' + e.clientY);
}

//gestion du clic souris
document.addEventListener('click', infosSouris);

// Gestion de la fin de chargement de la page web
window.addEventListener('load', function () {
	console.log('Page web entierement chargée !');
});








