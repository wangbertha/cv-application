import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';
import  { v4 as uuidv4 } from 'uuid';

const GeneralInfo = () => {
    const [info, setInfo] = useState({
        meta: {
          id: uuidv4(),
          isEditing: true
        },
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
      const tempInfo = {...submittedInfo};
      tempInfo.meta.isEditing = false;
      setInfo(tempInfo);
    }

    function toggleToEdit() {
      const tempInfo = {...info};
      tempInfo.meta.isEditing = true;
      setInfo(tempInfo);
    }

  return (
    <div className='section'>
        <h2>General Information</h2>
        {info.meta.isEditing ? <Form info={info} handleSave={handleSave}/> : <Saved info={info} toggleToEdit={toggleToEdit} />}
    </div>
  )
}

export default GeneralInfo