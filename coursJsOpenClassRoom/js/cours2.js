//on selectionne tous les titre h2
var titresElts = document.getElementsByTagName('h2');

//on affiche en console le premier titre h2
console.log(titresElts[0]);

//on affiche le nombre d'element h2
console.log(titresElts.length);

//on affiche tous les element ayant pour classe "merveilles"
var merveillesElts = document.getElementsByClassName('merveilles');
for (var i = 0; i < merveillesElts.length; i++){
	console.log(merveillesElts[i]);
}

//on selectionne l'element ayant pour id = "nouvelles"
var nouvelles = document.getElementById('nouvelles');
console.log('nouvelles'); //autres syntaxe : console.log(document.getElementById('nouvelles'));

//utilisation du selecteur CSS "querySelectorAll"

//tous les paragraphes
console.log(document.querySelectorAll('p').length);

//tous les paragraphe à l'interieur de l'element identifier par contenu (id = "contenu")
console.log(document.querySelectorAll('#contenu p').length);

//tous les element ayant la classe existe
console.log(document.querySelectorAll('.existe').length);

//tous les element fils de id = "antique" ayant la classe "existe"
console.log(document.querySelectorAll('#antiques > .existe').length);

//pour avoir juste le premier paragraphe avec querySelectorAll: on utilise "querySelector"
console.log(document.querySelector('p'));



//on affiche le contenu html id = "contenu"
console.log(document.getElementById("contenu").innerHTML);

//on affiche le contenu textuel de id = "contenu" sans balise en console
console.log(document.getElementById('contenu').textContent);

//on affiche l'attribut href du premier lien 
console.log(document.querySelector('a').getAttribute("href"));

//on affiche l'identifiant de la premiere liste 
console.log(document.querySelector('ul').id);

//on verifie la presense d'un attribut grace a l'attribut "hasAttribute"
if (document.querySelector('a').hasAttribute("target")){
	console.log("le premier lien possede l'attribut target");
} else {
	console.log("le premier lien ne possede pas l'attribut target");
}

// liste des classe de l'element identifier par "antiques"
var classes = document.getElementById("antiques").classList;
console.log(classes.length);
console.log(classes[0]);