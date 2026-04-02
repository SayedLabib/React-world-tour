import { useState } from 'react';
import './Country.css'

const Country = ({country, handleVisitedCountry}) => {
    // console.log(country);
    
    const [visited, setVisited] = useState(false);

    const handleVisit = () =>{
        setVisited(!visited);
    }

    const {name, capital} = country;
    return (
        <div className='box'>
            <h4>Name: {name.common} </h4>
            <h4>Capital: {capital[0]}</h4>
            <button onClick={handleVisit}>
                {visited ? 'Visited' : 'Not Visited'}
            </button>
            { visited ? <p>I have visited {name.common} country.</p> : <p>I have not visited {name.common} country.</p>}

            <br />
            <button onClick={() => handleVisitedCountry(country.common)}>
                Country visited
            </button>
        </div>
    );
};

export default Country;