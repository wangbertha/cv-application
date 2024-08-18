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
    <>
      {Object.entries(info).filter(([key]) => key!=='meta').map(([key, value]) => (<div key={key} className='saved' >
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