function buttonFunction(){
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
