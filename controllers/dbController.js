const db = require('../models');

module.exports = {
    async findAll(req, res) {
        try {
        const data = await db.Book.find({});
            res.json(data)
        } catch (err) { console.error(err) }
    },
}