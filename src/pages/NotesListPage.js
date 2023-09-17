import React, { useState, useEffect } from 'react'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'


const NotesListPage = () => {

  let [notes, setNotes] = useState([])

  let getNotes = async() => {
    let response = await fetch(`http://localhost:8000/notes/`)
    const data = await response.json();
    setNotes(data);
  }
  
  useEffect( () => {
    getNotes()
  }, [])

  
  return (
    <div className='notes'>
      <div className='notes-header'>
        <h2 className='notes-title'>&#9782;</h2>
        <p className='notes-count'>{notes.length}</p>
      </div>
        <div className='notes-list'>
            {notes.map((note, index) => (
                <ListItem key={index} note={note}/>
            ))}
        </div>
        <AddButton/>
    </div>
  )
}

export default NotesListPage