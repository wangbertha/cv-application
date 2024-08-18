import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';
import  { v4 as uuidv4 } from 'uuid';

const GeneralInfo = () => {
    const initialInfo = {
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
    }
    const [info, setInfo] = useState(initialInfo)

    function handleSave(submittedInfo) {
      const tempInfo = JSON.parse(JSON.stringify(submittedInfo));
      tempInfo.meta.isEditing = false;
      setInfo(tempInfo);
    }

    function toggleToEdit() {
      const tempInfo = {...info};
      tempInfo.meta.isEditing = true;
      setInfo(tempInfo);
    }

    function deleteInfo() {
      setInfo(initialInfo);
    }

  return (
    <div className='section'>
      <h2>General Information</h2>
      <div>
        {info.meta.isEditing ? <Form info={info} handleSave={handleSave} deleteInfo={deleteInfo} /> : <Saved info={info} toggleToEdit={toggleToEdit} deleteInfo={deleteInfo} />}
      </div>
    </div>
  )
}

export default GeneralInfo