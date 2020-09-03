var coinToss = Math.random();
coinToss = coinToss*2;
coinToss = Math.floor(coinToss)
coinToss = coinToss+1
console.log(coinToss);




function buttonFunction(){
  if(coinToss == 1){
    var doujinSauceNumber = Math.random();
    doujinSauceNumber = doujinSauceNumber * 327000;
    if (doujinSauceNumber < 1) {
      Math.roof(doujinSauceNumber);
    }
    else {
      doujinSauceNumber = Math.floor(doujinSauceNumber);
    }
    console.log(doujinSauceNumber);
    document.getElementById("linkForSauce").href = "https://nhentai.net/g/"+doujinSauceNumber;
  }

  else if (coinToss == 2){
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
}
