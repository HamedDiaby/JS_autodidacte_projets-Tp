// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
    case "ST":
        return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
        return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
        return ["Robert", "Stannis", "Renly"];
    case "TA":
        return ["Aerys", "Daenerys", "Viserys"];
    default:
        return [];
    }
}

//on vas deja completer la liste
for (var i = 0; i < maisons.length; i++){
    var optionElt = document.createElement('option');
    optionElt.value = maisons[i].code;
    optionElt.textContent = maisons[i].nom;
    document.getElementById('maison').appendChild(optionElt);
}

var maisonElts = document.getElementById('maison');
maisonElts.addEventListener('change', function(e){
    console.log(e.target.value);
});





