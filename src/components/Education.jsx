import React, { useState } from 'react'
import EducationSaved from './EducationSaved';
import EducationForm from './EducationForm';

const Education = () => {
    const [isEditing, setIsEditing] = useState(true);
    const [info, setInfo] = useState({
        schoolName: '',
        degree: '',
        major: '',
        graduationYear: ''
    })

    function handleSave(submittedInfo) {
        setIsEditing(false);
        setInfo(submittedInfo);
    }

  return (
    <div className='section'>
        <h2>Education</h2>
        {isEditing ? <EducationForm info={info} handleSave={handleSave}/> : <EducationSaved info={info} setIsEditing={setIsEditing} />}
    </div>
  )
}

export default Education