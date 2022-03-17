var requestCurrentUrl = "https://api.exchangerate.host/latest?base=USD"; 

const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");
var mainContainer = document.querySelector(".bar");

//API TO FETCH CURRENT LATEST RATES CONVERSION WITH BASE OF USD
fetch(requestCurrentUrl)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data.rates);
        for (const key in data.rates) {
          var listItem = document.createElement('li');
          listItem.textContent = `${key}: ${data.rates[key]}`;
          console.log(listItem);
          mainContainer.appendChild(listItem);
      }
      
    });

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

btn.addEventListener("click", () => {
  let currency1 = select[0].value;
  let currency2 = select[1].value;
  let value = num.value;

  if (currency1 != currency2) {
      convert(currency1, currency2, value);
  }

});

//GENERATE DYNAMIC HISTORY FROM STORAGE
var generateStorageHistory = function () {

  var storageApply = document.querySelector("#history");

  //PREVENT DUPLICATES AFTER RELOAD (CLEAR TEXT)
  storageApply.innerHTML = '';
  
  var retrieveStorage = localStorage.getItem('history');
  var storageArray = JSON.parse(retrieveStorage);

  // IF STORAGE ARRAY IS GREATER THAN 5 LIST THE MOST RECENT 5
  if (storageArray.length > 10) {
      storageArray = storageArray.slice(-10);
  }

  for (var i = 0; i < storageArray.length; i++) {
      storageApply = document.querySelector("#history");
      var storageListEl = document.createElement("p");
      storageListEl.textContent = storageArray[i];
      storageListEl.className = "listHistory text-center";
      storageApply.appendChild(storageListEl);
  
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

      var currentStorage = localStorage.getItem('history');
      
      if (currentStorage !== null) {
        currentStorage = JSON.parse(currentStorage);
        currentStorage.push(concatenateCurrencyHistory);
        localStorage.setItem('history', JSON.stringify(currentStorage));
    } else {
        currentStorage = [];
        currentStorage.push(concatenateCurrencyHistory);
        localStorage.setItem('history', JSON.stringify(currentStorage));
    }
    generateStorageHistory();
    });
}

generateStorageHistory();

function getHistData() {
  const getHistData = async () => {
      fetch("https://api.exchangerate.host/2020-04-04")
      .then(response => response.json())
      .then(data => {
          console.log(data);
          document.getElementById("info").innerHTML = data.date + '<b>: 1 EUR = ' + data.rates.AED + ' AED</b>'
      });
  }

  getHistData();
}
