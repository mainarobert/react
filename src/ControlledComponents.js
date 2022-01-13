import React from 'react'
import useInput from './hooks/useInput'

function ControlledComponents() {

    const [name, bindName] = useInput('')
    const [email, bindEmail] = useInput('')
    const [number, bindNumber] = useInput('')

    return (
        <div>

            <form>
                <label>Enter Name</label>
                <input 
                    type="text"
                    {...bindName}
                />
                <label>Enter email</label>
                <input 
                    type="text"
                    {...bindEmail}
                />
                <label>Enter Number</label>
                <input 
                    type="number"
                    {...bindNumber}
                />
            </form>

            <p>name : {name}</p>
            <p>email : {email}</p>
            <p>number : {number}</p>

        </div>
    )
}

export default ControlledComponents
