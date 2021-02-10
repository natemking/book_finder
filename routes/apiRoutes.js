const router = require('express').Router();
const dbController = require('../controllers/dbController');

router.route('/books/:id?')
    .get(dbController.findAll)
//     .post()
//     .delete();

module.exports = router;