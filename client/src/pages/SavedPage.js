import React, { useState, useEffect } from 'react';
import BookContainer from '../components/BookContainer';
import API from '../utils/API'

const SavedPage = () => {
    const [books, setBooks] = useState('');

    useEffect(() => {
        loadBooks()
    }, []);

    const loadBooks = async () => {
        try {
            const response = await API.getBooks();
            setBooks(response.data);
        } catch (err) { console.log(err) }
    }

    console.log(books);
    return ( 
        <BookContainer />
    );
}
 
export default SavedPage;