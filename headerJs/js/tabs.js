(function(){//pour isoler se script histoir qu'il n'interagisse pas avec d'autre script

	var afficherOnglet = function (a){
	var li = a.parentNode
	var div = a.parentNode.parentNode.parentNode //remonter jusqu'a la div perent

	if(li.classList.contains('active')){//on verifie si le <li> contient deja la classe active
		return false
	}
	div.querySelector('.tabs .active').classList.remove('active')// on retire la classe active a l'element qui le contient
	li.classList.add('active')//on ajoute la classe active au nouvel element li

	//on refais la meme chose sur les contenu histoire de les synchroniser
	div.querySelector('.tab-content.active').classList.remove('active')//on retire la classe
	div.querySelector(a.getAttribute('href')).classList.add('active')//on ajoute la classe en recuperant l'ancre "id='#...'"
	}

	var tabs = document.querySelectorAll('.tabs a')
	for (var i = 0; i < tabs.length; i++){
		tabs[i].addEventListener('click', function (e){

			afficherOnglet(this)

		});
	}

	/*
		on recupre le 'hash'(#...)
		ajouter la class active sur le lien href='hash'
		retirer la classe active sur les autres onglets
		afficher / masquer les contenus
		(ce code permet de reactualiser la page tous gardant les bon onglet active)
	*/

	var hash = window.location.hash
	var a = document.querySelector('a[href="' + hash + '"]')
	if (a !== null && a.classList.contains('active')){
		afficherOnglet(a)
	}

})()