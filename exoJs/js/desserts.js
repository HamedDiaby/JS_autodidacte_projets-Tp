document.querySelector('button').addEventListener('click', function(){
	var dessert = prompt('Ajouter un dessert :');
	var desertElt = document.createElement('li');
	desertElt.textContent = dessert;
	desertElt.addEventListener('click', function(e){
		var modifDessert = prompt('Modifier le nom du dessert', e.target.textContent);
		e.target.textContent = modifDessert;
	});
	document.getElementById('desserts').appendChild(desertElt);
});