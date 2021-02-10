import React from 'react';

const CrudBtn = ({ id, type, onClick }) => {
    return ( 
        <button 
            id={ id } 
            type='button' 
            onClick={ onClick } 
            className={ type === 'view' ? 'btn btn-secondary mr-1' : 'btn btn-dark' }
        >
            { type }
        </button>
     );
}
 
export default CrudBtn;