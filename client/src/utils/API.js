import axios from 'axios'

const API = {
    getBooks() { return axios.get('/api/savedbooks') },
    // getBook(id) { return axios.get(`/api/books/${id}`)},
    saveBook() { return axios.post('/api/books')},
    deleteBook(id) { return axios.delete(`/api/savedbooks/${id}`)},

    // getSearchResults() { return axios.get('/api/search')},
    searchBooks(book) {return axios.post(`/api/search/${book}`)}
}

export default API;