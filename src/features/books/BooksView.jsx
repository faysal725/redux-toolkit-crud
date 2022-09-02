import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {deleteBooks} from "./BookSlice"
const BooksView = () => {
  const books = useSelector((state) => state.booksReducer.books)
  const dispatch = useDispatch()

  const handleDeleteBook=(id) =>{
    dispatch(deleteBooks(id))
  }
  return (
    <div>
      <h3>items</h3>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>author</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
            {books && books.map ((book) =>{
              const {id, title, author}=
              book
              return <tr key={id}>
                <td>{id}</td>
                <td>{title}</td>
                <td>{author}</td>
                <td>
                  <Link to="/edit-books" state={{id, title, author}}>
                    <button>Edit Books</button>
                  </Link>
                  <button onClick={() => {handleDeleteBook(id)}}>Delete</button>
                </td>
              </tr>
            })}
        </tbody>
      </table>
    </div>
  )
}

export default BooksView