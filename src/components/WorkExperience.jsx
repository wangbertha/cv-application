import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';
import  { v4 as uuidv4 } from 'uuid';

const WorkExperience = () => {
    const initialInfo = {
      meta: {
        id: uuidv4(),
        isEditing: true,
      },
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

    function addWorkExperience() {
      const tempInfo = [...info];
      tempInfo.push(initialInfo);
      setInfo(tempInfo);
    }

    function deleteInfo(id) {
      if (info.length===1) {
        setInfo([initialInfo]);
      }
      else {
        const tempInfo = info.filter((element) => element.meta.id!==id);
        setInfo(tempInfo);
      }
    }

  return (
    <div className='section'>
        <h2>Work Experience</h2>
        {info.map((entry) => 
          <div key={entry.meta.id}>
            {entry.meta.isEditing ? <Form info={entry} handleSave={handleSave}/> : <Saved info={entry} toggleToEdit={toggleToEdit} deleteInfo={deleteInfo} />}
          </div>
        )}
        <button onClick={addWorkExperience}>+ Work Experience</button>
    </div>
  )
}

export default WorkExperience