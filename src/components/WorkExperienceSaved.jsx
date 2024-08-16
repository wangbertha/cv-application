import React from 'react'

const WorkExperienceSaved = ({ info, setIsEditing }) => {
  return (
    <div className='saved'>
      {Object.entries(info).map(([key, value]) => (
        <p key={key}><strong>{key}:</strong> {value}</p>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  )
}

export default WorkExperienceSaved