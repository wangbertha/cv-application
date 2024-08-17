import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';

const WorkExperience = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        companyName: {
          label: 'Company Name',
          type: 'text',
          value: ''
        },
        positionTitle: {
          label: 'Position Title',
          type: 'text',
          value: ''
        },
        responsibilities: {
          label: 'Responsibilities',
          type: 'text',
          value: ''
        },
        dateFrom: {
          label: 'Date From',
          type: 'date',
          value: ''
        },
        dateTo: {
          label: 'Date To',
          type: 'date',
          value: ''
        }
    })

    function handleSave(submittedInfo) {
        setIsEditing(false);
        setInfo(submittedInfo);
    }

  return (
    <div className='section'>
        <h2>Work Experience</h2>
        {isEditing ? <Form info={info} handleSave={handleSave}/> : <Saved info={info} setIsEditing={setIsEditing} />}
    </div>
  )
}

export default WorkExperience