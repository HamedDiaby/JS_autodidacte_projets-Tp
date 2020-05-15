/*
----BOUCLE----
//creation d'un objet personne//
let personne = {
    firstName: 'Diaby',
    lastName: 'Hamed',
    age: 21
};
//affichage dans une boucle FOR...IN//
for (var i = 0 in personne){ //affichage 1
    console.log(personne[i]);
}
for (var prop in personne){//affichage 2 (avec les nom des propriétées)
    console.log(`personne.${prop} : ${personne[prop]}`);
}
//affiche un tableau de prenom
let nicks = [], nick;
while (nick = prompt('Entrez un prenom :')){
    nicks.push(nick);
}
if (nicks.length > 0){
    console.log(nicks.join(' - '));
} else {
    console.log("Il n'y a pas de prenom à afficher !!");
}
*/

/*
--- TP : Convertir nombre en lettre. ---

function convertNumber(num) {
    let unite = ['zero', 'un', 'deux', 'trois', 'quatre', 'cinq', 'six', 'sept', 'huit', 'neuf', 'dix', 'onze', 'douze', 'treize', 'quatorze', 'quinze', 'seize', 'dix-sept', 'dix-huit', 'dix-neuf'];
    let dizaines = ['', 'dix', 'vingt', 'trente', 'quarante', 'cinquante', 'soixante'];
    let centaine = ['', 'cent'];

    if (num < 20){
        console.log(unite[num]);
    }
    if (num >= 20 && num < 70){
        let res = num % 10;
        num = Math.trunc(num / 10);
        if (res === 0){
            console.log(dizaines[num]);
        } else {
            console.log(dizaines[num] + '-' + unite[res]);
        }
    }
    if (num >= 70 && num < 80){
        let res = num % 10;
        num = Math.trunc(num / 10);
        res = res + 10;
        console.log('soixante' + '-' + unite[res]);
    }
    if (num >= 80 && num < 90){
        let res = num % 10;
        num = Math.trunc(num / 10);
        if (res === 0) {
            console.log('quatre-vingt');
        } else {
            console.log('quatre-vingt-' + unite[res]);
        }
    }
    if (num >= 90 && num < 100){
        let res = num % 10;
        num = Math.trunc(num / 10);
        res = res + 10;
        console.log('quatre-vingt-' + unite[res]);
    }
}

let number;
do {
    number = parseInt(prompt('Entrez un nombre entre 0 et 999 :'), 10);//on verifie que c'est un entier et qu'il s'affiche bien en base 10
}while (isNaN(number) || number < 0 || number > 999);//on verifie que c'est bien un nombre et qu'il est dans le bon intervalle.

convertNumber(number);

*/

/*
    -- Le DOM --
    Mini TP

var div = document.createElement('div');
div.id = 'divTP1';
// on divise le contenue de la div avec plusieres noeuds textNodes.
var contents = [
    document.createTextNode('le '),
    document.createTextNode('World Wide Web Consortium'),
    document.createTextNode(', abrégé par le sigle '),
    document.createTextNode('W3C'),
    document.createTextNode(', est un '),
    document.createTextNode('Organisme de standardisation'),
    document.createTextNode(' à but non-lucratif chargé de promouvoir la compatibiliter des technologies du '),
    document.createTextNode('World Wide Web'),
    document.createTextNode('.')
];
//balise strong:
var strong1 = document.createElement('strong');
var strong2 = document.createElement('strong');
strong1.appendChild(contents[1]);
strong2.appendChild(contents[3]);
//balise a(liens):
var link1 = document.createElement('a');
var link2 = document.createElement('a');
link1.href = 'http://fr.wikipedia.org/wiki/Organisme_de_normalisation';
link1.title = 'Organisme de normalisation';
link1.appendChild(contents[5]);
link2.href = 'http://fr.wikipedia.org/wiki/World_Wide_Web';
link2.title = 'World Wild Web';
link2.appendChild(contents[7])


//insertion dans la div:
div.appendChild(contents[0]);
div.appendChild(strong1);
div.appendChild(contents[2]);
div.appendChild(strong2);
div.appendChild(contents[4]);
div.appendChild(link1);
div.appendChild(contents[6]);
div.appendChild(link2);
div.appendChild(contents[8]);

document.body.appendChild(div);

*/
//on creer la div
var divTP2 = document.createElement('div');
divTP2.id = 'divTP2';
//on range tous le contenu dans un tableau.
var content = [
    document.createTextNode('JavaScript'),
    document.createTextNode('JScript'),
    document.createTextNode('ActionScript'),
    document.createTextNode('EX4')
];
//on creer la dive {p} :
var p = document.createElement('p');
//on insert et affiche sont contenue 
p.textContent = 'Languages basés sur ECMAScript :';
divTP2.appendChild(p);
//on creer la balise ul:
var ul = document.createElement('ul');
for (var i = 0; i < content.length; i++){
    var li = document.createElement('li');
    li.appendChild(content[i]);
    ul.appendChild(li);
}
divTP2.appendChild(ul);

document.body.appendChild(divTP2);