import React from 'react'
import Entry from './Entry';

const GeneralInfo = ({ generalInfo, updateGeneralInfo, handleGeneralInfoDelete }) => {
    function handleSectionSave(submittedEntry) {
      const tempEntry = JSON.parse(JSON.stringify(submittedEntry));
      updateGeneralInfo(tempEntry);
    }

  return (
    <div className='section'>
      <h2>General Information</h2>
      <div>
        <Entry entry={generalInfo} handleSectionSave={handleSectionSave} handleSectionDelete={handleGeneralInfoDelete} />
      </div>
    </div>
  )
}

export default GeneralInfo