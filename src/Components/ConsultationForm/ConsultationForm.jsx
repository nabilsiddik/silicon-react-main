import React, { useContext, useState } from 'react'
import './consultationForm.css'
import { darkModeContext } from '../../provider/DarkModeProvider'

const ConsultationForm = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [specialist, setSpecialist] = useState('')
    const [error, setError] = useState(null)

    const handleFormSubmit = (e) => {
        e.preventDefault()
        setError('')
        if(!name || !email || !specialist){
            setError('Fields can not be empty.')
        }
    }

    const {isDarkModeOn} = useContext(darkModeContext)

    return (
        <div id='consultation_form'>
            <div className={`${isDarkModeOn && 'light_dark'} form-container`}>
                <h2>Get Online Consultation</h2>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-group">
                        <label>Full name</label>
                        <input value={name} onChange={(e)=> setName(e.target.value)} type="text" name='name' />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input value={email} onChange={(e)=> setEmail(e.target.value)} type="email" name='email' />
                    </div>
                    <div className="form-group">
                        <label>Specialist</label>
                        <select value={specialist} name='specialist' onChange={(e) => setSpecialist(e.target.value)}>
                            <option>Select a specialist</option>
                            <option>Specialist 1</option>
                            <option>Specialist 2</option>
                            <option>Specialist 3</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Make an appointment</button>
                    <p className='mt-10' style={{color: 'red', fontWeight: 'bold'}}>{error && error}</p>
                </form>
            </div>
        </div>
    )
}

export default ConsultationForm
