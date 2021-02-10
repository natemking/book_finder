import React from 'react';

const Searchbar = ({ onChange, onSubmit }) => {
    return (
        <section className='jumbotron container mt-5'>

            <h3>Book Search</h3>

           <form className='form-group' onSubmit={ onSubmit }>
                <label>Book</label>
                <input className='form-control' type='text' onChange={ onChange } />
                <button type='submit' className='btn btn-dark mt-3 float-right lg-shadow'>Submit</button>
           </form>

        </section>
    );
}
 
export default Searchbar;