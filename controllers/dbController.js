const db = require('../models');

module.exports = {
    // DB CRUD calls
    async findAll(req, res) {
        try {
            const data = await db.Book.find({});
            res.json(data)
        } catch (err) { console.error(err) }
    },
    async saveOne(req, res) {
        try {
            const data = db.Book.create(req.body) 
            res.json(data)
        } catch (err) { console.error(err) } 
    },
    async deleteOne(req, res) {
        try {
            const data = await db.Book.findByIdAndDelete(req.params.id);
            res.json(data)
        } catch (err) { console.error(err) }
    },

}