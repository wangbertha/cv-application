import React, { useState } from 'react';

const WorkExperienceForm = ({ info, handleSave }) => {
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
                <label htmlFor="companyName">Company Name: </label>
                <input type="text" id="companyName" className="company-name" name="companyName" value={formInfo.companyName} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="positionTitle">Position Title: </label>
                <input type="text" id="positionTitle" className="position-title" name="positionTitle" value={formInfo.positionTitle} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="responsibilities">Responsibilities: </label>
                <input type='responsibilities' id="responsibilities" className="responsibilities" name="responsibilities" value={formInfo.responsibilities} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="dateFrom">Date From: </label>
                <input type="date" id="dateFrom" className="date-from" name="dateFrom" value={formInfo.dateFrom} onChange={handleFieldUpdate} />
            </li>
            <li>
                <label htmlFor="dateTo">Date To: </label>
                <input type="date" id="dateTo" className="date-to" name="dateTo" value={formInfo.dateTo} onChange={handleFieldUpdate} />
            </li>
        </ul>
        <button onClick={handleClick}>Save</button>
    </form>
  )
}

export default WorkExperienceForm;