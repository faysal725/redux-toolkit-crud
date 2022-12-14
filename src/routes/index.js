import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import AddBook from '../features/books/AddBook'
import BooksView from '../features/books/BooksView'
import EditBook from '../features/books/EditBook'
import Footer from '../layouts/Footer'
import Navbar from '../layouts/Navbar'
import Error from '../pages/Error'
import Home from '../pages/Home'
const Index = () => {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='*' element={<Error />} />
            <Route path='/show-books' element={<BooksView />} />
            <Route path='/add-books' element={<AddBook />} />
            <Route path='/edit-books'element={<EditBook />} />
        </Routes>
        </main>
        <Footer />
    </BrowserRouter>
  )
}

export default Index