import React from 'react'

const Note = ({ note, toggleImportance }) => {
  const label = note.accept
    ? 'make not accepted' : 'make accepted'

  return (
    <li>
      {note.content} 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}
export default Note