import React from 'react'

const Saved = ({ info, toggleToEdit }) => {

  function handleClick(e) {
    e.preventDefault();
    toggleToEdit(info.meta.id);
  }

  return (
    <div className='saved'>
      {Object.entries(info).filter(([key]) => key!=='meta').map(([key, value]) => (
        <p key={key}><strong>{value.label}:</strong> {value.value}</p>
      ))}
      <button onClick={handleClick}>Edit</button>
    </div>
  )
}

export default Saved