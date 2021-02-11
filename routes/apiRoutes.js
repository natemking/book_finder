const router = require('express').Router();
const dbController = require('../controllers/dbController');
const apiController = require('../controllers/apiController');

router.route('/books/:id?')
    .get(dbController.findAll)
    .post(dbController.saveOne)
    .delete(dbController.deleteOne);

router.route('/search/:book?')
    .post(apiController.searchBooksAPI);

module.exports = router;