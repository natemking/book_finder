import React from 'react';

const Searchbar = () => {
    return (
        <section className='jumbotron container mt-5'>

            <h3>Book Search</h3>

           <form className='form-group'>
                <label>Book</label>
                <input className='form-control' type='text' />
                <button type='submit' className='btn btn-dark mt-3 float-right lg-shadow'>Submit</button>
           </form>

        </section>
    );
}
 
export default Searchbar;