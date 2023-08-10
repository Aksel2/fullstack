const SingleCountry = ({ name, capital, area, languages, flag, flagAlt }) => {

    const spokenLanguages = Object.values(languages);
    console.log(flag);

    return (
        <div>
            <h1>{name}</h1>
            <div>capital {capital}</div>
            <div>area {area}</div>
            <h3>languages:</h3>
            <ul>
                {spokenLanguages.map(lang => <li key={lang}>{lang}</li>)}
            </ul>
            <img className="flag" src={flag} alt={flagAlt}/>

            <h2>Weather in {capital}</h2>
            <div>temperature xx Celcius</div>
        </div>
    )
}

export default SingleCountry;