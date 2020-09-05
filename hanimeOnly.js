function buttonFunction(){
  var hanimeSauceNumber = Math.random();
  hanimeSauceNumber = hanimeSauceNumber * 2000000000000;
  if (hanimeSauceNumber < 1) {
    Math.roof(hanimeSauceNumber);
  }
  else {
    hanimeSauceNumber = Math.floor(hanimeSauceNumber);
  }
  console.log(hanimeSauceNumber);
  document.getElementById("linkForSauce").href = "https://hanime.tv/browse/random?r="+hanimeSauceNumber;
}
