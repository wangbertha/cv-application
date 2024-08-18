import React, { useState } from 'react'
import Saved from './Saved';
import Form from './Form';
import  { v4 as uuidv4 } from 'uuid';

const Section = ({ infoStructure, title }) => {
    const initialInfo = {...infoStructure};
    const [info, setInfo] = useState([initialInfo]);

    function handleSave(submittedInfo) {
      const tempInfo = [...info];
      const index = tempInfo.findIndex((element) => element.meta.id===submittedInfo.meta.id);
      tempInfo[index] = JSON.parse(JSON.stringify(submittedInfo));
      tempInfo[index].meta.isEditing = false;
      setInfo(tempInfo);
    }

    function toggleToEdit(id) {
      const tempInfo = [...info];
      const index = tempInfo.findIndex((element) => element.meta.id===id);
      tempInfo[index].meta.isEditing = true;
      setInfo(tempInfo);
    }

    function addInfo() {
      const tempInfo = [...info];
      const newInfo = JSON.parse(JSON.stringify(initialInfo));
      newInfo.meta.id = uuidv4();
      tempInfo.push(newInfo);
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
        <h2>{title}</h2>
        {info.map((entry) => 
          <div key={entry.meta.id}>
            {entry.meta.isEditing ? <Form info={entry} handleSave={handleSave}/> : <Saved info={entry} toggleToEdit={toggleToEdit} deleteInfo={deleteInfo} />}
          </div>
        )}
        <button onClick={addInfo}>+ {title}</button>
    </div>
  )
}

export default Section