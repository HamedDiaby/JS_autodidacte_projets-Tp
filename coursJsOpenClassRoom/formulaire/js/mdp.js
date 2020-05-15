var form = document.querySelector('form');
form.addEventListener('submit', function(e){
	var mdp1 = form.elements.mdp1.value;
	var mdp2 = form.elements.mdp2.value;
	var message = 'Mot de passe correcte';
	var color = 'blue';
	if (mdp1 === mdp2){
		if (mdp1.length > 6){
			var regexMdp = /\d+/;
            if (regexMdp.test(mdp1)) {
                message = message;
                color = color;
            }else{
            	message = "Erreur : le mot de passe ne contient aucun chiffre";
            	color = 'red';
            }
		}else{
			message = 'mot de passe trop cout ils dois avoir au moins 6 caractere';
			color = 'red';
		}

	}else{
		message = 'les mot de passes sont different, ils doivent etre identique';
		color = 'red';
	}
	var infoMdp = document.getElementById('infoMdp');
	infoMdp.textContent = message;
	infoMdp.style.color = color;
	e.preventDefault();
});
