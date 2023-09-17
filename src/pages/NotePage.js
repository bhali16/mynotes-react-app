import React, {useEffect, useState} from 'react'
import {Link, useParams, useNavigate} from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
  const navigate = useNavigate();
  const {id} = useParams();

  let [note, setNote] = useState(null);

  let getNote = async() => {
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    const data = await response.json();
    setNote(data);
  } 

  let updateNote = async() => {
    await fetch(`http://localhost:8000/notes/${id}`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ...note, 'updated': new Date() })
    })
  }

  let handleSubmit = () => {
    console.log('id', id)
    if(id !==  'new' && !note.body){
      deleteNote()
    }else if(id == 'new'){
      updateNote()
    }
    navigate('/');
  }


  let deleteNote = async() => {
    await fetch(`http://localhost:8000/notes/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })

    navigate('/');
  }


  useEffect(()=>{
    getNote()
  },[id])

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to={'/'}>
            
            <ArrowLeft onClick={handleSubmit}/>

          </Link>
        </h3>
        <button onClick={deleteNote}>
          Delete
        </button>
      </div>
      <textarea onChange={ (e) => {setNote({...note, 'body':e.target.value})} } value={note?.body}></textarea>
    </div>
  )
}

export default NotePage