const load =()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(response =>response.json())
    .then(data => display(data))
}
const display =countries=>{
    // console.log(countries);
    const countriess = document.getElementById('countries')
    for ( const country of countries){
        // console.log(country
        //     );
        const countryDiv = document.createElement('div')
       countryDiv.classList.add('country');
       countryDiv.innerHTML=`
       <h3> Name: ${country.name.common} </h3>
       <p>Country:${country.capital ? country.capital[0] : 'no capital' } </p>
       <p> Borders: ${country.borders} </p>
       <button onclick="displycountry('${country.cca2}')" > Details</button>
       `
       countriess.appendChild(countryDiv)
    }


}
const displycountry = code =>{
    const url = `https://restcountries.com/v2/alpha/${code}
    `
    fetch(url)
    .then(res=> res.json())
    .then(data=> show(data))
    // console.log(url);

}
const show = count =>{
    console.log(count);
    const conatienr = document.getElementById('cs')
    conatienr.innerHTML=`
    <h2>Country Details</h2>
    <h3>Name: ${count.name}  </h3>
    <p>Capital:${count.capital}</p>
    <img src="${count.flags.png}" alt="">`

}
load()