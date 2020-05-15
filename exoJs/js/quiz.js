// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

var i = 1;

questions.forEach(function (question){
    var questionTitle = document.createElement('strong');
    questionTitle.textContent = 'Qestion ' + i +' :';


    var enonce = document.createElement('i');
    enonce.textContent = question.enonce;

    var enonceDiv = document.createElement('div');
    enonceDiv.appendChild(questionTitle);
    enonceDiv.appendChild(enonce);

    // La zone de réponse contient initialement un bouton
    var zoneReponseElt = document.createElement("div");
    var boutonElt = document.createElement("button");
    boutonElt.textContent = "Afficher la réponse";
    zoneReponseElt.appendChild(boutonElt);

    boutonElt.addEventListener("click", function () {
    // Remplacement du bouton par la réponse à la question
    var reponseElt = document.createElement("div");
    reponseElt.textContent = question.reponse;
    zoneReponseElt.innerHTML = "";
    zoneReponseElt.appendChild(reponseElt);
    });

    // La question regroupe l'énoncé et la zone de réponse
    var questionElt = document.createElement("p");
    questionElt.appendChild(enonceDiv);
    questionElt.appendChild(zoneReponseElt);
    document.getElementById("contenu").appendChild(questionElt);

    i++;
});