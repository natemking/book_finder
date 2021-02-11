import axios from 'axios'

const API = {
    getBooks() { return axios.get('/api/books')},
    saveBook(bookData) { return axios.post('/api/books', bookData)},
    deleteBook(id) { return axios.delete(`/api/books/${id}`)},

    // getSearchResults() { return axios.get('/api/search')},
    searchBooks(book) {return axios.post(`/api/search/${book}`)}
}

export default API;