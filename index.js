var sauceNumber = Math.random();
sauceNumber = sauceNumber * 327000;
if (sauceNumber < 1) {
  Math.roof(sauceNumber);
} else {
  sauceNumber = Math.floor(sauceNumber);
}
console.log(sauceNumber);
function buttonFunction(){
document.getElementById("linkForSauce").href = "https://nhentai.net/g/"+sauceNumber;
}
