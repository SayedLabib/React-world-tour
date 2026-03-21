import './Country.css'

const Country = ({country}) => {
    // console.log(country);

    const {name, capital} = country;
    return (
        <div className='box'>
            <h4>Name: {name.common} </h4>
            <h4>Capital: {capital[0]}</h4>
        </div>
    );
};

export default Country;