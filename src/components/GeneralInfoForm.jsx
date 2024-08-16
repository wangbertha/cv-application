import React, { useState } from 'react';

const GeneralInfoForm = ({ info, handleSave }) => {
    const [formInfo, setFormInfo] = useState(info)

    function handleFieldUpdate(e) {
        e.preventDefault();
        setFormInfo({...formInfo, [e.target.id]: e.target.value});
    }

    function handleClick(e) {
        e.preventDefault();
        handleSave(formInfo);
    }

  return (
    <form>
        <ul>
            <li>
                <label htmlFor="firstName">First Name: </label>
                <input type="text" id="firstName" className="first-name" name="firstName" value={formInfo.firstName} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="lastName">Last Name: </label>
                <input type="text" id="lastName" className="last-name" name="lastName" value={formInfo.lastName} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="email">Email: </label>
                <input type='email' id="email" className="email" name="email" value={formInfo.email} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="phoneNumber">Phone Number: </label>
                <input type="tel" id="phoneNumber" className="phone" name="phoneNumber" value={formInfo.phoneNumber} onChange={handleFieldUpdate} />
            </li>
        </ul>
        <button onClick={handleClick}>Save</button>
    </form>
  )
}

export default GeneralInfoForm;