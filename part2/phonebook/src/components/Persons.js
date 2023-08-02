import Person from './Person'

const Persons = ({ persons, filterName }) => {
    return (
        <div>
            {persons.map(person =>
                <Person key={person.name} name={person.name} number={person.number} />
            ).filter(person => person.key.toLowerCase().includes(filterName.toLocaleLowerCase()))}
        </div>
    )
}

export default Persons