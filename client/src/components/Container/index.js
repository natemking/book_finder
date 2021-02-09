import React from 'react';
import Book from '../Book';
import Searchbar from '../Searchbar';


const Container = () => {
    return (
        <>
             <Searchbar />
             
            <section className='jumbotron container'>
                <p>Results</p>
                <Book />
            </section>
        </>
    );
}
 
export default Container;