var h = document.head;
console.log(h);

var b = document.body;
console.log(b);

//type d'un noeud:
if (document.body.nodeType === document.ELEMENT_NODE){
	console.log("Body est un noeud element");
} else {
	console.log("Body est noeud textuel");
}

//acces au premier enfant du noeud body
console.log(document.body.childNodes[0]);

//acces au deuxieme enfant du noeud body
console.log(document.body.childNodes[1]);

//afficher les noeuds enfnts du noeud body
for (var i = 0; i < document.body.childNodes.length; i++){
	console.log(document.body.childNodes[i]);
}

//afficher le noeud parent d'un element (ici body)
var h1 = document.body.childNodes[1];
console.log(h1.parentNode);