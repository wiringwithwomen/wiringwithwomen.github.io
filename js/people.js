(function(){
  var images = document.getElementsByClassName('execimage');
  for(var i = 0; i < images.length; i++){
    images[i].addEventListener("click", getInfo(i));
  }

  function getInfo(var i){
    var names = ['Jasmine Lu', 'Sarah Zhou', 'Emily Liu', 'Anika Mukherji',
     'Aninda Manocha', 'Alethea Toh', 'Cyan DeVeaux'];
    document.getElementsByClassName('popupName')[0].innerHTML = names[i];
  }
}) ();
