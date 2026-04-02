import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    const [countries, setCountries] = useState([]); ;

    const [visitedCountries, setVisitedCountries] = useState([]);


    useEffect(()=>{

       fetch('https://restcountries.com/v3.1/all?fields=name,capital,currencies')
       .then(res => res.json())
       .then(data => setCountries(data))
 

    },[])

    const handleVisitedCountry = country => {
        console.log("country added");
        setVisitedCountries([...visitedCountries, country]);
    }

    return (

    
        <div>
            <h4>Countries: {countries.length}</h4>

            <h4>Visited Countries: {visitedCountries.length}</h4>

            <div className="country-container">
            {
                countries.map(country => <Country 
                    key={country.currencies.name} 
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}    
                    >
                     
                    </Country>)
            }
            </div>

        </div>
    );
};

export default Countries;