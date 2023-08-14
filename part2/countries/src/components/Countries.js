import Country from "./Country"
import SingleCountry from "./SingleCountry";

const Countries = ({ countries, filterCountry, api_key }) => {

    const filteredCountries = countries.filter(country => country.name.common.toLowerCase().includes(filterCountry.toLowerCase()));
    const matchedCountriesCount = filteredCountries.length;


    return (
        <div>
            {matchedCountriesCount > 10 ? <div>Too many matches, specify filter</div>
                : matchedCountriesCount === 1
                    ? <SingleCountry name={filteredCountries[0].name.common} capital={filteredCountries[0].capital}
                        area={filteredCountries[0].area} languages={filteredCountries[0].languages} 
                        flag={filteredCountries[0].flags.png} flagAlt={filteredCountries[0].flags.alt}
                        countryShort={filteredCountries[0].cca2} api_key={api_key} />
                    : filteredCountries.map(country =>
                        <Country key={country.name.common} name={country.name.common} />)}
        </div>

    )
}

export default Countries;
