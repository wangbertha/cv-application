import React, { useState } from 'react'
import Entry from './Entry';
import  { v4 as uuidv4 } from 'uuid';

const GeneralInfo = () => {
    const initialEntry = {
      meta: {
        id: uuidv4(),
        isEditing: true
      },
      firstName: {
        label: 'First Name',
        type: 'text',
        value: ''
      },
      lastName: {
        label: 'Last Name',
        type: 'text',
        value: ''
      },
      email: {
        label: 'Email',
        type: 'email',
        value: ''
      },
      phoneNumber: {
        label: 'Phone Number',
        type: 'tel',
        value: ''
      }
    }
    const [entry, setEntry] = useState(initialEntry)

    function handleSectionSave(submittedEntry) {
      const tempEntry = JSON.parse(JSON.stringify(submittedEntry));
      tempEntry.meta.isEditing = false;
      setEntry(tempEntry);
    }

    function handleSectionDelete() {
      setEntry(initialEntry);
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