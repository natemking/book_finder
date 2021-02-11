import React, { useState } from 'react';
import API from '../utils/API'
import Searchbar from '../components/Searchbar';
import BookContainer from '../components/BookContainer'
import Book from '../components/Book'

const SearchPage = () => {
    const [search, setSearch] = useState('');
    const [searchResult, setSearchResult] = useState([]);

    const handleOnChange = (e) => {
        const { value } = e.target
        setSearch(value)
    }

    const handleBtnSubmit = (e) => {
        e.preventDefault();
        const searchForBook = async () =>{
            try {
            const results = await API.searchBooks(search.toLowerCase().trim());
            setSearchResult(results.data.items);
            console.log(searchResult);
            } catch (err) {console.error(err);}
        }    
        searchForBook();
    }

    const results = searchResult.filter(book => (
        book.volumeInfo.hasOwnProperty('title') &&
        book.volumeInfo.hasOwnProperty('authors') &&
        book.volumeInfo.hasOwnProperty('description') &&
        book.volumeInfo.hasOwnProperty('imageLinks') &&
        book.volumeInfo.hasOwnProperty('previewLink')
        ))
        .map(book =>
        <Book
            key={book.id}
            id={book.id}
            title={book.volumeInfo.title}
            authors={book.volumeInfo.authors}
            desc={book.volumeInfo.description}
            img={book.volumeInfo.imageLinks.thumbnail}
            link={book.volumeInfo.previewLink}
            btnType='save'
            // onClick={handleOnClick}
        />
    )

    return (
       <>
            <Searchbar
                onChange={handleOnChange}
                onSubmit={handleBtnSubmit}
            />
    
            {searchResult.length === 0 ? null :
             <BookContainer title='Results'>
                { results }
            </BookContainer>}
       </>
    );
}
 
export default SearchPage;