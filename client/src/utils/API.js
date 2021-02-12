import axios from 'axios';

const API = {
    // DB api CRUD calls
    getBooks() {
        return axios.get('/api/books')
    },
    saveBook(bookData) {
        return axios.post('/api/books', bookData)
    },
    deleteBook(id) {
        return axios.delete(`/api/books/${id}`)
    },
    // POST call for Google Books API
    searchBooks(book) {
        return axios.post(`/api/search/${book}`)
    }
}

export default API;