import React from 'react';

const Searchbar = ({ id, onChange, onSubmit }) => {
    return (
        <section className='jumbotron container mt-5 border border-dark'>

            <h3>Book Search</h3>

           <form id={ id } className='form-group' onSubmit={ onSubmit }>
                <label>Book</label>
                <input className='form-control' type='text' onChange={ onChange } required/>
                <button type='submit' className='btn btn-dark mt-3 float-right lg-shadow'>Submit</button>
           </form>

        </section>
    );
}
 
export default Searchbar;