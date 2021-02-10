import React from 'react';


const BookContainer = ({ title, children }) => {
   
    return (
        <section className='jumbotron container border border-dark'>
            <p>{ title }</p>
            { children }
        </section>
    );
}
 
export default BookContainer;