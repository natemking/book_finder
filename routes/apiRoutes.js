const router = require('express').Router();
const dbController = require('../controllers/dbController');
const apiController = require('../controllers/apiController');

router.route('/savedbooks/:id?')
    .get(dbController.findAll)
//     .post()
    .delete(dbController.deleteOne)

router.route('/search/:book?')
    // .get(null)
    .post(apiController.searchBooksAPI)

module.exports = router;