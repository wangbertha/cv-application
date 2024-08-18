import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';
import  { v4 as uuidv4 } from 'uuid';

const Education = () => {
    const initialInfo = {
      meta: {
        id: uuidv4(),
        isEditing: true,
      },
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
    }
    const [info, setInfo] = useState([initialInfo]);

    function handleSave(submittedInfo) {
      const tempInfo = [...info];
      const index = tempInfo.findIndex((element) => element.meta.id===submittedInfo.meta.id);
      tempInfo[index] = {...submittedInfo};
      tempInfo[index].meta.isEditing = false;
      setInfo(tempInfo);
    }

    function toggleToEdit(id) {
      const tempInfo = [...info];
      const index = tempInfo.findIndex((element) => element.meta.id===id);
      tempInfo[index].meta.isEditing = true;
      setInfo(tempInfo);
    }

    function addEducation() {
      const tempInfo = [...info];
      tempInfo.push(initialInfo);
      setInfo(tempInfo);
    }

  return (
    <div className='section'>
        <h2>Education</h2>
        {info.map((entry) => 
          <div key={entry.meta.id}>
            {entry.meta.isEditing ? <Form info={entry} handleSave={handleSave}/> : <Saved info={entry} toggleToEdit={toggleToEdit} />}
          </div>
        )}
        <button onClick={addEducation}>+ Education</button>
    </div>
  )
}

export default Education