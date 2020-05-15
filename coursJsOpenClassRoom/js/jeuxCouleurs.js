//fonction colore les div
function coloreDivs(param){
	var divElts = document.getElementsByTagName('div');
	for (var i = 0; i < divElts.length; i++){
		divElts[i].style.backgroundColor = param;
	}
}

document.addEventListener('keypress', function(e) {
	var touche = String.fromCharCode(e.charCode); // Récupération de la touche pressée
	if (touche === 'R' || touche === 'r')
		coloreDivs('red');
	if (touche === 'J' || touche === 'j')
		coloreDivs('yellow');
	if (touche === 'V' || touche === 'v')
		coloreDivs('green');
	if (touche === 'B' || touche === 'b')
		coloreDivs('white');
	else
		console.log("Touche " + touche + " non gérée");
});