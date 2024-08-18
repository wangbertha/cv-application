import React, { useState } from 'react';

const Form = ({ info, handleSave }) => {
    const [formInfo, setFormInfo] = useState(info)

    function handleFieldUpdate(e) {
        e.preventDefault();
        const tempField = {...formInfo[e.target.id]};
        tempField.value = e.target.value;
        const tempFormInfo = {...formInfo};
        tempFormInfo[e.target.id] = tempField;
        setFormInfo(tempFormInfo);
    }

    function handleClick(e) {
        e.preventDefault();
        handleSave(formInfo);
    }

  return (
    <form>
        <ul>
          {Object.entries(formInfo)
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
        <button onClick={handleClick}>Save</button>
    </form>
  )
}

export default Form;