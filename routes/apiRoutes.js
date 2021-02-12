const router = require('express').Router();
const dbController = require('../controllers/dbController');
const apiController = require('../controllers/apiController');

// API routes for CRUD of books in DB
router.route('/books/:id?')
    .get(dbController.findAll)
    .post(dbController.saveOne)
    .delete(dbController.deleteOne);
    
// API route for Google Books API
router.route('/search/:book?')
    .post(apiController.searchBooksAPI);

module.exports = router;