const axios = require('axios');
const url = 'https://www.googleapis.com/books/v1/volumes';
const filter = 'fields=items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/previewLink)';
const max = 'maxResults=40';

module.exports = {
    //Google Books API call
    async searchBooksAPI(req, res) {
        const { book } = req.params; 
        
        try {
            const response = await axios.get(`${url}?q=${book}&${filter}&${max}&key${process.env.API_KEY}`);
            res.send(response.data);
        } catch (err) { console.error(err) }
    }
}