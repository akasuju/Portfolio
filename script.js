$( document ).ready(function() {
    console.log( "ready!" );
});
const searchBox = document.querySelector('#query-field');
const countryName = document.querySelector('#country');
const Nationflag = document.querySelector('#country-flag');
const confirmedNumbers = document.querySelector('#confirmed-data');
const activeNumbers = document.querySelector('#active-data');
const recoveredNumbers = document.querySelector('#recovered-data');
const deathNumbers = document.querySelector('#death-data');

const apiData = {
    base : 'https://corona.lmao.ninja/v2/countries/'
}

function showCovidData(event) {
    if (event.keyCode == 13) {
        getResults(searchBox.value);

    }
}

function getResults(query) {
    fetch(`${apiData.base}${query}`)
        .then(fetchedData => fetchedData.json())
        .then(myData)

    function myData(fetchedData) {
        countryName.innerText = `${fetchedData.country}, ${fetchedData.countryInfo.iso3}`;
        Nationflag.src = fetchedData.countryInfo.flag;
        confirmedNumbers.innerText = fetchedData.cases;
        activeNumbers.innerText = fetchedData.active;
        recoveredNumbers.innerText = fetchedData.recovered;
        deathNumbers.innerText = fetchedData.deaths;
    }
}

searchBox.addEventListener('keypress', showCovidData)