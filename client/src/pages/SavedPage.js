import React, { useState, useEffect } from 'react';
import BookContainer from '../components/BookContainer';
import Book from '../components/Book';
import API from '../utils/API';


const SavedPage = () => {
    // State for books in DB
    const [books, setBooks] = useState([]);

    // Load saved books from DB
    useEffect(() => {
        loadBooks()
    }, []);

    // Get books from DB and set state
    const loadBooks = async () => {
        try {
            const response = await API.getBooks();
            setBooks(response.data);
        } catch (err) { console.log(err) }
    }

    // When delete btn is clicked, remove from DB and reload books
    const handleOnClick = (e) => {
        const { id } = e.target;
        API.deleteBook(id);
        loadBooks();
    }

    // Map over books from DB and render each to Book component
    const bookList = books.map(book => 
        <Book 
            key={book._id}
            id={book._id}
            title={book.title}
            authors={book.authors}
            desc={book.description}
            img={book.image}
            link={book.link}
            type='button'
            btnName='Delete'
            onClick={ handleOnClick }
        />
    )
    
    // Render the BookContainer with the list of saved books from the DB
    return ( 
        <BookContainer heading={ books.length === 0 ? 'No saved books yet' : 'Saved' }>
            { bookList }
        </BookContainer>
    );
}
 
export default SavedPage;