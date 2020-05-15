//on ajoute le C a la liste des language :
document.getElementById('langages').innerHTML += '<li id = "c">C</li>';

//on supprime le contenue de la liste :
//document.getElementById('langages').innerHTML = "";

//on complete le titre de la page avec "de programmation"
document.querySelector('h1').textContent += " de programmation";

//on attribit id = "titre" a h1:
document.querySelector('h1').setAttribute('id', 'titre');//equivalent de : document.querySelector('h1').id = 'titre';

//on change la classe "debut" en 'titre'
var titreElt = document.querySelector('h1');//on selectione
titreElt.classList.remove('debut');//on supprime
titreElt.classList.add('titre');//on ajoute
console.log(titreElt);//on affiche en console

//on ajoute le language python
var pythonElt = document.createElement("li"); //creation d'element li
pythonElt.id = 'python';// on lui donne id = 'python'
pythonElt.textContent = 'Python';//on lui ajout son contenu textuel
document.getElementById('langages').appendChild(pythonElt);//insertion du nouvel element
console.log(pythonElt);//on affiche en console

//ajout de ruby
var rubyElt = document.createElement("li");
rubyElt.id = 'ruby';
rubyElt.textContent = 'Ruby';
document.getElementById('langages').appendChild(rubyElt);
console.log(rubyElt);

//ajout du language 'Perl' avant le 'PHP'
var perlElt = document.createElement('li');
perlElt.id = 'perl';
perlElt.textContent = 'Perl';
document.getElementById('langages').insertBefore(perlElt, document.getElementById('php'));//ajout du nouvel element avant l'id de PHP
console.log(perlElt);

//ajout du 'JavaScript' au tous debut de la liste
document.getElementById('langages').insertAdjacentHTML('afterBegin', '<li id = "javascript">JavaScript</li>');

//remplacer un element (le Perl par le Bash)
var bashElt = document.createElement('li');
bashElt.id = 'bash';
bashElt.textContent = 'Bash';
document.getElementById('langages').replaceChild(bashElt, document.getElementById('perl'));//on fait le remplacement du perl par le bash

//suppression d'un element id = 'bash'
document.getElementById('langages').removeChild(document.getElementById('bash'));

//ajout d'un paragraphe en dessous de la liste 
document.getElementById('contenu').insertAdjacentHTML('afterend', '<p>En voici une <a href="https://fr.wikipedia.org/wiki/Liste_des_langages_de_programmation">liste</a> plus complete.</p>');







