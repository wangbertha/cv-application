import React, { useState } from 'react'
import GeneralInfoSaved from './GeneralInfoSaved';
import GeneralInfoForm from './GeneralInfoForm';

const GeneralInfo = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    })

    function handleSave(submittedInfo) {
        setIsEditing(false);
        setInfo(submittedInfo);
    }

  return (
    <div className='section'>
        <h2>General Information</h2>
        {isEditing ? <GeneralInfoForm info={info} handleSave={handleSave}/> : <GeneralInfoSaved info={info} setIsEditing={setIsEditing} />}
    </div>
  )
}

export default GeneralInfo