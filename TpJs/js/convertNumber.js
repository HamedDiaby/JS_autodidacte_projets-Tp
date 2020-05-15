//demande du nombre à convertir
do{
	var nbr = prompt('Entrer un nombre entre 0 et 999 à convertir :');
	if (isNaN(nbr)){ //on verifie que nbr est un nombre
		alert(nbr + ' n\'est pas un nombre');
	}else if (nbr < 0 || nbr > 999){ //on verifie que nbr est dans le bon interval
		alert(nbr + ' n\'est pas compris entre 0 et 999, reassayer');
	}
}while(isNaN(nbr) || nbr > 999 || nbr < 0);//on boucle tant que les condition ne sont pas respecter

function showNbr(nbr){
	var baseNbr = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize'];
	var dizaineNbr = ['dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];

	if (nbr >= 0 && nbr < 17){
		for (var i = 0; i <= nbr; i++){
			if (i == nbr){
				return baseNbr[i];
			}
		}
	}
	if (nbr >= 17 && nbr < 70){
		var modulo = nbr % 10;
		nbr = Math.floor(nbr / 10);//arrondi le resultat a l'entier inferrieur
		for (i = 1; i <= nbr; i++){
			for(var j = 0; j <= modulo; j++){
				if (j == modulo && i == nbr){
					return dizaineNbr[i-1]+'-'+baseNbr[j];
				}
			}
		}
	}
	/*while (nbr > 10){
		var modulo = nbr % 10;
		var nbr = Math.floor(nbr / 10);//arrondi le resultat a l'entier inferrieur
		var result =+ writeNbr(modulo);
	}
	return result;*/
}

alert(showNbr(nbr));//on affiche le resulta