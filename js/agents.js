function Agent(code_agent){
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


  for(var key in tabAgent){
    var value = tabAgent[key];
    document.write(key + " = " + value + '<br>');
  }

  return (tabAgent);

}

console.log(Agent());
