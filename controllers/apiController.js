const axios = require('axios');
const filter = 'fields=items(id,volumeInfo/title,volumeInfo/authors,volumeInfo/description,volumeInfo/imageLinks,volumeInfo/previewLink)'

module.exports = {
    async searchBooksAPI(req, res) {
        const { book } = req.params; 
        try {
            const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${book}&${filter}&key${process.env.API_KEY}`);
            res.send(response.data);
        } catch (err) { console.error(err) }
    }
}