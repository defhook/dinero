var requestCurrentUrl = "https://api.exchangerate.host/convert?from=USD&to=EUR";
var requestHistoricUrl = "https://api.exchangerate.host/2020-04-04";

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
fetch(requestHistoricUrl)
.then(function(response){
    return response.json();
})
    .then(function(data){
        console.log(data);
    });