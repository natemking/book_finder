import React, { useState } from 'react';
import Searchbar from '../components/Searchbar';
import BookContainer from '../components/BookContainer'
import Book from '../components/Book'

const SearchPage = () => {
    const [search, setSearch] = useState('');

    const handleOnChange = (e) => {
        const { value } = e.target
        setSearch(value)
    }

    const handleBtnSubmit = (e) => {
        e.preventDefault();
        console.log(search);
    }

    return (

       <>
            <Searchbar
                onChange={handleOnChange}
                onSubmit={handleBtnSubmit}
            />
    
            <BookContainer title='Results'>
                <Book />
            </BookContainer>
       </>
    );
}
 
export default SearchPage;