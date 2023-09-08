import React from 'react'

const ListItem = ({note}) => {
  return (
    <div><p>{note.id} - {note.body}</p></div>
  )
}

export default ListItem