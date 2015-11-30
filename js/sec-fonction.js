function myFonction(arg){
  alert('Votre argument est : ' + arg);
}

myFonction('En voila un beau test...');

//encore plus fort : Puisqu'un argument n'est qu'une simple variable, vous pouvez très bien lui passer ce que vous souhaitez, tel que le texte écrit par un utilisateur :

function myFonction(arg){
  alert('Votre argument est : ' + arg);
}

myFonction(prompt('Que souaitez-vous passer en argument ?'));

// plusieurs arguments ? c'est OK :
function moar(first, second){
  alert('Votre premier argument : ' + first);
  alert('Votre second argument : ' + second);
}

moar(
  prompt('Entrez votre premier argument :'),
  prompt('Entrez maintenant le second :')
);

//argument facultatif :
function option(arg){
  alert(arg);
}

option();
