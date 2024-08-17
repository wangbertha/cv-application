import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';

const Education = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        schoolName: {
          label: 'School',
          type: 'text',
          value: ''
        },
        degree: {
          label: 'Degree',
          type: 'text',
          value: ''
        },
        major: {
          label: 'Major',
          type: 'text',
          value: ''
        },
        graduationYear: {
          label: 'Graduation Year',
          type: 'number',
          value: ''
        }
    })

    function handleSave(submittedInfo) {
        setIsEditing(false);
        setInfo(submittedInfo);
    }

  return (
    <div className='section'>
        <h2>Education</h2>
        {isEditing ? <Form info={info} handleSave={handleSave}/> : <Saved info={info} setIsEditing={setIsEditing} />}
    </div>
  )
}

export default Education