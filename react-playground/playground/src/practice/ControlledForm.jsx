import React, {useState} from "react";

const ControlledForm = () => {
    // Build a form that collects a user's first name and last name and displays the full name on submission
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [fullname, setFullName] = useState('');

    const handleFirstName = (event) => {
        setFirstName(event.target.value)
    }

    const handleLastName = (event) => {
        setLastName(event.target.value)
    }
    
    const displayFullName = (event) => {
        event.preventDefault()
        setFullName(`${firstname} ${lastname}`)
    }

    return (
        <div>
            <form onSubmit={displayFullName}>
                <input type="text" value={firstname} onChange={handleFirstName}/>
                <input type="text" value={lastname} onChange={handleLastName}/>
                <input type="submit" value="Submit"/>
            </form>
            {fullname && <h2>{fullname}</h2>}
        </div>
    )

}

export default ControlledForm