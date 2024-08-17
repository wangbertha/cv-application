import React from 'react'

const Saved = ({ info, setIsEditing }) => {
  return (
    <div className='saved'>
      {Object.entries(info).map(([key, value]) => (
        <p key={key}><strong>{value.label}:</strong> {value.value}</p>
      ))}
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </div>
  )
}

export default Saved