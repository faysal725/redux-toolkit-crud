const {createSlice} = require("@reduxjs/toolkit")
const {v4: uudidv4} = require("uuid")


const initialBooks = {
    books: [
        {id: uudidv4(), title: "love bangladesh", author: "x man"},
        {id: uudidv4(), title: "love", author: "x man"},
    ]
}




export const bookSlice = createSlice({
    name: "books",
    initialState: initialBooks,
    reducers:{
        showBooks: (state) => state,
        addBooks: (state, action) =>{
            state.books.push(action.payload)
        },
        updateBooks: (state, action)  =>{
            const {id, title, author}= action.payload
            const isBookExist = state.books.filter((book) => book.id === id)
            if (isBookExist) {
                isBookExist[0].title = title;
                isBookExist[0].author=author
            }
        },
        deleteBooks: (state, action) =>{
            const id = action.payload 
            console.log(id)
            state.books = state.books.filter(book => book.id !== id)
        }
    }
})

export const {showBooks, addBooks, deleteBooks, updateBooks}  = bookSlice.actions

export default bookSlice.reducer