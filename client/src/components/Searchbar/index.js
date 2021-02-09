import React from 'react';

const Searchbar = () => {
    return (
        <div className='jumbotron container mt-5'>
            <h3>Book Search</h3>
           <form className='form-group'>
                <label>Book</label>
                <input className='form-control' type='text' />
                <button type='submit' className='btn btn-dark mt-3 float-right'>Submit</button>
           </form>
        </div>
    );
}
 
export default Searchbar;