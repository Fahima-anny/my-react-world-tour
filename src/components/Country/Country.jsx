import { useState } from 'react';
import './Country.css'

const Country = ({country , handleVisitedCountry , handleFlags}) => {
    console.log(country) ;
    const{name,flags,population,area,cca3} = country ;

// let [visited,setVisited] = useState(false) ;

// let handleVisit = () => {
//     setVisited(!visited) ;
// }


let [visited,setVisited] = useState(false) ;
let handleVisited = () => {
    setVisited(!visited) ;
}

// console.log(handleVisitedCountry)
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h2 style={{color: visited ? 'red' : 'green'}}>Name: {name?.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
            {/* <button onClick={handleVisit}>{visited ? 'Visited' :'Going'}</button>
            <p>{visited ? 'I have visited this country' : 'I want to visit this country'}</p> */}
            <button onClick={() => handleFlags(country)}>Mark Flag</button>
<button onClick={() => handleVisitedCountry(country)}>Mark Visited</button> <br />
<button onClick={handleVisited}> { visited ? 'Visited' : 'Going To' } </button>
<p> { visited ? 'Ihave visited this country' : 'I want to visit this country' } </p>
        </div>
    );
};

export default Country;