import React from 'react';


const Button = ({ id, type, btnName, onClick }) => {
   // Render button
    return ( 
        <button 
            id={ id } 
            type={ type }
            onClick={ onClick } 
            className={ 
                // Assign class name per button type
                btnName === 'View' ? 'btn btn-secondary mr-1' : 
                btnName === 'Search' ? 'btn btn-dark mt-3 float-right' :
                'btn btn-dark'
            }
        >
            { btnName }
        </button>
     );
}
 
export default Button;