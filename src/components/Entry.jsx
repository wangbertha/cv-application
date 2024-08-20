import React, { useState } from 'react';
import Saved from './Saved';
import Form from './Form';
import '../styles/Entry.css'

const Entry = ({ entry, handleSectionSave, handleSectionDelete }) => {
  const [isEditing, setIsEditing] = useState(true);
  const [alert, setAlert] = useState('');

  function handleEntrySave(formEntry) {
    handleSectionSave(formEntry);
    setIsEditing(false);
  }

  function handleEntryDelete(id) {
    handleSectionDelete(id);
    setIsEditing(true);
  }

  return (
    <div>
        {isEditing ? <Form entry={entry} handleFormSave={handleEntrySave} handleFormDelete={handleEntryDelete} setAlert={setAlert} /> : <Saved entry={entry} toggleToEdit={() => setIsEditing(true)} handleFormDelete={handleEntryDelete} />}
        {<p className='alert'>{alert}</p> || null}
    </div>
  )
}

export default Entry