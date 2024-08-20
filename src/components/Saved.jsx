import React from 'react'

const Saved = ({ entry, toggleToEdit, handleFormDelete }) => {

  function handleClick(e) {
    e.preventDefault();
    toggleToEdit(entry.meta.id);
  }

  function handleDelete(e) {
    e.preventDefault();
    handleFormDelete(entry.meta.id);
  }

  return (
    <>
      {Object.entries(entry).filter(([key]) => key!=='meta').map(([key, value]) => (<div key={key} className='saved' >
        <h3>{value.label}:</h3>
        <p>{value.value}</p></div>
      ))}
      <div className="action-btns">
        <button onClick={handleClick}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </>
  )
}

export default Saved