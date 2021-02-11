import axios from 'axios'

const API = {
    getBooks() { return axios.get('/api/savedbooks')},
    saveBook(bookData) { return axios.post('/api/savedbooks', bookData)},
    deleteBook(id) { return axios.delete(`/api/savedbooks/${id}`)},

    // getSearchResults() { return axios.get('/api/search')},
    searchBooks(book) {return axios.post(`/api/search/${book}`)}
}

export default API;