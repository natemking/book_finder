module.exports = (mongoose, Schema) => {
    const BookSchema = new Schema({
        title: String,
        authors: String,
        description: String,
        image: String,
        link: String
    },
        { timestamps: true });

    const Book = mongoose.model('Book', BookSchema);

    return Book;
}