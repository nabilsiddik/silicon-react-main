import React from 'react'
import './consultationForm.css'

const ConsultationForm = () => {
    return (
        <div id='consultation_form'>
            <div className="form-container">
                <h2>Get Online Consultation</h2>
                <form>
                    <div className="form-group">
                        <label>Full name</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input type="email" />
                    </div>
                    <div className="form-group">
                        <label>Specialist</label>
                        <select>
                            <option>Select a specialist</option>
                            <option>Specialist 1</option>
                            <option>Specialist 2</option>
                            <option>Specialist 3</option>
                        </select>
                    </div>
                    <button type="submit" className="submit-button">Make an appointment</button>
                </form>
            </div>
        </div>
    )
}

export default ConsultationForm
