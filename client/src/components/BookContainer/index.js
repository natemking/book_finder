import React from 'react';


const BookContainer = ({ heading, children }) => {
   // Render book list container
    return (
        <section className='jumbotron container border border-dark'>
            <p>{ heading }</p>
            { children }
        </section>
    );
}
 
export default BookContainer;