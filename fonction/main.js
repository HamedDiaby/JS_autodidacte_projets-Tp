function affiche()
{
	document.write("HELLO WORLD \n");
}

function repeatAffiche(nbr)
{
	let i = 0;
	while (i < nbr)
	{
		document.write("hello world \n");
		i++;
	}
}
//appele a la fonction :

affiche();
repeatAffiche(5);