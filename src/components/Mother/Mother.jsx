import React from 'react';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';

const Mother = () => {
    return (
        <div>
            <h2>Mother</h2>
            <section className='flex'>
                <Brother></Brother>
                <Sister></Sister>
            </section>
        </div>
    );
};

export default Mother;