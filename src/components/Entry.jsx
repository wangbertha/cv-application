import React, { useState } from 'react';
import Saved from './Saved';
import Form from './Form';

const Entry = ({ entry, handleSectionSave, handleSectionDelete }) => {
  const [isEditing, setIsEditing] = useState(true);

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
        {isEditing ? <Form entry={entry} handleFormSave={handleEntrySave} handleFormDelete={handleEntryDelete} /> : <Saved entry={entry} toggleToEdit={() => setIsEditing(true)} handleFormDelete={handleEntryDelete} />}
    </div>
  )
}

export default Entry