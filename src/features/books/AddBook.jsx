import React from 'react'
import {useSelector, useDispatch} from "react-redux" 
import { useState } from 'react'
import {useNavigate} from "react-router-dom"
import {addBooks} from './BookSlice'

import {v4 as uudidv4} from "uuid"

const AddBook = () => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const dispatch = useDispatch()
  const navigate = useNavigate()

  
  

  const handleSubmit = (e) => {
    e.preventDefault()
    const book = {
      id: uudidv4(),
      title, 
      author};
      dispatch(addBooks(book))
      navigate("/show-books", {replace: true})
  }
  // console.log(addBooks(book))
  return (
    <div>
      <h1>add books</h1>
      <form onSubmit={handleSubmit}>
        <div className='form-field'>
          <label htmlFor="title">title:</label>
          <input type="text" id='text' name='title' value={title} onChange={(e) => setTitle(e.target.value)} required/>
        </div>
        <div className='form-field'>
          
          <label htmlFor="author">author:</label>
          <input type="text" id='author' name='author' value={author} onChange={(e) => setAuthor(e.target.value)} required/>
        </div>
        <button type='submit'>Add books</button>
      </form>
    </div>
  )
}

export default AddBook