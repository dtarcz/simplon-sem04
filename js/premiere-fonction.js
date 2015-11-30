function myFunction(arguments){
  //le code que la fonction va executer;
}

//exemple :
function showMsg(){
  alert('Et une première fonction, une !');
}
//et on l'appelle pour exécuter son code :
showMsg();

//un exemple concret :
var result;

result = parseInt(prompt('Donnez le nombre à multiplier par 2'));
alert(result * 2);

alert('Vous en êtes à la moitié');

result = parseInt(prompt('Donnez le nombre à multiplier par 2'));
alert(result * 2);

//peut être écrit de cette façon :
function byTwo(){
  var result = parseInt(prompt('Donnez le nombre à multiplier par 2'));
  alert(result * 2);
}

byTwo();

alert('Vous en êtes à la moitié');

byTwo();
