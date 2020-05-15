var pseudoElt = document.getElementById('pseudo');
pseudoElt.value = 'hamsBaby';

pseudoElt.addEventListener('focus', function (){
	document.getElementById('aidePseudo').textContent = 'Entrez votre pseudo';
});

pseudoElt.addEventListener('blur', function(e){
	document.getElementById('aidePseudo').textContent = '';
});

var confirmatinElt = document.getElementById('confirmation');
confirmatinElt.addEventListener('change', function (e){
	console.log('confirmation : ' + e.target.checked);
});

var abonementElts = document.getElementsByName('abonnement');
for (let i = 0; i < abonementElts.length; i++){
	abonementElts[i].addEventListener('change', function(e){
		console.log('abonement : ' + e.target.value);
	});
}

let nationaliteElt = document.getElementById('nationalite');
nationaliteElt.addEventListener('change', function (e) {
	console.log('code de nationalite :' + e.target.value);
});

//verification du mot de passe: 
var mdpElt = document.getElementById('mdp');
mdpElt.addEventListener('input', function (e){
	let mdp = e.target.value;
	let mdpLength = 'faible';
	let mdpColor = 'red';
	if (mdp.length >= 8){
		mdpLength = 'sufisant';
		mdpColor = 'green';
	}else if (mdp.length >= 4){
		mdpLength = 'moyen';
		mdpColor = 'orange';
	}
	let aideMdp = document.getElementById('aideMdp');
	aideMdp.textContent = 'Longeur du mot de passe : ' + mdpLength;
	aideMdp.style.color = mdpColor;
});

// Contrôle du courriel en fin de saisie
document.getElementById("courriel").addEventListener("blur", function (e) {
    // Correspond à une chaîne de la forme xxx@yyy.zzz
    var regexCourriel = /.+@.+\..+/;
    var validiteCourriel = "";
    if (!regexCourriel.test(e.target.value)) {
        validiteCourriel = "Adresse invalide, xxx@yyy.zzz";
    }
    document.getElementById("aideCourriel").textContent = validiteCourriel;
});

// Affiche de toutes les données saisies ou choisies
var form = document.querySelector("form");
form.addEventListener("submit", function (e) {
    var pseudo = form.elements.pseudo.value;
    var mdp = form.elements.mdp.value;
    var courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe " +
        mdp + " et le courriel " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
    case "abonewspromo":
        console.log("Vous êtes abonné(e) à la newsletter et aux promotions");
        break;
    case "abonews":
        console.log("Vous êtes abonné(e) à la newsletter");
        break;
    case "aborien":
        console.log("Vous n'êtes abonné(e) à rien");
        break;
    default:
        console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
    case "FR":
        console.log("Vous êtes français(e)");
        break;
    case "BE":
        console.log("Vous êtes belge");
        break;
    case "SUI":
        console.log("Vous êtes suisse");
        break;
    default:
        console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault(); // Annulation de l'envoi des données
});