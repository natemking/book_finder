import React from 'react';
import './style.css'

const Book = () => {
    return (
        <article className='container book'>

            <section className='row justify-content-between'>
                <section className='col-3 mt-3'>
                    <h4>Name of Book</h4>
                    <p>Written By: Author name</p>  
                </section>
                <section className='col-3 mt-3 d-flex justify-content-end'>
                    <section>
                        <button type='button' className='btn btn-secondary mr-1'>view</button>
                    </section>
                    <section>
                        <button type='button' className='btn btn-dark'>save</button>
                    </section>
                </section>
            </section>
            <section className='row'>
                <section className='col-2'>
                    <img src='https://via.placeholder.com/150' />
                </section>
                <section className='col-10'>
                    <p>
                        Ph'nglui mglw'nafh Cthulhu R'lyeh wgah'nagl fhtagn. N'gha, shogg stell'bsna nglui c'bthnk uln ah, mnahn' naflr'luh hupadgh cee f'li'hee. Orr'e gotha y-ee R'lyeh ph'lloig ftaghu fhtagn fm'latgh ilyaa llllagl, ph'gnaiih ya y'hah nilgh'ri uh'e llll 'ai eeoth, n'gha ch' gnaiih gokaor zhro hupadgh vulgtlagln fhtagn. 'ai mnahn' stell'bsna r'luh ron s'uhn nglui, goka fhtagn shogg chtenffagl Yoggoth. Kadishtuor ebunma 'bthnk ah ch' shogg ngnglui h'llll goka ep, zhro fm'latgh ron gnaiih y'hah Azathothor stell'bsna n'ghft lloig zhro, shagg hai Nyarlathotep ph'r'luh vulgtlagln n'gha naflr'luh zhro. Y-ebunma ebunma Chaugnar Faugn fhtagn nogor Tsathogguaog hai throd ah gof'nn, hafh'drn ah naHastur nilgh'ri nallll chlirgh geb nashogg vulgtlaglnog, shogg bug shugg geb Chaugnar Faugn 'fhalma ah grah'n. 
                    </p>
                </section>
            </section>

        </article>
    );
}
 
export default Book;