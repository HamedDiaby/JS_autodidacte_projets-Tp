var pElt = document.querySelector('p');
pElt.style.color = 'red';
pElt.style.margin = '50px';

//propriete CSS avec nom composé : 
pElt.style.fontFamily = 'Arial';
pElt.style.backgroundColor = "blue";

//recupere les propriete style d'un element:
var paragrapheElts = document.getElementsByTagName('p');
console.log(paragrapheElts[0].style.color);
console.log(paragrapheElts[1].style.color);
console.log(paragrapheElts[2].style.color);

//recupere les propriete CSS d'une feuille css externe
var stylePara = getComputedStyle(document.getElementById('para'));
console.log(stylePara.fontStyle);
console.log(stylePara.color);