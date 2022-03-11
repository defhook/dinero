// var requestCurrentUrl = "https://api.exchangerate.host/convert?from=USD&to=EUR"; 
var requestHistoricUrl = "https://api.exchangerate.host/2020-04-04";

const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");
var storageList = [];

fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });

function display(data) {
  const entries = Object.entries(data);
  for (var i = 0; i < entries.length; i++) {
    select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
  }
}
//CB - CONVERT BUTTON
btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

     if (currency1 != currency2) {
    convert(currency1, currency2, value);
    
  } 
  generateStorageHistory();
});

//GENERATE DYNMAIC ELEMENTS FROM LOCAL STORAGE
//FIRST ON CLICK DOES NOT WORK DUE STORAGE COMING BEFORE THE ONCLICK AND GENERATING ONE BEHIND
var generateStorageHistory = function(){
  //var retrieveStorage = localStorage.getItem(storageList);
 // var storageArray = JSON.parse(retrieveStorage);
  //var text = "";
  for(var i = 0; i < storageList.length; i++ ){
   //var retrieveStorage = localStorage.getItem(storageList);
    var storageApply = document.querySelector("#history");
    var storageListEl = document.createElement("li");
    storageListEl.textContent = storageList[i];
    storageApply.appendChild(storageListEl);
   // text += storageList[i] + "<i>";
    //document.getElementById("history").innerHTML = text;
  }
};


function convert(currency1, currency2, value) {
  const host = "api.frankfurter.app";
  fetch(
    `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
  )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      ans.value = Object.values(val.rates)[0];
      //LOCAL STORAGE BEGINS
      var concatenateCurrencyHistory = (value + " " + currency1 + " converted to " + currency2 + " is " + (Object.values(val.rates)[0]))
      storageList.push(concatenateCurrencyHistory);
      localStorage.setItem(storageList, JSON.stringify(concatenateCurrencyHistory));
    });
}

// amount can be converted straight from the requestCurrentUrl with parameter "amount=1200"

/*//FETCH FOR THE CURRENT CURRENCY RATE
fetch(requestCurrentUrl)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data);
    });*/

//FETCH FOR THE HISTROICAL CURRENCY RATE
/*fetch(requestHistoricUrl)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data);
    })*/


    /*for(var i = 0; i < storageList.length; i++){
  var previousConverted = document.querySelector("#history");
  var previousConvertedEL = document.createElement("li");
  previousConvertedEL.textContent = storageList[i];
  previousConvertedEL.appendChild(previousConverted);
};*/
//CB - 
/*var convertedChoices = function(){
    var convertedEl = document.querySelector("#history");
    var convertedListEl = document.createElement("li");
    convertedListEl.textContent = "Dem Boyz Testing";
    convertedEl.appendChild(convertedListEl);
};*/