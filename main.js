const loadData = () =>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(Data => displayData(Data))
}

const displayData = countries => {
    const countriesContainer = document.getElementById('all-countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div')
        countryDiv.innerHTML = `
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital ? country.capital[0] : 'No Capital'   }
        `
        console.log(country.capital);
        

        countriesContainer.appendChild(countryDiv);
    })
}


loadData();



