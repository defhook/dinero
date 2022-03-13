//var requestCurrentUrl = "https://api.exchangerate.host/convert?from=USD&to=EUR";
var requestHistoricUrl = "https://api.exchangerate.host/2020-04-04";

const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

 var requestURL = 'https://api.exchangerate.host/symbols';

 fetch("https://api.frankfurter.app/currencies")
  .then((data) => data.json())
  .then((data) => {
    display(data);
  });
// amount can be converted straight from the requestCurrentUrl with parameter "amount=1200"

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

  function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
      "https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}"
    )
    .then((val) => val.json())
    .then((val) => {
      console.log(Object.values(val.rates)[0]);
      ans.value = Object.values(val.rates)[0];
    });
}

//HISTORIC DATA FUNCTION

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





//FETCH FOR THE CURRENT CURRENCY RATE
/*fetch(requestCurrentUrl)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data);
    });
*/
//FETCH FOR THE HISTROICAL CURRENCY RATE
fetch(requestHistoricUrl)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
    
/*butn.addEventListener("click", () => {
 fetch(requestHistoricUrl)
 then(function (data){
     console.log(result)

 })

});
*/