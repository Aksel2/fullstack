const PersonForm = ({ addNewContact, handleNameChange, handleNumberChange }) => {
    return (
        <div>
            <form onSubmit={addNewContact}>
                <div>name: <input onChange={handleNameChange} /></div>
                <div>number: <input onChange={handleNumberChange} /></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}

export default PersonForm