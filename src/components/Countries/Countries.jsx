import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countries.css'

const Countries = () => {

let [countries,setCountries] = useState([])
let [ visitedCountries,setVisitedCountries ] = useState([])
let [ visitedFlags,setVisitedFlags ] = useState([])

useEffect( () => {
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => setCountries(data))
} , [] )

let handleFlags = (country) => {
// console.log(country.name.common)
let newFlag = [...visitedFlags,country]
setVisitedFlags(newFlag)
}

let handleVisitedCountry = (country) => {
    console.log('add to visited country array')
    console.log(country)
    // visitedCountries.push(country)
    let newVisitedCountry = [...visitedCountries,country]
    setVisitedCountries(newVisitedCountry)
}

    return (
        <div>
           <h2>Countries: {countries.length}</h2> 

<div>
    <h2>Visited Flags:</h2>
    <div>
       {
        visitedFlags.map( country => <img key={country.cca3} src={country.flags.png} alt="" /> )
       }
    </div>
</div>

          <div>
          <h2>Visited Countries: {visitedCountries.length}</h2>
           <ul>
            {
                visitedCountries.map( country => <li key={country.cca3}>{country.name.common}</li> )
            }
           </ul>
          </div>
          <div className="country-container">
          {
            countries.map(country => <Country 
                handleFlags={handleFlags}
                handleVisitedCountry={handleVisitedCountry}
                 key={country.cca3}
                  country={country}></Country>)
           }
          </div>
        </div>
    );
};

export default Countries;