import React, { useState } from 'react'
import WorkExperienceSaved from './WorkExperienceSaved';
import WorkExperienceForm from './WorkExperienceForm';

const WorkExperience = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        companyName: '',
        positionTitle: '',
        responsibilities: '',
        dateFrom: '',
        dateTo: ''
    })

    function handleSave(submittedInfo) {
        setIsEditing(false);
        setInfo(submittedInfo);
    }

  return (
    <div className='section'>
        <h2>Work Experience</h2>
        {isEditing ? <WorkExperienceForm info={info} handleSave={handleSave}/> : <WorkExperienceSaved info={info} setIsEditing={setIsEditing} />}
    </div>
  )
}

export default WorkExperience