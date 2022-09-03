let searchBtn = document.getElementById("search-btn");
let countryInp = document.getElementById("country-inp");
searchBtn.addEventListener("click", () => {
            let countryName = countryInp.value;
            let finalURL = `https://restcountries.com/v3.1/name/${countryName}`;
            console.log(finalURL);
            fetch(finalURL)
                .then((response) => response.json())
                .then((data) => {
                        console.log(data[0]);
                        console.log(data[0].capital[0]);
                        console.log(data[0].flags.svg);
                        console.log(data[0].name.common);
                        console.log(data[0].continents[0]);
                        console.log(data[0].population);
                        console.log(Object.keys(data[0].currencies)[0]);
                        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
                        console.log(Object.values(data[0].languages).toString().split(`,`).join(`,`));
                        console.log(Object.values(data[0].borders).toString().split(`,`).join(`,`));
                        console.log(data[0].area)
                        result.innerHTML = `
        <img src = "${data[0].flags.svg}" class = "flag-img">
        <h2>${data[0].name.common}</h2>
        <div class ="wrapper">
            <div class="data-wrapper">
                <h4>Capital:</h4>
                <span>${data[0].capital[0]}</span>
            </div>
        </div>
        <div class ="wrapper">
            <div class="data-wrapper">
                <h4>Continents:</h4>
                <span>${data[0].continents[0]}</span>
            </div>
        </div>
        <div class ="wrapper">
            <div class="data-wrapper">
                <h4>Total Area(square miles):</h4>
                <span>${data[0].area}</span>
            </div>
        </div>
        <div class ="wrapper">
            <div class="data-wrapper">
                <h4>Populaions:</h4>
                <span>${data[0].population}</span>
            </div>
        </div>
        <div class ="wrapper">
            <div class="data-wrapper">
                <h4>Currency:</h4>
                <span>${data[0].currencies[Object.keys(data[0].currencies)].name}
                -${Object.keys(data[0].currencies)[0]}</span>
            </div>
        </div>
        <div class ="wrapper">
            <div class="data-wrapper">
                <h4>Language:</h4>
                <span>${Object.values(data[0].languages).toString().split(`,`).join(`,`)}
               </span>
            </div>
        </div>
        <div class ="wrapper">
            <div class="data-wrapper">
                <h4>Borders Link with Other Country:</h4>
                <span>${Object.values(data[0].borders).toString().split(`,`).join(`,`)}
               </span>
            </div>
        </div>
        
        `
        })
        .catch(()=>{
            if(countryName.length===0)
            {
                result.innerHTML=`<h3>Empty Input!!</h3>`
            }
            else
            {
                result.innerHTML =`<h3>Please enter a valid country Name!!</h3>`
            }
        })
});