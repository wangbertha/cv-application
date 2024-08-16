import React, { useState } from 'react';

const EducationForm = ({ info, handleSave }) => {
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
                <label htmlFor="schoolName">School: </label>
                <input type="text" id="schoolName" className="school-name" name="schoolName" value={formInfo.schoolName} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="degree">Degree: </label>
                <input type="text" id="degree" className="degree" name="degree" value={formInfo.degree} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="major">Major: </label>
                <input type='text' id="major" className="major" name="major" value={formInfo.major} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="graduationYear">Phone Number: </label>
                <input type="number" id="graduationYear" className="graduation-year" name="graduationYear" value={formInfo.graduationYear} onChange={handleFieldUpdate} />
            </li>
        </ul>
        <button onClick={handleClick}>Save</button>
    </form>
  )
}

export default EducationForm;