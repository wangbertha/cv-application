import React, { useState } from 'react';
import '../styles/Form.css'

const Form = ({ entry, handleFormSave, handleFormDelete, setAlert }) => {
    const [formEntry, setFormEntry] = useState(entry)

    function handleFieldUpdate(e) {
        e.preventDefault();
        const tempField = {...formEntry[e.target.id]};
        tempField.value = e.target.value;
        const tempFormEntry = {...formEntry};
        tempFormEntry[e.target.id] = tempField;
        setFormEntry(tempFormEntry);
        return false;
    }

    function handleSave(e) {
        e.preventDefault();
        handleFormSave(formEntry);
        handleAlerts();
        return false;
    }

    function handleAlerts() {
        let alerts = []
        Object.values(formEntry).forEach((value) => {
          if (value.value==='') {
            alerts.push(value.label);
          }
        })
        setAlert(`Missing: ${alerts.join(', ')}`)
    }

    function handleDelete(e) {
      e.preventDefault();
      handleFormDelete(entry.meta.id);
      return false;
    }

  return (
    <form>
        <ul>
          {Object.entries(formEntry)
            .filter(([key]) => key!=='meta')
            .map(([key, value]) => 
              <li key={key}>
                <label htmlFor={key}>{value.label}: </label>
                <input 
                  type={value.type} 
                  id={key} 
                  name={key} 
                  value={value.value} 
                  onChange={handleFieldUpdate} 
                />
              </li>
            )}
        </ul>
        <div className="action-btns">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
    </form>
  )
}

export default Form;