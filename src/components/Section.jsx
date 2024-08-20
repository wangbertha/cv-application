import React from 'react'
import Entry from './Entry';

const Section = ({ title, type, entries, updateEntries, handleEntryDelete, handleAddEntry }) => {
  function handleSectionSave(submittedEntries) {
      const tempEntries = JSON.parse(JSON.stringify(submittedEntries));
      updateEntries(type, tempEntries);
    }

    function handleSectionDelete(id) {
      handleEntryDelete(type, id);
    }

    function handleSectionAdd() {
      handleAddEntry(type);
    }

  return (
    <div className='section'>
        <h2>{title}</h2>
        {entries.map((entry) => 
          <div key={entry.meta.id}>
            <Entry entry={entry} handleSectionSave={handleSectionSave} handleSectionDelete={handleSectionDelete} />
          </div>
        )}
        {handleAddEntry ? <button onClick={handleSectionAdd}>+ {title}</button> : null}
    </div>
  )
}

export default Section