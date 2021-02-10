import axios from 'axios'

const API = {
    getBooks() { return axios.get('/api/books') },
    getBook(id) { return axios.get(`/api/books/${id}`)},
    saveBook() { return axios.post('/api/books')},
    deleteBook(id) { return axios.delete(`/api/books/${id}`)}
}

export default API;