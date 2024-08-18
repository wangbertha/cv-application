import React from 'react'

const Saved = ({ info, toggleToEdit, deleteInfo }) => {

  function handleClick(e) {
    e.preventDefault();
    toggleToEdit(info.meta.id);
  }

  function handleDelete() {
    deleteInfo(info.meta.id);
  }

  return (
    <div className='saved'>
      {Object.entries(info).filter(([key]) => key!=='meta').map(([key, value]) => (
        <p key={key}><strong>{value.label}:</strong> {value.value}</p>
      ))}
      <div className="action-btns">
        <button onClick={handleClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  )
}

export default Saved