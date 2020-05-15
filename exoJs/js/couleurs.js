document.addEventListener('keypress', function(e){
	var touche = String.fromCharCode(e.charCode);
	touche = touche.toUpperCase();
	var couleur = "";
	switch(touche){
		case 'R':
			couleur = 'red';
			break;
		case 'J':
			couleur = 'yellow';
			break;
		case 'V' :
			couleur = 'green';
			break;
		case 'B':
			couleur = 'white';
		default :
			console.log('la touche' + touche + 'n\'est pas géré');
	}

	var divElts = document.getElementsByTagName('div');
	for (var i = 0; i < divElts.length; i++){
		divElts[i].style.backgroundColor = couleur;
	}
});