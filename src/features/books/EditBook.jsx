import React from "react";
import { useState } from "react";
import { useLocation , useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux"
import {updateBooks} from './BookSlice'

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [id, setId] = useState(location.state.id);
  const [author, setAuthor] = useState(location.state.author);
  const [title, setTitle] = useState(location.state.title);

  console.log(location);

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(updateBooks({id, title, author}))
    navigate("/show-books", {replace: true})
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="title">title:</label>
          <input
            type="text"
            id="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-field">
          <label htmlFor="author">author:</label>
          <input
            type="text"
            id="author"
            name="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">update</button>
      </form>
    </div>
  );
};

export default EditBook;
