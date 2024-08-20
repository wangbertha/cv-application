import React from 'react'
import Entry from './Entry';

const Section = ({ title, entries, updateEntries, handleEntryDelete, handleAddEntry }) => {
  function handleSectionSave(submittedEntries) {
      const tempEntries = JSON.parse(JSON.stringify(submittedEntries));
      updateEntries(tempEntries);
    }

    function handleSectionDelete(id) {
      handleEntryDelete(id);
    }

  return (
    <div className='section'>
        <h2>{title}</h2>
        {entries.map((entry) => 
          <div key={entry.meta.id}>
            <Entry entry={entry} handleSectionSave={handleSectionSave} handleSectionDelete={handleSectionDelete} />
          </div>
        )}
        {handleAddEntry ? <button onClick={handleAddEntry}>+ {title}</button> : null}
    </div>
  )
}

export default Section