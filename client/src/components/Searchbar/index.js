import React from 'react';
import Button from '../Button';

const Searchbar = ({ id, type, btnName, onChange, onSubmit }) => {
    // Render search bar
    return (
        <section className='jumbotron container mt-5 border border-dark'>

            <h3>Book Search</h3>

           <form id={ id } className='form-group' onSubmit={ onSubmit }>
                <label>Book</label>
                <input className='form-control' type='text' onChange={ onChange } required/>
    
                <Button 
                    type={ type } 
                    btnName={ btnName } 
                    className='btn btn-dark mt-3 float-right'
                />
           </form>

        </section>
    );
}
 
export default Searchbar;