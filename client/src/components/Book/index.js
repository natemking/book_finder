import React from 'react';
import Button from '../Button';


const Book = ({ id, title, authors, desc, img, link, btnType, onClick }) => {

    const writers = authors.map((author, i) => (i ? ', ' : '') + author)

    return (
        <article className='container bg-white border border-dark pb-3'>

            <section className='row justify-content-between'>
                <section className='col-md-3 mt-3'>
                    <h4>{ title }</h4>
                    <p>{ writers }</p>  
                </section>
                <section className='col-md-3 mt-3 d-flex justify-content-end mb-3'>
                    <section>
                        <a href={ link } target='_blank' rel='noreferrer'>
                            <Button type='view' />
                        </a>
                    </section>
                    <section>
                        <Button id={ id } type={ btnType } onClick={ onClick }/>
                    </section>
                </section>
            </section>
            <section className='row'>
                <section className='col-md-3 col-lg-2 my-2'>
                    <img src={ img } alt={ `${title} cover` } />
                </section>
                <section className='col-md-9 col-lg-10 text-justify'>
                    <p>
                        { desc }
                    </p>
                </section>
            </section>

        </article>
    );
}
 
export default Book;