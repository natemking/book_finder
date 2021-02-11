import React, { useState, useEffect } from 'react';
import BookContainer from '../components/BookContainer';
import Book from '../components/Book'
import API from '../utils/API'


const SavedPage = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    const loadBooks = async () => {
        try {
            const response = await API.getBooks();
            setBooks(response.data);
        } catch (err) { console.log(err) }
    }

    const handleOnClick = (e) => {
        const { id } = e.target;
        API.deleteBook(id);
        loadBooks();
    }

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
    
    return ( 
        <BookContainer title={ books.length === 0 ? 'No saved books yet' : 'Saved' }>
            { bookList }
        </BookContainer>
    );
}
 
export default SavedPage;