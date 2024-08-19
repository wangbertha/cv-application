import React, { useState } from 'react'
import Entry from './Entry';

const GeneralInfo = ({ infoStructure }) => {
    const [entry, setEntry] = useState(infoStructure)

    function handleSectionSave(submittedEntry) {
      const tempEntry = JSON.parse(JSON.stringify(submittedEntry));
      tempEntry.meta.isEditing = false;
      setEntry(tempEntry);
    }

    function handleSectionDelete() {
      setEntry(infoStructure);
    }

  return (
    <div className='section'>
      <h2>General Information</h2>
      <div>
        <Entry entry={entry} handleSectionSave={handleSectionSave} handleSectionDelete={handleSectionDelete} />
      </div>
    </div>
  )
}

export default GeneralInfo