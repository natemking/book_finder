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
            } catch (err) {console.error(err);}
        }    
        searchForBook();
        e.target.querySelector('input').value = '';
    }

    const handleOnClick = (e) => {
        const { id } = e.target;
        
        const choice = searchResult.filter(book => ( book.id === id))
        
        const sendSaveBook = async () => {
            try {
                await API.saveBook({
                    title: choice[0].volumeInfo.title,
                    authors: choice[0].volumeInfo.authors,
                    description: choice[0].volumeInfo.description,
                    image: choice[0].volumeInfo.imageLinks.thumbnail,
                    link: choice[0].volumeInfo.previewLink
                });
                alert('Book saved!')
            } catch (err) { console.error(err) }
        }
        sendSaveBook();
    }

    const results = searchResult === undefined ? <h3>No results. Please try again.</h3> :
        searchResult.filter(book => (
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
            type='button'
            btnName='Save'
            onClick={handleOnClick}
        />
    )

    return (
       <>
            <Searchbar
                type='submit'
                btnName='Search'
                onChange={handleOnChange}
                onSubmit={handleBtnSubmit}
            />
    
            {results.length === 0 ? null :
             <BookContainer title={ searchResult === undefined ? '': 'Results' }>
                { results }
            </BookContainer>}
       </>
    );
}
 
export default SearchPage;