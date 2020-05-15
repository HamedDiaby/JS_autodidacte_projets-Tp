function afficher(reponse) {
    console.log(reponse);
}
ajaxGet("http://localhost:8888/javascript-web-srv/data/langages.txt", afficher);

/*
//avec fonction anonyme
ajaxGet("http://localhost/javascript-web-srv/data/langages.txt", function (reponse) {
    console.log(reponse);
});
*/