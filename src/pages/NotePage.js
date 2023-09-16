import React, {useEffect, useState} from 'react'
import {Link, useParams} from 'react-router-dom'
import { ReactComponent as ArrowLeft } from '../assets/arrow-left.svg'

const NotePage = () => {
  const {id} = useParams();

  let [note, setNote] = useState(null);

  let getNote = async() => {
    let response = await fetch(`http://localhost:8000/notes/${id}`);
    const data = await response.json();
    setNote(data);
  } 

  useEffect(()=>{
    getNote()
  },[id])

  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <Link to={'/'}>
            
            <ArrowLeft/>

          </Link>
        </h3>
      </div>
      <textarea value={note?.body}></textarea>
    </div>
  )
}

export default NotePage