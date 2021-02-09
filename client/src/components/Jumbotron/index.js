import React from 'react';

const Jumbotron = () => {
    return (
        <section className="jumbotron container mt-5 text-center">
            <h1 className="display-4">
                The Librarian
            </h1>
            <p className="lead">
                Search for and Save books of interest!
            </p>
            <hr className="my-4" />
            <p>
                Powered by React & Google Books
            </p>
        </section>
    );
}
 
export default Jumbotron;