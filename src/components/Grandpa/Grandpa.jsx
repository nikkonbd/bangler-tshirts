import React from 'react';
import Father from '../Father/Father';
import Mother from '../Mother/Mother';
import Uncle from '../Uncle/Uncle';
import './Grandpa.css';

const Grandpa = () => {
    return (
        <div className='grandpa'>
            <h2>This is Grandpa.</h2>

            <section className='flex'>
                <Father></Father>
                <Mother></Mother>
                <Uncle></Uncle>
            </section>
        </div>
    );
};

export default Grandpa;