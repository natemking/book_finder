import React from 'react';

const Jumbotron = () => {
    // Render main jumbo
    return (
        <section className='jumbotron container mt-md-5 text-center border border-dark'>
            <h1 className='display-4'>
                (React) Google Books Search
            </h1>
            <p className='lead'>
                Search for and Save books of interest!
            </p>
        </section>
    );
}
 
export default Jumbotron;