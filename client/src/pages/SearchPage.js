import React, { useState } from 'react';
import API from '../utils/API';
import Searchbar from '../components/Searchbar';
import BookContainer from '../components/BookContainer';
import Book from '../components/Book';
import ModalSave from '../components/Modal';

const SearchPage = () => {
    // State for the book that is being searched
    const [search, setSearch] = useState('');
    // State for the results of the book searched
    const [searchResult, setSearchResult] = useState([]);
    // State for the book to be saved to DB
    const [savedBook, setSavedBook] = useState('');
    // State to show a modal post save
    const [show, setShow] = useState(false);

    // Set search state as the user types input
    const handleOnChange = (e) => {
        const { value } = e.target
        setSearch(value)
    }

    // On search btn submit, send the searched for book to the server and set the search results state on response
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

    // On save button click, send book to the server/DB, set saved book state, & display confirmation modal
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
                setSavedBook(choice[0].volumeInfo.title);
                handleShow();
            } catch (err) { console.error(err) }
        }
        sendSaveBook();
    }

    // Functions for showing and closing the modal
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // Validate for results from search then filter out only the results that have all of the info needed and then map each to a book component
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
    
    // Render the search bar and search results
    return (
       <>
            <Searchbar
                type='submit'
                btnName='Search'
                onChange={handleOnChange}
                onSubmit={handleBtnSubmit}
            />
    
            {results.length === 0 ? null :
             <BookContainer heading={ searchResult === undefined ? '': 'Results' }>
                { results }
            </BookContainer>}
            <ModalSave show={ show } handleClose={ handleClose } book={ savedBook }/>
       </>
    );
}
 
export default SearchPage;