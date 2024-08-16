import React from 'react'

const GeneralInfoSaved = ({ info, setIsEditing }) => {
  return (
    <div className='saved'>
      <ul>{Object.entries(info).map(([key, value]) => (
        <li key={key}><strong>{key}:</strong> {value}</li>
      ))}</ul>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  )
}

export default GeneralInfoSaved