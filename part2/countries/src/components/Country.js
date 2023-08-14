const Country = ({ name }) => {

    const ta = () => {
        console.log(name);
    }

        return (
            <div>
                {name} <button onClick={() => ta()}>show</button>
            </div>
        )
    

}

export default Country;