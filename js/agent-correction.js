var tabAgent = {
  '001':  'Edward Donne',
  '004':  'Frederick Wardner',
  '005':  'Stuart Thomas',
  '006':  'Major Jack Giddings',
  '007':  'James Bond',
  '008':  'Bill',
  '009':  'Unnamed',
  '0010': 'Unnamed',
  '0011': 'Cederic',
  '0012': 'Sam Johnston'
};

function nomAgent(codeAgent){

  if (tabAgent[codeAgent] == "Unnamed")
  {
    tabAgent[codeAgent] = prompt("Cet agent est inconnu, vous pouvez saisir son nom.");
  }
  alert(tabAgent[codeAgent]);

}

var numAgent = prompt("Veuillez saisir le code de l'agent");
nomAgent(numAgent);
