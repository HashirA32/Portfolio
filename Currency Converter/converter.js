const G_URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_EilZeY1qghRkLSGUOUX5ASf5i4FLemvrKhry0DPI&currencies=USD&base_currency=PKR";

let dropdowns = document.querySelectorAll(".dropDown select");
let btn = document.querySelector("button");
let fromCrrency = document.querySelector(".from select");
let toCurrency = document.querySelector(".to select");
let finalOutput = document.querySelector(".output");
    

for (select of dropdowns){
    for(currentCode in countryList){
        let newOption = document.createElement("option");
        newOption.innerText = currentCode;
        newOption.value  = currentCode;
        select.append(newOption);
    } 
    select.addEventListener("change", (evt) => {

        updateFlag(evt.target);
    });
}


let updateFlag = (element) => {
    let currCode = element.value;
    let countryCode = countryList[currCode];
    let flagURL = `https://flagsapi.com/${countryCode}/shiny/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = flagURL;
} 

btn.addEventListener("click", async (evt) => {
    evt.preventDefault();

    let amount = document.querySelector(".amount input");
    let takenAmount = amount.value;

    if(takenAmount === "" || takenAmount < 1){
        takenAmount = 1;
        amount.value = "1";
    }

    const URL = `https://api.currencyapi.com/v3/latest?apikey=cur_live_EilZeY1qghRkLSGUOUX5ASf5i4FLemvrKhry0DPI&currencies=${toCurrency.value}&base_currency=${fromCrrency.value}`;

    let responce = await fetch(URL);
    let data1 = await responce.json();
    let toValue = toCurrency.value;
    let rate = data1.data[toValue];

    let fullFinalOutput = rate.value * takenAmount;
    finalOutput.innerText = fullFinalOutput;

});