import React from 'react';
import loading from '../components/loading.gif';

const Spinner =()=> {
    return <div className='text-center'>
        <img className="my-3" src={loading} alt="sapinner" />
    </div>;
}

export default Spinner