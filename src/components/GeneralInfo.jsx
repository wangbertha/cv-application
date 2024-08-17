import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';

const GeneralInfo = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        firstName: {
          label: 'First Name',
          type: 'text',
          value: ''
        },
        lastName: {
          label: 'Last Name',
          type: 'text',
          value: ''
        },
        email: {
          label: 'Email',
          type: 'email',
          value: ''
        },
        phoneNumber: {
          label: 'Phone Number',
          type: 'tel',
          value: ''
        }
    })

    function handleSave(submittedInfo) {
        setIsEditing(false);
        setInfo(submittedInfo);
    }

  return (
    <div className='section'>
        <h2>General Information</h2>
        {isEditing ? <Form info={info} handleSave={handleSave}/> : <Saved info={info} setIsEditing={setIsEditing} />}
    </div>
  )
}

export default GeneralInfo