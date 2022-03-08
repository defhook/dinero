var requestCurrentUrl = "https://api.exchangerate.host/convert?from=USD&to=EUR";
var requestHistoricUrl = "https://api.exchangerate.host/2020-04-04";

//const currencyFormatText = new Intl.NumberFormat("en-US", formatOptions).format(number);

// amount can be converted straight from the requestCurrentUrl with parameter "amount=1200"

//FETCH FOR THE CURRENT CURRENCY RATE
fetch(requestCurrentUrl)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data);
    });

//FETCH FOR THE HISTROICAL CURRENCY RATE
/*fetch(requestHistoricUrl)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data);
    });*/

/*const formatOptions = {
    style: "currency",
    currency: currencyCode,
    minimumFractionDigits: 2,
    currencyDisplay: "symbol",
};*/

/*function updateCurrencyName(e) {
    // grab data attribute
    const currencyOptionOne = inputOriginalCurrency.selectedOptions[0].dataset.name;
    const currencyOptionTwo = inputOriginalCurrency.selectedOptions[0].dataset.name;
    // grab the elements 
    fromCurrencyText = document.querySelector("")
}*/


var getCurrency = function() {
    fetch("https://api.exchangerate.host/convert?from=USD&to=EUR");
};